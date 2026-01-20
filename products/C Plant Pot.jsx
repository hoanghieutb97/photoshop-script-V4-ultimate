// #include "createDocument.jsx";
for (var i = 0; i <= arr.length - 1; i++) {
    openFile(FileDesign, arr[i], type);
    app.activeDocument.activeLayer.name = "1";
    { // crop xóa khoảng trắng
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
    }
    if (app.activeDocument.height > 626)
        app.activeDocument.resizeImage(null,UnitValue(626, "px"), 300, ResampleMethod.BICUBIC);

    app.doAction("crop c plant pot small", "tool")

    app.activeDocument.changeMode(ChangeMode.CMYK);
    app.doAction("selectArea", "tool")
    
    app.doAction("createSPOTWithArea", "tool");
    app.doAction("crop cplanpot", "tool");
    
    // app.doAction("bong plant pot", "tool");
// app.activeDocument.activeLayer.remove();
    
    app.activeDocument.saveAs(Folder(folderTool + "/in " + (i + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    if (i == arr.length - 1) {
        var stt = 0;
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

// app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


// // #include "createDocument.jsx";
// for (var i = 0; i <= arr.length - 1; i++) {
//     openFile(FileDesign, arr[i], type);
//     app.activeDocument.activeLayer.name = "1";
//     { // crop xóa khoảng trắng
//         var PSpotKhung = app.activeDocument.activeLayer.bounds;
//         app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
//         app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
//     }
//     if (app.activeDocument.height > 626)
//         app.activeDocument.resizeImage(null, UnitValue(626, "px"), 300, ResampleMethod.BICUBIC);
//     app.doAction("them chu", "fx");
//     app.activeDocument.activeLayer.textItem.contents = (i + 1)
//     app.activeDocument.mergeVisibleLayers();


//     // app.doAction("crop c plant pot small", "tool")

//     // app.activeDocument.changeMode(ChangeMode.CMYK);
//     // app.doAction("selectArea", "tool")
//     // app.doAction("contract1", "tool");
//     // app.doAction("createSPOTWithArea", "tool");
//     // app.activeDocument.saveAs(Folder(folderTool + "/in " + (i + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
//     app.activeDocument.saveAs(Folder(folderTool + "/in " + (i + 1) + ".png"), PNGSaveOptions);

//     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

//     if (i == arr.length - 1) {
//         var stt = 0;
//         $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
//     }
// }

// app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
