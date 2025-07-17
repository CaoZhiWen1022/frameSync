import mysql, { Pool } from "mysql2/promise";

class MySQL {

    private _instance: MySQL;
    get instance(): MySQL {
        if (!this._instance) {
            this._instance = new MySQL();
        }
        return this._instance;
    }

    private pool: Pool;
    constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'my_game',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        })
    }

    async connect() {
        try {
            const connection = await this.pool.getConnection();
            await connection.ping();
            console.log('MySQL 数据库连接成功');
            connection.release();
        } catch (error) {
            console.error('MySQL 数据库连接失败:', error);
            throw error;
        }
    }

    /**
        * 执行SQL查询
        * @param sql SQL语句
        * @param values 参数值
        */
    public async query<T>(sql: string, values?: any[]): Promise<T[]> {
        const connection = await this.pool.getConnection();
        try {
            const [rows] = await connection.execute(sql, values);
            return rows as T[];
        } finally {
            connection.release();
        }
    }

    /**
     * 查询单个记录
     * @param sql SQL语句
     * @param values 参数值
     */
    public async queryOne<T>(sql: string, values?: any[]): Promise<T | null> {
        const rows = await this.query<T>(sql, values);
        return rows.length > 0 ? rows[0] : null;
    }

    /**
     * 插入记录
     * @param table 表名
     * @param data 数据对象
     */
    public async insert(table: string, data: Record<string, any>): Promise<mysql.OkPacket> {
        const keys = Object.keys(data);
        const values = Object.values(data);
        const placeholders = keys.map(() => '?').join(',');
        const sql = `INSERT INTO ${table} (${keys.join(',')}) VALUES (${placeholders})`;

        const connection = await this.pool.getConnection();
        try {
            const [result] = await connection.execute(sql, values);
            return result as mysql.OkPacket;
        } finally {
            connection.release();
        }
    }

    /**
     * 更新记录
     * @param table 表名
     * @param data 数据对象
     * @param where 条件对象
     */
    public async update(
        table: string,
        data: Record<string, any>,
        where: Record<string, any>
    ): Promise<mysql.OkPacket> {
        const setClause = Object.keys(data)
            .map(key => `${key} = ?`)
            .join(', ');

        const whereClause = Object.keys(where)
            .map(key => `${key} = ?`)
            .join(' AND ');

        const values = [...Object.values(data), ...Object.values(where)];
        const sql = `UPDATE ${table} SET ${setClause} WHERE ${whereClause}`;

        const connection = await this.pool.getConnection();
        try {
            const [result] = await connection.execute(sql, values);
            return result as mysql.OkPacket;
        } finally {
            connection.release();
        }
    }

    /**
     * 删除记录
     * @param table 表名
     * @param where 条件对象
     */
    public async delete(
        table: string,
        where: Record<string, any>
    ): Promise<mysql.OkPacket> {
        const whereClause = Object.keys(where)
            .map(key => `${key} = ?`)
            .join(' AND ');

        const values = Object.values(where);
        const sql = `DELETE FROM ${table} WHERE ${whereClause}`;

        const connection = await this.pool.getConnection();
        try {
            const [result] = await connection.execute(sql, values);
            return result as mysql.OkPacket;
        } finally {
            connection.release();
        }
    }


}

export const mySql = new MySQL();