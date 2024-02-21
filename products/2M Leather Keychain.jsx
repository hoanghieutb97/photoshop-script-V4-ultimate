#include "createDocument.jsx";
var xoay = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    openFile(FileDesign, arr[i], type);
    app.activeDocument.activeLayer.name="1";
    cropBoxIn(3, 1, 3, 1, app.activeDocument.width, app.activeDocument.height);
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(-90);
    #include "cropAndResize-boxW.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();

        // #include "xoaExpand12px.jsx";
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        app.activeDocument.activeLayer.name="1";
        cropBoxIn(3, 1, 3, 1, app.activeDocument.width, app.activeDocument.height);
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(-90);
        #include "cropAndResize-boxW.jsx";

        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";

    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}


var folderKhac = Folder(folderContainer + "/khac");
if (!folderKhac.exists) { folderKhac.create(); }
for (var i = stt; i <= arr.length - 1; i++) {
    var nameXX = arr[i].nameId;
    nameXX = nameXX.split("-")[0]



    openFile(FileDesign, arr[i], type);
    app.activeDocument.activeLayer.name="1";
    cropBoxKhac(1, 1, 3, 1, app.activeDocument.width, app.activeDocument.height);
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
    cropkhacda();
    app.doAction("overlayblack", "tool");

    app.doAction("khac moca khoa da", "tool");
    app.activeDocument.rotateCanvas(180);
    app.activeDocument.saveAs(Folder(folderKhac + "/" + arr[i].stt + "-ngoai-" + nameXX + ".png"), PNGSaveOptions);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    openFile(FileDesign, arr[i], type);
    app.activeDocument.activeLayer.name="1";
    cropBoxKhac(2, 1, 3, 1, app.activeDocument.width, app.activeDocument.height);
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
    cropkhacda();
    app.doAction("overlayblack", "tool");

    app.doAction("khac moca khoa da", "tool");

    app.activeDocument.saveAs(Folder(folderKhac + "/" + arr[i].stt + "-trong-" + nameXX + ".png"), PNGSaveOptions);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


}


function cropkhacda() {
    var activeDocument = app.activeDocument;
    var aspectRatio = activeDocument.width / activeDocument.height;
    var newWidth, newHeight;
    var minWidth = 236;
    var minHeight = 354

    if (app.activeDocument.width < minWidth && app.activeDocument.height < minHeight) {
        // alert(true);
        if (aspectRatio > 1) {
            newWidth = minWidth;
            newHeight = minWidth / aspectRatio;
        } else if (app.activeDocument.height < 295) {
            newWidth = 295 * aspectRatio;
            newHeight = 295;
        }
        else {
            newWidth = app.activeDocument.width;
            newHeight = app.activeDocument.height;

        }

        activeDocument.resizeImage(newWidth, newHeight);
    }



}

function cropBoxIn(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
        [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

    ]);





    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    app.doAction("duplicateSelection", "tool")

}


function cropBoxKhac(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    if (boxX == 2) {
        // alert((boxX) * (widthF / boxSumX), (boxX) * (widthF / boxSumX) - 12)

        app.activeDocument.selection.select([
            [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
            [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
            [(boxX) * (widthF / boxSumX) - 9, (boxY) * (heightF / boxSumY)],
            [(boxX) * (widthF / boxSumX) - 9, (boxY - 1) * (heightF / boxSumY)],

        ]);
    }
    else
        app.activeDocument.selection.select([
            [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
            [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
            [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
            [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

        ]);



    app.activeDocument.crop(app.activeDocument.selection.bounds);

}


