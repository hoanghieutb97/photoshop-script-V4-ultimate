#include "createDocumentAll.jsx";

var typeTem = "go5mm"; // khi createtem-group thì mới dùng
var nameSave = "go5mm"; // tên khi lưu




for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";


    // var tinhCur = tinhkichthuoc(arr[i], FileDesign, type);
    movaxulyfile(arr[i], FileDesign, type, tinhCur, wphone, hphone);

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets[arr[i].stt + "l"].remove();


        app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocumentAll.jsx";
        ban = ban + 1;
        stt = i;



        var tinhCur = tinhkichthuoc(arr[i], FileDesign, type);
        movaxulyfile(arr[i], FileDesign, type, tinhCur, wphone, hphone);

    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer = app.activeDocument.layerSets[arr[i].stt + "l"];
    app.doAction("moveZero", "tool");
    app.activeDocument.layerSets[arr[i].stt + "l"].translate(xPosition, (yPosition) * (-1));

    if (i == arr.length - 1) {

        app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}



function tinhkichthuoc(item, FileDesign, type) {
    openFile(FileDesign, item, type);

    var widthx = app.activeDocument.width.as("px");
    var heightx = app.activeDocument.height.as("px");

    app.activeDocument.crop([0, 0, widthx / 2, heightx]);

    if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(-90)
    var activeWidth = app.activeDocument.width;
    app.activeDocument.selection.select([[0, 0], [0, app.activeDocument.height], [app.activeDocument.width / 2, app.activeDocument.height], [app.activeDocument.width / 2, 0]]);
    app.doAction("cat paste", "tool");
    var bounds1 = app.activeDocument.layers[0].bounds;
    var bounds2 = app.activeDocument.layers[1].bounds;
    var b0 = bounds1[0];
    var b1 = bounds1[1];
    var b2 = bounds1[2];
    var b3 = bounds1[3];
    // alert(bounds1)
    if (bounds1[0] > (bounds2[0] - activeWidth / 2)) b0 = bounds2[0] - (activeWidth / 2);
    if (bounds1[1] > (bounds2[1])) b1 = bounds2[1];
    if (bounds1[2] < (bounds2[2] - activeWidth / 2)) b2 = bounds2[2] - (activeWidth / 2);
    if (bounds1[3] < (bounds2[3])) b3 = bounds2[3];
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    return [b2 - b0, b3 - b1]
}

