
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {

    #include "convertPixel.jsx";

    openFile(FileDesign, arr[i], type);
    if (arr[i].nameId.split("-").pop() == "7,87")
        app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height - 901]);
    else if (arr[i].nameId.split("-").pop() == "5,9") {
        app.doAction("pinenho", "tool");
        var bounds3 = app.activeDocument.activeLayer.bounds;
        app.doAction("pinenho2", "tool");

        app.activeDocument.activeLayer.translate(0, -(1472 - bounds3[3] + 98));

        app.doAction("taotrangpine", "tool");


        app.activeDocument.selection.select([[0, 609], [0, 698], [1782, 698], [1782, 609]]);


        var arrHisto = app.activeDocument.histogram;
        var histo2 = tonghistogram(arrHisto);
        app.doAction("xoatrangpine", "tool");
        if (histo2 > 5) {
            app.activeDocument.selection.select([[0, 609], [0, 698], [1782, 698], [1782, 609]]);

            app.doAction("duplicateSelection", "tool")

            var acboud = app.activeDocument.activeLayer.bounds;
            app.activeDocument.activeLayer.resize(100, (acboud[3] - acboud[1]) * 133.333 / 89, AnchorPosition.TOPCENTER);

            // app.doAction("pinenho3", "tool");
        }
        app.activeDocument.selection.deselect();
        app.activeDocument.mergeVisibleLayers();





        app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height - 555]);
        
        app.activeDocument.resizeCanvas(app.activeDocument.width, app.activeDocument.height + 16, AnchorPosition.BOTTOMCENTER);


        // app.activeDocument.resizeCanvas(app.activeDocument.width, app.activeDocument.height + 61, AnchorPosition.TOPCENTER);

    }

    #include "cropBlackCut-1Size.jsx";

    #include "xoaExpand12px.jsx";
    var bounds1 = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).bounds;

    var boxW = bounds2[2] - bounds2[0] + 30;
    var boxH = bounds2[3] - bounds2[1] + 30;

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        // #include "xoaExpand12px.jsx";

        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openFile(FileDesign, arr[i], type);
        if (arr[i].nameId.split("-").pop() == "7,87")
            app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height - 901]);
        else if (arr[i].nameId.split("-").pop() == "5,9") {
            app.doAction("pinenho", "tool");
            var bounds3 = app.activeDocument.activeLayer.bounds;
            app.doAction("pinenho2", "tool");

            app.activeDocument.activeLayer.translate(0, -(1472 - bounds3[3] + 98));

            app.doAction("taotrangpine", "tool");


            app.activeDocument.selection.select([[0, 609], [0, 698], [1782, 698], [1782, 609]]);


            var arrHisto = app.activeDocument.histogram;
            var histo2 = tonghistogram(arrHisto);
            app.doAction("xoatrangpine", "tool");
            if (histo2 > 5) {
                app.activeDocument.selection.select([[0, 609], [0, 698], [1782, 698], [1782, 609]]);

                app.doAction("duplicateSelection", "tool")

                var acboud = app.activeDocument.activeLayer.bounds;
                app.activeDocument.activeLayer.resize(100, (acboud[3] - acboud[1]) * 133.333 / 89, AnchorPosition.TOPCENTER);

                // app.doAction("pinenho3", "tool");
            }
            app.activeDocument.selection.deselect();
            app.activeDocument.mergeVisibleLayers();





            app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height - 555]);
            app.activeDocument.resizeCanvas(app.activeDocument.width, app.activeDocument.height + 16, AnchorPosition.BOTTOMCENTER);


        }

        #include "cropBlackCut-1Size.jsx";

        #include "xoaExpand12px.jsx";
        var bounds1 = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).bounds;
        var boxW = bounds2[2] - bounds2[0] + 30;
        var boxH = bounds2[3] - bounds2[1] + 30;
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateKHUNG.jsx";
    { // translate khung
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition + bounds1[0] - bounds2[0]), (yPosition + bounds2[3] - bounds1[3]) * (-1));
    }

    if (i == arr.length - 1) {
        #include "saveallcrop.jsx";

        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }



}
///////////////////////////////////////////////////////////////////////////////////////////////////////

