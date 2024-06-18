

for (var i = 0; i <= arr.length - 1; i++) {
    openFile(FileDesign, arr[i], type);
    app.activeDocument.activeLayer.name = "1";
    { // crop xóa khoảng trắng
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
    }
    app.doAction("skew skinny thon", "tool")
    app.activeDocument.changeMode(ChangeMode.CMYK);
    app.doAction("selectArea", "tool")
    app.doAction("contract1", "tool");
    app.doAction("createSPOTWithArea", "tool");
    app.activeDocument.saveAs(Folder(folderTool + "/in " + (i + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    if (i == arr.length - 1) {
        var stt = 0;
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

