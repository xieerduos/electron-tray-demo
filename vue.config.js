module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/renderer/index/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '托盘程序',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    // https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration
    pluginOptions: {
        electronBuilder: {
            mainProcessWatch: ['src/main'],
            mainProcessFile: 'src/main/background.js',
            preload: 'src/main/preload/preload.js',
            nodeIntegration: false
        }
    }
};
