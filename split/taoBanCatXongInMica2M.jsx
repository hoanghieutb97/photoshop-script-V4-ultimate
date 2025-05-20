var folderBanInTool = Folder(folderContainer + "/ban in-tool");
if (!folderBanInTool.exists) { folderBanInTool.create(); }

//////////////////////////////////////////////////////////////////////////// tao khung
app.open(File(folderTool + "/ " + nameSave + "-" + (ban + 1) + ".tif"));

app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName("KHUNG");
app.doAction("merge active group", "tool");
app.activeDocument.artLayers.getByName("KHUNG").name = "khung";
app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("khung");
app.doAction("tao ban khung", "tool");
app.activeDocument.mergeVisibleLayers();

app.activeDocument.saveAs(Folder(folderBanInTool + "/khung" + "-" + (ban + 1) + "-" + nameSave + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

//////////////////////////////////////////////////////////

app.open(File(folderTool + "/ " + nameSave + "-" + (ban + 1) + ".tif"));
app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName("IN TRUOC");
app.doAction("merge active group", "tool");
selectWhitePixels();

app.doAction("similar same color ", "tool");

app.doAction("tao ban in truoc 2M", "tool");
app.activeDocument.saveAs(Folder(folderBanInTool + "/in truoc" + "-" + (ban + 1) + "-" + nameSave + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


//////////////////////////////////////////////////////////

app.open(File(folderTool + "/ " + nameSave + "-" + (ban + 1) + ".tif"));
app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName("IN SAU");
app.doAction("merge active group", "tool");

app.doAction("tao ban in sau 2M", "tool");
app.activeDocument.saveAs(Folder(folderBanInTool + "/in sau" + "-" + (ban + 1) + "-" + nameSave + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);