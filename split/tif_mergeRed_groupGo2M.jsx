

var khoangCachBan = 12 / 0.084667;
////////////////////////////////////////////////////////////////// tao ban in truoc

for (var k = 0; k <= ban; k++) {
    { // tao ban in truoc

        var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
        var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
        var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in
        {// xu ly file !!!!!!!!!!!!!!!!!!!
            app.open(File(folderTool + "/ " + nameSave + "-" + (k + 1) + ".tif"));
            var doc_Open = app.activeDocument;
            doc_Open.layerSets.getByName(Group_Delete1).remove();
            doc_Open.layerSets.getByName(Group_Delete2).remove();
            doc_Open.activeLayer = doc_Open.layerSets.getByName(grop_Merge);
            app.doAction("merge active group", "tool");
            app.doAction("stroke red 3px inside", "tool");
            doc_Open.activeLayer.name = "layerGoc";

        }




        #include "../scontainer/deleteRedLineIn.jsx";
        selectWhitePixels();


    }


    app.doAction("tao spot 1", "tool");
    #include "../split/canvasSizeExpan.jsx";


    if (!kenhSpot1) app.doAction("delete Spot 1", "tool");
    app.activeDocument.saveAs(Folder(folderBanInTool + "/in Truoc-b" + (k + 1) + "-" + nameSave + "-" + Math.ceil(doc_Open.width.as("px") * 0.084667 / 10) + "x" + Math.ceil(doc_Open.height.as("px") * 0.084667 / 10) + "cm" + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

{ // tao ban in sau
    {// xu ly file !!!!!!!!!!!!!!!!!!!

        var grop_Merge = "IN SAU"; // merge 1 mặt- bàn in
        var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
        var Group_Delete2 = "IN TRUOC";// merge 1 mặt- bàn in
        app.open(File(folderTool + "/ " + nameSave + "-" + (k + 1) + ".tif"));
        var doc_Open = app.activeDocument;
        doc_Open.layerSets.getByName(Group_Delete1).remove();
        doc_Open.layerSets.getByName(Group_Delete2).remove();
        doc_Open.activeLayer = doc_Open.layerSets.getByName(grop_Merge);
        app.doAction("merge active group", "tool");
        app.doAction("stroke red 3px inside", "tool");
        doc_Open.activeLayer.name = "layerGoc";

    }


    #include "../scontainer/deleteRedLineIn.jsx";
    selectWhitePixels();



    app.doAction("tao spot 1", "tool");
    app.doAction("canvasHoriz", "tool");
    #include "../split/canvasSizeExpan.jsx";
    if (!kenhSpot1) app.doAction("delete Spot 1", "tool");
    app.activeDocument.saveAs(Folder(folderBanInTool + "/in Sau-b" + (k + 1) + "-" + nameSave + "-" + Math.ceil(doc_Open.width.as("px") * 0.084667 / 10) + "x" + Math.ceil(doc_Open.height.as("px") * 0.084667 / 10) + "cm" + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

{ // tao khung 2m
    {// xu ly file !!!!!!!!!!!!!!!!!!!

        app.open(File(folderTool + "/ " + nameSave + "-" + (k + 1) + ".tif"));
        var doc_Open = app.activeDocument;
        doc_Open.artLayers.add();
        doc_Open.layerSets.getByName("KHUNG").remove();
        doc_Open.layerSets.getByName("IN TRUOC").remove();
        doc_Open.layerSets.getByName("IN SAU").remove();

        app.doAction("stroke red 3px inside", "tool");
        doc_Open.activeLayer.name = "layerGoc";

    }


    app.doAction("tao spot 1", "tool");
    #include "../split/canvasSizeExpan.jsx";
    if (!kenhSpot1) app.doAction("delete Spot 1", "tool");
    app.activeDocument.saveAs(Folder(folderBanInTool + "/Khung 2M-b" + (k + 1) + "-" + nameSave + "-" + Math.ceil(doc_Open.width.as("px") * 0.084667 / 10) + "x" + Math.ceil(doc_Open.height.as("px") * 0.084667 / 10) + "cm" + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}





// ////////////////////////////////////////////////////////////////// tao ban in sau
// #include "../split/taoBanGopMicaTo.jsx";
// kenhSpot1 = false;
// var grop_Merge = "IN SAU"; // merge 1 mặt- bàn in
// var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
// var Group_Delete2 = "IN TRUOC";// merge 1 mặt- bàn in
// for (var k = 0; k <= ban; k++) {

//     {// xu ly file !!!!!!!!!!!!!!!!!!!
//         app.open(File(folderTool + "/ " + nameSave + "-" + (k + 1) + ".tif"));
//         var doc_Open = app.activeDocument;
//         doc_Open.layerSets.getByName(Group_Delete1).remove();
//         doc_Open.layerSets.getByName(Group_Delete2).remove();
//         doc_Open.activeLayer = doc_Open.layerSets.getByName(grop_Merge);
//         app.doAction("merge active group", "tool");
//         app.doAction("stroke red 3px inside", "tool");
//         doc_Open.activeLayer.name = k + 1;
//         doc_Open.rotateCanvas(90);
//         var w_them_P = doc_Open.width.as("px");
//     }

//     if ((active_W - k_position - w_them_P) < 0) {
//         doc_Open.close(SaveOptions.DONOTSAVECHANGES);
//         { // luu file !!!!
//             actice_DOC.artLayers.getByName("Background").remove();
//             if (actice_DOC.layers.length > 1) actice_DOC.mergeVisibleLayers();
//             var PS_CROP = app.activeDocument.activeLayer.bounds;
//             app.activeDocument.crop(PS_CROP, 0, PS_CROP[2] - PS_CROP[0], PS_CROP[3] - PS_CROP[1]);
//             actice_DOC.activeLayer.name = "layerGoc";
//             selectWhitePixels();
//             app.doAction("select same color", "tool");
//             app.doAction("tao spot 1", "tool")
//             if (!kenhSpot1) app.doAction("delete Spot 1", "tool");
//             app.activeDocument.saveAs(Folder(folderBanInTool + "/in Sau-b" + "-" + ten_Ban + "-" + nameSave + "-" + Math.ceil(actice_DOC.width.as("px") * 0.084667 / 10) + "x" + Math.ceil(actice_DOC.height.as("px") * 0.084667 / 10) + "cm" + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
//             app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
//         }

//         /////////////////////////////////////////////////////////////////
//         ten_Ban = "";
//         app.documents.add(active_W, active_H, 300, "GLLM", NewDocumentMode.CMYK);
//         actice_DOC = app.activeDocument;
//         k_position = 0;

//         {// xu ly file !!!!!!!!!!!!!!!!!!!
//             app.open(File(folderTool + "/ " + nameSave + "-" + (k + 1) + ".tif"));
//             var doc_Open = app.activeDocument;
//             doc_Open.layerSets.getByName(Group_Delete1).remove();
//             doc_Open.layerSets.getByName(Group_Delete2).remove();
//             doc_Open.activeLayer = doc_Open.layerSets.getByName(grop_Merge);
//             app.doAction("merge active group", "tool");
//             app.doAction("stroke red 3px inside", "tool");
//             doc_Open.activeLayer.name = k + 1;
//             doc_Open.rotateCanvas(90);
//             var w_them_P = doc_Open.width.as("px");
//         }

//     }

//     doc_Open.activeLayer.duplicate(actice_DOC, ElementPlacement.PLACEATBEGINNING);
//     doc_Open.close(SaveOptions.DONOTSAVECHANGES);

//     actice_DOC.activeLayer = actice_DOC.artLayers.getByName(k + 1);
//     app.doAction("moveZero", "tool");
//     actice_DOC.activeLayer.translate((k_position), 0);
//     k_position = k_position + khoangCachBan + w_them_P;
//     ten_Ban = ten_Ban + " " + (k + 1)

//     if (k == ban) {
//         // xu ly luu
//         { // luu file !!!!
//             actice_DOC.artLayers.getByName("Background").remove();
//             if (actice_DOC.layers.length > 1) actice_DOC.mergeVisibleLayers();
//             var PS_CROP = app.activeDocument.activeLayer.bounds;
//             app.activeDocument.crop(PS_CROP, 0, PS_CROP[2] - PS_CROP[0], PS_CROP[3] - PS_CROP[1]);
//             actice_DOC.activeLayer.name = "layerGoc";

//             selectWhitePixels();
//             app.doAction("select same color", "tool");

//             app.doAction("tao spot 1", "tool");
//             if (!kenhSpot1) app.doAction("delete Spot 1", "tool");
//             app.activeDocument.saveAs(Folder(folderBanInTool + "/in Sau-b" + "-" + ten_Ban + "-" + nameSave + "-" + Math.ceil(actice_DOC.width.as("px") * 0.084667 / 10) + "x" + Math.ceil(actice_DOC.height.as("px") * 0.084667 / 10) + "cm" + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
//             app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
//         }

//     }

// }

