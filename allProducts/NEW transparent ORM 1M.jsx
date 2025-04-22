var chayTuDong = true; // khai báo trên gllm xem có chạy tự động ra bàn in hay không, các size to đều không chạy

#include "createDocumentMica2.jsx";
var doc = app.activeDocument;
var typeTem = "mica"; // khi createtem-group thì mới dùng
var nameSave = "mica"; // tên khi lưu


var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

var Group_Khung = "KHUNG" // group file cắt đen, file khung
var Group_In = "IN TRUOC" //group file in
var Min_Number_auto = 10; // giới hạn 10 file để tạo bàn in
var lat = true; // lật mica
var kenhSpot1 = true;

if (arr.length > Min_Number_auto) {
    #include "../split/taoTenBan.jsx";
}

for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    var widthden = 0;
    var heightden = 0;
    var xoay = false;
    {// lấy file đen làm file gốc tính kích thước
        openFile(FileDesign, arr[i], type);
        if (lat) app.doAction("canvasHoriz", "tool");
        if (typeof xoay90_File !== 'undefined') app.activeDocument.rotateCanvas(90);
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        cropBoxInXY(1, 1, 1, 2, app.activeDocument.width, app.activeDocument.height);
        app.doAction("xoa stroke layer", "tool");
        var boundsGoc = app.activeDocument.activeLayer.bounds;
        widthden = boundsGoc[2] - boundsGoc[0];
        heightden = boundsGoc[3] - boundsGoc[1];
        if (widthden > heightden) {
            xoay = true;
            var x = widthden;
            widthden = heightden;
            heightden = x;
        }
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }

    var typeCrop = "den";
    var sttCropBox = [1, 1, 1, 2];
    #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

        ban = ban + 1;
        stt = i;
        #include "createDocumentMica2.jsx";
        doc = app.activeDocument;
        if (arr.length > Min_Number_auto) {
            #include "../split/taoTenBan.jsx";
        }

        var typeCrop = "den";
        var sttCropBox = [1, 1, 1, 2]
        #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";




    }


    #include "caculatorPosition.jsx";
    #include "translateKHUNG.jsx";
    var sttCropBox = [1, 2, 1, 2]
    #include "../split/cropBoxXY_resize_Dup_trans.jsx";
    #include "../split/canGiua11.jsx"; // căn giữa 1 file  Group_Khung và Group_In
    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem


    }
}
if (chayTuDong) {
    if (arr.length > 10) {
        var active_H = 14291;
        var active_W = 28701;
        var k_position = 0;
        var ten_Ban = "";
        app.documents.add(active_W, active_H, 300, "GLLM", NewDocumentMode.CMYK);
        var actice_DOC = app.activeDocument;
        var folderBanInTool = Folder(folderContainer + "/ban in-tool");
        if (!folderBanInTool.exists) { folderBanInTool.create() }
        #include "../split/tif_mergeRed_group.jsx";
    }
    else {
        #include "../split/taoBanCatXongIn.jsx";
    }
    #include "../split/taoFileCatDen.jsx";
}