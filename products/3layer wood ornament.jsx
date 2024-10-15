

//////////////////////////////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    var marginItem = 30;
    var lop = 0;
    #include "convertPixel.jsx";
    // lop 1
    var widthden = 0;
    var heightden = 0;

    openFile(FileDesign, arr[i], "0front");
    cropBoxIn(1, 1, 1, 3, app.activeDocument.width, app.activeDocument.height);
    app.doAction("duplicateSelection", "tool")
    var b1 = app.activeDocument.activeLayer.bounds;
    app.activeDocument.layers[0].remove();
    cropBoxIn(1, 2, 1, 3, app.activeDocument.width, app.activeDocument.height);
    app.doAction("duplicateSelection", "tool")
    var b2 = app.activeDocument.activeLayer.bounds;
    app.activeDocument.layers[0].remove();

    cropBoxIn(1, 3, 1, 3, app.activeDocument.width, app.activeDocument.height);
    app.doAction("duplicateSelection", "tool")
    var b3 = app.activeDocument.activeLayer.bounds;
    app.activeDocument.layers[0].remove();
    // Tính toán width và height cho layer b1
    var width1 = b1[2] - b1[0]; // right - left
    var height1 = b1[3] - b1[1]; // bottom - top

    // Tính toán width và height cho layer b2
    var width2 = b2[2] - b2[0];
    var height2 = b2[3] - b2[1];
    // Tính toán width và height cho layer b3
    var width3 = b3[2] - b3[0];
    var height3 = b3[3] - b3[1];
    var maxDimension = Math.max(width1, height1, width2, height2, width3, height3);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    



    openFile(FileDesign, arr[i], "0front");
    #include "crop3layerWoodenOrnament.jsx";


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openFile(FileDesign, arr[i], "0front");
        #include "crop3layerWoodenOrnament.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";
    lop = 1;

    // lop 2

    openFile(FileDesign, arr[i], "0front");
    #include "crop3layerWoodenOrnament.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openFile(FileDesign, arr[i], "0front");
        #include "crop3layerWoodenOrnament.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateKHUNG.jsx";
    lop = 2;

    //lop3

    openFile(FileDesign, arr[i], "0front");
    #include "crop3layerWoodenOrnament.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt).remove();
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openFile(FileDesign, arr[i], "0front");
        #include "crop3layerWoodenOrnament.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateSPOT.jsx";
    lop = 3;




    if ((i == arr.length - 1) & (lop == 3)) {

        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


function cropBoxIn(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
        [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

    ]);



}




