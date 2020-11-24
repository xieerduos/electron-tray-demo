import {contextBridge, remote} from 'electron';
const shareObj = remote.getGlobal('shareObj');

console.log('remote', remote);

console.log('shareObj', shareObj);
console.log(window);

contextBridge.exposeInMainWorld('myAPI', {
    getVersion: shareObj.getVersion
});
