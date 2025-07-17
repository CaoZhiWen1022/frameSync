//读取同级目录所有xlsx
const fs = require('fs');
const path = require('path');
const xlsx = require('node-xlsx');

const JSONOutputPath = path.join(__dirname, '../MyGameClient/assets/resources/json/');
const ClassOutputPath = path.join(__dirname, '../MyGameClient/src/GameConfig/');

let file = fs.readdirSync(path.join(__dirname, './'));
file = file.filter(item => item.endsWith('.xlsx'));
file = file.filter(item => item[0] != '~');
//读取标注信息
const exportXlsxName = '#Export.xlsx';
//读取标注数据
let labelData = xlsx.parse(fs.readFileSync(path.join(__dirname, exportXlsxName)));
//开始导出json
file = file.filter(item => item !== exportXlsxName);
let classNames = [];

file.forEach(item => {
    let datas = xlsx.parse(fs.readFileSync(path.join(__dirname, item)));
    datas.forEach(data => {
        let lData = labelData.find(v => v.name === data.name);
        if (!lData) {
            console.log('标注不存在', item + ' ' + data.name);
            //中断cmd
            process.exit();
        }
        let type = lData.data[0][0];
        let jsonName = lData.data[0][1];
        classNames.push({ type: type, jsonName: data.name, className: jsonName });
        console.log('导出' + jsonName);

        if (type == 'constant') {
            //常数
            let JSON = {};
            let _class = 'export class ' + jsonName + ' {\n';
            data.data.forEach(v => {
                let name = v[0];
                let value = v[1];
                let keyData = lData.data.find(v => v[0] == name);
                let key = keyData[1];
                let paramType = keyData[2];
                JSON[key] = value;
                _class += '    /** ' + name + ' */\n';
                _class += '    public ' + key + ': ' + paramType + ';\n';
            })
            _class += '}';
            exportJson(jsonName, JSON);
            exportClass(jsonName, _class);
        } else if (type == 'list') {
            //列表数据
            let JSON = [];
            let _class = 'export class ' + jsonName + ' {\n';
            let values = data.data.filter((v, i) => i > 0);
            let keys = data.data[0];
            let name = data.data[0];            
            values.forEach(v => {
                let J = {};
                v.forEach((vv, i) => {
                    let keyName = name[i];
                    let keyData = lData.data.find(v => v[0] == keyName);
                    let key = keyData[1];
                    let paramType = keyData[2];
                    J[key] = vv;
                })
                let isPush = false;
                for (const key in J) {
                    isPush = true;
                    break;
                }
               if(isPush) JSON.push(J);
            })
            keys.forEach((v, i) => {
                let keyData = lData.data.find(vv => vv[0] == v);
                let key = keyData[1];
                let paramType = keyData[2];
                _class += '    /** ' + v + ' */\n';
                _class += '    public ' + key + ': ' + paramType + ';\n';
            })
            _class += '}';
            exportJson(jsonName, JSON);
            exportClass(jsonName, _class);

        }
    })

});

//生成GameConfig.ts
let GameConfigTxt = '';
GameConfigTxt += '//自动生成\n';
classNames.forEach(item => {
    GameConfigTxt += 'import {' + item.className + '} from "./' + item.className + '";\n';
});
GameConfigTxt += 'export class GameConfig {\n';
GameConfigTxt += '    private static _ins: GameConfig;\n';
GameConfigTxt += '    public static get ins(): GameConfig {\n';
GameConfigTxt += '        if (!this._ins) {\n';
GameConfigTxt += '            this._ins = new GameConfig();\n';
GameConfigTxt += '        }\n';
GameConfigTxt += '        return this._ins;\n';
GameConfigTxt += '    }\n';
classNames.forEach(item => {
    GameConfigTxt += '    /** ' + item.jsonName + ' */\n';
    GameConfigTxt += '    public ' + item.className + ': ' + item.className;
    if (item.type == 'constant') GameConfigTxt += ';\n'
    else GameConfigTxt += '[];\n';
});
GameConfigTxt += '    public async init() {\n';
classNames.forEach(item => {
    GameConfigTxt += '        this.' + item.className + ' = await this.load("' + item.className + '");\n';
});
GameConfigTxt += '    }\n';
GameConfigTxt += '    public async load(name: string) {\n';
GameConfigTxt += '        let data = await Laya.loader.load("resources/json/" + name + ".json");\n';
GameConfigTxt += '        return data.data;\n';
GameConfigTxt += '    }\n';

GameConfigTxt += '}\n';
exportClass('GameConfig', GameConfigTxt);

console.log('导出完成');


function exportJson(jsonName, data) {
    //检查目录
    if (!fs.existsSync(JSONOutputPath)) {
        fs.mkdirSync(JSONOutputPath);
    }
    let jsonPath = path.join(JSONOutputPath, jsonName + '.json');
    fs.writeFileSync(jsonPath, JSON.stringify(data));
}

function exportClass(name, data) {
    //检查目录
    if (!fs.existsSync(ClassOutputPath)) {
        fs.mkdirSync(ClassOutputPath);
    }
    let jsonPath = path.join(ClassOutputPath, name + '.ts');
    fs.writeFileSync(jsonPath, data);
}