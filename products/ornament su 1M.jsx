//////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openCropFile(arr[i], FileDesign, type)

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openCropFile(arr[i], FileDesign, type)
        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    if ((i > 0) && (app.activeDocument.layerSets["CMYK"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();

    openKhung(arr[i]);
    // #include "translateKHUNG.jsx";
    { // translate layer đến vị trí cần in
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        if (arr[i].nameId == "O.Ceramic-tron")
            app.activeDocument.activeLayer.translate((xPosition + 15), (yPosition + 15) * (-1));
        else if (arr[i].nameId == "O.Ceramic-ao")
            app.activeDocument.activeLayer.translate((xPosition + 18), (yPosition + 18) * (-1));
        else app.activeDocument.activeLayer.translate((xPosition), (yPosition) * (-1));
        if ((i > 0) && (app.activeDocument.layerSets["CMYK"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();


    }
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

function openKhung(item) {
    var tenKhung = checkTenKhung(item);
    app.open(File("//192.168.1.240/ps script data/oal su/khung " + tenKhung + ".png"));
    app.activeDocument.activeLayer.name = item.stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
function checkTenKhung(item) {
    var tenKhung = "tron";
    if (arr[i].nameId == "O.Ceramic-tim") tenKhung = "tim";
    else if (arr[i].nameId == "O.Ceramic-tron") tenKhung = "tron";
    else if (arr[i].nameId == "O.Ceramic-sao") tenKhung = "sao";
    else if (arr[i].nameId == "O.Ceramic-oval") tenKhung = "oval";
    else if (arr[i].nameId == "O.Ceramic-meda") tenKhung = "meda";
    else if (arr[i].nameId == "O.Ceramic-ao") tenKhung = "ao";
    return tenKhung
}

function openCropFile(item, FileDesign, type) {
    var tenKhung = checkTenKhung(item);
    app.open(File("//192.168.1.240/ps script data/oal su/" + tenKhung + ".png"));
    openFile(FileDesign, item, type);
    app.activeDocument.activeLayer.name = "1 copy";
    app.doAction("strokeWhite1px", "tool");

    #include "cropAndResize-autoFill.jsx";

    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer.name = "1 copy";
    app.doAction("moveCenter", "tool");
    app.doAction("crop mica dzt", "tool");
}