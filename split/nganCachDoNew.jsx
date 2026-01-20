

///////////////////////////////ngan cach do

{
    app.open(File("//192.168.2.240/ps script data/sttkinlytoy.tif"));
    app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
    app.doAction("sttkinlytoy", "tool");
    boxW = app.activeDocument.width;
    boxH = app.activeDocument.height;
    app.activeDocument.activeLayer.name = "stt" + arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    var blackkkkk = new SolidColor();
    blackkkkk.rgb.red = 0;
    blackkkkk.rgb.green = 0;
    blackkkkk.rgb.blue = 0;
    app.activeDocument.selection.fill(blackkkkk);
    app.activeDocument.selection.deselect();

    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {

        app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName("stt" + arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName("stt" + arr[i].stt).remove();
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));

        #include "createDocumentMica2.jsx";
        ban = ban + 1;
        stt = i;
        var doc = app.activeDocument;
        app.open(File("//192.168.2.240/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = i + 1;
        app.doAction("sttkinlytoy", "tool");
        boxW = app.activeDocument.width;
        boxH = app.activeDocument.height;
        app.activeDocument.activeLayer.name = "stt" + arr[i].stt
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        var blackkkkk = new SolidColor();
        blackkkkk.rgb.red = 0;
        blackkkkk.rgb.green = 0;
        blackkkkk.rgb.blue = 0;
        app.activeDocument.selection.fill(blackkkkk);
        app.activeDocument.selection.deselect();
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
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
    app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName("stt" + arr[i].stt);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName("stt" + arr[i].stt);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

}