hAll = 2480; wAll = 14409;
#include "createDocument.jsx";
stt = 0;
ban = 0
for (var i = stt; i <= arr.length - 1; i++) {

    #include "convertPixel.jsx";

    openFile(FileDesign, arr[i], type);
    if (arr[i].nameId.split("-").pop() == "7,87")
        app.activeDocument.crop([0, 901, 2376, 1802]);
    else if (arr[i].nameId.split("-").pop() == "5,9") {
        app.doAction("pinenho", "tool");
        app.doAction("pinenho2", "tool");
        app.activeDocument.activeLayer.translate(0, -(1472 - bounds3[3] + 98));




        app.activeDocument.selection.select([[0, 587], [0, 706], [1782, 706], [1782, 587]]);
        var arrHisto = app.activeDocument.histogram;
        var histo2 = tonghistogram(arrHisto);
        if (histo2 > 5) app.doAction("pinenho3", "tool");
        app.activeDocument.selection.deselect();
        app.activeDocument.mergeVisibleLayers();

        ; app.activeDocument.crop([0, 765, 1782, 1472]);
    }

    app.activeDocument.selection.select([[0, 0], [0, app.activeDocument.height], [app.activeDocument.width, app.activeDocument.height], [app.activeDocument.width, 0]]);
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.artLayers[1].remove();
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);

    #include "cropAndResize-autoFill.jsx";

    boxW = app.activeDocument.width + 20;
    boxH = app.activeDocument.height + 20;

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        // #include "xoaExpand12px.jsx";
        #include "cropDocument.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/cat " + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        hAll = 2480; wAll = 14409;

        #include "createDocument.jsx";
        openFile(FileDesign, arr[i], type);
        if (arr[i].nameId.split("-").pop() == "7,87")
            app.activeDocument.crop([0, 901, 2376, 1802]);
        else if (arr[i].nameId.split("-").pop() == "5,9") {
            app.doAction("pinenho", "tool");
            app.doAction("pinenho2", "tool");
            app.activeDocument.activeLayer.translate(0, -(1472 - bounds3[3] + 98));




            app.activeDocument.selection.select([[0, 587], [0, 706], [1782, 706], [1782, 587]]);
            var arrHisto = app.activeDocument.histogram;
            var histo2 = tonghistogram(arrHisto);
            if (histo2 > 5) app.doAction("pinenho3", "tool");
            app.activeDocument.selection.deselect();
            app.activeDocument.mergeVisibleLayers();
            app.activeDocument.crop([0, 765, 1782, 1472]);
        }
        app.activeDocument.selection.select([[0, 0], [0, app.activeDocument.height], [app.activeDocument.width, app.activeDocument.height], [app.activeDocument.width, 0]]);
        app.doAction("duplicateSelection", "tool")
        app.activeDocument.artLayers[1].remove();
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);

        #include "cropAndResize-autoFill.jsx";

        boxW = app.activeDocument.width + 20;
        boxH = app.activeDocument.height + 20;

        ban = ban + 1;
        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";

    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        #include "cropDocument.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/cat " + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);

        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }



}

///////////////////////////////////////////////////////////////////////////////////////////////////////



hAll = 14173; wAll = 28346;
#include "createDocument.jsx";
ban = 0;
stt = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    var nho = false


    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    // if (app.activeDocument.width < 2400) nho = true
    if (arr[i].nameId.split("-").pop() == "7,87")
        app.activeDocument.crop([0, app.activeDocument.height - 710, app.activeDocument.width, app.activeDocument.height]);
    else if (arr[i].nameId.split("-").pop() == "5,9")
        app.activeDocument.crop([0, app.activeDocument.height - 610, app.activeDocument.width, app.activeDocument.height]);

    app.doAction("strokeRed1px", "tool");
    #include "cropAndResize-autoFill.jsx";
    boxW = app.activeDocument.width + 700;
    boxH = app.activeDocument.height + 300;

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "cropDocument.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/chan " + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        hAll = 14173; wAll = 28346;
        #include "createDocument.jsx";
        ban = ban + 1;
        stt = i;
        openFile(FileDesign, arr[i], type);
        if (arr[i].nameId.split("-").pop() == "7,87")
            app.activeDocument.crop([0, app.activeDocument.height - 710, app.activeDocument.width, app.activeDocument.height]);
        else if (arr[i].nameId.split("-").pop() == "5,9")
            app.activeDocument.crop([0, app.activeDocument.height - 610, app.activeDocument.width, app.activeDocument.height]);


        app.doAction("strokeRed1px", "tool");
        #include "cropAndResize-autoFill.jsx";
        boxW = app.activeDocument.width + 700;
        boxH = app.activeDocument.height + 300;
        stt = i;

    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    #include "translateCMYK.jsx";
    {// tao khung su
        if (arr[i].nameId.split("-").pop() == "7,87")
            app.open(File("//192.168.1.240/ps script data/chan custom acrylic name night light pine.png"));
        else if (arr[i].nameId.split("-").pop() == "5,9")
            app.open(File("//192.168.1.240/ps script data/chan custom acrylic name night light pine nho.png"));



        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

    }
    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        #include "cropDocument.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/chan " + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    }



}

function tonghistogram(histo) {
    var sum = 0;
    for (var i = 0; i < 140; i++) {
        sum += histo[i];
    }
    return sum
}