////////////////////////////////////
#include "createDocument.jsx";
var textColor = new SolidColor;
textColor.rgb.red = 255;
textColor.rgb.green = 0;
textColor.rgb.blue = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], "");
    app.doAction("strokeRed1px", "tool");

    if (app.activeDocument.width > app.activeDocument.height)
        app.activeDocument.rotateCanvas(90);
    #include "cropAndResize-autoFill.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        #include "cropAndResize-autoFill.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";


    {// them text

        app.activeDocument.artLayers.add();
        app.activeDocument.activeLayer.move(app.activeDocument.layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.activeLayer.kind = LayerKind.TEXT;
        var loai = arr[i].nameId;
        loai = loai.split("-")
        app.activeDocument.activeLayer.textItem.contents = loai[0];
        app.activeDocument.activeLayer.textItem.size = 25;
        app.activeDocument.activeLayer.textItem.color = textColor;


        app.activeDocument.activeLayer.name = arr[i].stt;
        app.doAction("moveZero", "tool");



        app.activeDocument.activeLayer.translate((xPosition + 100), (yPosition + 100) * (-1));

    }



    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

