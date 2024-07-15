
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], "front");
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);

    #include "cropAndResize-autoFill.jsx";
    #include "boxWFlexible.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], "front");
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        #include "cropAndResize-autoFill.jsx";
        #include "boxWFlexible.jsx";
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";

    openFile(FileDesign, arr[i], "back");
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    #include "cropAndResize-autoFill.jsx";

    app.doAction("canvasHoriz", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateKHUNG.jsx";
    if (i == arr.length - 1) {
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

