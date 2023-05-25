///////////////////////////////////////////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);

    app.doAction("3dwoodbasecrop1", "tool");
    app.doAction("strokeRed1px", "tool");
    app.doAction("canvasHoriz", "tool");
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    #include "cropAndResize-autoFill.jsx";
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.89/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);

        app.doAction("3dwoodbasecrop1", "tool");
        app.doAction("strokeRed1px", "tool");
        app.doAction("canvasHoriz", "tool");
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);

        #include "cropAndResize-autoFill.jsx";
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    {// them khungs

        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"];
        app.doAction("createRectangle3dbase1", "tool");
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.doAction("moveZero", "autoUv");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
    }
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.89/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

