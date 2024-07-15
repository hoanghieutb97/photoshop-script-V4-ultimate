
////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {

    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    if (arr[i].nameId.split('-').pop() == "to") app.activeDocument.selection.select([[17, 117], [17, 3484], [2214, 3484], [2214, 117],]);
    else if (arr[i].nameId.split('-').pop() == "nho") app.activeDocument.selection.select([[17, 135], [17, 2639], [1636, 2639], [1636, 135],]);
    {
        var redColor = new SolidColor();
        redColor.rgb.red = 255;
        redColor.rgb.green = 0;
        redColor.rgb.blue = 0;
        app.foregroundColor = redColor;
    }
    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.layers[1].remove();
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);

    if (arr[i].nameId.split('-').pop() == "to") app.activeDocument.rotateCanvas(90);
    wphone = wphone + 24;
    hphone = hphone + 24;
    app.doAction("canvasHoriz", "tool");

    #include "cropAndResize-autoFill.jsx";

    boxW = app.activeDocument.width;
    boxH = app.activeDocument.height;


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        // if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
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

            app.activeDocument.saveAs(Folder(folderTool + "/mica5mm " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        openFile(FileDesign, arr[i], type);
        if (arr[i].nameId.split('-').pop() == "to") app.activeDocument.selection.select([[17, 117], [17, 3484], [2214, 3484], [2214, 117],]);
        else if (arr[i].nameId.split('-').pop() == "nho") app.activeDocument.selection.select([[17, 135], [17, 2639], [1636, 2639], [1636, 135],]);
        {
            var redColor = new SolidColor();
            redColor.rgb.red = 255;
            redColor.rgb.green = 0;
            redColor.rgb.blue = 0;
            app.foregroundColor = redColor;
        }
        app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
        app.doAction("duplicateSelection", "tool")
        app.activeDocument.layers[1].remove();
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);

        if (arr[i].nameId.split('-').pop() == "to") app.activeDocument.rotateCanvas(90);
        wphone = wphone + 24;
        hphone = hphone + 24;
    app.doAction("canvasHoriz", "tool");

        #include "cropAndResize-autoFill.jsx";

        boxW = app.activeDocument.width;
        boxH = app.activeDocument.height;

        ban = ban + 1;
        stt = i;
    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";

    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"];
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
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

            app.activeDocument.saveAs(Folder(folderTool + "/mica5mm " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}




#include "createDocumentAll.jsx";
stt = 0;
ban = 0;
for (var i = stt; i <= arr.length - 1; i++) {

    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    if (arr[i].nameId.split('-').pop() == "to") {
        wphone = 2598;
        hphone = 3543;
        app.activeDocument.selection.select([[2260, 29], [2260, 3572], [4858, 3572], [4858, 29]]);
    }
    else if (arr[i].nameId.split('-').pop() == "nho") {
        wphone = 2008;
        hphone = 2717;
        app.activeDocument.selection.select([[1682, 29], [1682, 2746], [3690, 2746], [3690, 29]]);
    }
    {
        var redColor = new SolidColor();
        redColor.rgb.red = 255;
        redColor.rgb.green = 0;
        redColor.rgb.blue = 0;
        app.foregroundColor = redColor;
    }
    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.layers[1].remove();
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);



    #include "cropAndResize-autoFill.jsx";

    boxW = app.activeDocument.width + 30;
    boxH = app.activeDocument.height + 30;


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        // if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
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

            app.activeDocument.saveAs(Folder(folderTool + "/khung " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        #include "createDocument.jsx";
        openFile(FileDesign, arr[i], type);
        if (arr[i].nameId.split('-').pop() == "to") {
            wphone = 2598;
            hphone = 3543;
            app.activeDocument.selection.select([[2260, 29], [2260, 3572], [4858, 3572], [4858, 29]]);
        }
        else if (arr[i].nameId.split('-').pop() == "nho") {
            wphone = 2008;
            hphone = 2717;
            app.activeDocument.selection.select([[1682, 29], [1682, 2746], [3690, 2746], [3690, 29]]);
        }
        {
            var redColor = new SolidColor();
            redColor.rgb.red = 255;
            redColor.rgb.green = 0;
            redColor.rgb.blue = 0;
            app.foregroundColor = redColor;
        }
        app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
        app.doAction("duplicateSelection", "tool")
        app.activeDocument.layers[1].remove();
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);



        #include "cropAndResize-autoFill.jsx";

        boxW = app.activeDocument.width + 30;
        boxH = app.activeDocument.height + 30;

        ban = ban + 1;
        stt = i;
    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";



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
                if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

                app.activeDocument.saveAs(Folder(folderTool + "/khung " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
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
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

            app.activeDocument.saveAs(Folder(folderTool + "/khung " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }

    }
}