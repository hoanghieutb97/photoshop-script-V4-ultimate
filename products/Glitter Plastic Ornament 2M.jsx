////////////////////////////////////
#include "createDocument.jsx";
var textColor = new SolidColor;
textColor.rgb.red = 255;
textColor.rgb.green = 0;
textColor.rgb.blue = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openCropFile(arr[i], FileDesign, "front");

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openCropFile(arr[i], FileDesign, type);
        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    openCropFile(arr[i], FileDesign, "back");
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateSPOT.jsx";



    {// them text

        app.activeDocument.artLayers.add();
        app.activeDocument.activeLayer.move(app.activeDocument.layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.activeLayer.kind = LayerKind.TEXT;
        var loai = arr[i].nameId;
        loai = loai.split("-")
        app.activeDocument.activeLayer.textItem.contents = loai[loai.length - 1];
        app.activeDocument.activeLayer.textItem.size = 40;
        app.activeDocument.activeLayer.textItem.color = textColor;


        app.activeDocument.activeLayer.name = arr[i].stt;
        app.doAction("moveZero", "tool");



        app.activeDocument.activeLayer.translate((xPosition + 200), (yPosition + 200) * (-1));

    }

    layKhung(arr[i])
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

    if (i == arr.length - 1) {
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


function openCropFile(item, FileDesign, type) {

    var tenKhung = LayTenSP(item)

    app.open(File("//192.168.1.240/ps script data/Glitter Plastic Ornament/crop/" + tenKhung + ".png"));

    openFile(FileDesign, item, "type");
    var widthF = app.activeDocument.width;
    var heightF = app.activeDocument.height;
    app.activeDocument.activeLayer.name = "1";

    if (type == "front") {
        app.activeDocument.selection.select([[0, 0], [0, heightF], [widthF / 2, heightF], [widthF / 2, 0]]);

    }
    else {
        app.activeDocument.selection.select([[widthF / 2, 0], [widthF / 2, heightF], [widthF, heightF], [widthF, 0]]);

    }
    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);

    app.doAction("duplicateSelection", "tool")
    
    app.activeDocument.layers["1"].remove();
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
    #include "cropAndResize-autoFill.jsx";

    app.activeDocument.activeLayer.name = "1 copy";
    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.doAction("moveCenter", "tool");
    app.doAction("crop mica dzt", "tool");
}
function layKhung(item) {
    var tenKhung = LayTenSP(item);
    app.open(File("//192.168.1.240/ps script data/Glitter Plastic Ornament/khung/" + tenKhung + ".png"));

}
function LayTenSP(item) {
    var tenKhung = "gpo";
    // if (item.nameId == "GP-ornament-red") tenKhung = "GP-ornament-red";
    // else if (item.nameId == "GP-ornament-gray") tenKhung = "GP-ornament-gray";
    return tenKhung

}