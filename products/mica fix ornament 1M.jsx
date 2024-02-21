///////////////////////////////////////////////// -
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    // alert("2", boxW)

    openCropFile(arr[i], FileDesign, type);
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        {
            app.doAction("crop document all", "tool");

            var selectionBounds = app.activeDocument.activeLayer.bounds;
            var padding = 0;
            var newBounds = [
                selectionBounds[0] - padding,
                selectionBounds[1] - padding,
                selectionBounds[2] + padding,
                selectionBounds[3] + padding
            ];
            app.activeDocument.crop(newBounds);
            app.activeDocument.activeLayer.remove();
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

            app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openCropFile(arr[i], FileDesign, type);
        stt = i;
    }
    // alert(boxW)
    #include "caculatorPosition.jsx";
    // alert(xPosition, yPosition)
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    layKhung(arr[i])

    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateKHUNG.jsx";
    if (i == arr.length - 1) {
        {
            app.doAction("crop document all", "tool");

            var selectionBounds = app.activeDocument.activeLayer.bounds;
            var padding = 0;
            var newBounds = [
                selectionBounds[0] - padding,
                selectionBounds[1] - padding,
                selectionBounds[2] + padding,
                selectionBounds[3] + padding
            ];
            app.activeDocument.crop(newBounds);
            app.activeDocument.activeLayer.remove();
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

            app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

function openCropFile(item, FileDesign, type) {

    var tenKhung = "hieudz";

    if (item.nameId == "Mica-tim-1M") tenKhung = "tim";
    else if (item.nameId == "Mica-tron-1M") tenKhung = "tron";
    else if (item.nameId == "Mica-Sao-1M") tenKhung = "sao";
    else if (item.nameId == "Mica-Medalion-to-1M") tenKhung = "medalion to";
    else if (item.nameId == "Mica-Medalion-nho-1M") tenKhung = "medalion nho";
    else if (item.nameId == "MicaDZT-tron-1M") tenKhung = "tron 3in";
    else if (item.nameId == "Mica-elip-1M") tenKhung = "elip";

    app.open(File("//192.168.1.194/ps script data/mica dzt/" + tenKhung + ".png"));

    openFile(FileDesign, item, type);
    app.doAction("canvasHoriz", "tool");
    app.doAction("strokeRed1px", "tool");
    #include "cropAndResize-boxW.jsx";

    app.activeDocument.activeLayer.name = "1 copy";
    app.activeDocument.activeLayer.duplicate(app.documents[tenKhung + ".png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.doAction("moveCenter", "tool");
    app.doAction("crop mica dzt", "tool");
}
function layKhung(item) {
    var tenKhung = "hieudz";

    if (item.nameId == "Mica-tim-1M") tenKhung = "tim";
    else if (item.nameId == "Mica-tron-1M") tenKhung = "tron";
    else if (item.nameId == "Mica-Sao-1M") tenKhung = "sao";
    else if (item.nameId == "Mica-Medalion-to-1M") tenKhung = "medalion to";
    else if (item.nameId == "Mica-Medalion-nho-1M") tenKhung = "medalion nho";
    else if (item.nameId == "MicaDZT-tron-1M") tenKhung = "tron 3in";
    else if (item.nameId == "Mica-elip-1M") tenKhung = "elip";

    app.open(File("//192.168.1.194/ps script data/mica dzt/file cat/" + tenKhung + ".png"));

}