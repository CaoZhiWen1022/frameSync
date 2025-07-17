export interface SQL_User {
    id: number;
    account: string;
    password: string;
    userName: string;
    head: string;
    createTime: Date;
}

export interface SQL_UserHero{
    userId: number;
    useHeroId: string;
}