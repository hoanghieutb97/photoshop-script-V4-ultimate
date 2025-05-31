{ // tao khung merge all
    app.open(File(folderTool + "/ " + nameSave + "-" + (ban + 1) + ".tif"));
    app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName(Group_Khung);
    app.doAction("merge active group", "tool");
    app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName(Group_In);
    app.doAction("merge active group", "tool");
    app.activeDocument.artLayers.getByName(Group_Khung).name = "khung";
    app.activeDocument.artLayers.getByName(Group_In).name = "inTruoc";


    app.doAction("merge All Width Duplicate", "tool");
    var selectionBounds = app.activeDocument.activeLayer.bounds;
    var padding = 30;
    var newBounds = [selectionBounds[0] - padding, selectionBounds[1] - padding, selectionBounds[2] + padding, selectionBounds[3] + padding];
    app.activeDocument.crop(newBounds);
    app.activeDocument.activeLayer.remove();

    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("khung");
    app.doAction("tao ban khung", "tool");
    app.activeDocument.mergeVisibleLayers();


    app.activeDocument.saveAs(Folder(folderBanInTool + "/khung" + "-b" + (ban + 1) + "-" + nameSave + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}

{ //tao file in
    app.open(File(folderTool + "/ " + nameSave + "-" + (ban + 1) + ".tif"));

    app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName("IN TRUOC");
    app.doAction("merge active group", "tool");



    if (tonTai(Status_delete_redLine)) {
        app.doAction("selection to delete red line", "tool");
        app.doAction("Area expan 1", "tool");
        app.activeDocument.selection.clear();
        app.activeDocument.selection.deselect();
    }

    selectWhitePixels();
   


    app.doAction("tao ban in truoc 2M", "tool");

    app.activeDocument.saveAs(Folder(folderBanInTool + "/in" + "-b" + (ban + 1) + "-" + nameSave + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}