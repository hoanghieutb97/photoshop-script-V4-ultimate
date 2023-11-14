
if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);

var layerWidth = app.activeDocument.width;
var layerHeight = app.activeDocument.height;
app.activeDocument.resizeImage(UnitValue(layerWidth, "px"), UnitValue(layerHeight, "px"), 300, ResampleMethod.BICUBIC);

if (lop == 0) {
    app.activeDocument.selection.select([[0, 0], [0, layerHeight / 2], [layerWidth, layerHeight / 2], [layerWidth, 0]]);
    app.doAction("duplicateSelection", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
}
else if (lop == 1) {
    app.activeDocument.selection.select([[0, layerHeight / 2], [0, layerHeight], [layerWidth, layerHeight], [layerWidth, layerHeight / 2]])
    app.doAction("duplicateSelection", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
}

app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
var bounds1 = app.activeDocument.activeLayer.bounds;
if (lop == 0) {
    widthden = bounds1[2] - bounds1[0];
    heightden = bounds1[3] - bounds1[1];
}
if (arr[i].direction == "2")
    app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
else if (arr[i].direction == "1") {
    if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
    else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
}
var bounds2 = app.activeDocument.activeLayer.bounds;
var widthden2 = bounds2[2] - bounds2[0];
var heightden2 = bounds2[3] - bounds2[1];
var xoay = false;
if (widthden > heightden) {
    xoay = true; app.activeDocument.activeLayer.rotate(90);
    boxW = heightden2 + 30;
    boxH = widthden2 + 30;
}
else {
    boxW = widthden2 + 30;
    boxH = heightden2 + 30;
}
