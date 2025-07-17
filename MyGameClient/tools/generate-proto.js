const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

// 配置路径
const PROTO_SOURCE_DIR = path.join(__dirname, '../../MyGameProto'); // proto源文件目录
const OUTPUT_DIR = path.join(__dirname, '../src/protos');  // 输出目录

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

try {
    // 生成JS文件
    console.log('Generating proto.js...');
    execSync(`npx pbjs -t static-module -w commonjs -o src/protos/proto.js ${PROTO_SOURCE_DIR}/*.proto`, { stdio: 'inherit' });

    // 生成d.ts文件
    console.log('Generating proto.d.ts...');
    execSync(`npx pbts -o src/protos/proto.d.ts src/protos/proto.js`, { stdio: 'inherit' });

    console.log('Proto files generated successfully!');
} catch (error) {
    console.error('Error generating proto files:', error);
    process.exit(1);
}
