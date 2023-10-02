if (xoay == undefined) var xoay = 1;
if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
var layerWidth = app.activeDocument.width;
var layerHeight = app.activeDocument.height;
app.activeDocument.selection.select([[0, 0], [0, layerHeight / 2], [layerWidth, layerHeight / 2], [layerWidth, 0]]);
app.doAction("dup selection file black", "tool");
app.activeDocument.activeLayer.name = arr[i].stt;
if (xoay != 0)
    activeDocument.activeLayer.resize(-100, undefined); //will flip layer horizontally
app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.activeLayer.remove();
app.activeDocument.selection.select([[0, layerHeight / 2], [0, layerHeight], [layerWidth, layerHeight], [layerWidth, layerHeight / 2]])
app.doAction("dup selection file black", "tool");
app.activeDocument.activeLayer.name = arr[i].stt;
if (xoay != 0)
    activeDocument.activeLayer.resize(-100, undefined); //will flip layer horizontally
app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.activeLayer.remove();
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
app.doAction("moveZero", "tool");
app.doAction("xoa stroke layer", "tool");

app.activeDocument.activeLayer.name = arr[i].stt;
var bounds1 = app.activeDocument.activeLayer.bounds;
var widthden = bounds1[2] - bounds1[0];
var heightden = bounds1[3] - bounds1[1];
if (arr[i].direction == "2")
    app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
else if (arr[i].direction == "1") {
    if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
    else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
}

var bounds1 = app.activeDocument.activeLayer.bounds;
app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
app.doAction("moveZero", "tool");
app.doAction("xoa stroke layer", "tool");
app.activeDocument.activeLayer.name = arr[i].stt;
if (arr[i].direction == "2")
    app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
else if (arr[i].direction == "1") {
    if (widthden > heightden) app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / widthden, AnchorPosition.MIDDLECENTER);
    else app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
}
var bounds2 = app.activeDocument.activeLayer.bounds;
var boxW = bounds1[2] - bounds1[0] + 30;
var boxH = bounds1[3] - bounds1[1] + 30;
