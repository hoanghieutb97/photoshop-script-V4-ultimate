openFile(FileDesign, arr[i], type);
app.activeDocument.activeLayer.name = "1";
app.doAction("path xu ly vien", "tool");
app.doAction("xu ly canh thot", "tool");
{ // crop xóa khoảng trắng
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
}
app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);