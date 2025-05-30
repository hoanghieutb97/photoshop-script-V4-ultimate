
var selectionBoundsss = app.activeDocument.activeLayer.bounds;
var padding = 30;
var newBoundsCanvas = [
    selectionBoundsss[0] - padding,
    selectionBoundsss[1] - padding,
    selectionBoundsss[2] + padding,
    selectionBoundsss[3] + padding
];
app.activeDocument.crop(newBoundsCanvas);