
{ // crop xóa khoảng trắng và crop cỡ 9cm

    app.activeDocument.activeLayer.name = 1;
    if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);

    if (arr[i].direction == "2")
        app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);

    else if (arr[i].direction == "1") {
        if (app.activeDocument.width < app.activeDocument.height) {
            app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
        }
        else {
            app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
        }
    }
    else
        app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);


}
boxW = app.activeDocument.width +30;
boxH = app.activeDocument.height +30;