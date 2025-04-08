#include "createDocumentMica2.jsx";

for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    typeTem = "mica";
    nameSave = "mica";
    var sanpham = "mica";

    var widthden = 0;
    var heightden = 0;
    var xoay = false;
    var bounds1 = [];
    var bounds2 = [];
    var bounds3 = [];
    var boundsxxx = [];
    var boxW = 0;
    var boxH = 0;

    openFile(FileDesign, arr[i], type);

    // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    cropBoxInXY(1, 1, 1, 2, app.activeDocument.width, app.activeDocument.height);
    app.doAction("xoa stroke layer", "tool");
    var boundsGoc = app.activeDocument.activeLayer.bounds;
    var widthden = boundsGoc[2] - boundsGoc[0];
    var heightden = boundsGoc[3] - boundsGoc[1];


    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    openFile(FileDesign, arr[i], type);
    // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);

    if (arr[i].nameId == "deskLight-8x4in") xoay = true;
    #include "cropBlackCut-deskplaque.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt).remove();
        #include "saveallcropByNameNew.jsx";
        
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

        #include "createDocumentMica2.jsx";


        openFile(FileDesign, arr[i], type);
        // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);


        #include "cropBlackCut-1Size2.jsx";

        ban = ban + 1;
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateKHUNG.jsx";

    if ((bounds2[2] - bounds2[0]) != 0) {
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");

        app.activeDocument.activeLayer.translate(((xPosition + (wphone / widthden) * (bounds2[0] - bounds1[0]))), ((yPosition + (wphone / wphone) * (bounds1[3] - bounds2[3]))) * (-1));
    }
    else {
        app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
        app.activeDocument.activeLayer.remove();
    }
    if (i == arr.length - 1) {

        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

    }
}

