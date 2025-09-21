
app.doAction("crop document normal", "tool");
app.activeDocument.activeLayer = app.activeDocument.artLayers["CMYK copy"];
var selectionBounds = app.activeDocument.activeLayer.bounds;
var padding = 30;
var newBounds = [
    selectionBounds[0] - padding,
    selectionBounds[1] - padding,
    selectionBounds[2] + padding,
    selectionBounds[3] + padding
];
app.activeDocument.crop(newBounds);
app.activeDocument.artLayers["CMYK copy"].remove();
if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);