#include "createDocumentWooden.jsx";
for (var i = stt; i <= arr.length - 1; i++) {


    #include "convertPixel.jsx";
    for (var k = 0; k < 4; k++) {
        openFile(FileDesign, arr[i], type);

        cropBoxIn(k + 1, 1, 4, 1, app.activeDocument.width, app.activeDocument.height);
        app.doAction("canvasHoriz", "tool");
        #include "cropBlackCut-1Size.jsx";

        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

            {
                app.doAction("crop document all", "tool");

                var selectionBounds = app.activeDocument.activeLayer.bounds;
                var padding = 30;
                var newBounds = [
                    selectionBounds[0] - padding,
                    selectionBounds[1] - padding,
                    selectionBounds[2] + padding,
                    selectionBounds[3] + padding
                ];
                app.activeDocument.crop(newBounds);
                app.activeDocument.activeLayer.remove();
                if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);

                app.activeDocument.saveAs(Folder(folderTool + "/go3mm " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden.jsx";
            ban = ban + 1;
            openFile(FileDesign, arr[i], type);

            cropBoxIn(k + 1, 1, 4, 1, app.activeDocument.width, app.activeDocument.height);
            app.doAction("canvasHoriz", "tool");
            #include "cropBlackCut-1Size.jsx";
            stt = i;
        }
        #include "caculatorPosition.jsx";

        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
        if ((bounds1[2] - bounds1[0]) != 0) {
            #include "translateCMYK.jsx";
        }
        else app.activeDocument.activeLayer.remove();

        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        if ((bounds2[2] - bounds2[0]) != 0) {

            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
        }
        else app.activeDocument.activeLayer.remove();


    }





    {
        app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = i + 1;
        app.doAction("sttkinlytoy", "tool");
        var boxW = app.activeDocument.width;
        var boxH = app.activeDocument.height;
        app.activeDocument.activeLayer.name = "stt" + i
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + i).remove();
            {
                app.doAction("crop document all", "tool");

                var selectionBounds = app.activeDocument.activeLayer.bounds;
                var padding = 30;
                var newBounds = [
                    selectionBounds[0] - padding,
                    selectionBounds[1] - padding,
                    selectionBounds[2] + padding,
                    selectionBounds[3] + padding
                ];
                app.activeDocument.crop(newBounds);
                app.activeDocument.activeLayer.remove();
                if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);

                app.activeDocument.saveAs(Folder(folderTool + "/go3mm " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden.jsx";
            ban = ban + 1;
            stt = i;
            app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
            app.activeDocument.artLayers[0].textItem.contents = i + 1;
            app.doAction("sttkinlytoy", "tool");
            var boxW = app.activeDocument.width;
            var boxH = app.activeDocument.height;
            app.activeDocument.activeLayer.name = "stt" + i
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        {// tinh boxW va boxH moi
            boxW = boxW + 30;
            boxH = boxH + 30;

            if (xPosition + wLast + boxW <= wAll) {
                xPosition = xPosition + wLast;
                wLast = boxW;
                if (hLast <= boxH)
                    hLast = boxH;
            }
            else {
                xPosition = 0;
                yPosition = yPosition + hLast;
                wLast = boxW;
                hLast = boxH;
            }
        }
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + i);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
    }

    if (i == arr.length - 1) {
        {
            app.doAction("crop document all", "tool");

            var selectionBounds = app.activeDocument.activeLayer.bounds;
            var padding = 30;
            var newBounds = [
                selectionBounds[0] - padding,
                selectionBounds[1] - padding,
                selectionBounds[2] + padding,
                selectionBounds[3] + padding
            ];
            app.activeDocument.crop(newBounds);
            app.activeDocument.activeLayer.remove();
            if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);

            app.activeDocument.saveAs(Folder(folderTool + "/go3mm " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
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
    // if(boxX==2 && boxY==2)vsvsdv
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.layers[1].remove();
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
}