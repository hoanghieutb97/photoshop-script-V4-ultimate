

//////////////////////////////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    var marginItem = 30;
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], "0front");
    #include "cropBlackCut-2Size.jsx";
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt).remove();

        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.89/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], "0front");
        #include "cropBlackCut-2Size.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";
    { // translate khung
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
    }
    { // translate khung
        app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
    }
    #include "xoaExpand1px.jsx";

    if (i == arr.length - 1) {

        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.89/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

