#include "createDocument.jsx";
for (var i = 0; i <= arr.length - 1; i++) {
    openFile(FileDesign, arr[i], type);
    app.activeDocument.activeLayer.name = "1";
    { // crop xóa khoảng trắng
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
    }
    app.doAction("skew_12oz_wine_vpo2", "autoUv")
    app.activeDocument.changeMode(ChangeMode.CMYK);
    app.doAction("selectArea", "autoUv")
    app.doAction("contract1", "autoUv");
    app.doAction("createSPOTWithArea", "autoUv");
    app.activeDocument.saveAs(Folder(folderTool + "/in " + (i + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    if (i == arr.length - 1) {
        var stt = 0;
        $.evalFile(File("//192.168.1.99/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

