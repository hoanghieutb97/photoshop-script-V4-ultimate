
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
if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);