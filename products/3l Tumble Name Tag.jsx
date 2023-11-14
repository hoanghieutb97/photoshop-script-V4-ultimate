#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {

    #include "convertPixel.jsx";
    var lop = 0;
    var cropA = 0;
    var cropB = 0;
    var cropC = 0;
    var cropD = 0;
    var WpH = false;
    openFile(FileDesign, arr[i], type);
    var heightF = app.activeDocument.height;
    var widthF = app.activeDocument.width;
    app.activeDocument.selection.select([[0, 0], [0, heightF], [widthF / 3, heightF], [widthF / 3, 0]]);

    app.doAction("duplicateSelection", "tool")

    #include "cropBlackCut-tumbleNameTag.jsx";


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        // #include "xoaExpand12px.jsx";
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);

        #include "cropBlackCut-tumbleNameTag.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";
    { // translate khung
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
    }
    lop = 1;



    // lop 2


    openFile(FileDesign, arr[i], type);
    var heightF = app.activeDocument.height;
    var widthF = app.activeDocument.width;
    app.activeDocument.selection.select([[widthF / 3, 0], [widthF / 3, heightF], [2 * widthF / 3, heightF], [2 * widthF / 3, 0]]);

    app.doAction("duplicateSelection", "tool")

    #include "cropBlackCut-tumbleNameTag.jsx";


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        // #include "xoaExpand12px.jsx";
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);

        #include "cropBlackCut-tumbleNameTag.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";
    { // translate khung
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
    }

    lop = 2;



    // lop 3


    openFile(FileDesign, arr[i], type);
    var heightF = app.activeDocument.height;
    var widthF = app.activeDocument.width;
    app.activeDocument.selection.select([[2 * widthF / 3, 0], [2 * widthF / 3, heightF], [widthF, heightF], [widthF, 0]]);

    app.doAction("duplicateSelection", "tool")

    #include "cropBlackCut-tumbleNameTag.jsx";


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        // #include "xoaExpand12px.jsx";
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);

        #include "cropBlackCut-tumbleNameTag.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";
    { // translate khung
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
    }

    lop = 3;


    if ((i == arr.length - 1) & (lop == 3)) {
        // #include "xoaExpand12px.jsx";
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

