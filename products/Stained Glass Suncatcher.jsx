
#include "createDocument.jsx";
nameSave = "tool";


for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    openCropFile(arr[i], FileDesign, "")

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
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
    openKhung(arr[i]);
    #include "translateKHUNG.jsx";

    if (i == arr.length - 1) {
        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

    }
}

function openKhung(item) {

    app.open(File("//192.168.1.240/ps script data/Stained Glass Suncatcher/khung " + item.nameId + ".png"));
    app.activeDocument.activeLayer.name = item.stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

function openCropFile(item, FileDesign, type) {
    var tenKhung = item.nameId
    app.open(File("//192.168.1.240/ps script data/Stained Glass Suncatcher/" + item.nameId + ".png"));
    openFile(FileDesign, item, type);
    app.doAction("strokeWhite1px", "tool");


    #include "cropAndResize-autoFill.jsx";
    app.activeDocument.activeLayer.name = "1 copy";
    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.doAction("moveCenter", "tool");
    app.doAction("crop mica dzt", "tool");
    app.doAction("strokeWhite1px", "tool");


}