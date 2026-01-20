
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    openFile(FileDesign, arr[i], "front");
    app.activeDocument.activeLayer.name = "1";
    app.doAction("path xu ly vien", "tool");
    app.doAction("xu ly canh thot", "tool");

    { // crop xóa khoảng trắng
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
    }
    app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.doAction("create spot in normal", "tool");
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        #include "openFileThotTron.jsx";
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";



    openFile(FileDesign, arr[i], "back");
    app.activeDocument.activeLayer.name = "1";
    app.doAction("path xu ly vien", "tool");
    app.doAction("xu ly canh thot", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateSPOT.jsx";
    if (i == arr.length - 1) {
        app.doAction("create spot in normal", "tool");
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

