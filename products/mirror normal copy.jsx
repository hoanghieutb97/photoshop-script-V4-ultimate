
//////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    app.doAction("canvasHoriz", "tool");
    #include "cropAndResize-autoFill.jsx";
    // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.95/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        app.doAction("canvasHoriz", "tool");
        #include "cropAndResize-autoFill.jsx";
        // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.95/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

