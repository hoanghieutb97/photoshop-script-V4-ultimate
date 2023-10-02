/////////////////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openCropFile(arr[i], FileDesign, type);
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openCropFile(arr[i], FileDesign, type);
        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    layKhung(arr[i])

    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateKHUNG.jsx";
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

function openCropFile(item, FileDesign, type) {
    var tenKhung = "hieudz";
    if (item.nameId == "Go-tim-1M") tenKhung = "tim";
    else if (item.nameId == "Go-tron-1M") tenKhung = "tron";
    else if (item.nameId == "Go-Sao-1M") tenKhung = "sao";
    else if (item.nameId == "Go-Medalion-to-1M") tenKhung = "medalion to";
    else if (item.nameId == "Go-Medalion-nho-1M") tenKhung = "medalion nho";

    app.open(File("//192.168.1.194/ps script data/mica dzt/" + tenKhung + ".png"));

    openFile(FileDesign, item, type);
    // app.doAction("canvasHoriz", "tool");
    app.doAction("strokeRed1px", "tool");
    #include "cropAndResize-autoFill.jsx";

    app.activeDocument.activeLayer.name = "1 copy";
    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.doAction("moveCenter", "tool");
    app.doAction("crop mica dzt", "tool");
}
function layKhung(item) {

    var tenKhung = "hieudz";
    if (item.nameId == "Go-tim-1M") tenKhung = "tim";
    else if (item.nameId == "Go-tron-1M") tenKhung = "tron";
    else if (item.nameId == "Go-Sao-1M") tenKhung = "sao";
    else if (item.nameId == "Go-Medalion-to-1M") tenKhung = "medalion to";
    else if (item.nameId == "Go-Medalion-nho-1M") tenKhung = "medalion nho";

    app.open(File("//192.168.1.194/ps script data/mica dzt/file cat/" + tenKhung + ".png"));

}