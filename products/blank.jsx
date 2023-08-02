/////////////
// #include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    if (arr[i].nameId == "Blanket30x40in") app.doAction("chan30x40inch", "tool");
    else if (arr[i].nameId == "Blanket50x60in") app.doAction("chan50x60inch", "tool");
    else if (arr[i].nameId == "Blanket60x70in") app.doAction("chan60x70inch", "tool");
    else if (arr[i].nameId == "Blanket60x80in") app.doAction("chan60x80inch", "tool");



    if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);
    app.activeDocument.saveAs(Folder(folderContainer + "/" + arr[i].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    if (i == arr.length - 1) {
        $.evalFile(File("//192.168.1.95/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}


// app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
