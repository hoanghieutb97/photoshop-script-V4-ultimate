var arrNew = []
for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i].nameId != "PAINTED PIECE") arrNew.push(arr[i])
}

arr = arrNew;
var stt = 0;
ban = 0;
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    try {
        app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
    } catch (error2) {

    }

    if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(90);


    { // resize document
        {
            app.activeDocument.activeLayer = app.activeDocument.layers.getByName("0")
            if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
            if (arr[i].direction == "2")
                app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
            else if (arr[i].direction == "1") {
                if (app.activeDocument.width < app.activeDocument.height) {
                    app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
                }
                else {
                    app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
                }
            }
            else
                app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
        }
        boxW = app.activeDocument.width + 30;
        boxH = app.activeDocument.height + 30;
    }
    #include "boxWFlexible.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        nameSave = "go5mm-";
        app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "createDocument.jsx";
        ban = ban + 1;

        try {
            app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
        } catch (error2) {

        }

        if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(90);


        { // resize document
            {
                app.activeDocument.activeLayer = app.activeDocument.layers.getByName("0")
                if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
                if (arr[i].direction == "2")
                    app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
                else if (arr[i].direction == "1") {
                    if (app.activeDocument.width < app.activeDocument.height) {
                        app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
                    }
                    else {
                        app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
                    }
                }
                else
                    app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
            }
            boxW = app.activeDocument.width + 30;
            boxH = app.activeDocument.height + 30;
        }
        #include "boxWFlexible.jsx";

        stt = i;

    }


    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";


    {// text stt
        var textLayer = app.activeDocument.artLayers.add();
        textLayer.name = "a" + arr[i].stt;
        textLayer.kind = LayerKind.TEXT;
        textLayer.textItem.contents = arr[i].stt;
        textLayer.textItem.size = 70;
        var textColor = new SolidColor();
        textColor.rgb.hexValue = "FF0000"; // Red color
        textLayer.textItem.color = textColor;


        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
        app.activeDocument.layers["a" + arr[i].stt].move(app.activeDocument.layerSets["SPOT"], ElementPlacement.INSIDE);
    }
    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        nameSave = "go5mm-";
        app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


        //$.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}



