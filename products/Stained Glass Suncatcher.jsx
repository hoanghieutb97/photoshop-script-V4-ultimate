
#include "createDocument2.jsx";
nameSave = "tool-in xuoi-2 lan-khong trang";
var bovien = 3; //mm


for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    openCropFile(arr[i], FileDesign, "")

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        {
            app.doAction("tao stroke glass suncatcher", "tool")
            // Đặt màu foreground là đen
            var color = new SolidColor();
            color.rgb.hexValue = "000000";
            app.foregroundColor = color;

            // Stroke vùng chọn 15px, inside
            app.activeDocument.selection.stroke(app.foregroundColor, bovien / 0.084667, StrokeLocation.INSIDE, ColorBlendMode.NORMAL, 100, false);
            app.activeDocument.selection.deselect();
            app.activeDocument.activeLayer.move(app.activeDocument.layerSets.getByName("IN SAU"), ElementPlacement.INSIDE);
            app.activeDocument.artLayers.getByName("KHUNG copy").remove();
            app.activeDocument.layerSets["IN SAU"].move(app.activeDocument.layers[0], ElementPlacement.PLACEBEFORE)
        }
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument2.jsx";

        ban = ban + 1;
        openCropFile(arr[i], FileDesign, "")
        stt = i;
    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));


    openKhung(arr[i]);


    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

    if (i == arr.length - 1) {
        {
            app.doAction("tao stroke glass suncatcher", "tool")
            // Đặt màu foreground là đen
            var color = new SolidColor();
            color.rgb.hexValue = "000000";
            app.foregroundColor = color;

            // Stroke vùng chọn 15px, inside
            app.activeDocument.selection.stroke(app.foregroundColor, bovien / 0.084667, StrokeLocation.INSIDE, ColorBlendMode.NORMAL, 100, false);
            app.activeDocument.selection.deselect();
            app.activeDocument.activeLayer.move(app.activeDocument.layerSets.getByName("IN SAU"), ElementPlacement.INSIDE);
            app.activeDocument.artLayers.getByName("KHUNG copy").remove();

        }
        app.activeDocument.layerSets["IN SAU"].move(app.activeDocument.layers[0], ElementPlacement.PLACEBEFORE)
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

    }
}

function openKhung(item) {

    app.open(File("//192.168.1.240/ps script data/Stained Glass Suncatcher/khung " + item.nameId + ".png"));
    hphone = Math.round((item.hight) / 0.084667);
    wphone = Math.round((item.width) / 0.084667);

    #include "cropAndResize-autoFill.jsx";
    app.activeDocument.activeLayer.name = item.stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

function openCropFile(item, FileDesign, type) {
    var tenKhung = item.nameId
    app.open(File("//192.168.1.240/ps script data/Stained Glass Suncatcher/" + item.nameId + ".png"));
    openFile(FileDesign, item, type);
    app.doAction("strokeWhite1px", "tool");
    app.doAction("canvasHoriz", "tool");
    switch (item.nameId) {
        case "G-Suncatcher-3,9in":
            hphone = Math.round(105 / 0.084667);
            wphone = Math.round(105 / 0.084667);
            break;
        case "G-Suncatcher-5,9in":
            hphone = Math.round(155 / 0.084667);
            wphone = Math.round(155 / 0.084667);
            break;
        case "G-Suncatcher-9,9in":
            hphone = Math.round(255 / 0.084667);
            wphone = Math.round(255 / 0.084667);
            break;
        case "G-Suncatcher-7,9in":
            hphone = Math.round(205 / 0.084667);
            wphone = Math.round(205 / 0.084667);
            break;
        default:
            break;
    }
    #include "cropAndResize-autoFill.jsx";
    app.activeDocument.activeLayer.name = "1 copy";
    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.doAction("moveCenter", "tool");
    app.doAction("crop mica dzt", "tool");
    hphone = Math.round((item.hight) / 0.084667);
    wphone = Math.round((item.width) / 0.084667);

    #include "cropAndResize-autoFill.jsx";
    boxW = Math.round(item.box[0] / 0.084667);
    boxH = Math.round(item.box[1] / 0.084667);

    // app.doAction("strokeWhite1px", "tool");


} 