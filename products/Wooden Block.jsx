#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    if (arr[i].amountFile == "2")
        openFile(FileDesign, arr[i], "front");
    else
        openFile(FileDesign, arr[i], type);
    app.doAction("strokeRed1px", "tool");
    // app.doAction("canvasHoriz", "tool");
    #include "cropAndResize-autoFill.jsx";
    // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        if (arr[i].amountFile == "2")
            openFile(FileDesign, arr[i], "front");
        else
            openFile(FileDesign, arr[i], type);
        app.doAction("strokeRed1px", "tool");
        // app.doAction("canvasHoriz", "tool");
        #include "cropAndResize-autoFill.jsx";
        // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    if (arr[i].amountFile == "2") {
        openFile(FileDesign, arr[i], "back");
        app.doAction("strokeRed1px", "tool");
        // app.doAction("canvasHoriz", "tool");
        #include "cropAndResize-autoFill.jsx";
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "translateSPOT.jsx";

    }
    {// tao khung su
        app.open(File("//192.168.2.240/ps script data/khung mica 2cm1/" + arr[i].nameId + ".png"));
        // app.doAction("canvasHoriz", "tool");
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

    }
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

