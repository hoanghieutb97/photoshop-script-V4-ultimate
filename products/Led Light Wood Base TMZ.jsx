#include "createDocument.jsx";
var nameSave = "mica5mm-2mat"
for (var i = stt; i <= arr.length - 1; i++) {

    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    if (arr[i].nameId == "Yled-PB-TMZ-20-2M") {
        app.activeDocument.activeLayer.name = "1";
        app.activeDocument.selection.select([[0, 0], [0, app.activeDocument.height / 2], [app.activeDocument.width, app.activeDocument.height / 2], [app.activeDocument.width, 0]]);
        app.doAction("duplicateSelection", "tool");
        app.activeDocument.activeLayer.name = "2";
        var boundslayer = app.activeDocument.activeLayer.bounds;

        app.activeDocument.selection.select([[0, boundslayer[3] - 53], [0, boundslayer[3]], [app.activeDocument.width, boundslayer[3]], [app.activeDocument.width, boundslayer[3] - 53]]);

        app.activeDocument.activeLayer.remove();
        app.activeDocument.selection.clear();
        app.activeDocument.selection.deselect();
    }
    #include "cropBlackCut-1Size.jsx";
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        if (arr[i].nameId == "Yled-PB-TMZ-20-2M") {
            app.activeDocument.activeLayer.name = "1";
            app.activeDocument.selection.select([[0, 0], [0, app.activeDocument.height / 2], [app.activeDocument.width, app.activeDocument.height / 2], [app.activeDocument.width, 0]]);
            app.doAction("duplicateSelection", "tool");
            app.activeDocument.activeLayer.name = "2";
            var boundslayer = app.activeDocument.activeLayer.bounds;

            app.activeDocument.selection.select([[0, boundslayer[3] - 53], [0, boundslayer[3]], [app.activeDocument.width, boundslayer[3]], [app.activeDocument.width, boundslayer[3] - 53]]);

            app.activeDocument.activeLayer.remove();
            app.activeDocument.selection.clear();
            app.activeDocument.selection.deselect();
        }
        #include "cropBlackCut-1Size.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";

    { // translate khung
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
    }
    // app.activeDocument.activeLayer.duplicate(app.activeDocument.layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in

    // #include "xoaExpand12px.jsx";
    if (i == arr.length - 1) {
        #include "saveallcropByName.jsx";

        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

