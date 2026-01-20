//////////////////////////////////
#include "createDocument.jsx";
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "KHUNG2";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openCropFile(arr[i], FileDesign, "front")

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
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
    if ((i > 0) && (app.activeDocument.layerSets["CMYK"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();

    openCropFile(arr[i], FileDesign, "back")
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateSPOT.jsx";
    if ((i > 0) && (app.activeDocument.layerSets["SPOT"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();

    openKhung(arr[i]);
    // #include "translateKHUNG.jsx";
    { // translate layer đến vị trí cần in
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        if (arr[i].nameId == "O.Ceramic-tron-2M")
            app.activeDocument.activeLayer.translate((xPosition + 15), (yPosition + 15) * (-1));
        else if (arr[i].nameId == "O.Ceramic-ao-2M")
            app.activeDocument.activeLayer.translate((xPosition + 18), (yPosition + 18) * (-1));
        else
            app.activeDocument.activeLayer.translate((xPosition), (yPosition) * (-1));

    }
    // if ((i > 0) && (app.activeDocument.layerSets["KHUNG"].artLayers.length > 1)) app.activeDocument.activeLayer.merge();

    if (arr[i].nameId == "O.Ceramic-ao-2M") {
        openKhung(arr[i], "sauao");
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG2"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        if (arr[i].nameId == "O.Ceramic-tron-2M")
            app.activeDocument.activeLayer.translate((xPosition + 15), (yPosition + 15) * (-1));
        else if (arr[i].nameId == "O.Ceramic-ao-2M")
            app.activeDocument.activeLayer.translate((xPosition + 18), (yPosition + 18) * (-1));
        else
            app.activeDocument.activeLayer.translate((xPosition), (yPosition) * (-1));
    }
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

function openKhung(item, loai) {
    var tenKhung = checkTenKhung(item);
    if (loai != "sauao") {
        app.open(File("//192.168.2.240/ps script data/oal su/khung " + tenKhung + ".png"));

        app.activeDocument.activeLayer.name = item.stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
    else {
        app.open(File("//192.168.2.240/ps script data/oal su/khung ao sau.png"));

        app.activeDocument.activeLayer.name = item.stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG2"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
}
function checkTenKhung(item) {
    var tenKhung = "";
    if (arr[i].nameId == "O.Ceramic-tim-2M") tenKhung = "tim";
    else if (arr[i].nameId == "O.Ceramic-tron-2M") tenKhung = "tron";
    else if (arr[i].nameId == "O.Ceramic-sao-2M") tenKhung = "sao";
    else if (arr[i].nameId == "O.Ceramic-oval-2M") tenKhung = "oval";
    else if (arr[i].nameId == "O.Ceramic-meda-2M") tenKhung = "meda";
    else if (arr[i].nameId == "O.Ceramic-ao-2M") tenKhung = "ao";
    return tenKhung
}

function openCropFile(item, FileDesign, type) {
    var tenKhung = checkTenKhung(item);
    if (type == "back" && item.nameId == "O.Ceramic-ao-2M")
        app.open(File("//192.168.2.240/ps script data/oal su/ao sau.png"));

    else
        app.open(File("//192.168.2.240/ps script data/oal su/" + tenKhung + ".png"));
    openFile(FileDesign, item, type);
    app.activeDocument.activeLayer.name = "1 copy";
    app.doAction("strokeWhite1px", "tool");

    #include "cropAndResize-autoFill.jsx";
    if (type == "back" && item.nameId == "O.Ceramic-ao-2M")
        app.activeDocument.activeLayer.duplicate(app.documents["ao sau.png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    else app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer.name = "1 copy";
    app.doAction("moveCenter", "tool");
    app.doAction("crop mica dzt", "tool");
}