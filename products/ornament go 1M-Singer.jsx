
nameSave = "1M-tool";
#include "createDocumentWooden2.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    #include "cropAndResize-autoFill.jsx";
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    #include "boxWFlexible.jsx";
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocumentWooden2.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        #include "cropAndResize-autoFill.jsx";
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        stt = i;
        #include "boxWFlexible.jsx";
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
    #include "translateTRUOC.jsx";
    // app.doAction("fill 12px layer", "tool");

    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
    #include "translateKHUNG.jsx";
    app.doAction("olverlay DEN CAT", "tool");

    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";

        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

