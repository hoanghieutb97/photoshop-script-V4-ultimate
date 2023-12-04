
//////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFileX(arr[i], FileDesign, type);
    #include "cropAndResize-autoFill.jsx";
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFileX(arr[i], FileDesign, type);
        #include "cropAndResize-autoFill.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    if ((i > 0) && (app.activeDocument.layerSets["CMYK"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();

    openKhung(arr[i])
    { // translate layer đến vị trí cần in
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition), (yPosition) * (-1));
        if ((i > 0) && (app.activeDocument.layerSets["KHUNG"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();

    }
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}
function openFileX(item, FileDesign, type) {
    var tenKhung = checkTenKhung(item);
    openFile(FileDesign, item, type)
}
function openKhung(item) {
    var tenKhung = checkTenKhung(item);
    app.open(File("//192.168.1.194/ps script data/phoi dls/khung nhom/" + tenKhung + ".png"));
    app.activeDocument.activeLayer.name = item.stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
function checkTenKhung(item) {
    var tenKhung = "medalion";
    if (arr[i].nameId == "oal-tim-1M") tenKhung = "tim";
    else if (arr[i].nameId == "oal-tron-1M") tenKhung = "tron";
    else if (arr[i].nameId == "oal-elip-1M") tenKhung = "elip";
    else if (arr[i].nameId == "oal-sao-1M") tenKhung = "sao";
    else if (arr[i].nameId == "oal-scalop-1M") tenKhung = "scalop";
    else if (arr[i].nameId == "oal-giotnuoc-1M") tenKhung = "giotnuoc";
    return tenKhung
}
