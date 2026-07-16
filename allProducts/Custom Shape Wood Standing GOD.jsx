



{ ////////////////////////////////////////////////////////////// chay lop go 3mm

    #include "createDocumentWooden2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go 5mm 1M"; // khi createtem-group thì mới dùng
    var nameSave = "go 5mm 1M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 5; // giới hạn 10 file để tạo bàn in
    var lat = false; // lật mica
    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        soLayerCut = [[[2, 2, 3, 2]], [[3, 2, 3, 2]]];
        var widthLo = 0;
        var xoay = false;
        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_transStanding.jsx";


            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

                ban = ban + 1;
                stt = i;
                #include "createDocumentWooden2.jsx";
                doc = app.activeDocument;
                if (arr.length > Min_Number_auto) {
                    #include "../split/taoTenBan.jsx";
                }

                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0]
                #include "../split/cropBoxXY_black_resize_Dup_transStanding.jsx";
            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";




                #include "translateKHUNG.jsx";
                var sttCropBox = soLayerCut[g][1]
                if (g == 0) {
                    executeAction(stringIDToTypeID("newPlacedLayer"), undefined, DialogModes.NO);
                    executeAction(stringIDToTypeID("placedLayerEditContents"), undefined, DialogModes.NO);

                    if (xoay) app.activeDocument.rotateCanvas(-90);
                    var selDoc = app.activeDocument;
                    selDoc.selection.select([
                        [0, selDoc.height],
                        [0, selDoc.height - 45],
                        [selDoc.width, selDoc.height - 45],
                        [selDoc.width, selDoc.height]
                    ]);

                    app.doAction("duplicateSelection", "tool")
                    app.doAction("selectArea", "tool");
                    app.activeDocument.layers[0].remove();


                    selDoc.selection.makeWorkPath(1.0);
                    selDoc.pathItems.getByName("Work Path").makeSelection(0, true);
                    selDoc.pathItems.getByName("Work Path").remove();
                    app.doAction("duplicateSelection", "tool")
                    var PSpotKhung = app.activeDocument.activeLayer.bounds;
                    widthLo = PSpotKhung[2].as("px") - PSpotKhung[0].as("px");
                    var targetDoc = app.activeDocument;
                    var targetLayer = targetDoc.activeLayer;

                    var srcFile = File("//192.168.1.240/ps script data/std chan std trai.png");
                    var srcDoc = app.open(srcFile);
                    var srcLayer = srcDoc.activeLayer;
                    srcLayer.duplicate(targetDoc, ElementPlacement.PLACEATBEGINNING);
                    srcDoc.close(SaveOptions.DONOTSAVECHANGES);

                    app.activeDocument = targetDoc;
                    var newLayer = targetDoc.activeLayer;
                    var newBounds = newLayer.bounds;
                    var targetLeft = PSpotKhung[0].as("px");
                    var targetTop = PSpotKhung[1].as("px");
                    var newRight = newBounds[2].as("px");
                    var newTop = newBounds[1].as("px");
                    var deltaX = targetLeft - newRight;
                    var deltaY = targetTop - newTop;
                    newLayer.translate(deltaX, deltaY);

                    var srcFileRight = File("//192.168.1.240/ps script data/std chan std phai.png");
                    var srcDocRight = app.open(srcFileRight);
                    var srcLayerRight = srcDocRight.activeLayer;
                    srcLayerRight.duplicate(targetDoc, ElementPlacement.PLACEATBEGINNING);
                    srcDocRight.close(SaveOptions.DONOTSAVECHANGES);

                    app.activeDocument = targetDoc;
                    var rightLayer = targetDoc.activeLayer;
                    var rightBounds = rightLayer.bounds;
                    var targetRight = PSpotKhung[2].as("px");
                    var rightLeft = rightBounds[0].as("px");
                    var rightTop = rightBounds[1].as("px");
                    var deltaXRight = targetRight - rightLeft;
                    var deltaYRight = targetTop - rightTop;
                    rightLayer.translate(deltaXRight, deltaYRight);
                    app.activeDocument.mergeVisibleLayers();
                    if (xoay) app.activeDocument.rotateCanvas(90);
                    app.activeDocument.save();

                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                    app.activeDocument.activeLayer.rasterize(RasterizeType.ENTIRELAYER);
                }
                else if (g == 1) {
                    executeAction(stringIDToTypeID("newPlacedLayer"), undefined, DialogModes.NO);
                    executeAction(stringIDToTypeID("placedLayerEditContents"), undefined, DialogModes.NO);
                    if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(-90);
                    var wandX = app.activeDocument.width.as("px") / 2;
                    var wandY = app.activeDocument.height.as("px") / 2;

                    var idsetd = charIDToTypeID("setd");
                    var desc24 = new ActionDescriptor();
                    var idnull = charIDToTypeID("null");
                    var ref4 = new ActionReference();
                    var idChnl = charIDToTypeID("Chnl");
                    var idfsel = charIDToTypeID("fsel");
                    ref4.putProperty(idChnl, idfsel);
                    desc24.putReference(idnull, ref4);
                    var idT = charIDToTypeID("T   ");
                    var desc25 = new ActionDescriptor();
                    var idHrzn = charIDToTypeID("Hrzn");
                    var idPxl = charIDToTypeID("#Pxl");
                    desc25.putUnitDouble(idHrzn, idPxl, wandX);
                    var idVrtc = charIDToTypeID("Vrtc");
                    desc25.putUnitDouble(idVrtc, idPxl, wandY);
                    var idPnt = charIDToTypeID("Pnt ");
                    desc24.putObject(idT, idPnt, desc25);
                    var idTlrn = charIDToTypeID("Tlrn");
                    desc24.putInteger(idTlrn, 35);
                    var idAntA = charIDToTypeID("AntA");
                    desc24.putBoolean(idAntA, true);
                    executeAction(idsetd, desc24, DialogModes.NO);
                    app.activeDocument.selection.expand(2);

                    app.doAction("fill", "tool");
                    app.activeDocument.selection.deselect();

                    var rectDoc = app.activeDocument;
                    var rectWidth = widthLo+3;
                    var rectHeight = 61;
                    var rectLeft = (rectDoc.width.as("px") - rectWidth) / 2;
                    var rectTop = (rectDoc.height.as("px") - rectHeight) / 2;
                    rectDoc.selection.select([
                        [rectLeft, rectTop],
                        [rectLeft + rectWidth, rectTop],
                        [rectLeft + rectWidth, rectTop + rectHeight],
                        [rectLeft, rectTop + rectHeight]
                    ]);
                    rectDoc.selection.clear();
                    app.activeDocument.selection.deselect();
                    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
                    app.activeDocument.save();

                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                    app.activeDocument.activeLayer.rasterize(RasterizeType.ENTIRELAYER);

                }
                app.activeDocument.activeLayer.name = arr[i].stt;


            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do
        #include "../split/nganCachDoNewAutoFillWooden.jsx"; // căn giữa 1 file  Group_Khung và Group_In

        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem


        }

    }

}




