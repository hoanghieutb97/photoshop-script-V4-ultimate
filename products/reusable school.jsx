var arrNew = []
for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i].nameId != "PAINTED PIECE") arrNew.push(arr[i])
}
// alert(arrNew)
arr = arrNew;
var stt = 0;
ban = 0;
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    openAndResizeFile(arr[i], FileDesign, wphone, hphone, "type");

    app.activeDocument.activeLayer = app.activeDocument.layers.getByName("0")
    boxW = app.activeDocument.width + 30;
    boxH = app.activeDocument.height + 30;

    #include "boxWFlexible.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        nameSave = "go5mm-";
        app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "createDocument.jsx";
        ban = ban + 1;

        openAndResizeFile(arr[i], FileDesign, wphone, hphone, "type");

        { // resize document

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

    openAndResizeFile(arr[i], FileDesign, wphone, hphone, "type");


    var layerSet = app.activeDocument.layerSets.add();
    layerSet.name = "a" + arr[i].stt;
    var arr2 = [];
    for (var k = 0; k < app.activeDocument.layers.length; k++) {
        if (app.activeDocument.layers[k].name.toLowerCase().split(" ").join("") == "wooden")
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
        app.activeDocument.layerSets["SPOT"].move(app.activeDocument, ElementPlacement.PLACEATBEGINNING)

        app.activeDocument.saveAs(Folder(folderTool + "/go3mm-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        //$.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openAndResizeFile(arr[i], FileDesign, wphone, hphone, "type");

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


    var noneGroup = true;
    app.activeDocument.layerSets[0].duplicate(app.documents["GLLM"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "caculatorPosition.jsx";
    if (app.activeDocument.layerSets[0].artLayers.length > 0) {
        noneGroup = false;
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
        if (!noneGroup) app.activeDocument.layers["a" + arr[i].stt].move(app.activeDocument.layerSets["SPOT"], ElementPlacement.INSIDE);
        else app.activeDocument.layers["a" + arr[i].stt].remove();
    }
    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        app.activeDocument.layerSets["SPOT"].move(app.activeDocument, ElementPlacement.PLACEATBEGINNING)

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



    openAndResizeFile(arr[i], FileDesign, wphone, hphone, "mica");


    var layerSet = app.activeDocument.layerSets.add();
    layerSet.name = "a" + arr[i].stt;
    var arr2 = [];
    for (var k = 0; k < app.activeDocument.layers.length; k++) {
        if (app.activeDocument.layers[k].name.toLowerCase().split(" ").join("") == "acrylic")
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
        app.activeDocument.layerSets["SPOT"].move(app.activeDocument, ElementPlacement.PLACEATBEGINNING)

        app.activeDocument.saveAs(Folder(folderTool + "/mica3mm-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openAndResizeFile(arr[i], FileDesign, wphone, hphone, "mica");

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

    var noneGroup = true;

    app.activeDocument.layerSets[0].duplicate(app.documents["GLLM"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "caculatorPosition.jsx";
    if (app.activeDocument.layerSets[0].layers.length !== 0) {
        noneGroup = false;
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

        if (!noneGroup) app.activeDocument.layers["a" + arr[i].stt].move(app.activeDocument.layerSets["SPOT"], ElementPlacement.INSIDE);
        else app.activeDocument.layers["a" + arr[i].stt].remove();
    }
    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        app.activeDocument.layerSets["SPOT"].move(app.activeDocument, ElementPlacement.PLACEATBEGINNING)

        app.activeDocument.saveAs(Folder(folderTool + "/mica3mm-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}




function openAndResizeFile(item, FileDesign, wphone, hphone, type) {

    try {
        app.open(File(FileDesign + "/" + item.sku + ".psd"));
        if (type == "mica") app.doAction("canvasHoriz", "tool");
    } catch (error2) {

    }


    app.activeDocument.mergeVisibleLayers();
    var xoay = false;
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    if ((PSpotKhung[2] - PSpotKhung[0]) < (PSpotKhung[3] - PSpotKhung[1])) {
        app.activeDocument.rotateCanvas(90);
        xoay = true
    }
    PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    try {
        app.open(File(FileDesign + "/" + item.sku + ".psd"));
        if (type == "mica") app.doAction("canvasHoriz", "tool");
    } catch (error2) {

    }


    if (xoay) app.activeDocument.rotateCanvas(90);
    if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
    // app.activeDocument.resizeImage(UnitValue(wphone * app.activeDocument.width / (PSpotKhung[2] - PSpotKhung[0]), "px"), UnitValue(hphone * app.activeDocument.height / (PSpotKhung[3] - PSpotKhung[1]), "px"), 300, ResampleMethod.BICUBIC);


    var khungW = PSpotKhung[2] - PSpotKhung[0];
    var khungH = PSpotKhung[3] - PSpotKhung[1];

    var scaleW = wphone * 1.0 / khungW;
    var scaleH = hphone * 1.0 / khungH;

    var scale = Math.min(scaleW, scaleH); // scale nhỏ hơn để không vượt

    app.activeDocument.resizeImage(
        UnitValue(scale * app.activeDocument.width, "px"),
        UnitValue(scale * app.activeDocument.height, "px"),
        300,
        ResampleMethod.BICUBIC
    );

}