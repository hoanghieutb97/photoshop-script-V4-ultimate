
app.activeDocument.artLayers.getByName("Background").remove()


var groups = app.activeDocument.layerSets;

for (var t = 0; t < groups.length; t++) {
    selectGroup(groups[t].name, t > 0);
}

app.doAction("cropDOcumentAllNew", "tool");

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

app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + "-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES); 
function selectGroup(name, add) {
    var desc = new ActionDescriptor();
    var ref = new ActionReference();
    ref.putName(charIDToTypeID("Lyr "), name);
    desc.putReference(charIDToTypeID("null"), ref);
    if (add) desc.putEnumerated(stringIDToTypeID("selectionModifier"), stringIDToTypeID("selectionModifierType"), stringIDToTypeID("addToSelection"));
    desc.putBoolean(charIDToTypeID("MkVs"), false);
    executeAction(charIDToTypeID("slct"), desc, DialogModes.NO);
}
