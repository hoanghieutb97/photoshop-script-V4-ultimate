////////////////////
var arrMica = [];
var arrGo = [];
var arrGiay = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i].nameId.split("-")[0] == "W") arrGo.push(arr[i])
    else if (arr[i].nameId.split("-")[0] == "A") arrMica.push(arr[i])
    else if (arr[i].nameId.split("-")[0] == "P") arrGiay.push(arr[i])
}
#include "createDocument.jsx";
arr = arrMica;
var typeTem = "mica";
var nameSave = typeTem;
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFileX(arr[i], FileDesign, typeTem)

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        #include "saveallcropByName.jsx";

        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
        #include "createDocument.jsx";
        openFileX(arr[i], FileDesign, typeTem)
        ban = ban + 1;
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    {// tao khung su
        var tenkhung2 = "";
        if (arr[i].nameId.split("-").pop() == "9,5in") tenkhung2 = "khung 9,5in"
        else if (arr[i].nameId.split("-").pop() == "7,5in") tenkhung2 = "khung 7,5in"
        app.open(File("//192.168.1.194/ps script data/Graduation Cap Topper/" + tenkhung2 + ".png"));

        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition + 30, (yPosition + 30) * (-1));
    }

    if (i == arr.length - 1) {
        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-group.jsx"));
    }
}
if (arr.length == 0) app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

stt = 0;
ban = 0;

#include "createDocument.jsx";
arr = arrGo;
typeTem = "go"
var nameSave = typeTem;

for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFileX(arr[i], FileDesign, typeTem)

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "saveallcropByName.jsx";

        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
        #include "createDocument.jsx";
        openFileX(arr[i], FileDesign, typeTem)
        ban = ban + 1;
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    {// tao khung su
        var tenkhung2 = "";
        if (arr[i].nameId.split("-").pop() == "9,5in") tenkhung2 = "khung 9,5in"
        else if (arr[i].nameId.split("-").pop() == "7,5in") tenkhung2 = "khung 7,5in"
        app.open(File("//192.168.1.194/ps script data/Graduation Cap Topper/" + tenkhung2 + ".png"));

        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition + 30, (yPosition + 30) * (-1));
    }

    if (i == arr.length - 1) {
        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-group.jsx"));
    }
}
if (arr.length == 0) app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

stt = 0;
ban = 0;

#include "createDocument.jsx";
arr = arrGiay;
typeTem = "giay";
var nameSave = typeTem;

for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFileX(arr[i], FileDesign, typeTem)

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "saveallcropByName.jsx";

        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
        #include "createDocument.jsx";
        openFileX(arr[i], FileDesign, typeTem)
        ban = ban + 1;
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    {// tao khung su
        var tenkhung2 = "";
        if (arr[i].nameId.split("-").pop() == "9,5in") tenkhung2 = "khung 9,5in"
        else if (arr[i].nameId.split("-").pop() == "7,5in") tenkhung2 = "khung 7,5in"
        app.open(File("//192.168.1.194/ps script data/Graduation Cap Topper/" + tenkhung2 + ".png"));

        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition + 30, (yPosition + 30) * (-1));
    }

    if (i == arr.length - 1) {
        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-group.jsx"));
    }
}


if (arr.length == 0) app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


















function openFileX(item, FileDesign, type) {
    var tenkhung = "";
    if (item.nameId.split("-").pop() == "9,5in") tenKhung = "in 9,5in"
    else if (item.nameId.split("-").pop() == "7,5in") tenKhung = "in 7,5in"


    app.open(File("//192.168.1.194/ps script data/Graduation Cap Topper/" + tenKhung + ".png"));
    openFile(FileDesign, item, type)
    if (type == "mica") app.doAction("canvasHoriz", "tool");
    app.doAction("strokeWhite1px", "tool");
    #include "cropAndResize-autoFill.jsx";
    app.activeDocument.activeLayer.name = "1 copy";
    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.doAction("moveCenter", "tool");
    app.doAction("crop Graduation Cap Topper", "tool");

    var PSpotKhungcrp = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhungcrp, 0, PSpotKhungcrp[2] - PSpotKhungcrp[0], PSpotKhungcrp[3] - PSpotKhungcrp[1]);
    boxW = app.activeDocument.width + 30;
    boxH = app.activeDocument.height + 30;
}