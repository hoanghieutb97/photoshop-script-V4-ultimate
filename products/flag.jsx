/////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    #include "cropAndResize-autoFill.jsx";
    app.doAction("flag cmyk", "autoUv");
    if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);
    app.activeDocument.saveAs(Folder(folderContainer + "/" + arr[i].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);

    if (i == arr.length - 1) {
        $.evalFile(File("//192.168.1.99/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}


