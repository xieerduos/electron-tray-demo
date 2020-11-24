/**
 * @file 托盘操作
 */

import {Menu, Tray} from 'electron';
import path from 'path';

// 隐藏主窗口，并创建托盘，绑定关闭事件
export default function setTray(app, mainWindow) {
    // 用一个 Tray 来表示一个图标,这个图标处于正在运行的系统的通知区
    // 通常被添加到一个 context menu 上.
    // 系统托盘右键菜单
    // tray 托盘： https://www.electronjs.org/docs/api/tray
    // menu 菜单项 https://www.electronjs.org/docs/api/menu-item
    const trayMenuTemplate = [
        {
            // eslint-disable-next-line no-undef
            icon: path.join(__static, './du_logo14.png'),
            label: '度管家', // 设置单个菜单项名称
            enabled: false // enabled Boolean (可选) - 如果为 false，该菜单项将会置灰且不可点击。

            // icon: __dirname + '/concle.png', // 设置单个菜单项图标
            // click: function() {
            //     // 设置单个菜单项点击事件
            //     return mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
            // } // 打开相应页面
        },
        {
            // eslint-disable-next-line no-undef
            icon: path.join(__static, './apple_14.png'),
            label: '设置', // 设置单个菜单项名称
            // icon: __dirname + '/concle.png', // 设置单个菜单项图标
            click: function() {
                // 设置单个菜单项点击事件
                return mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
            } // 打开相应页面
        },
        {
            // eslint-disable-next-line no-undef
            icon: path.join(__static, './logo_14.png'),
            label: '打开主板', // 设置单个菜单项名称
            // icon: __dirname + '/concle.png', // 设置单个菜单项图标
            click: function() {
                // 设置单个菜单项点击事件
                return mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
            } // 打开相应页面
        },
        {
            // eslint-disable-next-line no-undef
            icon: path.join(__static, './logo_14.png'),
            label: '显示/隐藏', // 设置单个菜单项名称
            // icon: __dirname + '/concle.png', // 设置单个菜单项图标
            click: function() {
                // 设置单个菜单项点击事件
                return mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
            } // 打开相应页面
        },
        {
            // eslint-disable-next-line no-undef
            icon: path.join(__static, './logo_14.png'),
            // 系统托盘图标目录
            label: '退出',
            click: () => {
                app.quit();
            }
        }
    ];
    // 设置系统托盘图标
    // eslint-disable-next-line no-undef
    const iconPath = path.join(__static, './favicon.ico');
    const appTray = new Tray(iconPath);
    // 图标的上下文菜单
    const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
    // 展示主窗口，隐藏主窗口 mainWindow.hide()
    mainWindow.show();
    // 设置托盘悬浮提示
    appTray.setToolTip('never forget');
    // 设置托盘菜单
    appTray.setContextMenu(contextMenu);
    // 单击托盘小图标显示应用
    appTray.on('click', () => {
        // 显示主程序
        mainWindow.show();
        // 关闭托盘显示
        // appTray.destroy();
    });
    return appTray;
}
