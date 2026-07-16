
if (typeof xoay90_File !== 'undefined') app.activeDocument.rotateCanvas(90);

cropBoxInXY(sttCropBox[0], sttCropBox[1], sttCropBox[2], sttCropBox[3], app.activeDocument.width, app.activeDocument.height);
if (lat) app.doAction("canvasHoriz", "tool");
// if (xoay) app.activeDocument.activeLayer.rotate(90);
var w222 = app.activeDocument.width.as("px");
var h222 = app.activeDocument.height.as("px");

app.activeDocument.crop([
    UnitValue(30, "px"),
    UnitValue(30, "px"),
    UnitValue(w222 - 30, "px"),
    UnitValue(h222 - 30, "px")
]);

app.activeDocument.selection.select([
    [0, 0],
    [app.activeDocument.width.as("px"), 0],
    [app.activeDocument.width.as("px"), app.activeDocument.height.as("px")],
    [0, app.activeDocument.height.as("px")]
]);
app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);


// alert(wphone, hphone)

var G_boundDen = app.activeDocument.activeLayer.bounds;
// if ((G_boundDen[2] - G_boundDen[0]) > (G_boundDen[3] - G_boundDen[1])) {



var WHbounds = app.activeDocument.activeLayer.bounds;
var boxW =1300;
var boxH = 1300;
app.activeDocument.activeLayer.name = arr[i].stt;

app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_Khung], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in




app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

