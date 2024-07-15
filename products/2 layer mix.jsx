wAll = 14173;
hAll = 9449;
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
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    var widthden = 0;
    var heightden = 0;
    openFile(FileDesign, arr[i], type);
    cropBoxIn8(3, app.activeDocument.width, app.activeDocument.height);

    app.doAction("xoa stroke layer", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    var bounds3 = app.activeDocument.activeLayer.bounds;
    var widthden3 = bounds3[2] - bounds3[0];
    var heightden3 = bounds3[3] - bounds3[1];
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    openFile(FileDesign, arr[i], type);
    cropBoxIn8(1, app.activeDocument.width, app.activeDocument.height);

    app.doAction("xoa stroke layer", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    var bounds1c = app.activeDocument.activeLayer.bounds;
    var widthden1 = bounds1c[2] - bounds1c[0];
    var heightden1 = bounds1c[3] - bounds1c[1];
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    if ((widthden1 > widthden3) || heightden1 > heightden3) {
        widthden = widthden1;
        heightden = heightden1;
    }
    else {
        widthden = widthden3;
        heightden = heightden3;
    }



    { // lop 3
        var lop = 3;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");
        app.activeDocument.activeLayer.name = arr[i].stt;

        if (arr[i].direction == "2")
            app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        else if (arr[i].direction == "1") {
            if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
            else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        }

        var bounds1 = app.activeDocument.activeLayer.bounds;
        var boxW = bounds1[2] - bounds1[0] + 30;
        var boxH = bounds1[3] - bounds1[1] + 30;
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();

            #include "cropDocumentAll.jsx";
            app.activeDocument.saveAs(Folder(folderTool + "/lop duoi- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocument.jsx";
            ban = ban + 1;
            var lop = 3;

            openFile(FileDesign, arr[i], type);
            cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");
            app.activeDocument.activeLayer.name = arr[i].stt;

            var bounds1 = app.activeDocument.activeLayer.bounds;
            var widthden = bounds1[2] - bounds1[0];
            var heightden = bounds1[3] - bounds1[1];
            if (arr[i].direction == "2")
                app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
            else if (arr[i].direction == "1") {
                if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
                else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
            }

            var bounds1 = app.activeDocument.activeLayer.bounds;
            var boxW = bounds1[2] - bounds1[0] + 30;
            var boxH = bounds1[3] - bounds1[1] + 30;

            stt = i;
        }


        #include "caculatorPosition.jsx";
        #include "translateCMYK.jsx";

    }

    {// lop 4
        var lop = 4;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;

        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");

        app.activeDocument.activeLayer.name = arr[i].stt;

        if (arr[i].direction == "2")
            app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        else if (arr[i].direction == "1") {
            if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
            else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        }

        var bounds2 = app.activeDocument.activeLayer.bounds;

        if ((bounds2[2] - bounds2[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
        }
        else app.activeDocument.activeLayer.remove();




        // ávssvsvsv


        if ((i == arr.length - 1) & (lop == 4)) {
            #include "cropDocumentAll.jsx";

            app.activeDocument.saveAs(Folder(folderTool + "/lop duoi- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
        }
    }
}

var stt = 0;
ban = 0;
wAll = 10748;
hAll = 10748;
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
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";


    var widthden = 0;
    var heightden = 0;
    openFile(FileDesign, arr[i], type);
    cropBoxIn8(3, app.activeDocument.width, app.activeDocument.height);

    app.doAction("xoa stroke layer", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    var bounds3 = app.activeDocument.activeLayer.bounds;
    var widthden3 = bounds3[2] - bounds3[0];
    var heightden3 = bounds3[3] - bounds3[1];
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    openFile(FileDesign, arr[i], type);
    cropBoxIn8(1, app.activeDocument.width, app.activeDocument.height);

    app.doAction("xoa stroke layer", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    var bounds1c = app.activeDocument.activeLayer.bounds;
    var widthden1 = bounds1c[2] - bounds1c[0];
    var heightden1 = bounds1c[3] - bounds1c[1];
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    if ((widthden1 > widthden3) || heightden1 > heightden3) {
        widthden = widthden1;
        heightden = heightden1;
    }
    else {
        widthden = widthden3;
        heightden = heightden3;
    }




    { // lop 1
        var lop = 1;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");
        app.activeDocument.activeLayer.name = arr[i].stt;
        if (arr[i].direction == "2")
            app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        else if (arr[i].direction == "1") {
            if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
            else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        }
        var bounds1 = app.activeDocument.activeLayer.bounds;
        var boxW = bounds1[2] - bounds1[0] + 30;
        var boxH = bounds1[3] - bounds1[1] + 30;
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();

            #include "cropDocumentAll.jsx";
            app.activeDocument.saveAs(Folder(folderTool + "/lop tren- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            #include "createDocument.jsx";
            ban = ban + 1;
            var lop = 3;
            openFile(FileDesign, arr[i], type);
            cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");
            app.activeDocument.activeLayer.name = arr[i].stt;
            if (arr[i].direction == "2")
                app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
            else if (arr[i].direction == "1") {
                if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
                else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
            }
            var bounds1 = app.activeDocument.activeLayer.bounds;
            var boxW = bounds1[2] - bounds1[0] + 30;
            var boxH = bounds1[3] - bounds1[1] + 30;
            stt = i;
        }


        #include "caculatorPosition.jsx";
        #include "translateCMYK.jsx";

    }


    { // lop 2
        var lop = 2;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;

        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");
        app.activeDocument.activeLayer.name = arr[i].stt;
        if (arr[i].direction == "2")
            app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        else if (arr[i].direction == "1") {
            if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
            else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        }
        var bounds2 = app.activeDocument.activeLayer.bounds;
        if ((bounds2[2] - bounds2[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
        }
        else app.activeDocument.activeLayer.remove();


    }







    if ((i == arr.length - 1) & (lop == 2)) {
        #include "cropDocumentAll.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/lop tren- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    }
}




function cropBoxIn8(box, widthF, heightF) {
    if (box == 1) app.activeDocument.selection.select([[0, 0], [0, heightF / 4], [widthF, heightF / 4], [widthF, 0]]);
    if (box == 2) app.activeDocument.selection.select([[0, heightF / 4], [0, heightF / 2], [widthF, heightF / 2], [widthF, heightF / 4]]);
    if (box == 3) app.activeDocument.selection.select([[0, heightF / 2], [0, heightF * 3 / 4], [widthF, heightF * 3 / 4], [widthF, heightF / 2]]);
    if (box == 4) app.activeDocument.selection.select([[0, heightF * 3 / 4], [0, heightF], [widthF, heightF], [widthF, heightF * 3 / 4]]);





    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    app.doAction("duplicateSelection", "tool")

}


