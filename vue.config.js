module.exports = {
    // https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration
    pluginOptions: {
        // 以下数组内文件夹内文件发生改变重新编译electron应用
        mainProcessWatch: ['src/service'],
        electronBuilder: {
            nodeIntegration: true
        }
    }
};
