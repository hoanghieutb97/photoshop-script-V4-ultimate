

var khoangCachBan = 12 / 0.084667;
////////////////////////////////////////////////////////////////// tao ban in truoc

for (var k = 0; k <= ban; k++) {
    { // tao ban in truoc

        var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
        var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
        var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in
        {// xu ly file !!!!!!!!!!!!!!!!!!!
            app.open(File(folderTool + "/" + nameSave + "-" + (k + 1) + ".tif"));
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
    app.activeDocument.saveAs(Folder(folderBanInTool + "/in Truoc-b" + (k + 1) + "-" + nameSave + "-" + Math.ceil(doc_Open.width.as("px") * 0.084667 / 10) + "x" + Math.ceil(doc_Open.height.as("px") * 0.084667 / 10) + "cm" + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


    { // tao ban in sau
        {// xu ly file !!!!!!!!!!!!!!!!!!!

            var grop_Merge = "IN SAU"; // merge 1 mặt- bàn in
            var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
            var Group_Delete2 = "IN TRUOC";// merge 1 mặt- bàn in
            
            app.open(File(folderTool + "/" + nameSave + "-" + (k + 1) + ".tif"));
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
        app.activeDocument.saveAs(Folder(folderBanInTool + "/in Sau-b" + (k + 1) + "-" + nameSave + "-" + Math.ceil(doc_Open.width.as("px") * 0.084667 / 10) + "x" + Math.ceil(doc_Open.height.as("px") * 0.084667 / 10) + "cm" + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }

    { // tao khung 2m
        {// xu ly file !!!!!!!!!!!!!!!!!!!

            app.open(File(folderTool + "/" + nameSave + "-" + (k + 1) + ".tif"));
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
        app.activeDocument.saveAs(Folder(folderBanInTool + "/Khung 2M-b" + (k + 1) + "-" + nameSave + "-" + Math.ceil(doc_Open.width.as("px") * 0.084667 / 10) + "x" + Math.ceil(doc_Open.height.as("px") * 0.084667 / 10) + "cm" + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }



}