#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    openFile(FileDesign, arr[i], type);

    app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);

    ///////////////////////////////////////


    {  /// open va xu ly file
        app.activeDocument.activeLayer.name = "a0";


        var layerWidth = app.activeDocument.width;
        var layerHeight = app.activeDocument.height;
        app.activeDocument.selection.select([[0, 0], [0, layerHeight], [layerWidth / 2, layerHeight], [layerWidth / 2, 0]]);
        app.doAction("duplicateSelection", "tool");
        app.activeDocument.activeLayer.name = 1 + "a";
        app.activeDocument.activeLayer = app.activeDocument.layers["a0"]
        app.activeDocument.selection.select([[layerWidth / 2, 0], [layerWidth / 2, layerHeight], [layerWidth, layerHeight], [layerWidth, 0]]);
        app.doAction("duplicateSelection", "tool");

        app.activeDocument.activeLayer.name = 1 + "b";
        app.activeDocument.layers["a0"].remove();

        var bounds1 = app.activeDocument.layers[1 + "a"].bounds;
        var widthdena = bounds1[2] - bounds1[0];
        var heightdena = bounds1[3] - bounds1[1];

        if (widthdena > heightdena) app.activeDocument.layers[1 + "a"].resize(wphone * 100 / widthdena, hphone * 100 / widthdena, AnchorPosition.MIDDLECENTER);
        else app.activeDocument.layers[1 + "a"].resize(wphone * 100 / heightdena, hphone * 100 / heightdena, AnchorPosition.MIDDLECENTER);

        var bounds1new = app.activeDocument.layers[1 + "a"].bounds;
        var widthden1new = bounds1new[2] - bounds1new[0];
        var heightden1new = bounds1new[3] - bounds1new[1];

        var bounds1b = app.activeDocument.layers[1 + "b"].bounds;
        var widthdenb = bounds1b[2] - bounds1b[0];
        var heightdenb = bounds1b[3] - bounds1b[1];
        app.activeDocument.layers[1 + "b"].resize(widthden1new * 100 / widthdenb, heightden1new * 100 / heightdenb, AnchorPosition.MIDDLECENTER);


        app.activeDocument.activeLayer = app.activeDocument.layers["1a"]
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer = app.activeDocument.layers["1b"]
        app.activeDocument.activeLayer.duplicate();
        app.activeDocument.activeLayer = app.activeDocument.layers["1b copy"];
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.move(app.activeDocument, ElementPlacement.PLACEATBEGINNING);
        app.doAction("xoa constract 3px", "tool")
        app.activeDocument.activeLayer.merge();
        app.activeDocument.activeLayer.name = "1a";
        app.activeDocument.activeLayer = app.activeDocument.layers["1b"]
        app.doAction("moveZero", "tool");



        var boundb3 = app.activeDocument.layers["1a"].bounds;
        app.activeDocument.activeLayer.translate(boundb3[2] + 24, 0);


        {// text stt
            var textLayer = app.activeDocument.artLayers.add();
            textLayer.name = "1t"
            textLayer.kind = LayerKind.TEXT;
            textLayer.textItem.contents = arr[i].stt;
            textLayer.textItem.size = 70;
            var textColor = new SolidColor();
            textColor.rgb.hexValue = "FF0000"; // Red color
            textLayer.textItem.color = textColor;
            app.doAction("moveZero", "tool");
            var boundb3 = app.activeDocument.layers["1b"].bounds;
            app.activeDocument.activeLayer.translate(boundb3[2] - 737, -341);
        }
        app.doAction("canvasSize 50px", "tool");


        var layerSet = app.activeDocument.layerSets.add();
        layerSet.name = arr[i].stt + "l";
        app.activeDocument.layers["1a"].move(layerSet, ElementPlacement.INSIDE);
        app.activeDocument.layers["1b"].move(layerSet, ElementPlacement.INSIDE);
        app.activeDocument.layers["1t"].move(layerSet, ElementPlacement.INSIDE);


        var bounds2 = layerSet.bounds;
        var khung = app.activeDocument.artLayers.add();
        khung.name = "1k";
        app.activeDocument.selection.select([[bounds2[0], bounds2[1]], [bounds2[2], bounds2[1]], [bounds2[2], bounds2[3]], [bounds2[0], bounds2[3]]]);

        app.activeDocument.selection.expand(24);

        app.doAction("strokered5px", "tool");
        app.activeDocument.layers["1k"].move(layerSet, ElementPlacement.INSIDE);


        app.activeDocument.layerSets[arr[i].stt + "l"].duplicate(app.documents["GLLM"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in



        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        var bounds4 = app.activeDocument.layerSets[arr[i].stt + "l"].bounds;
        boxW = bounds4[2] - bounds4[0];
        boxH = bounds4[3] - bounds4[1];

    }

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets[arr[i].stt + "l"].remove();


        app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        $.evalFile(File("//192.168.1.89/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
        stt = i;

        {  /// open va xu ly file
            app.activeDocument.activeLayer.name = "a0";


            var layerWidth = app.activeDocument.width;
            var layerHeight = app.activeDocument.height;
            app.activeDocument.selection.select([[0, 0], [0, layerHeight], [layerWidth / 2, layerHeight], [layerWidth / 2, 0]]);
            app.doAction("duplicateSelection", "tool");

            app.activeDocument.activeLayer.name = 1 + "a";
            app.activeDocument.activeLayer = app.activeDocument.layers["a0"]
            app.activeDocument.selection.select([[layerWidth / 2, 0], [layerWidth / 2, layerHeight], [layerWidth, layerHeight], [layerWidth, 0]]);
            app.doAction("duplicateSelection", "tool");

            app.activeDocument.activeLayer.name = 1 + "b";
            app.activeDocument.layers["a0"].remove();

            var bounds1 = app.activeDocument.layers[1 + "a"].bounds;
            var widthdena = bounds1[2] - bounds1[0];
            var heightdena = bounds1[3] - bounds1[1];

            if (widthdena > heightdena) app.activeDocument.layers[1 + "a"].resize(wphone * 100 / widthdena, hphone * 100 / widthdena, AnchorPosition.MIDDLECENTER);
            else app.activeDocument.layers[1 + "a"].resize(wphone * 100 / heightdena, hphone * 100 / heightdena, AnchorPosition.MIDDLECENTER);

            var bounds1new = app.activeDocument.layers[1 + "a"].bounds;
            var widthden1new = bounds1new[2] - bounds1new[0];
            var heightden1new = bounds1new[3] - bounds1new[1];

            var bounds1b = app.activeDocument.layers[1 + "b"].bounds;
            var widthdenb = bounds1b[2] - bounds1b[0];
            var heightdenb = bounds1b[3] - bounds1b[1];
            app.activeDocument.layers[1 + "b"].resize(widthden1new * 100 / widthdenb, heightden1new * 100 / heightdenb, AnchorPosition.MIDDLECENTER);


            app.activeDocument.activeLayer = app.activeDocument.layers["1a"]
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer = app.activeDocument.layers["1b"]
            app.activeDocument.activeLayer.duplicate();
            app.activeDocument.activeLayer = app.activeDocument.layers["1b copy"];
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.move(app.activeDocument, ElementPlacement.PLACEATBEGINNING);
            app.doAction("xoa constract 3px", "tool")
            app.activeDocument.activeLayer.merge();
            app.activeDocument.activeLayer.name = "1a";
            app.activeDocument.activeLayer = app.activeDocument.layers["1b"]
            app.doAction("moveZero", "tool");



            var boundb3 = app.activeDocument.layers["1a"].bounds;
            app.activeDocument.activeLayer.translate(boundb3[2] + 24, 0);


            {// text stt
                var textLayer = app.activeDocument.artLayers.add();
                textLayer.name = "1t"
                textLayer.kind = LayerKind.TEXT;
                textLayer.textItem.contents = arr[i].stt;
                textLayer.textItem.size = 70;
                var textColor = new SolidColor();
                textColor.rgb.hexValue = "FF0000"; // Red color
                textLayer.textItem.color = textColor;
                app.doAction("moveZero", "tool");
                var boundb3 = app.activeDocument.layers["1b"].bounds;
                app.activeDocument.activeLayer.translate(boundb3[2] - 737, -341);
            }
            app.doAction("canvasSize 50px", "tool");


            var layerSet = app.activeDocument.layerSets.add();
            layerSet.name = arr[i].stt + "l";
            app.activeDocument.layers["1a"].move(layerSet, ElementPlacement.INSIDE);
            app.activeDocument.layers["1b"].move(layerSet, ElementPlacement.INSIDE);
            app.activeDocument.layers["1t"].move(layerSet, ElementPlacement.INSIDE);


            var bounds2 = layerSet.bounds;
            var khung = app.activeDocument.artLayers.add();
            khung.name = "1k";
            app.activeDocument.selection.select([[bounds2[0], bounds2[1]], [bounds2[2], bounds2[1]], [bounds2[2], bounds2[3]], [bounds2[0], bounds2[3]]]);

            app.activeDocument.selection.expand(24);

            app.doAction("strokered5px", "tool");
            app.activeDocument.layers["1k"].move(layerSet, ElementPlacement.INSIDE);


            app.activeDocument.layerSets[arr[i].stt + "l"].duplicate(app.documents["GLLM"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in



            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            var bounds4 = app.activeDocument.layerSets[arr[i].stt + "l"].bounds;
            boxW = bounds4[2] - bounds4[0];
            boxH = bounds4[3] - bounds4[1];

        }

    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer = app.activeDocument.layerSets[arr[i].stt + "l"];
    app.doAction("moveZero", "tool");
    app.activeDocument.layerSets[arr[i].stt + "l"].translate(xPosition, (yPosition) * (-1));

    if (i == arr.length - 1) {

        app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.1.89/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}



