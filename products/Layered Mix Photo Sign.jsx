
#include "createDocumentWooden.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    typeTem = "go3mm";
    var end = 0;
    var coanh = false;
    #include "convertPixel.jsx";
    var typex = 2;
    var scall = 0;
    var xoay = false;
    var lop = 1;
    var WToA = 1;

    var cropA = 0;
    var cropB = 0;
    var cropC = 0;
    var cropD = 0;
    var WpH = false;

    if (arr[i].nameId.split("-").pop() == "WA") WToA = 1;
    else if (arr[i].nameId.split("-").pop() == "AW") WToA = 2;
    { // tinh scale
        openFile(FileDesign, arr[i], type);
        cropBoxIn(1, 1, 2, 2, app.activeDocument.width, app.activeDocument.height);
        app.doAction("xoa stroke layer", "tool");
        var bounds1 = app.activeDocument.activeLayer.bounds;
        var widthden = bounds1[2] - bounds1[0];
        var heightden = bounds1[3] - bounds1[1];
        cropA = wphone * 100 / widthden;
        cropB = hphone * 100 / heightden;
        cropC = hphone * 100 / widthden;
        cropD = wphone * 100 / heightden;
        if (widthden > heightden) WpH = true;
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    }

    openFile(FileDesign, arr[i], type);
    cropBoxIn(WToA, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
    app.doAction("xoa stroke layer", "tool");

    #include "cropBlackCut-tumbleNameTag.jsx";
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        nameSave = "go3mm";
        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
        #include "createDocumentWooden.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        cropBoxIn(WToA, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
        app.doAction("xoa stroke layer", "tool");

        #include "cropBlackCut-tumbleNameTag.jsx";
        stt = i;
    }


    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";
    { // translate khung
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
    }

    end = arr[i].stt;

    if ((end == arr.length)) {

        nameSave = "go3mm";
        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ban = 0;
stt = 0;
#include "createDocumentMica.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    typeTem = "mica3mm";
    var end = 0;
    var coanh = false;
    #include "convertPixel.jsx";
    var typex = 2;
    var scall = 0;
    var xoay = false;
    var lop = 1;
    var WToA = 1;
    nameSave = "mica3mm";
    var cropA = 0;
    var cropB = 0;
    var cropC = 0;
    var cropD = 0;
    var WpH = false;

    if (arr[i].nameId.split("-").pop() == "WA") WToA = 2;
    else if (arr[i].nameId.split("-").pop() == "AW") WToA = 1;
    { // tinh scale
        openFile(FileDesign, arr[i], type);
        cropBoxIn(1, 1, 2, 2, app.activeDocument.width, app.activeDocument.height);
        app.doAction("xoa stroke layer", "tool");
        var bounds1 = app.activeDocument.activeLayer.bounds;
        var widthden = bounds1[2] - bounds1[0];
        var heightden = bounds1[3] - bounds1[1];
        cropA = wphone * 100 / widthden;
        cropB = hphone * 100 / heightden;
        cropC = hphone * 100 / widthden;
        cropD = wphone * 100 / heightden;
        if (widthden > heightden) WpH = true;
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    }

    openFile(FileDesign, arr[i], type);
    cropBoxIn(WToA, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
    app.doAction("xoa stroke layer", "tool");
    app.doAction("canvasHoriz", "tool");
    #include "cropBlackCut-tumbleNameTag.jsx";
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
        #include "createDocumentMica.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        cropBoxIn(WToA, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
        app.doAction("xoa stroke layer", "tool");
        app.doAction("canvasHoriz", "tool");
        #include "cropBlackCut-tumbleNameTag.jsx";
        stt = i;
    }


    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";
    { // translate khung
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
    }

    end = arr[i].stt;

    if ((end == arr.length)) {

        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
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
