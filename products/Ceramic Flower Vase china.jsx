wAll = 2480; hAll = 3508;
app.documents.add(wAll, hAll, 300, "GLLM");
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "CMYK";
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "SPOT";
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "KHUNG";
yPosition = 100;
xPosition = 30;
hLast = 0;
wLast = 0;


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
        app.doAction("tao layer trang", "Default Actions");
        app.activeDocument.selection.select([[(wid / 2) - 50, 0]
            , [(wid / 2) - 50, hei]
            , [(wid / 2) + 50, hei]
            , [(wid / 2) + 50, 0]]);

        var arrHisto = app.activeDocument.histogram;
        var histo2 = tonghistogram(arrHisto);

        app.activeDocument.selection.deselect();
        app.doAction("xoa layer trang", "Default Actions");
        if (histo2 < 100) {

            app.activeDocument.activeLayer.name = "all";
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
            if (app.activeDocument.height > 650) app.activeDocument.resizeImage(null, UnitValue(650, "px"), 300, ResampleMethod.BICUBIC);
            cropBoxIn(1, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = "1";

            app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("all");

            cropBoxIn(2, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = "2";
            app.activeDocument.artLayers.getByName("all").remove();
            app.activeDocument.resizeCanvas(2362, 709, AnchorPosition.MIDDLECENTER);


            app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("1");
            var PSbound1 = app.activeDocument.activeLayer.bounds;
            if (PSbound1[2] - PSbound1[0] > 800) {
                app.doAction("moveZero", "tool");
                app.activeDocument.activeLayer.translate(50, 0);
                app.activeDocument.selection.select([[50, 0], [0, app.activeDocument.height], [app.activeDocument.width, app.activeDocument.height], [app.activeDocument.width, 0]]);
                app.doAction("move center topbot", "tool");
                // app.activeDocument.activeLayer.rotate(-0.7)

            }
            else {
                app.activeDocument.selection.select([[50, 0], [50, app.activeDocument.height], [945, app.activeDocument.height], [945, 0]]);
                app.doAction("move center selction", "tool");
                // app.activeDocument.activeLayer.rotate(-0.7)


            }

            app.doAction("canvasHoriz", "tool");
            app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("2");
            var PSbound1 = app.activeDocument.activeLayer.bounds;
            if (PSbound1[2] - PSbound1[0] > 800) {
                app.doAction("moveZero", "tool");
                app.activeDocument.activeLayer.translate(50, 0);
                app.activeDocument.selection.select([[0, 0], [0, app.activeDocument.height], [app.activeDocument.width, app.activeDocument.height], [app.activeDocument.width, 0]]);
                app.doAction("move center topbot", "tool");
                // app.activeDocument.activeLayer.rotate(-0.7)

            }
            else {
                app.activeDocument.selection.select([[50, 0], [945, app.activeDocument.height], [50, app.activeDocument.height], [945, 0]]);
                app.doAction("move center selction", "tool");
                // app.activeDocument.activeLayer.rotate(-0.7)


            }
            app.doAction("canvasHoriz", "tool");
            app.activeDocument.mergeVisibleLayers();
            // app.doAction("strokeRed1px", "tool");
            app.doAction("Jpan coarted color", "tool");

            // app.doAction("canvas 3cm ngang phai", "tool");
            var bounds2 = app.activeDocument.activeLayer.bounds;

            // {
            //     app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
            //     app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
            //     app.doAction("sttkinlytoy", "tool");
            //     var boxW = app.activeDocument.width;
            //     var boxH = app.activeDocument.height;
            //     app.activeDocument.activeLayer.name = "stt" + i
            //     app.doAction("canvasHoriz", "tool");
            //     app.activeDocument.activeLayer.duplicate(app.documents[activeNameDoc], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            //     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


            //     app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt" + i);
            //     app.doAction("moveZero", "tool");

            //     app.activeDocument.activeLayer.translate(bounds2[2], 0);

            // }
            // app.activeDocument.mergeVisibleLayers();
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);



        }
        else {

            app.activeDocument.activeLayer.name = "all";
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
            if (app.activeDocument.height > 650) app.activeDocument.resizeImage(null, UnitValue(650, "px"), 300, ResampleMethod.BICUBIC);

            app.activeDocument.resizeCanvas(2362, 709, AnchorPosition.MIDDLECENTER);

            // app.doAction("strokeRed1px", "tool");
            app.doAction("Jpan coarted color", "tool");
            // app.doAction("canvas 3cm ngang phai", "tool");

            var bounds2 = app.activeDocument.activeLayer.bounds;

            // {
            //     app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
            //     app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
            //     app.doAction("sttkinlytoy", "tool");
            //     var boxW = app.activeDocument.width;
            //     var boxH = app.activeDocument.height;
            //     app.activeDocument.activeLayer.name = "stt" + i
            //     app.doAction("canvasHoriz", "tool");
            //     app.activeDocument.activeLayer.duplicate(app.documents[activeNameDoc], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            //     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


            //     app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt" + i);
            //     app.doAction("moveZero", "tool");

            //     app.activeDocument.activeLayer.translate(bounds2[2], 0);
            // }
            // app.activeDocument.mergeVisibleLayers();
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);


        }
    }
    boxW = app.activeDocument.width + 200;
    boxH = app.activeDocument.height + 200;


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        // #include "cropDocument.jsx";
        var namexxx = "";
        for (var t = stt; t < i; t++) {
            if (namexxx == "") namexxx = arr[t].barcode;
            else namexxx = arr[t].barcode + "-" + namexxx

        }
        app.doAction("xoa group", "Default Actions");
        app.activeDocument.saveAs(Folder(folderTool + "/ " + namexxx + ".psd"));
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        // $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

        app.documents.add(wAll, hAll, 300, "GLLM");
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "CMYK";
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "SPOT";
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "KHUNG";
        yPosition = 100;
        xPosition = 30;
        hLast = 0;
        wLast = 0;
        ban = ban + 1;
        stt = i;
        openFile(FileDesign, arr[i], type);

        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        {
            var activeNameDoc = app.activeDocument.name;
            var wid = app.activeDocument.width;
            var hei = app.activeDocument.height;
            app.doAction("tao layer trang", "Default Actions");
            app.activeDocument.selection.select([[(wid / 2) - 50, 0]
                , [(wid / 2) - 50, hei]
                , [(wid / 2) + 50, hei]
                , [(wid / 2) + 50, 0]]);
    
            var arrHisto = app.activeDocument.histogram;
            var histo2 = tonghistogram(arrHisto);
    
            app.activeDocument.selection.deselect();
            app.doAction("xoa layer trang", "Default Actions");
            if (histo2 < 100) {
    
                app.activeDocument.activeLayer.name = "all";
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
                if (app.activeDocument.height > 650) app.activeDocument.resizeImage(null, UnitValue(650, "px"), 300, ResampleMethod.BICUBIC);
                cropBoxIn(1, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
                app.activeDocument.activeLayer.name = "1";
    
                app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("all");
    
                cropBoxIn(2, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
                app.activeDocument.activeLayer.name = "2";
                app.activeDocument.artLayers.getByName("all").remove();
                app.activeDocument.resizeCanvas(2362, 709, AnchorPosition.MIDDLECENTER);
    
    
                app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("1");
                var PSbound1 = app.activeDocument.activeLayer.bounds;
                if (PSbound1[2] - PSbound1[0] > 800) {
                    app.doAction("moveZero", "tool");
                    app.activeDocument.activeLayer.translate(50, 0);
                    app.activeDocument.selection.select([[50, 0], [0, app.activeDocument.height], [app.activeDocument.width, app.activeDocument.height], [app.activeDocument.width, 0]]);
                    app.doAction("move center topbot", "tool");
                    // app.activeDocument.activeLayer.rotate(-0.7)
    
                }
                else {
                    app.activeDocument.selection.select([[50, 0], [50, app.activeDocument.height], [945, app.activeDocument.height], [945, 0]]);
                    app.doAction("move center selction", "tool");
                    // app.activeDocument.activeLayer.rotate(-0.7)
    
    
                }
    
                app.doAction("canvasHoriz", "tool");
                app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("2");
                var PSbound1 = app.activeDocument.activeLayer.bounds;
                if (PSbound1[2] - PSbound1[0] > 800) {
                    app.doAction("moveZero", "tool");
                    app.activeDocument.activeLayer.translate(50, 0);
                    app.activeDocument.selection.select([[0, 0], [0, app.activeDocument.height], [app.activeDocument.width, app.activeDocument.height], [app.activeDocument.width, 0]]);
                    app.doAction("move center topbot", "tool");
                    // app.activeDocument.activeLayer.rotate(-0.7)
    
                }
                else {
                    app.activeDocument.selection.select([[50, 0], [945, app.activeDocument.height], [50, app.activeDocument.height], [945, 0]]);
                    app.doAction("move center selction", "tool");
                    // app.activeDocument.activeLayer.rotate(-0.7)
    
    
                }
                app.doAction("canvasHoriz", "tool");
                app.activeDocument.mergeVisibleLayers();
                // app.doAction("strokeRed1px", "tool");
                app.doAction("Jpan coarted color", "tool");
    
                // app.doAction("canvas 3cm ngang phai", "tool");
                var bounds2 = app.activeDocument.activeLayer.bounds;
    
                // {
                //     app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
                //     app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
                //     app.doAction("sttkinlytoy", "tool");
                //     var boxW = app.activeDocument.width;
                //     var boxH = app.activeDocument.height;
                //     app.activeDocument.activeLayer.name = "stt" + i
                //     app.doAction("canvasHoriz", "tool");
                //     app.activeDocument.activeLayer.duplicate(app.documents[activeNameDoc], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                //     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    
    
                //     app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt" + i);
                //     app.doAction("moveZero", "tool");
    
                //     app.activeDocument.activeLayer.translate(bounds2[2], 0);
    
                // }
                // app.activeDocument.mergeVisibleLayers();
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
    
    
    
            }
            else {
    
                app.activeDocument.activeLayer.name = "all";
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
                if (app.activeDocument.height > 650) app.activeDocument.resizeImage(null, UnitValue(650, "px"), 300, ResampleMethod.BICUBIC);
    
                app.activeDocument.resizeCanvas(2362, 709, AnchorPosition.MIDDLECENTER);
    
                // app.doAction("strokeRed1px", "tool");
                app.doAction("Jpan coarted color", "tool");
                // app.doAction("canvas 3cm ngang phai", "tool");
    
                var bounds2 = app.activeDocument.activeLayer.bounds;
    
                // {
                //     app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
                //     app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
                //     app.doAction("sttkinlytoy", "tool");
                //     var boxW = app.activeDocument.width;
                //     var boxH = app.activeDocument.height;
                //     app.activeDocument.activeLayer.name = "stt" + i
                //     app.doAction("canvasHoriz", "tool");
                //     app.activeDocument.activeLayer.duplicate(app.documents[activeNameDoc], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                //     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    
    
                //     app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt" + i);
                //     app.doAction("moveZero", "tool");
    
                //     app.activeDocument.activeLayer.translate(bounds2[2], 0);
                // }
                // app.activeDocument.mergeVisibleLayers();
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
    
    
            }
        }
        boxW = app.activeDocument.width + 200;
        boxH = app.activeDocument.height + 200;



    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].barcode;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].barcode);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
    app.doAction("center binh", "Default Actions")
    if (i == arr.length - 1) {
        var namexxx = "";
        for (var t = stt; t < i; t++) {
            if (namexxx == "") namexxx = arr[t].barcode;
            else namexxx = arr[t].barcode + "-" + namexxx

        }
        app.doAction("xoa group", "Default Actions");
        app.activeDocument.saveAs(Folder(folderTool + "/ " + namexxx + ".psd"));
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        // $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
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


// {
//     var activeNameDoc = app.activeDocument.name;
//     var wid = app.activeDocument.width;
//     var hei = app.activeDocument.height;
//     app.activeDocument.selection.select([[(wid / 2) - 50, 0]
//         , [(wid / 2) - 50, hei]
//         , [(wid / 2) + 50, hei]
//         , [(wid / 2) + 50, 0]]);

//     var arrHisto = app.activeDocument.histogram;
//     var histo2 = tonghistogram(arrHisto);
//     app.activeDocument.selection.deselect();
//     if (histo2 < 100) {

//         app.activeDocument.activeLayer.name = "all";
//         var PSpotKhung = app.activeDocument.activeLayer.bounds;
//         app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
//         if (app.activeDocument.height > 780) app.activeDocument.resizeImage(null, UnitValue(780, "px"), 300, ResampleMethod.BICUBIC);
//         cropBoxIn(1, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
//         app.activeDocument.activeLayer.name = "1";

//         app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("all");

//         cropBoxIn(2, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
//         app.activeDocument.activeLayer.name = "2";
//         app.activeDocument.artLayers.getByName("all").remove();
//         app.activeDocument.resizeCanvas(2601, 862, AnchorPosition.MIDDLECENTER);


//         app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("1");
//         var PSbound1 = app.activeDocument.activeLayer.bounds;
//         if (PSbound1[2] - PSbound1[0] > 900) {
//             app.doAction("moveZero", "tool");
//             app.activeDocument.activeLayer.translate(168, 0);
//             app.activeDocument.selection.select([[0, 0], [0, app.activeDocument.height], [app.activeDocument.width, app.activeDocument.height], [app.activeDocument.width, 0]]);
//             app.doAction("move center topbot", "tool");
//             app.activeDocument.activeLayer.rotate(-0.7)

//         }
//         else {
//             app.activeDocument.selection.select([[170, 0], [170, app.activeDocument.height], [1117, app.activeDocument.height], [1117, 0]]);
//             app.doAction("move center selction", "tool");
//             app.activeDocument.activeLayer.rotate(-0.7)


//         }

//         app.doAction("canvasHoriz", "tool");
//         app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("2");
//         var PSbound1 = app.activeDocument.activeLayer.bounds;
//         if (PSbound1[2] - PSbound1[0] > 900) {
//             app.doAction("moveZero", "tool");
//             app.activeDocument.activeLayer.translate(168, 0);
//             app.activeDocument.selection.select([[0, 0], [0, app.activeDocument.height], [app.activeDocument.width, app.activeDocument.height], [app.activeDocument.width, 0]]);
//             app.doAction("move center topbot", "tool");
//             app.activeDocument.activeLayer.rotate(-0.7)

//         }
//         else {
//             app.activeDocument.selection.select([[170, 0], [170, app.activeDocument.height], [1117, app.activeDocument.height], [1117, 0]]);
//             app.doAction("move center selction", "tool");
//             app.activeDocument.activeLayer.rotate(-0.7)


//         }
//         app.doAction("canvasHoriz", "tool");
//         app.activeDocument.mergeVisibleLayers();
//         app.doAction("strokeRed1px", "tool");
//         app.doAction("Jpan coarted color", "tool");

//         app.doAction("canvas 3cm ngang phai", "tool");
//         var bounds2 = app.activeDocument.activeLayer.bounds;

//         {
//             app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
//             app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
//             app.doAction("sttkinlytoy", "tool");
//             var boxW = app.activeDocument.width;
//             var boxH = app.activeDocument.height;
//             app.activeDocument.activeLayer.name = "stt" + i
//             app.doAction("canvasHoriz", "tool");
//             app.activeDocument.activeLayer.duplicate(app.documents[activeNameDoc], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
//             app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


//             app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt" + i);
//             app.doAction("moveZero", "tool");

//             app.activeDocument.activeLayer.translate(bounds2[2], 0);

//         }
//         app.activeDocument.mergeVisibleLayers();
//         var PSpotKhung = app.activeDocument.activeLayer.bounds;
//         app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);



//     }
//     else {
//         app.activeDocument.activeLayer.name = "all";
//         var PSpotKhung = app.activeDocument.activeLayer.bounds;
//         app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
//         if (app.activeDocument.height > 780) app.activeDocument.resizeImage(null, UnitValue(780, "px"), 300, ResampleMethod.BICUBIC);

//         app.activeDocument.resizeCanvas(2601, 862, AnchorPosition.MIDDLECENTER);

//         app.doAction("strokeRed1px", "tool");
//         app.doAction("Jpan coarted color", "tool");
//         app.doAction("canvas 3cm ngang phai", "tool");

//         var bounds2 = app.activeDocument.activeLayer.bounds;

//         {
//             app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
//             app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
//             app.doAction("sttkinlytoy", "tool");
//             var boxW = app.activeDocument.width;
//             var boxH = app.activeDocument.height;
//             app.activeDocument.activeLayer.name = "stt" + i
//             app.doAction("canvasHoriz", "tool");
//             app.activeDocument.activeLayer.duplicate(app.documents[activeNameDoc], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
//             app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


//             app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt" + i);
//             app.doAction("moveZero", "tool");

//             app.activeDocument.activeLayer.translate(bounds2[2], 0);
//         }
//         app.activeDocument.mergeVisibleLayers();
//         var PSpotKhung = app.activeDocument.activeLayer.bounds;
//         app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);


//     }
// }