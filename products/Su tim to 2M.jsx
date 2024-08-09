//////////////////////////////////
#include "createDocumentAll.jsx";
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "KHUNG2";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openCropFile(arr[i], FileDesign, "front")

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocumentAll.jsx";
        ban = ban + 1;
        openCropFile(arr[i], FileDesign, "front")
        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    if ((i > 0) && (app.activeDocument.layerSets["CMYK"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();

    openCropFile(arr[i], FileDesign, "back")
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateSPOT.jsx";
    if ((i > 0) && (app.activeDocument.layerSets["SPOT"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();

    // openKhung(arr[i]);
    // // #include "translateKHUNG.jsx";
    // { // translate layer đến vị trí cần in
    //     app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
    //     app.doAction("moveZero", "tool");
    //         app.activeDocument.activeLayer.translate((xPosition), (yPosition) * (-1));

    // }

    if (i == arr.length - 1) {

        app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

function openKhung(item, loai) {
    var tenKhung = "Su tim to 2M";

    app.open(File("//192.168.1.240/ps script data/oal su/khung " + tenKhung + ".png"));
    app.activeDocument.activeLayer.name = item.stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


}


function openCropFile(item, FileDesign, type) {
    var tenKhung = "Su tim to 2M";
    app.open(File("//192.168.1.240/ps script data/oal su/" + tenKhung + ".png"));
    openFile(FileDesign, item, type);
    app.doAction("LayerToBackgroundWhite", "tool");

    {



        app.activeDocument.activeLayer.name = 1;
        if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        app.activeDocument.resizeImage(UnitValue(933, "px"), UnitValue(874, "px"), 300, ResampleMethod.BICUBIC);
        boxW = app.activeDocument.width + 30;
        boxH = app.activeDocument.height + 30;

    }
    app.activeDocument.activeLayer.name = "1 copy";
    if (type == "back" && item.nameId == "O.Ceramic-ao-2M")
        app.activeDocument.activeLayer.duplicate(app.documents["ao sau.png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    else app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.doAction("moveCenter", "tool");
    app.doAction("crop mica dzt", "tool");
}