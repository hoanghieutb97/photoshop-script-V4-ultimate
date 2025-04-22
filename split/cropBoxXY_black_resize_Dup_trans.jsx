openFile(FileDesign, arr[i], type);
if (typeof xoay90_File !== 'undefined') app.activeDocument.rotateCanvas(90);
if (lat) app.doAction("canvasHoriz", "tool");
cropBoxInXY(sttCropBox[0], sttCropBox[1], sttCropBox[2], sttCropBox[3], app.activeDocument.width, app.activeDocument.height);
if (xoay) app.activeDocument.activeLayer.rotate(90);
app.doAction("xoa stroke layer", "tool");


var G_boundDen = app.activeDocument.activeLayer.bounds;
if (arr[i].direction == "2")
    app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
else if (arr[i].direction == "1")
    app.activeDocument.activeLayer.resize(hphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
var WHbounds = app.activeDocument.activeLayer.bounds;
var boxW = WHbounds[2] - WHbounds[0] + 30;
var boxH = WHbounds[3] - WHbounds[1] + 30;

app.activeDocument.activeLayer.name = arr[i].stt;
app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_Khung], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

