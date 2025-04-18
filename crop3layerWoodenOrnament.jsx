
var layerWidth = app.activeDocument.width;
var layerHeight = app.activeDocument.height;
app.activeDocument.resizeImage(UnitValue(layerWidth, "px"), UnitValue(layerHeight, "px"), 300, ResampleMethod.BICUBIC);

if (lop == 0) {
    app.activeDocument.selection.select([[0, 0], [0, layerHeight / 3], [layerWidth, layerHeight / 3], [layerWidth, 0]]);
    app.doAction("duplicateSelection", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    // activeDocument.activeLayer.resize(-100, undefined); //will flip layer horizontally
    
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
}
else if (lop == 1) {
    app.activeDocument.selection.select([[0, layerHeight / 3], [0, 2 * layerHeight / 3], [layerWidth, 2 * layerHeight / 3], [layerWidth, layerHeight / 3]])
    app.doAction("duplicateSelection", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    // activeDocument.activeLayer.resize(-100, undefined); //will flip layer horizontally
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
}
else if (lop == 2) {
    app.activeDocument.selection.select([[0, 2 * layerHeight / 3], [0, layerHeight], [layerWidth, layerHeight], [layerWidth, 2 * layerHeight / 3]])
    app.doAction("duplicateSelection", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    // activeDocument.activeLayer.resize(-100, undefined); //will flip layer horizontally
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
}


app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
var bounds1 = app.activeDocument.activeLayer.bounds;

app.activeDocument.activeLayer.resize(wphone * 100 / maxDimension, hphone * 100 / maxDimension, AnchorPosition.MIDDLECENTER);



var bounds2 = app.activeDocument.activeLayer.bounds;
var widthden2 = bounds2[2] - bounds2[0];
var heightden2 = bounds2[3] - bounds2[1];
var xoay = false;
if (widthden2 > heightden2) {
    xoay = true; app.activeDocument.activeLayer.rotate(90);
    boxW = heightden2 + 30;
    boxH = widthden2 + 30;
}
else {
    boxW = widthden2 + 30;
    boxH = heightden2 + 30;
}
