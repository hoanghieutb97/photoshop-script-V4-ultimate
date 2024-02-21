
//////////////////////////////////////
#include "createDocument.jsx";
var arrDoc = [];
var arrNgang = [];
for (var i = stt; i <= arr.length - 1; i++) { // xu ly in nap
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    if (app.activeDocument.width > app.activeDocument.height) {
        app.activeDocument.resizeCanvas(UnitValue(1062, "px"), UnitValue(828, "px"), AnchorPosition.BOTTOMLEFT);
        arrNgang.push(arr[i])
    }
    else {
        app.activeDocument.resizeCanvas(UnitValue(1062, "px"), UnitValue(828, "px"), AnchorPosition.TOPRIGHT);
        arrDoc.push(arr[i])

    }


    app.doAction("strokeRed1px", "tool");
    app.activeDocument.selection.selectAll();
    app.doAction("duplicateSelection", "tool");
    app.activeDocument.layers[1].remove();
    #include "cropAndResize-autoFill.jsx";
    // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        if (app.activeDocument.width > app.activeDocument.height) {
            app.activeDocument.resizeCanvas(UnitValue(1062, "px"), UnitValue(828, "px"), AnchorPosition.BOTTOMLEFT);
            arrNgang.push(arr[i])
        }
        else {
            app.activeDocument.resizeCanvas(UnitValue(1062, "px"), UnitValue(828, "px"), AnchorPosition.TOPRIGHT);
            arrDoc.push(arr[i])

        }
        app.doAction("strokeRed1px", "tool");
        app.activeDocument.selection.selectAll();
        app.doAction("duplicateSelection", "tool");
        app.activeDocument.layers[1].remove();
        #include "cropAndResize-autoFill.jsx";
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}
var jpegOptions = new JPEGSaveOptions();
jpegOptions.quality = 10;
jpegOptions.embedColorProfile = false;

var photoshopApp = app;

// Đặt màu foreground và background về giá trị mặc định (đen và trắng)
photoshopApp.foregroundColor.rgb.red = 0;
photoshopApp.foregroundColor.rgb.green = 0;
photoshopApp.foregroundColor.rgb.blue = 0;

photoshopApp.backgroundColor.rgb.red = 255;
photoshopApp.backgroundColor.rgb.green = 255;
photoshopApp.backgroundColor.rgb.blue = 255;

var folderKhac = Folder(folderContainer + "/inGiay");
if (!folderKhac.exists) { folderKhac.create(); }
var chunkSize = 2;
var result = [];
for (var j = 0; j < arrDoc.length; j += chunkSize) {
    var chunk = arrDoc.slice(j, j + chunkSize);
    result.push(chunk);
}


for (var i = 0; i < result.length; i++) {
    app.open(File("//192.168.1.194/ps script data/wooden photo box/doc.psd"));

    for (var j = 0; j < result[i].length; j++) {
        openFile(FileDesign, result[i][j], type);
        app.doAction("photo box doc", "tool");
        app.activeDocument.activeLayer.name = result[i][j].stt;

        app.activeDocument.activeLayer.duplicate(app.documents["doc.psd"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(292 + j * (952), (873) * (-1));


    }
    app.activeDocument.mergeVisibleLayers();
    app.activeDocument.saveAs(Folder(folderKhac + "/" + "doc-" + (i + 1) + ".jpg"), jpegOptions);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

}

var chunkSize = 3;
var result = [];
for (var j = 0; j < arrNgang.length; j += chunkSize) {
    var chunk = arrNgang.slice(j, j + chunkSize);
    result.push(chunk);
}


for (var i = 0; i < result.length; i++) {
    app.open(File("//192.168.1.194/ps script data/wooden photo box/ngang.psd"));

    for (var j = 0; j < result[i].length; j++) {
        openFile(FileDesign, result[i][j], type);
        app.doAction("photo box ngang", "tool");
        app.activeDocument.activeLayer.name = result[i][j].stt;
        app.activeDocument.rotateCanvas(180);
        app.activeDocument.resizeImage(13193, app.activeDocument.height);
        app.activeDocument.activeLayer.duplicate(app.documents["ngang.psd"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(0, (148 + j * (729)) * (-1));


    }
    app.activeDocument.mergeVisibleLayers();
    app.activeDocument.saveAs(Folder(folderKhac + "/" + "ngang-" + (i + 1) + ".jpg"), jpegOptions);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

}
