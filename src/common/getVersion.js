/**
 * @file 获取主服务的版本号
 */
const path = require('path');
const versioninfo = require('win-version-info');

module.exports = function getVersion() {
    try {
        const pathname = path.resolve('D:\\tools\\DuGuanjia File\\DuGuanjia/DuGuanjiaSvc.exe');
        console.log('pathname', pathname);
        const info = versioninfo(pathname);
        return info.ProductVersion;
    } catch (error) {
        console.error('error', error);
    }
};
