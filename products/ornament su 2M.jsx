//////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openCropFile(arr[i], FileDesign, "front")

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.95/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openCropFile(arr[i], FileDesign, "front")
        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";

    openCropFile(arr[i], FileDesign, "back")
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateSPOT.jsx";

    openKhung(arr[i]);
    // #include "translateKHUNG.jsx";
    { // translate layer đến vị trí cần in
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        if (arr[i].nameId == "O.Ceramic-tron-2M")
            app.activeDocument.activeLayer.translate((xPosition + 9), (yPosition + 9) * (-1));
        else
            app.activeDocument.activeLayer.translate((xPosition), (yPosition) * (-1));

    }
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.95/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

function openKhung(item) {
    var tenKhung = checkTenKhung(item);
    app.open(File("//192.168.1.95/ps script data/oal su/khung " + tenKhung + ".png"));
    app.activeDocument.activeLayer.name = item.stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
function checkTenKhung(item) {
    var tenKhung = "tron";
    if (arr[i].nameId == "O.Ceramic-tim-2M") tenKhung = "tim";
    else if (arr[i].nameId == "O.Ceramic-tron-2M") tenKhung = "tron";
    else if (arr[i].nameId == "O.Ceramic-sao-2M") tenKhung = "sao";
    else if (arr[i].nameId == "O.Ceramic-oval-2M") tenKhung = "oval";
    return tenKhung
}

function openCropFile(item, FileDesign, type) {
    var tenKhung = checkTenKhung(item);
    app.open(File("//192.168.1.95/ps script data/oal su/" + tenKhung + ".png"));
    openFile(FileDesign, item, type);
    #include "cropAndResize-autoFill.jsx";
    app.activeDocument.activeLayer.name = "1 copy";
    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.doAction("moveCenter", "tool");
    app.doAction("crop mica dzt", "tool");
}