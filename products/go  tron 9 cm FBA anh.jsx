wAll = 10039;
hAll = 10039;
app.documents.add(wAll, hAll, 300, "GLLM");
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "CMYK";
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "SPOT";
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "KHUNG";
yPosition = 30;
xPosition = 30;
hLast = 0;
wLast = 0;


for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";


    openCropFile(arr[i], FileDesign, "front");
    boxW = app.activeDocument.width + 118;
    boxH = app.activeDocument.height + 118;
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "saveallcrop.jsx";
        // $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        app.documents.add(wAll, hAll, 300, "GLLM");
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "CMYK";
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "SPOT";
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "KHUNG";
        yPosition = 30;
        xPosition = 30;
        hLast = 0;
        wLast = 0;

        ban = ban + 1;
        openCropFile(arr[i], FileDesign, "front");
        boxW = app.activeDocument.width + 118;
        boxH = app.activeDocument.height + 118;
        stt = i;
    }

    #include "caculatorPosition.jsx";

    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";

    openCropFile(arr[i], FileDesign, "back");
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateSPOT.jsx";
    if (i == arr.length - 1) {
        #include "saveallcrop.jsx";
        // $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

function openCropFile(item, FileDesign, type) {

    var wphone = 1063;
    var hphone = 1063;
    openFile(FileDesign, item, type);

    { // crop xóa khoảng trắng và crop cỡ 9cm

        app.activeDocument.activeLayer.name = 1;
        if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);


    }

}
