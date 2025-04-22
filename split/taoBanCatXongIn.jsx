var folderBanInTool = Folder(folderContainer + "/ban in-tool");
if (!folderBanInTool.exists) { folderBanInTool.create(); }

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
app.activeDocument.saveAs(Folder(folderBanInTool + "/khung" + "-" + (ban + 1) + "-" + nameSave + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);

app.activeDocument.artLayers.getByName("trang").remove();
app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("inTruoc");
selectWhitePixels();
app.doAction("select same color", "tool");

app.doAction("tao ban in truoc", "tool");
if (!kenhSpot1) app.doAction("delete Spot 1", "tool");
app.activeDocument.saveAs(Folder(folderBanInTool + "/in " + "-" + (ban + 1) + "-" + nameSave + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
