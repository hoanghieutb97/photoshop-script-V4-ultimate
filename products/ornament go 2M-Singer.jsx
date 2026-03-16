
nameSave = "2M-tool";
#include "createDocumentWooden2.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    var boundsLayer1 = 0;
    var layer1Width = 0;
    var layer1Height = 0;

    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], "front");

    #include "cropAndResize-autoFill.jsx";
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);

    #include "boxWFlexible.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocumentWooden2.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], "front");
        #include "cropAndResize-autoFill.jsx";

        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        #include "boxWFlexible.jsx";
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
    #include "translateTRUOC.jsx";
    boundsLayer1 = app.activeDocument.activeLayer.bounds; // Lấy giới hạn của Layer 1 (tọa độ trái, trên, phải, dưới)
    layer1Width = boundsLayer1[2] - boundsLayer1[0];
    layer1Height = boundsLayer1[3] - boundsLayer1[1];
    // app.doAction("fill 12px layer", "tool");
    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
    #include "translateKHUNG.jsx";
    app.doAction("olverlay DEN CAT", "tool");

 

    openFile(FileDesign, arr[i], "back");
    #include "cropAndResize-autoFill.jsx";

    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(-90);
    #include "boxWFlexible.jsx";
    app.doAction("canvasHoriz", "tool");

    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN SAU"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
    var bounds2 = app.activeDocument.activeLayer.bounds;
    var layer2Width = bounds2[2] - bounds2[0];
    var layer2Height = bounds2[3] - bounds2[1];
    var centerX = boundsLayer1[0] + (layer1Width / 2);
    var centerY = boundsLayer1[1] + (layer1Height / 2);
    app.activeDocument.activeLayer.translate(centerX - (layer2Width / 2) - bounds2[0], centerY - (layer2Height / 2) - bounds2[1]);
    // app.doAction("fill 12px layer", "tool");
    
    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

