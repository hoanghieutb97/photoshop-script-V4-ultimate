openFile(FileDesign, arr[i], type);
if (typeof xoay90_File !== 'undefined') app.activeDocument.rotateCanvas(90);

cropBoxInXY(sttCropBox[0], sttCropBox[1], sttCropBox[2], sttCropBox[3], app.activeDocument.width, app.activeDocument.height);
if (lat) app.doAction("canvasHoriz", "tool");

app.doAction("xoa stroke layer", "tool");
// alert(wphone, hphone)

var G_boundDen = app.activeDocument.activeLayer.bounds;
if ((G_boundDen[2] - G_boundDen[0]) > (G_boundDen[3] - G_boundDen[1])) {
    xoay = true;
    app.activeDocument.rotateCanvas(90);
    G_boundDen = app.activeDocument.activeLayer.bounds;
}
else xoay = false;
// if (arr[i].stt == 5) { alert(hphone); alert(heightden) }
if ((G_boundDen[2] - G_boundDen[0]) != 0) {
    if (arr[i].direction == "2")
        app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
    else if (arr[i].direction == "1")
        app.activeDocument.activeLayer.resize(hphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
    var WHbounds = app.activeDocument.activeLayer.bounds;
    var boxW = WHbounds[2] - WHbounds[0] + 30;
    var boxH = WHbounds[3] - WHbounds[1] + 30;
    app.activeDocument.activeLayer.name = arr[i].stt;

    app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_Khung], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
}



app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

