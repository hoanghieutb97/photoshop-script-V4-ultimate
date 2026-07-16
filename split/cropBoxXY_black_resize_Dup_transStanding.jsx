openFile(FileDesign, arr[i], type);
if (typeof xoay90_File !== 'undefined') app.activeDocument.rotateCanvas(90);

cropBoxInXY(sttCropBox[0], sttCropBox[1], sttCropBox[2], sttCropBox[3], app.activeDocument.width, app.activeDocument.height);


if (lat) app.doAction("canvasHoriz", "tool");

app.doAction("xoa stroke layer", "tool");
// alert(wphone, hphone)
{
    executeAction(stringIDToTypeID("newPlacedLayer"), undefined, DialogModes.NO);
    executeAction(stringIDToTypeID("placedLayerEditContents"), undefined, DialogModes.NO);
    app.doAction("selectArea", "tool");
    var selDoc222222 = app.activeDocument;
    selDoc222222.selection.makeWorkPath(1.0);
    selDoc222222.pathItems.getByName("Work Path").makeSelection(0, true);
    selDoc222222.pathItems.getByName("Work Path").remove();
    var selBounds222 = selDoc222222.selection.bounds;
    selDoc222222.crop(selBounds222, 0, selBounds222[2] - selBounds222[0], selBounds222[3] - selBounds222[1]);
    app.activeDocument.save()
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    
    app.activeDocument.activeLayer.rasterize(RasterizeType.ENTIRELAYER);

}


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

