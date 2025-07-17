const fs = require('fs');
const path = require('path');

// 确保目标目录存在
const targetDir = path.join(__dirname, '../dist/protos');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// 复制文件
const sourceFile = path.join(__dirname, '../src/protos/proto.js');
const targetFile = path.join(targetDir, 'proto.js');

fs.copyFileSync(sourceFile, targetFile);
console.log('Files copied successfully!');
