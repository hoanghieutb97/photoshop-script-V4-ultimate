wAll = 28346; hAll = 3307;
// hAll = 28346; wAll = 3307;

app.documents.add(wAll, hAll, 300, "GLLM");
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "CMYK";
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "SPOT";
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "KHUNG";
yPosition = 30;
xPosition = 30;
hLast = 0;
wLast = 0;
// stt=640;
// ban=14; 

var jpegOptions = new JPEGSaveOptions();
jpegOptions.quality = 12;
;
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);

    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);

    {
        var activeNameDoc = app.activeDocument.name;
        var wid = app.activeDocument.width;
        var hei = app.activeDocument.height;
        app.activeDocument.selection.select([[(wid / 2) - 50, 0]
            , [(wid / 2) - 50, hei]
            , [(wid / 2) + 50, hei]
            , [(wid / 2) + 50, 0]]);

        var arrHisto = app.activeDocument.histogram;
        var histo2 = tonghistogram(arrHisto);
        app.activeDocument.selection.deselect();
        if (histo2 < 100) {

            app.activeDocument.activeLayer.name = "all";
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
            if (app.activeDocument.height > 780) app.activeDocument.resizeImage(null, UnitValue(780, "px"), 300, ResampleMethod.BICUBIC);
            cropBoxIn(1, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = "1";

            app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("all");

            cropBoxIn(2, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = "2";
            app.activeDocument.artLayers.getByName("all").remove();

            app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("1");
            app.doAction("moveZero", "tool");

            var bounds1 = app.activeDocument.activeLayer.bounds;


            app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("2");
            app.doAction("moveZero", "tool");

            app.activeDocument.activeLayer.translate(bounds1[2] + 72, 0);
            app.doAction("canvas8cmdoc", "tool");
            app.doAction("canvas 3cm ngang phai", "tool");

            var bounds2 = app.activeDocument.activeLayer.bounds;

            {
                app.open(File("//192.168.1.194/ps script data/sttkinlytoy.tif"));
                app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
                app.doAction("sttkinlytoy", "tool");
                var boxW = app.activeDocument.width;
                var boxH = app.activeDocument.height;
                app.activeDocument.activeLayer.name = "stt" + i
                app.activeDocument.activeLayer.duplicate(app.documents[activeNameDoc], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


                app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt" + i);
                app.doAction("moveZero", "tool");

                app.activeDocument.activeLayer.translate(bounds2[2] + 72, 0);
            }
            app.activeDocument.mergeVisibleLayers();
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);



        }
        else {
            // if(arr[i].stt==662) alert(histo2)
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop([0, 0, app.activeDocument.width + 200, app.activeDocument.height]);
            // app.doAction("canvas8cmdoc", "tool");   
            app.doAction("canvas 3cm ngang phai", "tool");

            var bounds2 = app.activeDocument.activeLayer.bounds;
            {
                app.open(File("//192.168.1.194/ps script data/sttkinlytoy.tif"));
                app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
                app.doAction("sttkinlytoy", "tool");
                var boxW = app.activeDocument.width;
                var boxH = app.activeDocument.height;
                app.activeDocument.activeLayer.name = "stt" + i
                app.activeDocument.activeLayer.duplicate(app.documents[activeNameDoc], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


                app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt" + i);
                app.doAction("moveZero", "tool");

                app.activeDocument.activeLayer.translate(bounds2[2] + 72, 0);
                app.activeDocument.mergeVisibleLayers();
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);



            }


        }
    }
    boxW = app.activeDocument.width + 70;
    boxH = app.activeDocument.height + 70;


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        wAll = 28346; hAll = 3307;
        app.documents.add(wAll, hAll, 300, "GLLM");
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "CMYK";
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "SPOT";
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "KHUNG";
        yPosition = 30;
        xPosition = 30;
        hLast = 0;
        wLast = 0;
        ban = ban + 1;
        stt=i;
        openFile(FileDesign, arr[i], type);

        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);

        {
            var activeNameDoc = app.activeDocument.name;
            var wid = app.activeDocument.width;
            var hei = app.activeDocument.height;
            app.activeDocument.selection.select([[(wid / 2) - 50, 0]
                , [(wid / 2) - 50, hei]
                , [(wid / 2) + 50, hei]
                , [(wid / 2) + 50, 0]]);

            var arrHisto = app.activeDocument.histogram;
            var histo2 = tonghistogram(arrHisto);
            app.activeDocument.selection.deselect();
            if (histo2 < 100) {

                app.activeDocument.activeLayer.name = "all";
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
                if (app.activeDocument.height > 780) app.activeDocument.resizeImage(null, UnitValue(780, "px"), 300, ResampleMethod.BICUBIC);
                cropBoxIn(1, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
                app.activeDocument.activeLayer.name = "1";

                app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("all");

                cropBoxIn(2, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
                app.activeDocument.activeLayer.name = "2";
                app.activeDocument.artLayers.getByName("all").remove();

                app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("1");
                app.doAction("moveZero", "tool");

                var bounds1 = app.activeDocument.activeLayer.bounds;


                app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("2");
                app.doAction("moveZero", "tool");

                app.activeDocument.activeLayer.translate(bounds1[2] + 72, 0);
            app.doAction("canvas 3cm ngang phai", "tool");

                var bounds2 = app.activeDocument.activeLayer.bounds;
                {
                    app.open(File("//192.168.1.194/ps script data/sttkinlytoy.tif"));
                    app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
                    app.doAction("sttkinlytoy", "tool");
                    var boxW = app.activeDocument.width;
                    var boxH = app.activeDocument.height;
                    app.activeDocument.activeLayer.name = "stt" + i
                    app.activeDocument.activeLayer.duplicate(app.documents[activeNameDoc], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


                    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt" + i);
                    app.doAction("moveZero", "tool");

                    app.activeDocument.activeLayer.translate(bounds2[2] + 72, 0);
                }
                app.activeDocument.mergeVisibleLayers();
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);



            }
            else {
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop([0, 0, app.activeDocument.width + 200, app.activeDocument.height]);
                app.doAction("canvas 3cm ngang phai", "tool");

                var bounds2 = app.activeDocument.activeLayer.bounds;
                {
                    app.open(File("//192.168.1.194/ps script data/sttkinlytoy.tif"));
                    app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
                    app.doAction("sttkinlytoy", "tool");
                    var boxW = app.activeDocument.width;
                    var boxH = app.activeDocument.height;
                    app.activeDocument.activeLayer.name = "stt" + i
                    app.activeDocument.activeLayer.duplicate(app.documents[activeNameDoc], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


                    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt" + i);
                    app.doAction("moveZero", "tool");

                    app.activeDocument.activeLayer.translate(bounds2[2] + 72, 0);
                    app.activeDocument.mergeVisibleLayers();
                    var PSpotKhung = app.activeDocument.activeLayer.bounds;
                    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);



                }


            }
        }
        boxW = app.activeDocument.width + 70;
        boxH = app.activeDocument.height + 70;



    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}




function cropBoxIn(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
        [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

    ]);






    // if(boxX==2 && boxY==2)vsvsdv
    app.doAction("duplicateSelection", "tool")

}

function tonghistogram(histo) {
    var sum = 0;
    for (var i = 0; i < 11; i++) {
        sum += histo[i];
    }
    return sum
}
