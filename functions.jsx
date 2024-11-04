function getSelectionActiveLayer(params) {
    var idsetd = charIDToTypeID("setd");
    var desc16 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref5 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref5.putProperty(idChnl, idfsel);
    desc16.putReference(idnull, ref5);
    var idT = charIDToTypeID("T   ");
    var ref6 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idTrsp = charIDToTypeID("Trsp");
    ref6.putEnumerated(idChnl, idChnl, idTrsp);
    desc16.putReference(idT, ref6);
    executeAction(idsetd, desc16, DialogModes.NO);


}


function tinhKichThuocToNhatHaiLop_coToaDo(item, FileDesign, type) {
    openFile(FileDesign, item, type);
    if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(-90)
    var activeWidth = app.activeDocument.width;
    app.activeDocument.selection.select([[0, 0], [0, app.activeDocument.height], [app.activeDocument.width / 2, app.activeDocument.height], [app.activeDocument.width / 2, 0]]);
    app.doAction("cat paste", "tool");
    var bounds1 = app.activeDocument.layers[0].bounds;
    var bounds2 = app.activeDocument.layers[1].bounds;
    var b0 = bounds1[0];
    var b1 = bounds1[1];
    var b2 = bounds1[2];
    var b3 = bounds1[3];
    // alert(bounds1)
    if (bounds1[0] > (bounds2[0] - activeWidth / 2)) b0 = bounds2[0] - (activeWidth / 2);
    if (bounds1[1] > (bounds2[1])) b1 = bounds2[1];
    if (bounds1[2] < (bounds2[2] - activeWidth / 2)) b2 = bounds2[2] - (activeWidth / 2);
    if (bounds1[3] < (bounds2[3])) b3 = bounds2[3];
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    return [b2 - b0, b3 - b1]
}

function crop_X_Per_Y(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
        [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

    ]);
    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.layers[1].remove();
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
}

function resize_Document_____tinhKichThuocToNhatHaiLop_coToaDo(item, Current_Width_Height) {
    var CurWidth = Current_Width_Height[0];
    var CurHeight = Current_Width_Height[1];
    var hphone = Math.round(item.hight / 0.084667);
    var wphone = Math.round(item.width / 0.084667);

    app.activeDocument.activeLayer.name = 1;
    if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);

    if (CurWidth > CurHeight) app.activeDocument.activeLayer.resize(wphone * 100 / CurWidth, hphone * 100 / CurWidth, AnchorPosition.MIDDLECENTER);
    else app.activeDocument.activeLayer.resize(wphone * 100 / CurHeight, hphone * 100 / CurHeight, AnchorPosition.MIDDLECENTER);

    var activeBounds = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(activeBounds, 0, activeBounds[2] - activeBounds[0], activeBounds[3] - activeBounds[1]);
}