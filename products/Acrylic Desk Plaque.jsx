
//////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    app.doAction("strokeRed1px", "tool");

    app.doAction("canvasHoriz", "tool");
    #include "cropAndResize-autoFill.jsx";
    // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        app.doAction("strokeRed1px", "tool");

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



    app.doAction("createRectangleDeskplaque", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    {
        var bounds1 = app.activeDocument.activeLayer.bounds;

        widthden = bounds1[2] - bounds1[0];
        heightden = bounds1[3] - bounds1[1];

        if (arr[i].direction == "2")
            app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        else if (arr[i].direction == "1") {
            if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
            else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        }
    }
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
    app.activeDocument.activeLayer.move(app.activeDocument.layerSets["SPOT"], ElementPlacement.INSIDE);
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

