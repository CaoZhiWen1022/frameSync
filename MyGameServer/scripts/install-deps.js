const { execSync } = require('child_process');
const { mkdirSync, existsSync } = require('fs');

// 创建必要的目录
const dirs = ['src', 'proto', 'dist'];
dirs.forEach(dir => {
    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
    }
});

// 安装依赖的函数
function installDependencies() {
    const dependencies = [
        // TypeScript 核心依赖
        'typescript',
        '@types/node',
        'ts-node',
        'tsconfig-paths',
        
        // Protocol Buffers 相关
        'protobufjs',
        'protobufjs-cli',
        
        // 服务器相关
        'express',
        '@types/express',
        'ws',
        '@types/ws',
        
        // 工具库
        'dotenv',
        'winston',
        'nodemon'
    ];

    const devDependencies = [
        // 开发工具
        'eslint',
        '@typescript-eslint/parser',
        '@typescript-eslint/eslint-plugin',
        'prettier',
        'ts-node-dev'
    ];

    console.log('Installing production dependencies...');
    execSync(`npm install ${dependencies.join(' ')}`, { stdio: 'inherit' });

    console.log('\nInstalling development dependencies...');
    execSync(`npm install -D ${devDependencies.join(' ')}`, { stdio: 'inherit' });
}

// 创建 tsconfig.json
function createTsConfig() {
    const tsConfig = {
        compilerOptions: {
            target: "ES2020",
            module: "commonjs",
            lib: ["es2020"],
            declaration: true,
            outDir: "./dist",
            rootDir: "./src",
            strict: true,
            esModuleInterop: true,
            skipLibCheck: true,
            forceConsistentCasingInFileNames: true,
            resolveJsonModule: true
        },
        include: ["src/**/*"],
        exclude: ["node_modules", "dist"]
    };

    execSync(`echo '${JSON.stringify(tsConfig, null, 2)}' > tsconfig.json`);
    console.log('Created tsconfig.json');
}

// 更新 package.json 的脚本
function updatePackageJsonScripts() {
    const scripts = {
        "start": "ts-node src/index.ts",
        "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
        "build": "tsc",
        "proto:gen": "pbjs -t static-module -w commonjs -o src/protos/proto.js proto/*.proto && pbts -o src/protos/proto.d.ts src/protos/proto.js"
    };

    const packageJson = require('../package.json');
    packageJson.scripts = { ...packageJson.scripts, ...scripts };

    execSync(`echo '${JSON.stringify(packageJson, null, 2)}' > package.json`);
    console.log('Updated package.json scripts');
}

// 执行安装流程
console.log('Starting installation process...');
installDependencies();
createTsConfig();
updatePackageJsonScripts();
console.log('\nInstallation completed successfully!')
