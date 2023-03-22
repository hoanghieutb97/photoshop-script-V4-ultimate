openFile(FileDesign, arr[i], type);
#include "cropAndResize-autoFill.jsx";
app.activeDocument.flipCanvas(Direction.HORIZONTAL);
    { // xử lý file in và duplicate sang bàn GLLM
        app.activeDocument.activeLayer.name = arr[i].stt; // đặt tên cho layer voi stt
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.artLayers.add();
        app.activeDocument.artLayers.getByName(arr[i].stt).remove();
        app.doAction("strokeRed1px", "autoUv");
        app.activeDocument.artLayers.add();
        app.activeDocument.activeLayer.kind = LayerKind.TEXT;
        app.activeDocument.activeLayer.textItem.contents = arr[i].stt;
        app.activeDocument.activeLayer.textItem.size = 30;
        var textColor = new SolidColor;
        textColor.rgb.red = 255;
        textColor.rgb.green = 0;
        textColor.rgb.blue = 0;
        app.activeDocument.activeLayer.textItem.color = textColor;
        app.activeDocument.activeLayer.name = "1 copy";
        app.doAction("moveCenter", "autoUv");
        app.activeDocument.activeLayer.name = "1 copy 2";
        if (arr[i].nameId != lastName) {
            app.activeDocument.artLayers.add();
            app.activeDocument.activeLayer.kind = LayerKind.TEXT;
            app.activeDocument.activeLayer.textItem.contents = arr[i].nameId;
            app.activeDocument.activeLayer.textItem.size = 40;
            app.activeDocument.activeLayer.textItem.color = textColor;
            app.activeDocument.activeLayer.name = "1 copy";
            app.doAction("moveCenter", "autoUv");
            app.activeDocument.activeLayer.translate(0, 300);
            lastName = arr[i].nameId;
        }
        app.activeDocument.mergeVisibleLayers();
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }

    { // translate layer đến vị trí cần in
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "autoUv");
        app.activeDocument.activeLayer.translate(xPosition, yPosition * (-1));
        app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "autoUv");
        app.activeDocument.activeLayer.translate(xPosition, yPosition * (-1));
        if (i> 0) app.activeDocument.activeLayer.merge();
        app.activeDocument.activeLayer.name = "SPOTKhung";
    }



