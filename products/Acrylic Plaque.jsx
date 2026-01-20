//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {


    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    app.doAction("strokeRed1px", "tool");
    app.doAction("canvasHoriz", "tool");
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    #include "cropAndResize-autoFill.jsx";
    var borl = app.activeDocument.height > 2000;
    if (borl) app.activeDocument.rotateCanvas(90);
    #include "boxWFlexible.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        // if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        app.doAction("strokeRed1px", "tool");
        app.doAction("canvasHoriz", "tool");
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        #include "cropAndResize-autoFill.jsx";
        if (borl) app.activeDocument.rotateCanvas(90);
        #include "boxWFlexible.jsx";

        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"];
    if (borl) app.doAction("createRectanglePlaque6x8in", "tool");
    else app.doAction("createRectanglePlaque4x6in", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

