/////////////
// #include "createDocument.jsx";
var jpegOptions = new JPEGSaveOptions();
jpegOptions.quality = 12;

var folderBanInTool = Folder(folderContainer + "/ban in");
if (!folderBanInTool.exists) { folderBanInTool.create() }


for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
    app.activeDocument.saveAs(Folder(folderBanInTool + "/" + (arr[i].stt) + ".jpg"), jpegOptions, true, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    if (i == arr.length - 1) {
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


