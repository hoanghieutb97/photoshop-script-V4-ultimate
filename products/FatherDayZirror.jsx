//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {


    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    app.doAction("strokeRed1px", "tool");
    // app.doAction("canvasHoriz", "tool");
    if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    #include "cropAndResize-autoFill.jsx";
    boxW = boxW - 30;
    boxH = boxH - 30;


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        // if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        { // crop document
            app.doAction("crop document normal", "tool");
            app.activeDocument.activeLayer = app.activeDocument.artLayers["CMYK copy"];
            var selectionBounds = app.activeDocument.activeLayer.bounds;
            var padding = 0;
            var newBounds = [
                selectionBounds[0] - padding,
                selectionBounds[1] - padding,
                selectionBounds[2] + padding,
                selectionBounds[3] + padding
            ];
            app.activeDocument.crop(newBounds);
            app.activeDocument.artLayers["CMYK copy"].remove();
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

            app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        $.evalFile(File("//192.168.1.89/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        app.doAction("strokeRed1px", "tool");
        // app.doAction("canvasHoriz", "tool");
        if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        #include "cropAndResize-autoFill.jsx";

        boxW = boxW - 30;
        boxH = boxH - 30;


        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    // app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    // #include "translateSPOT.jsx";





    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"];
    if (arr[i].nameId == "fathersday26x16cm") app.doAction("createRectangle26x16cm", "tool");
    else if (arr[i].nameId == "fathersday18x10cm") app.doAction("createRectangle18x10cm", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate((xPosition + 12), (yPosition + 12) * (-1));
    if (i == arr.length - 1) {
        { // crop document
            app.doAction("crop document normal", "tool");
            app.activeDocument.activeLayer = app.activeDocument.artLayers["CMYK copy"];
            var selectionBounds = app.activeDocument.activeLayer.bounds;
            var padding = 0;
            var newBounds = [
                selectionBounds[0] - padding,
                selectionBounds[1] - padding,
                selectionBounds[2] + padding,
                selectionBounds[3] + padding
            ];
            app.activeDocument.crop(newBounds);
            app.activeDocument.artLayers["CMYK copy"].remove();
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

            app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }

        $.evalFile(File("//192.168.1.89/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

