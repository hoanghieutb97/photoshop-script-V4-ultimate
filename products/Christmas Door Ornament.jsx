#include "createDocumentWooden2.jsx";
typeTem = "1M-go3mm";
nameSave = "1M-go3mm";
for (var i = stt; i <= arr.length - 1; i++) {
    var somanh = 4;

    #include "convertPixel.jsx";
    for (var k = 0; k < somanh; k++) {
        var boundsLayer1 = 0;
        var layer1Width = 0;
        var layer1Height = 0;
        {
            openFile(FileDesign, arr[i], type);
            cropBoxIn(k + 1, 1, somanh, 2, app.activeDocument.width, app.activeDocument.height);
            app.doAction("xoa stroke layer", "tool");

            var bounds1 = app.activeDocument.activeLayer.bounds;
            var boxW = bounds1[2] - bounds1[0] + 30;
            var boxH = bounds1[3] - bounds1[1] + 30;

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {

                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
                #include "createDocumentWooden2.jsx";
                ban = ban + 1;
                openFile(FileDesign, arr[i], type);
                cropBoxIn(k + 1, 1, somanh, 2, app.activeDocument.width, app.activeDocument.height);
                app.doAction("xoa stroke layer", "tool");


                var bounds1 = app.activeDocument.activeLayer.bounds;
                var boxW = bounds1[2] - bounds1[0] + 30;
                var boxH = bounds1[3] - bounds1[1] + 30;

                stt = i;
            }
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);

            #include "caculatorPosition.jsx";
            #include "translateKHUNG.jsx";
            boundsLayer1 = app.activeDocument.activeLayer.bounds; // Lấy giới hạn của Layer 1 (tọa độ trái, trên, phải, dưới)
            layer1Width = boundsLayer1[2] - boundsLayer1[0];
            layer1Height = boundsLayer1[3] - boundsLayer1[1];
            app.doAction("olverlay DEN CAT", "tool");

        }
        { // lop 5

            openFile(FileDesign, arr[i], type);
            cropBoxIn(k + 1, 2, somanh, 2, app.activeDocument.width, app.activeDocument.height);
            app.doAction("xoa stroke layer", "tool");

            app.activeDocument.activeLayer.name = arr[i].stt;

            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
            app.activeDocument.activeLayer.name = arr[i].stt;
            var bounds2 = app.activeDocument.activeLayer.bounds;
            if ((bounds2[2] - bounds2[0]) != 0) {
                app.activeDocument.activeLayer.name = arr[i].stt;
                app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
                var layer2Width = bounds2[2] - bounds2[0];
                var layer2Height = bounds2[3] - bounds2[1];
                // Tính toán vị trí mới để căn giữa Layer 2 theo Layer 1
                var centerX = boundsLayer1[0] + (layer1Width / 2);
                var centerY = boundsLayer1[1] + (layer1Height / 2);
                app.activeDocument.activeLayer.translate(centerX - (layer2Width / 2) - bounds2[0], centerY - (layer2Height / 2) - bounds2[1]);
                app.doAction("fill 12px layer", "tool");

            }
            else app.activeDocument.activeLayer.remove();
        }
    }



    {
        app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = i + 1;
        app.doAction("sttkinlytoy", "tool");
        var boxW = app.activeDocument.width;
        var boxH = app.activeDocument.height;

        if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
            app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName("stt" + i).remove();
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden2.jsx";
            ban = ban + 1;

            stt = i;
            app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
            app.activeDocument.artLayers[0].textItem.contents = i + 1;
            app.doAction("sttkinlytoy", "tool");
            var boxW = app.activeDocument.width;
            var boxH = app.activeDocument.height;

        }

        app.activeDocument.activeLayer.name = "stt" + i
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
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
        app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName("stt" + i);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName("stt" + i);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
        app.doAction("olverlay DEN CAT", "tool");

    }

    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

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