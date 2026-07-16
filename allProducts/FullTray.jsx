//////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openCropFile(arr[i], FileDesign, type)

    boxW = boxW + 200;
    boxH = boxH + 130;
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
    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("Layer 1");
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("1 copy");
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);

    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    #include "translateKHUNG.jsx";


    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

function openKhung(item) {
    var tenKhung = item.nameId.split("-")[0];
    app.open(File("//192.168.1.240/ps script data/tray/" + tenKhung + ".png"));
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
    var tenKhung = item.nameId.split("-")[0];

    app.open(File("//192.168.1.240/ps script data/tray/" + tenKhung + ".png"));
    openFile(FileDesign, item, type);
    app.activeDocument.activeLayer.name = "1 copy";
    app.doAction("strokeWhite1px", "tool");

    #include "cropAndResize-autoFill.jsx";

    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer.name = "1 copy";
    app.doAction("moveCenter", "tool");
    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("Layer 1");
    app.doAction("selectArea", "tool");
    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("1 copy");
    app.activeDocument.selection.copy();
    app.activeDocument.paste();
    app.activeDocument.activeLayer.name = "2 copy";
    app.activeDocument.artLayers.getByName("1 copy").remove();
    app.activeDocument.artLayers.getByName("2 copy").name = "1 copy";



}