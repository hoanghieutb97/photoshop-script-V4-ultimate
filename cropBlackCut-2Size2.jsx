




var layerWidth = app.activeDocument.width;
var layerHeight = app.activeDocument.height;
app.activeDocument.selection.select([[0, 0], [0, Math.round(layerHeight / 3)], [layerWidth, Math.round(layerHeight / 3)], [layerWidth, 0]]);
app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
app.doAction("duplicateSelection", "tool")
app.activeDocument.activeLayer.name = arr[i].stt;
if (xoay) app.activeDocument.activeLayer.rotate(90);
if (sanpham == "mica") activeDocument.activeLayer.resize(-100, undefined); //will flip layer horizontally


app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.activeLayer.remove();



app.activeDocument.selection.select([[0, Math.round(layerHeight / 3)], [0, 2 * Math.round(layerHeight / 3)], [layerWidth, 2 * Math.round(layerHeight / 3)], [layerWidth, Math.round(layerHeight / 3)]])
app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
app.doAction("duplicateSelection", "tool")
app.activeDocument.activeLayer.name = arr[i].stt;
if (xoay) app.activeDocument.activeLayer.rotate(90);
if (sanpham == "mica") activeDocument.activeLayer.resize(-100, undefined); //will flip layer horizontally


app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.activeLayer.remove();

app.activeDocument.selection.select([[0, 2 * Math.round(layerHeight / 3)], [0, layerHeight], [layerWidth, layerHeight], [layerWidth, 2 * Math.round(layerHeight / 3)]])
app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
app.doAction("duplicateSelection", "tool")
app.activeDocument.activeLayer.name = arr[i].stt;
if (xoay) app.activeDocument.activeLayer.rotate(90);
if (sanpham == "go") activeDocument.activeLayer.resize(-100, undefined); //will flip layer horizontally


app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN SAU"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.activeLayer.remove();


app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);



app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
app.doAction("moveZero", "tool");
app.doAction("xoa stroke layer", "tool");
app.activeDocument.activeLayer.name = arr[i].stt;
var bounds1 = app.activeDocument.activeLayer.bounds;

if (arr[i].direction == "2")
    app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
else if (arr[i].direction == "1")
    app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);


boundsxxx = app.activeDocument.activeLayer.bounds;
boxW = boundsxxx[2] - boundsxxx[0] + 30;
boxH = boundsxxx[3] - boundsxxx[1] + 30;


app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
app.doAction("moveZero", "tool");
app.doAction("xoa stroke layer", "tool");

app.activeDocument.activeLayer.name = arr[i].stt;
var bounds2 = app.activeDocument.activeLayer.bounds;
if ((bounds2[2] - bounds2[0]) != 0)
    if (arr[i].direction == "2")
        app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
    else if (arr[i].direction == "1")
        app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);



app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
app.doAction("moveZero", "tool");
app.doAction("xoa stroke layer", "tool");

app.activeDocument.activeLayer.name = arr[i].stt;
var bounds3 = app.activeDocument.activeLayer.bounds;
if ((bounds3[2] - bounds3[0]) != 0)
    if (arr[i].direction == "2")
        app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
    else if (arr[i].direction == "1")
        app.activeDocument.activeLayer.resize(wphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);


