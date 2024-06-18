

//////////////////////////////////////////////////////////////
#include "createDocumentWooden.jsx";
var nameSave = "go3mm-";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    // lop 1

    for (var j = 1; j < 4; j++) {

        openFile(FileDesign, arr[i], "0front");
        if (arr[i].nameId == "WP- FrameMagnet-to") app.activeDocument.crop([0, 0, app.activeDocument.width, 2083]);
        else if (arr[i].nameId == "WP- FrameMagnet-nho") app.activeDocument.crop([0, 0, app.activeDocument.width, 1408]);
        cropBoxIn(j, 1, 3, 1, app.activeDocument.width, app.activeDocument.height);
        #include "boxWFlexible.jsx";
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            #include "saveallcropByName.jsx";
            $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden.jsx";
            ban = ban + 1;
            stt = i;

            openFile(FileDesign, arr[i], "0front");
            if (arr[i].nameId = "WP- FrameMagnet-to") app.activeDocument.crop([0, 0, app.activeDocument.width, 2083]);
            else if (arr[i].nameId = "WP- FrameMagnet-nho") app.activeDocument.crop([0, 0, app.activeDocument.width, 1408]);
            cropBoxIn(j, 1, 3, 1, app.activeDocument.width, app.activeDocument.height);
            #include "boxWFlexible.jsx";
        }
        #include "caculatorPosition.jsx";
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "translateCMYK.jsx";





    }


    {
        app.open(File("//192.168.1.194/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = i + 1;
        app.doAction("sttkinlytoy", "tool");
        var boxW = app.activeDocument.width;
        var boxH = app.activeDocument.height;
        app.activeDocument.activeLayer.name = "stt" + i
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + i).remove();
            #include "saveallcropByName.jsx";
            $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden.jsx";
            ban = ban + 1;
            stt = i;
            app.open(File("//192.168.1.194/ps script data/sttkinlytoy.tif"));
            app.activeDocument.artLayers[0].textItem.contents = i + 1;
            app.doAction("sttkinlytoy", "tool");
            var boxW = app.activeDocument.width;
            var boxH = app.activeDocument.height;
            app.activeDocument.activeLayer.name = "stt" + i
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        {// tinh boxW va boxH moi
            boxW = boxW + 30;
            boxH = boxH + 30;

            if (xPosition + wLast + boxW <= wAll) {
                xPosition = xPosition + wLast;
                wLast = boxW;
                if (hLast <= boxH)
                    hLast = boxH;
            }
            else {
                xPosition = 0;
                yPosition = yPosition + hLast;
                wLast = boxW;
                hLast = boxH;
            }
        }
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + i);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
    }


    if (i == arr.length - 1) {

        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}








stt = 0;
var folderKhac = Folder(folderContainer + "/inGiay");
if (!folderKhac.exists) { folderKhac.create(); }

for (var i = stt; i <= arr.length - 1; i++) {

    openFile(FileDesign, arr[i], "vbvsvs");
    if (arr[i].nameId == "WP- FrameMagnet-to") app.activeDocument.crop([0, 2083, app.activeDocument.width, app.activeDocument.height]);
    else if (arr[i].nameId == "WP- FrameMagnet-nho") app.activeDocument.crop([0, 1408, app.activeDocument.width, app.activeDocument.height]);
    var PSpotKhung = app.activeDocument.activeLayer.bounds;

    if ((PSpotKhung[2] - PSpotKhung[0]) != 0) { // translate khung { // translate khung
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        app.activeDocument.saveAs(Folder(folderKhac + "/" + arr[i].stt + ".png"), PNGSaveOptions);
    }


    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


}




function cropBoxIn(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
        [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

    ]);





    // app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    // if(boxX==2 && boxY==2)vsvsdv
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.layers[1].remove();
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
}