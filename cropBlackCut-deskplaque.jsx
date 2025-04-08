




var layerWidth = app.activeDocument.width;
var layerHeight = app.activeDocument.height;
app.activeDocument.selection.select([[0, 0], [0, Math.round(layerHeight / 2)], [layerWidth, Math.round(layerHeight / 2)], [layerWidth, 0]]);
app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
app.doAction("duplicateSelection", "tool")
app.activeDocument.activeLayer.name = arr[i].stt;
if (xoay) app.activeDocument.activeLayer.rotate(90);
if (sanpham == "mica") activeDocument.activeLayer.resize(-100, undefined); //will flip layer horizontally


app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.activeLayer.remove();



app.activeDocument.selection.select([[0, Math.round(layerHeight / 2)], [0, layerHeight], [layerWidth, layerHeight], [layerWidth, Math.round(layerHeight / 2)]])
app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
app.doAction("duplicateSelection", "tool")
app.activeDocument.activeLayer.name = arr[i].stt;
if (xoay) app.activeDocument.activeLayer.rotate(90);
if (sanpham == "mica") activeDocument.activeLayer.resize(-100, undefined); //will flip layer horizontally


app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.activeLayer.remove();

app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);



app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
app.doAction("moveZero", "tool");
app.doAction("xoa stroke layer", "tool");
app.activeDocument.activeLayer.name = arr[i].stt;
bounds1 = app.activeDocument.activeLayer.bounds;

app.activeDocument.activeLayer.resize(wphone * 100 / widthden, wphone * 100 / widthden, AnchorPosition.MIDDLECENTER);


boundsxxx = app.activeDocument.activeLayer.bounds;
boxW = boundsxxx[2] - boundsxxx[0] + 30;
boxH = boundsxxx[3] - boundsxxx[1] + 30;


app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
app.doAction("moveZero", "tool");
app.doAction("xoa stroke layer", "tool");

app.activeDocument.activeLayer.name = arr[i].stt;
bounds2 = app.activeDocument.activeLayer.bounds;
app.activeDocument.activeLayer.resize(wphone * 100 / widthden, wphone * 100 / widthden, AnchorPosition.MIDDLECENTER);