
{
    app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
    app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
    app.doAction("sttkinlytoy", "tool");
    var boxW = app.activeDocument.width;
    var boxH = app.activeDocument.height;
    app.activeDocument.activeLayer.name = "stt" + arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
        app.activeDocument.layerSets["SPOT"].artLayers.getByName("stt" + arr[i].stt).remove();


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
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

            app.activeDocument.saveAs(Folder(folderLuu + "/" + nameSave + "-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }

        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        if (nameSave == "go3mm") {
            #include "createDocumentWooden.jsx";
        }
        else if (nameSave == "mica3mm") {
            #include "createDocumentMica.jsx";
        }
        else if (nameSave == "giay") {
            #include "createDocumentA4.jsx";
        }
        ban = ban + 1;
        stt = i;
        app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = i + 1;
        app.doAction("sttkinlytoy", "tool");
        var boxW = app.activeDocument.width;
        var boxH = app.activeDocument.height;
        app.activeDocument.activeLayer.name = "stt" + arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
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
    app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName("stt" + arr[i].stt);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

}