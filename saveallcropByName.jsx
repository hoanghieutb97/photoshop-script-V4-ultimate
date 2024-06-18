
app.doAction("crop document all", "tool");

var selectionBounds = app.activeDocument.activeLayer.bounds;
var padding = 30;
var newBounds = [
    selectionBounds[0] - padding,
    selectionBounds[1] - padding,
    selectionBounds[2] + padding,
    selectionBounds[3] + padding
];
app.activeDocument.crop(newBounds);
app.activeDocument.activeLayer.remove();
if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

app.activeDocument.saveAs(Folder(folderTool + "/ " + nameSave + "-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); 