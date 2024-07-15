//////////////////////////////////
wAll = 28346;
hAll = 7087;
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
var HFix = Math.round(73.7 / 0.084667);
var WFix = Math.round(73 / 0.084667);
var keothem = 18;
for (var i = stt; i <= arr.length - 1; i++) {

    var hphone = Math.round(arr[i].hight / 0.084667);
    var wphone = Math.round(arr[i].width / 0.084667);

    openCropFile(arr[i], FileDesign, "front")
    boxW = 950;
    boxH = 970;
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
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
        openCropFile(arr[i], FileDesign, type)
        stt = i;
    }

    if (xPosition + wLast + boxW <= wAll) {
        xPosition = xPosition + wLast;


        wLast = boxW;
        if (hLast <= boxH)
            hLast = boxH;
    }
    else {
        xPosition = 30;
        yPosition = yPosition + hLast;
        wLast = boxW;
        hLast = boxH;
    }



    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition - keothem / 2, (yPosition - keothem / 2) * (-1));
    if ((i > 0) && (app.activeDocument.layerSets["CMYK"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();

    openCropFile(arr[i], FileDesign, "back")
    boxW = 950;
    boxH = 970;
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition - keothem / 2, (yPosition - keothem / 2) * (-1));
    if ((i > 0) && (app.activeDocument.layerSets["SPOT"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();
    // openKhung(arr[i]);
    // // #include "translateKHUNG.jsx";
    // { // translate layer đến vị trí cần in
    //     app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
    //     app.doAction("moveZero", "tool");
    //     app.activeDocument.activeLayer.translate((xPosition), (yPosition) * (-1));

    //     if ((i > 0) && (app.activeDocument.layerSets["KHUNG"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();


    // }
    if (i == arr.length - 1) {
        app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

function openKhung(item) {
    var tenKhung = "tron"
    app.open(File("//192.168.1.240/ps script data/oal su/khung " + tenKhung + ".png"));
    app.activeDocument.activeLayer.name = item.stt;

    var bounds1 = app.activeDocument.activeLayer.bounds;
    widthden = bounds1[2] - bounds1[0];
    heightden = bounds1[3] - bounds1[1];
    app.activeDocument.activeLayer.resize((WFix) * 100 / widthden, (HFix) * 100 / heightden, AnchorPosition.MIDDLECENTER);

    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

function openCropFile(item, FileDesign, type) {
    var tenKhung = "tron"
    app.open(File("//192.168.1.240/ps script data/oal su/" + tenKhung + ".png"));
    openFile(FileDesign, item, type);
    app.doAction("LayerToBackgroundWhite", "tool");

    #include "cropAndResize-autoFill.jsx";
    app.activeDocument.activeLayer.name = "1 copy";
    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.doAction("moveCenter", "tool");
    app.doAction("crop mica dzt", "tool");

    var bounds1 = app.activeDocument.activeLayer.bounds;

    widthden = bounds1[2] - bounds1[0];
    heightden = bounds1[3] - bounds1[1];

    app.activeDocument.activeLayer.resize((WFix + keothem) * 100 / widthden, (HFix + keothem) * 100 / heightden, AnchorPosition.MIDDLECENTER);

}