///////////////////////////////////////
function movaxulyfile(item, FileDesign, type, tinhCur, wphone, hphone) {
    // var CurWidth = tinhCur[0];
    // var CurHeight = tinhCur[1];

    openFile(FileDesign, item, type);
    if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(-90)
    app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
    {  /// open va xu ly file

        var layerWidth = app.activeDocument.width;
        var layerHeight = app.activeDocument.height;

        app.activeDocument.activeLayer.name = "a0";
        app.activeDocument.selection.select([[0, 0], [0, layerHeight], [layerWidth / 4, layerHeight], [layerWidth / 4, 0]]);
        app.doAction("duplicateSelection", "tool");
        app.activeDocument.activeLayer.name = "1a";

        app.activeDocument.activeLayer = app.activeDocument.layers["a0"]
        app.activeDocument.selection.select([[layerWidth / 4, 0], [layerWidth / 4, layerHeight], [layerWidth / 2, layerHeight], [layerWidth / 2, 0]]);
        app.doAction("duplicateSelection", "tool");
        app.activeDocument.activeLayer.name = "1b";

        if ((arr[i].nameId.split("-")[1] == "3L") || (arr[i].nameId.split("-")[1] == "4L")) {
            app.activeDocument.activeLayer = app.activeDocument.layers["a0"]
            app.activeDocument.selection.select([[2 * layerWidth / 4, 0], [2 * layerWidth / 4, layerHeight], [3 * layerWidth / 4, layerHeight], [3 * layerWidth / 4, 0]]);
            app.doAction("duplicateSelection", "tool");
            app.activeDocument.activeLayer.name = "1c";
        }
        if (arr[i].nameId.split("-")[1] == "4L") {
            app.activeDocument.activeLayer = app.activeDocument.layers["a0"]
            app.activeDocument.selection.select([[4 * layerWidth / 4, 0], [4 * layerWidth / 4, layerHeight], [layerWidth, layerHeight], [layerWidth, 0]]);
            app.doAction("duplicateSelection", "tool");
            app.activeDocument.activeLayer.name = "1d";
        }
        app.activeDocument.layers["a0"].remove();

        // var scaleW = wphone * 100 / CurWidth;
        // var scaleH = hphone * 100 / CurHeight;

        // var scale = Math.min(scaleW, scaleH); // scale nhỏ hơn để không vượt


        // app.activeDocument.layers["1a"].resize(scale, scale, AnchorPosition.MIDDLECENTER);
        // app.activeDocument.layers["1b"].resize(scale, scale, AnchorPosition.MIDDLECENTER);
        // if ((arr[i].nameId.split("-")[1] == "3L") || (arr[i].nameId.split("-")[1] == "4L"))
        //     app.activeDocument.layers["1c"].resize(scale, scale, AnchorPosition.MIDDLECENTER);
        // if (arr[i].nameId.split("-")[1] == "4L")
        //     app.activeDocument.layers["1d"].resize(scale, scale, AnchorPosition.MIDDLECENTER);

        var type3L = ((arr[i].nameId.split("-")[1] == "3L") || (arr[i].nameId.split("-")[1] == "4L")) && (arr[i].nameId.split("-")[0] == "W")
        var type4L = (arr[i].nameId.split("-")[1] == "4L") && (arr[i].nameId.split("-")[0] == "W")



        app.activeDocument.activeLayer = app.activeDocument.layers["1a"]
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer = app.activeDocument.layers["1b"]
        app.doAction("moveZero", "tool");
        if (type3L) {
            app.activeDocument.activeLayer = app.activeDocument.layers["1c"]
            app.doAction("moveZero", "tool");
        }
        if (type4L) {
            app.activeDocument.activeLayer = app.activeDocument.layers["1d"]
            app.doAction("moveZero", "tool");
        }


        var boundb3 = app.activeDocument.layers["1a"].bounds;
        app.activeDocument.activeLayer = app.activeDocument.layers["1b"]
        app.activeDocument.activeLayer.translate(boundb3[2] + 24, 0);
        if (type3L) {
            var boundb4 = app.activeDocument.layers["1b"].bounds;

            app.activeDocument.activeLayer = app.activeDocument.layers["1c"]
            var boundb4D = app.activeDocument.layers["1c"].bounds;
            if ((boundb4D[2] - boundb4D[0]) > (boundb4D[3] - boundb4D[1])) {
                app.activeDocument.layers["1c"].rotate(90, AnchorPosition.MIDDLECENTER);
                app.doAction("moveZero", "tool");
            }

            app.activeDocument.activeLayer.translate(boundb4[2] + 24, 0);
        }
        if (type4L) {
            var boundb5 = app.activeDocument.layers["1c"].bounds;
            app.activeDocument.activeLayer = app.activeDocument.layers["1d"]
            var boundb5D = app.activeDocument.layers["1c"].bounds;
            if ((boundb5D[2] - boundb5D[0]) > (boundb5D[3] - boundb5D[1])) {
                app.activeDocument.layers["1d"].rotate(90, AnchorPosition.MIDDLECENTER);
                app.doAction("moveZero", "tool");
            }
            app.activeDocument.activeLayer.translate(boundb5[2] + 24, 0);
        }

        {// text stt
            var textLayer = app.activeDocument.artLayers.add();
            textLayer.name = "1t"
            textLayer.kind = LayerKind.TEXT;
            textLayer.textItem.contents = item.stt;
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
        layerSet.name = item.stt + "l";
        app.activeDocument.layers["1a"].move(layerSet, ElementPlacement.INSIDE);
        app.activeDocument.layers["1b"].move(layerSet, ElementPlacement.INSIDE);
        if (type3L) app.activeDocument.layers["1c"].move(layerSet, ElementPlacement.INSIDE);
        if (type4L) app.activeDocument.layers["1d"].move(layerSet, ElementPlacement.INSIDE);
        app.activeDocument.layers["1t"].move(layerSet, ElementPlacement.INSIDE);


        var bounds2 = layerSet.bounds;
        var khung = app.activeDocument.artLayers.add();
        khung.name = "1k";
        app.activeDocument.selection.select([[bounds2[0], bounds2[1]], [bounds2[2], bounds2[1]], [bounds2[2], bounds2[3]], [bounds2[0], bounds2[3]]]);

        app.activeDocument.selection.expand(24);

        app.doAction("strokered5px", "tool");
        app.activeDocument.layers["1k"].move(layerSet, ElementPlacement.INSIDE);


        app.activeDocument.layerSets[item.stt + "l"].duplicate(app.documents["GLLM"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in



        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        var bounds4 = app.activeDocument.layerSets[item.stt + "l"].bounds;
        boxW = bounds4[2] - bounds4[0];
        boxH = bounds4[3] - bounds4[1];
        // vsdvs
    }
}