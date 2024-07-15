

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
    #include "crop3layer.jsx";


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openFile(FileDesign, arr[i], "0front");
        #include "crop3layer.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";
    lop = 1;

    // lop 2

    openFile(FileDesign, arr[i], "0front");
    #include "crop3layer.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openFile(FileDesign, arr[i], "0front");
        #include "crop3layer.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateKHUNG.jsx";
    lop = 2;

    //lop3

    openFile(FileDesign, arr[i], "0front");
    #include "crop3layer.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt).remove();
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openFile(FileDesign, arr[i], "0front");
        #include "crop3layer.jsx";
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

