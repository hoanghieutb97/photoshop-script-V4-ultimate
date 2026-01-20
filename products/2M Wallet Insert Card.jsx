////////////////////////////////////  
#include "createDocument.jsx";
var textColor = new SolidColor;
textColor.rgb.red = 255;
textColor.rgb.green = 0;
textColor.rgb.blue = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], "");
    cropBoxIn(1, 1, 1, 2, app.activeDocument.width, app.activeDocument.height);


    app.activeDocument.rotateCanvas(90);
    #include "cropAndResize-autoFill.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
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

    openFile(FileDesign, arr[i], "");
    cropBoxIn(1, 2, 1, 2, app.activeDocument.width, app.activeDocument.height);
    app.activeDocument.rotateCanvas(90);

    #include "cropAndResize-autoFill.jsx";


    #include "boxWFlexible.jsx";

    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateSPOT.jsx";

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
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

function cropBoxIn(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
        [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

    ]);





    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.layers[1].remove();
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
}