#include "createDocument.jsx";
var stt = 0;
ban = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    try {
        app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
    } catch (error2) {

    }

    if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(90);


    { // resize document
        {
            app.activeDocument.activeLayer = app.activeDocument.layers.getByName("0")
            if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
            if (arr[i].direction == "2")
                app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
            else if (arr[i].direction == "1") {
                if (app.activeDocument.width < app.activeDocument.height) {
                    app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
                }
                else {
                    app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
                }
            }
            else
                app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
        }

    }

    var layerSet = app.activeDocument.layerSets.add();
    layerSet.name = "a" + arr[i].stt;
    var arr2 = [];
    for (var k = 0; k < app.activeDocument.layers.length; k++) {
        if (app.activeDocument.layers[k].name.toLowerCase() == "wooden")
            arr2.push(app.activeDocument.layers[k])
    }

    for (var k = 0; k < arr2.length; k++) {
        arr2[k].move(layerSet, ElementPlacement.INSIDE);
    }

    var bounds4 = app.activeDocument.layerSets[0].bounds;
    boxW = bounds4[2] - bounds4[0];
    boxH = bounds4[3] - bounds4[1];




    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.saveAs(Folder(folderTool + "/go3mm-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        //$.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        try {
            app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
        } catch (error2) {

        }

        if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(90);


        { // resize document
            {
                app.activeDocument.activeLayer = app.activeDocument.layers.getByName("0")
                if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
                if (arr[i].direction == "2")
                    app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
                else if (arr[i].direction == "1") {
                    if (app.activeDocument.width < app.activeDocument.height) {
                        app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
                    }
                    else {
                        app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
                    }
                }
                else
                    app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
            }

        }

        var layerSet = app.activeDocument.layerSets.add();
        layerSet.name = "a" + arr[i].stt;
        var arr2 = [];
        for (var k = 0; k < app.activeDocument.layers.length; k++) {
            if (app.activeDocument.layers[k].name.toLowerCase() == "wooden")
                arr2.push(app.activeDocument.layers[k])
        }
        for (var k = 0; k < arr2.length; k++) {
            arr2[k].move(layerSet, ElementPlacement.INSIDE);
        }

        var bounds4 = app.activeDocument.layerSets[0].bounds;
        boxW = bounds4[2] - bounds4[0];
        boxH = bounds4[3] - bounds4[1];




        stt = i;

    }



    app.activeDocument.layerSets[0].duplicate(app.documents["GLLM"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "caculatorPosition.jsx";
    if (app.activeDocument.layerSets[0].artLayers.length > 0) {
        app.doAction("moveZero", "tool");
        app.activeDocument.layerSets[0].translate(xPosition, (yPosition) * (-1));
    }

    {// text stt
        var textLayer = app.activeDocument.artLayers.add();

        textLayer.name = "a" + arr[i].stt;
        textLayer.kind = LayerKind.TEXT;
        textLayer.textItem.contents = arr[i].stt;
        textLayer.textItem.size = 70;
        var textColor = new SolidColor();
        textColor.rgb.hexValue = "FF0000"; // Red color
        textLayer.textItem.color = textColor;


        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
        app.activeDocument.layers["a" + arr[i].stt].move(app.activeDocument.layerSets["SPOT"], ElementPlacement.INSIDE);
    }
    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/go3mm-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        //$.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


#include "createDocument.jsx";
var stt = 0;
ban = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    try {
        app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
        app.doAction("canvasHoriz", "tool");
    } catch (error2) {

    }

    if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(90);


    { // resize document
        {
            app.activeDocument.activeLayer = app.activeDocument.layers.getByName("0")
            if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
            if (arr[i].direction == "2")
                app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
            else if (arr[i].direction == "1") {
                if (app.activeDocument.width < app.activeDocument.height) {
                    app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
                }
                else {
                    app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
                }
            }
            else
                app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
        }

    }

    var layerSet = app.activeDocument.layerSets.add();
    layerSet.name = "a" + arr[i].stt;
    var arr2 = [];
    for (var k = 0; k < app.activeDocument.layers.length; k++) {
        if (app.activeDocument.layers[k].name.toLowerCase() == "acrylic")
            arr2.push(app.activeDocument.layers[k])
    }
    for (var k = 0; k < arr2.length; k++) {
        arr2[k].move(layerSet, ElementPlacement.INSIDE);
    }

    var bounds4 = app.activeDocument.layerSets[0].bounds;
    boxW = bounds4[2] - bounds4[0];
    boxH = bounds4[3] - bounds4[1];




    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.saveAs(Folder(folderTool + "/mica3mm-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        try {
            app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
            app.doAction("canvasHoriz", "tool");
        } catch (error2) {

        }

        if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(90);


        { // resize document
            {
                app.activeDocument.activeLayer = app.activeDocument.layers.getByName("0")
                if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
                if (arr[i].direction == "2")
                    app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
                else if (arr[i].direction == "1") {
                    if (app.activeDocument.width < app.activeDocument.height) {
                        app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
                    }
                    else {
                        app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
                    }
                }
                else
                    app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
            }

        }

        var layerSet = app.activeDocument.layerSets.add();
        layerSet.name = "a" + arr[i].stt;
        var arr2 = [];
        for (var k = 0; k < app.activeDocument.layers.length; k++) {
            if (app.activeDocument.layers[k].name.toLowerCase() == "acrylic")
                arr2.push(app.activeDocument.layers[k])
        }
        if (arr2.length > 0)
            for (var k = 0; k < arr2.length; k++) {
                arr2[k].move(layerSet, ElementPlacement.INSIDE);
            }

        var bounds4 = app.activeDocument.layerSets[0].bounds;
        boxW = bounds4[2] - bounds4[0];
        boxH = bounds4[3] - bounds4[1];




        stt = i;

    }



    app.activeDocument.layerSets[0].duplicate(app.documents["GLLM"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "caculatorPosition.jsx";
    if (app.activeDocument.layerSets[0].layers.length !== 0) {
        app.doAction("moveZero", "tool");
        app.activeDocument.layerSets[0].translate(xPosition, (yPosition) * (-1));
    }

    {// text stt
        var textLayer = app.activeDocument.artLayers.add();

        textLayer.name = "a" + arr[i].stt;
        textLayer.kind = LayerKind.TEXT;
        textLayer.textItem.contents = arr[i].stt;
        textLayer.textItem.size = 70;
        var textColor = new SolidColor();
        textColor.rgb.hexValue = "FF0000"; // Red color
        textLayer.textItem.color = textColor;


        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
        app.activeDocument.layers["a" + arr[i].stt].move(app.activeDocument.layerSets["SPOT"], ElementPlacement.INSIDE);
    }
    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/mica3mm-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}




// for (var i = stt; i <= arr.length - 1; i++) {

//     try {
//         app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
//     } catch (error2) {

//     }

//     app.activeDocument.saveAs(Folder("//192.168.1.240/inVN/psd/" + arr[i].barcode + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);

//     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
// }

