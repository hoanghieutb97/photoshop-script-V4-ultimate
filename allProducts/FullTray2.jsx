//////////////////////////////////
var arrNew = [];

for (var i = 0; i < arr.length; i += 6) {
    arrNew.push(arr.slice(i, i + 6));
}


for (var k = 0; k < arrNew.length; k++) {
    arr = arrNew[k];
    #include "createDocumentAll2.jsx";
    var typeTem = "in Xuoi" + (k + 1); // khi createtem-group thì mới dùng
    var nameSave = "in Xuoi" + (k + 1); // tên khi lưu
    var docs = app.activeDocument;
    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        openCropFile(arr[i], FileDesign, type)

        boxW = boxW + 100;
        boxH = boxH + 100;
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            #include "save1Mat.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
            #include "createDocument.jsx";
            ban = ban + 1;
            openCropFile(arr[i], FileDesign, type)
            stt = i;
        }

        #include "caculatorPosition.jsx";
        app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("Layer 1");
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN SAU"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("1 copy");
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);

        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        var kichthuoc = openKhung(arr[i]);

        #include "translateKHUNG.jsx";
        if (kichthuoc[5] == 1) app.activeDocument.activeLayer.rotate(45, AnchorPosition.MIDDLECENTER);

        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("selectArea", "tool");
        app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
        app.doAction("move center selction", "tool");
        app.activeDocument.activeLayer.rotate(kichthuoc[2], AnchorPosition.MIDDLECENTER);
        app.activeDocument.activeLayer.translate(kichthuoc[3], -kichthuoc[4]);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("selectArea", "tool");
        app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
        app.doAction("move center selction", "tool");
        app.activeDocument.activeLayer.rotate(kichthuoc[2], AnchorPosition.MIDDLECENTER);
        app.activeDocument.activeLayer.translate(kichthuoc[3], -kichthuoc[4]);

        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx"));
        }
    }

}


function openKhung(item) {
    var tenKhung = item.nameId.split("-")[0];
    var kichthuoc = []; // width-height-đo xoay-positon x - position y,c0xiay
    switch (tenKhung) {
        case "Round":
            kichthuoc = [5.6, 12, 0, 0, 0, 0];
            break;
        case "Heart":
            kichthuoc = [5.6, 12, 0, 0, 19, 0];
            break;
        case "Hexagon1":
            kichthuoc = [5.6, 12, 90, -6, 0, 0];
            break;
        case "Hexagon2":
            kichthuoc = [5.6, 13.3, 90, 0, 0, 0];
            break;
        case "Square":
            kichthuoc = [5.6, 16.5, 0, 0, -3, 1];
            break;
        case "Scalloped":
            kichthuoc = [5.6, 16.5, 0, 0, 0, 1];
            break;
    }


    app.doAction("createRectangle8x10in", "tool");
    var oldUnits = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;

    var layer = app.activeDocument.activeLayer;
    var res = app.activeDocument.resolution;

    var targetW = kichthuoc[0] * res / 2.54;
    var targetH = kichthuoc[1] * res / 2.54;

    var bounds = layer.bounds;
    var curW = bounds[2].as("px") - bounds[0].as("px");
    var curH = bounds[3].as("px") - bounds[1].as("px");

    var scaleX = targetW / curW * 100;
    var scaleY = targetH / curH * 100;

    layer.resize(scaleX, scaleY, AnchorPosition.MIDDLECENTER);

    app.preferences.rulerUnits = oldUnits;
    // app.activeDocument.activeLayer.rotate(kichthuoc[2], AnchorPosition.MIDDLECENTER);

    var layersss = app.activeDocument.activeLayer;
    var groupssss = app.activeDocument.layerSets.getByName("KHUNG");

    layersss.move(groupssss, ElementPlacement.INSIDE);
    layersss.move(groupssss.layers[0], ElementPlacement.PLACEBEFORE);
    layersss.rasterize(RasterizeType.ENTIRELAYER);
    layersss.name = arr[i].stt;
    return kichthuoc;

}

function openCropFile(item, FileDesign, type) {
    var tenKhung = item.nameId.split("-")[0];

    app.open(File("//192.168.1.240/ps script data/tray/" + tenKhung + ".png"));
    openFile(FileDesign, item, type);
    app.activeDocument.activeLayer.name = "1 copy";
    app.doAction("strokeWhite1px", "tool");

    #include "cropAndResize-autoFill.jsx";

    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer.name = "1 copy";
    app.doAction("moveCenter", "tool");
    app.doAction("xoa stroke layer", "tool");
    app.doAction("crop mica dzt", "tool");
    app.activeDocument.artLayers.getByName("1 copy").remove();
    app.activeDocument.artLayers.getByName("Layer 2").name = "1 copy";

    // app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("Layer 1");
    // app.doAction("selectArea", "tool");
    // app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("1 copy");
    // app.activeDocument.selection.copy();
    // app.activeDocument.paste();
    // app.activeDocument.activeLayer.name = "2 copy";
    // app.activeDocument.artLayers.getByName("1 copy").remove();
    // app.activeDocument.artLayers.getByName("2 copy").name = "1 copy";



}