function tinhkichthuoc(item, FileDesign, type) {
    openFile(FileDesign, item, type);
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(-90)
    var activeWidth = app.activeDocument.width;
    cropBoxInXY_onlyDuplicate(1, 1, 2, 3, app.activeDocument.width, app.activeDocument.height);

    app.activeDocument.activeLayer = app.activeDocument.layers[1];

    cropBoxInXY_onlyDuplicate(2, 1, 2, 3, app.activeDocument.width, app.activeDocument.height);
    app.activeDocument.layers[2].remove();

    var bounds1 = app.activeDocument.layers[0].bounds;
    var bounds2 = app.activeDocument.layers[1].bounds;
    var b0 = bounds1[0];
    var b1 = bounds1[1];
    var b2 = bounds1[2];
    var b3 = bounds1[3];

    if (bounds1[0] > (bounds2[0] - activeWidth / 2)) b0 = bounds2[0] - (activeWidth / 2);
    if (bounds1[1] > (bounds2[1])) b1 = bounds2[1];
    if (bounds1[2] < (bounds2[2] - activeWidth / 2)) b2 = bounds2[2] - (activeWidth / 2);
    if (bounds1[3] < (bounds2[3])) b3 = bounds2[3];
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    return [b2 - b0, b3 - b1]
}
