
function saveImageTool(item, value, crop) {

    var linkServerCheckFile = "//192.168.1.194/img barcode/";

    var sfwOptions = new ExportOptionsSaveForWeb();
    sfwOptions.format = SaveDocumentType.JPEG;
    sfwOptions.includeProfile = false;
    sfwOptions.interlaced = false;
    sfwOptions.optimized = true;
    sfwOptions.quality = 90;

    var dateitem = [];
    if (item.dateItem != undefined) {
        if (item.dateItem.split("-").length > 1) {
            dateitem = item.dateItem;
            dateitem = dateitem.split("-");
        }
        else {
            var dkm = ("0" + item.dateItem).split("/");
            dateitem[0] = "2022";
            dateitem[1] = dkm[0];
        }
    }

    if (crop != "noneCrop") {
        { // crop xóa khoảng trắng
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        }
        if (app.activeDocument.width < app.activeDocument.height) {
            app.activeDocument.resizeImage(null, UnitValue(500, "px"), null, ResampleMethod.BICUBIC);
        }
        else {
            app.activeDocument.resizeImage(UnitValue(500, "px"), null, null, ResampleMethod.BICUBIC);
        }
    }

    try {
        if (value == "front")
            activeDocument.exportDocument(Folder(linkServerCheckFile + dateitem[0] + "/" + dateitem[1] + "/" + item.barcode + "-A.jpg"), ExportType.SAVEFORWEB, sfwOptions);
        else if (value == "back")
            activeDocument.exportDocument(Folder(linkServerCheckFile + dateitem[0] + "/" + dateitem[1] + "/" + item.barcode + "-B.jpg"), ExportType.SAVEFORWEB, sfwOptions);
        else
            activeDocument.exportDocument(Folder(linkServerCheckFile + dateitem[0] + "/" + dateitem[1] + "/" + item.barcode + ".jpg"), ExportType.SAVEFORWEB, sfwOptions);

    } catch (error) {
        

    }

}