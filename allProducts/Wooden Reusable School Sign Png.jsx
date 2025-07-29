/// go 5mm
#include "createDocument.jsx";
var typeTem = "go5mm";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    openFile(FileDesign, arr[i], type);
    var layerWidth = app.activeDocument.width;
    var layerHeight = app.activeDocument.height;

    app.activeDocument.selection.select([[0, 0], [0, layerHeight], [layerWidth / 4, layerHeight], [layerWidth / 4, 0]]);
    app.doAction("duplicateSelection", "tool");
    app.activeDocument.layers[1].remove();
    app.activeDocument.activeLayer.name = arr[i].stt;

    var boundb5D = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(boundb5D, 0, boundb5D[2] - boundb5D[0], boundb5D[3] - boundb5D[1]);
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    #include "boxWFlexible.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        nameSave = "go5mm-";
        app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openFile(FileDesign, arr[i], type);
        app.activeDocument.selection.select([[0, 0], [0, layerHeight], [layerWidth / 4, layerHeight], [layerWidth / 4, 0]]);
        app.doAction("duplicateSelection", "tool");
        app.activeDocument.layers[1].remove();
        app.activeDocument.activeLayer.name = arr[i].stt;

        var boundb5D = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(boundb5D, 0, boundb5D[2] - boundb5D[0], boundb5D[3] - boundb5D[1]);
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
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

        nameSave = "go5mm-";
        app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
    }
}

var arrGo3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i].nameId.split("-")[0] == "W") arrGo3mm.push(arr[i])
}

var arrMica3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i].nameId.split("-")[0] == "A") arrMica3mm.push(arr[i])
}



#include "createDocument.jsx";
arr = arrGo3mm;

var stt = 0;
ban = 0;
var typeTem = "go3mm";
for (var i = stt; i <= arr.length - 1; i++) {
    var slLop = 2;
    if (arr[i].nameId.split("-")[1] == "3L") slLop = 3;
    else if (arr[i].nameId.split("-")[1] == "4L") slLop = 4;
    for (var k = 1; k < slLop; k++) {

        #include "convertPixel.jsx";

        openFile(FileDesign, arr[i], type);
        var layerWidth = app.activeDocument.width;
        var layerHeight = app.activeDocument.height;

        app.activeDocument.selection.select([[k * layerWidth / 4, 0], [k * layerWidth / 4, layerHeight], [(k + 1) * layerWidth / 4, layerHeight], [(k + 1) * layerWidth / 4, 0]]);
        app.doAction("duplicateSelection", "tool");
        app.activeDocument.layers[1].remove();
        app.activeDocument.activeLayer.name = arr[i].stt;

        var boundb5D = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(boundb5D, 0, boundb5D[2] - boundb5D[0], boundb5D[3] - boundb5D[1]);
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        #include "boxWFlexible.jsx";

        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            nameSave = "go3mm-";
            app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
            #include "createDocument.jsx";
            ban = ban + 1;

            openFile(FileDesign, arr[i], type);
            app.activeDocument.selection.select([[k * layerWidth / 4, 0], [k * layerWidth / 4, layerHeight], [(k + 1) * layerWidth / 4, layerHeight], [(k + 1) * layerWidth / 4, 0]]);
            app.doAction("duplicateSelection", "tool");
            app.activeDocument.layers[1].remove();
            app.activeDocument.activeLayer.name = arr[i].stt;

            var boundb5D = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(boundb5D, 0, boundb5D[2] - boundb5D[0], boundb5D[3] - boundb5D[1]);
            if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
            #include "boxWFlexible.jsx";

            stt = i;

        }


        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "caculatorPosition.jsx";
        #include "translateCMYK.jsx";




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
        nameSave = "go3mm-";
        app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
    }

}
if (arr.length == 0) app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);



#include "createDocument.jsx";
arr = arrMica3mm;

var stt = 0;
ban = 0;
var typeTem = "mica3mm";
for (var i = stt; i <= arr.length - 1; i++) {
    var slLop = 2;
    if (arr[i].nameId.split("-")[1] == "3L") slLop = 3;
    else if (arr[i].nameId.split("-")[1] == "4L") slLop = 4;
    for (var k = 1; k < slLop; k++) {

        #include "convertPixel.jsx";

        openFile(FileDesign, arr[i], type);
        var layerWidth = app.activeDocument.width;
        var layerHeight = app.activeDocument.height;

        app.activeDocument.selection.select([[k * layerWidth / 4, 0], [k * layerWidth / 4, layerHeight], [(k + 1) * layerWidth / 4, layerHeight], [(k + 1) * layerWidth / 4, 0]]);
        app.doAction("duplicateSelection", "tool");
        app.activeDocument.layers[1].remove();
        app.activeDocument.activeLayer.name = arr[i].stt;

        var boundb5D = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(boundb5D, 0, boundb5D[2] - boundb5D[0], boundb5D[3] - boundb5D[1]);
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        app.doAction("canvasHoriz", "tool");
        #include "boxWFlexible.jsx";

        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            nameSave = "mica3mm-";
            app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
            #include "createDocument.jsx";
            ban = ban + 1;

            openFile(FileDesign, arr[i], type);
            app.activeDocument.selection.select([[k * layerWidth / 4, 0], [k * layerWidth / 4, layerHeight], [(k + 1) * layerWidth / 4, layerHeight], [(k + 1) * layerWidth / 4, 0]]);
            app.doAction("duplicateSelection", "tool");
            app.activeDocument.layers[1].remove();
            app.activeDocument.activeLayer.name = arr[i].stt;

            var boundb5D = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(boundb5D, 0, boundb5D[2] - boundb5D[0], boundb5D[3] - boundb5D[1]);
            if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
            app.doAction("canvasHoriz", "tool");
            #include "boxWFlexible.jsx";

            stt = i;

        }


        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "caculatorPosition.jsx";
        #include "translateCMYK.jsx";




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
        nameSave = "mica3mm-";
        app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
    }

}
if (arr.length == 0) app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

