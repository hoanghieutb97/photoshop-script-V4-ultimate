hAll = 9449;
wAll = 14409;
#include "createDocument.jsx";

for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    var hphone = hphone + 24;
    var wphone = wphone + 24;

    openFile(FileDesign, arr[i], type);
    app.activeDocument.rotateCanvas(90);

    #include "cropBlackCut-1Size.jsx";
    boxW = wphone;
    boxH = hphone;
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        // #include "xoaExpand12px.jsx";
        {

            app.doAction("crop document all", "tool");

            var selectionBounds = app.activeDocument.activeLayer.bounds;
            var padding = 5;
            var newBounds = [
                selectionBounds[0] - padding,
                selectionBounds[1] - padding,
                selectionBounds[2] + padding,
                selectionBounds[3] + padding
            ];
            app.activeDocument.crop(newBounds);
            app.activeDocument.activeLayer.remove();
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

            app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        app.activeDocument.rotateCanvas(90);

        #include "cropBlackCut-1Size.jsx";
        boxW = wphone;
        boxH = hphone;
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";

    {

        app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"];
        app.doAction("createRectanglePlaque6x8in", "tool");
        app.activeDocument.activeLayer.name = arr[i].stt;
        {
            var shapeLayer = app.activeDocument.activeLayer;


            var scaleX = (wphone - 24) / (shapeLayer.bounds[2] - shapeLayer.bounds[0]) * 100;
            var scaleY = (hphone - 24) / (shapeLayer.bounds[3] - shapeLayer.bounds[1]) * 100;

            shapeLayer.resize(scaleX, scaleY, AnchorPosition.TOPLEFT);
        }
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition + 12, (yPosition + 12) * (-1));

    }





    { // translate khung
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
    }
    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        {
            app.doAction("crop document all", "tool");

            var selectionBounds = app.activeDocument.activeLayer.bounds;
            var padding = 5;
            var newBounds = [
                selectionBounds[0] - padding,
                selectionBounds[1] - padding,
                selectionBounds[2] + padding,
                selectionBounds[3] + padding
            ];
            app.activeDocument.crop(newBounds);
            app.activeDocument.activeLayer.remove();
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

            app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

