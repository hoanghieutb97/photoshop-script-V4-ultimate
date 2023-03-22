
//////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFileX(arr[i], FileDesign, type)
    if ((yPosition + boxH + hLast > hAll) && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.99/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFileX(arr[i], FileDesign, type)
        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    openKhung(arr[i])
    { // translate layer đến vị trí cần in
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "autoUv");
        app.activeDocument.activeLayer.translate((xPosition + 13), (yPosition + 13) * (-1));
    }
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.99/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}
function openFileX(item, FileDesign, type) {
    var tenKhung = checkTenKhung(item);
    app.open(File("//192.168.1.99/ps script data/mica dzt/" + tenKhung + ".png"));
    openFile(FileDesign, item, type)
    app.doAction("canvasHoriz", "go");
    app.doAction("strokeWhite1px", "autoUv");
    #include "cropAndResize-autoFill.jsx";
    app.activeDocument.activeLayer.name = "1 copy";
    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.doAction("moveCenter", "autoUv");
    app.doAction("crop mica dzt", "autoUv");
}
function openKhung(item) {
    var tenKhung = checkTenKhung(item);
    app.open(File("//192.168.1.99/ps script data/mica dzt/khung/" + tenKhung + ".png"));
    app.activeDocument.activeLayer.name = item.stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
function checkTenKhung(item) {
    var tenKhung = "hieudz";
    if (item.nameId == "Mica-tim-1M") tenKhung = "tim";
    else if (item.nameId == "Mica-tim-2M") tenKhung = "tim";
    else if (item.nameId == "Mica-tron-1M") tenKhung = "tron";
    else if (item.nameId == "Mica-tron-2M") tenKhung = "tron";
    else if (item.nameId == "Go-tron-1M") tenKhung = "tron";
    else if (item.nameId == "Go-tron-2M") tenKhung = "tron";
    else if (item.nameId == "Mica-Sao-1M") tenKhung = "sao";
    else if (item.nameId == "Mica-Medalion-to-1M") tenKhung = "medalion to";
    else if (item.nameId == "Mica-Medalion-nho-1M") tenKhung = "medalion nho";
    else if (item.nameId == "Mica-Medalion-nho-2M") tenKhung = "medalion nho";
    else if (item.nameId == "go-Medalion-nho-1M") tenKhung = "medalion nho";
    else if (item.nameId == "go-Medalion-nho-2M") tenKhung = "medalion nho";
    else if (item.nameId == "Mica-Medalion-nho-2M") tenKhung = "medalion nho";
    else if (item.nameId == "MicaDZT-tron-1M") tenKhung = "tron 3in";
    return tenKhung
}
