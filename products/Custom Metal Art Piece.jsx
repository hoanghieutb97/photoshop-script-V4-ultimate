#include "createDocumentAll.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);


    if (app.activeDocument.width < app.activeDocument.height) {
        app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
    }
    else {
        app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
    }

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocumentAll.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);

        if (app.activeDocument.width < app.activeDocument.height) {
            app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
        }
        else {
            app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
        }

        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

