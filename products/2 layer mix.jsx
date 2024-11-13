#include "createDocumentMica.jsx";
typeTem = "mica3mm";
nameSave = "mica3mm";
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

    var bounds1 = [];

    { // lop 3
        var lop = 3;
        openFile(FileDesign, arr[i], type);
        // app.doAction("canvasHoriz", "tool");
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");
        bounds1 = app.activeDocument.activeLayer.bounds;

        app.activeDocument.activeLayer.name = arr[i].stt;

        if (arr[i].direction == "2")
            app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        else if (arr[i].direction == "1") {
            if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
            else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        }

        var boundsxxx = app.activeDocument.activeLayer.bounds;
        var boxW = boundsxxx[2] - boundsxxx[0] + 30;
        var boxH = boundsxxx[3] - boundsxxx[1] + 30;
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();

            #include "saveallcropByName.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentMica.jsx";

            ban = ban + 1;
            var lop = 3;

            openFile(FileDesign, arr[i], type);
            // app.doAction("canvasHoriz", "tool");
            cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");
            app.activeDocument.activeLayer.name = arr[i].stt;

            boundsxxx = app.activeDocument.activeLayer.bounds;
            var widthden = boundsxxx[2] - boundsxxx[0];
            var heightden = boundsxxx[3] - boundsxxx[1];
            if (arr[i].direction == "2")
                app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
            else if (arr[i].direction == "1") {
                if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
                else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
            }

            boundsxxx = app.activeDocument.activeLayer.bounds;
            var boxW = boundsxxx[2] - boundsxxx[0] + 30;
            var boxH = boundsxxx[3] - boundsxxx[1] + 30;

            stt = i;
        }


        #include "caculatorPosition.jsx";
        #include "translateCMYK.jsx";

    }

    {// lop 4
        var lop = 4;
        openFile(FileDesign, arr[i], type);
        // app.doAction("canvasHoriz", "tool");
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;

        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");

        var bounds2 = app.activeDocument.activeLayer.bounds;
        app.activeDocument.activeLayer.name = arr[i].stt;

        if (arr[i].direction == "2")
            app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        else if (arr[i].direction == "1") {
            if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
            else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
        }


        if ((bounds2[2] - bounds2[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            if (widthden > heightden)
                app.activeDocument.activeLayer.translate(((xPosition + (wphone / widthden) * (bounds2[0] - bounds1[0]))), ((yPosition + (wphone / widthden) * (bounds1[3] - bounds2[3]))) * (-1));
            else
                app.activeDocument.activeLayer.translate(((xPosition + (wphone / heightden) * (bounds2[0] - bounds1[0]))), ((yPosition + (wphone / heightden) * (bounds1[3] - bounds2[3]))) * (-1));

        }
        else app.activeDocument.activeLayer.remove();

        // vsvsd


        // ávssvsvsv


        if ((i == arr.length - 1) & (lop == 4)) {
            
            #include "saveallcropByName.jsx";


            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
        }
    }
}

var stt = 0;
ban = 0;
#include "createDocumentWooden.jsx";

for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    typeTem = "go3mm";
    nameSave = "go3mm";

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
            #include "saveallcropByName.jsx";


            #include "createDocumentWooden.jsx";

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
        #include "saveallcropByName.jsx";


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


