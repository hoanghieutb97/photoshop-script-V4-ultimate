
#include "createDocumentWoodenNesting.jsx";
var doc = app.activeDocument;
var typeTem = "go 1M"; // khi createtem-group thì mới dùng
var nameSave = "go 1M"; // tên khi lưu
var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
var Group_Khung = "KHUNG" // group file cắt đen, file khung
var Group_In = "IN TRUOC" //group file in
var Min_Number_auto = 10; // giới hạn 10 file để tạo bàn in
var lat = false; // lật mica
var kenhSpot1 = true;

if (arr.length > Min_Number_auto) {
    #include "../split/taoTenBanNesting.jsx";
}

for (var i = stt; i <= arr.length - 1; i++) {

    lat = false; // lật mica
    #include "convertPixel.jsx";
    var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
    var widthden = 0;
    var heightden = 0;
    var xoay = false;
    {// lấy file đen làm file gốc tính kích thước
        openFile(FileDesign, arr[i], type);
        if (lat) app.doAction("canvasHoriz", "tool");
        if (typeof xoay90_File !== 'undefined') app.activeDocument.rotateCanvas(90);

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
    lat = false; // lật mica
    var typeCrop = "den";
    var sttCropBox = [1, 1, 1, 2];
    #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

    if ((G_boundDen[2] - G_boundDen[0]) != 0) {
        lat = true; // lật mica
        #include "translateKHUNG.jsx";
        Group_In = "IN TRUOC" //group file in
        var sttCropBox = [1, 2, 1, 2]
        #include "../split/cropBoxXY_resize_Dup_trans.jsx";

        #include "../split/canGiua11.jsx"; // căn giữa 1 file  Group_Khung và Group_In

        #include "../split/nesting_black.jsx";


     
        // yPosition = app.activeDocument.height.as("px") - app.activeDocument.layerSets["KHUNG"].layers[0].bounds[3].as("px");
        // yPosition = app.activeDocument.height - newBOXWH[3];


        if (app.activeDocument.height - app.activeDocument.layerSets["KHUNG"].layers[0].bounds[1] > FullWidth) {
            doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
            doc.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt).remove();

            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

            ban = ban + 1;
            stt = i;
            #include "createDocumentWoodenNesting.jsx";
            doc = app.activeDocument;
            if (arr.length > Min_Number_auto) {
                #include "../split/taoTenBanNesting.jsx";
            }
            i--;
        }
    }


    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem


    }
}

