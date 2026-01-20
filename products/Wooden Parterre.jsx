#include "createDocumentWooden.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    var somanh = 0;
    var canvW = 0;
    if (arr[i].nameId == "W-Parterre-3x5in-4") {
        somanh = 4;
        canvW = 3832;
    }
    else if (arr[i].nameId == "W-Parterre-3x5in-8") {
        somanh = 8;
        canvW = 7664;
    }
    else if (arr[i].nameId == "W-Parterre-3x5in-12") {
        somanh = 12;
        canvW = 11496;
    }
    else if (arr[i].nameId == "W-Parterre-9x5in-4") {
        somanh = 4;
        canvW = 6232;
    }
    else if (arr[i].nameId == "W-Parterre-9x5in-8") {
        somanh = 8;
        canvW = 12464;
    }
    else if (arr[i].nameId == "W-Parterre-9x5in-12") {
        somanh = 12;
        canvW = 18696;
    }

    #include "convertPixel.jsx";
    for (var k = 0; k < somanh; k++) {
        openFile(FileDesign, arr[i], type);
        app.activeDocument.crop([0, 0, canvW, app.activeDocument.height]);
        cropBoxIn(k + 1, 1, somanh, 1, app.activeDocument.width, app.activeDocument.height);

        #include "cropBlackCut-2Size.jsx";
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt).remove();

            #include "saveallcrop.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden.jsx";
            ban = ban + 1;
            openFile(FileDesign, arr[i], type);
            app.activeDocument.crop([0, 0, canvW, app.activeDocument.height]);
            cropBoxIn(k + 1, 1, somanh, 1, app.activeDocument.width, app.activeDocument.height);

            #include "cropBlackCut-2Size.jsx";
            stt = i;
        }
        #include "caculatorPosition.jsx";

        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
        var bounds2 = app.activeDocument.activeLayer.bounds;
        if ((bounds2[2] - bounds2[0]) != 0) {
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
        }
        else app.activeDocument.activeLayer.remove();

        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        var bounds2 = app.activeDocument.activeLayer.bounds;
        if ((bounds2[2] - bounds2[0]) != 0) { // translate khung
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate((xPosition + bounds3[0] - bounds1[0]), (yPosition + bounds1[3] - bounds3[3]) * (-1));
        }
        else app.activeDocument.activeLayer.remove();

        app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt);
        var bounds2 = app.activeDocument.activeLayer.bounds;
        if ((bounds2[2] - bounds2[0]) != 0) { // translate khung { // translate khung
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
        }
        else app.activeDocument.activeLayer.remove();


    }

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();

        #include "cropDocumentAll.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/go3mm- " + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocumentWooden.jsx";
        ban = ban + 1;
        var lop = 11;
        openFile(FileDesign, arr[i], type);
        if (coanh) app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height * (2 / 3)]);
        cropBoxIn(1, 1, 4, 2, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");
        app.activeDocument.activeLayer.name = arr[i].stt;

        var bounds1 = app.activeDocument.activeLayer.bounds;
        var boxW = bounds1[2] - bounds1[0] + 30;
        var boxH = bounds1[3] - bounds1[1] + 30;
        stt = i;
    }


    {
        app.open(File("//192.168.2.240/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = i + 1;
        app.doAction("sttkinlytoy", "tool");
        var boxW = app.activeDocument.width;
        var boxH = app.activeDocument.height;
        app.activeDocument.activeLayer.name = "stt" + i
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + i).remove();
            #include "saveallcrop.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden.jsx";
            ban = ban + 1;

            app.open(File("//192.168.2.240/ps script data/sttkinlytoy.tif"));
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
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
    }

}

#include "createDocumentWooden.jsx";

ban = 0;
stt = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    var somanh = 0;
    var canvW = 0;
    if (arr[i].nameId == "W-Parterre-3x5in-4") {
        somanh = 4;
        canvW = 3832;
    }
    else if (arr[i].nameId == "W-Parterre-3x5in-8") {
        somanh = 8;
        canvW = 7664;
    }
    else if (arr[i].nameId == "W-Parterre-3x5in-12") {
        somanh = 12;
        canvW = 11496;
    }
    else if (arr[i].nameId == "W-Parterre-9x5in-4") {
        somanh = 4;
        canvW = 6232;
    }
    else if (arr[i].nameId == "W-Parterre-9x5in-8") {
        somanh = 8;
        canvW = 12464;
    }
    else if (arr[i].nameId == "W-Parterre-9x5in-12") {
        somanh = 12;
        canvW = 18696;
    }
    #include "convertPixel.jsx";

    openFile(FileDesign, arr[i], type);
    app.activeDocument.crop([canvW, 0, app.activeDocument.width, app.activeDocument.height]);

    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);

    app.activeDocument.rotateCanvas(90);
    #include "boxWFlexible.jsx";
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        #include "cropDocument.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/chan " + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        #include "createDocumentWooden.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        app.activeDocument.crop([canvW, 0, app.activeDocument.width, app.activeDocument.height]);
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);

        app.activeDocument.rotateCanvas(90);
        #include "boxWFlexible.jsx";
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    if (i == arr.length - 1) {
        #include "cropDocument.jsx";

        app.activeDocument.saveAs(Folder(folderTool + "/chan " + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

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