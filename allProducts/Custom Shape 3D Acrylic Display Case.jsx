
#include "createDocumentMica2.jsx";
var doc = app.activeDocument;
var typeTem = "mica"; // khi createtem-group thì mới dùng
var nameSave = "mica"; // tên khi lưu
var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in



var Group_Khung = "KHUNG" // group file cắt đen, file khung
var Group_In = "IN TRUOC" //group file in
var Min_Number_auto = 10; // giới hạn 10 file để tạo bàn in
var lat = true; // lật mica
var kenhSpot1 = true;

if (arr.length > Min_Number_auto) {
    #include "../split/taoTenBanMica2M.jsx";
}

for (var i = stt; i <= arr.length - 1; i++) {
    app.activeDocument

    #include "convertPixel.jsx";
    var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
    var widthden = 0;
    var heightden = 0;
    var xoay = false;


    var typeCrop = "den";

    for (var ggg = 0; ggg < 7; ggg++) {
        var sttCropBox = [1, 1, 1, 3];
        var lat = true; // lật mica
        openFile(FileDesign, arr[i], type);
        cropCanvasSize(ggg);
        #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";



        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

            ban = ban + 1;
            stt = i;
            #include "createDocumentMica2.jsx";
            doc = app.activeDocument;
            if (arr.length > Min_Number_auto) {
                #include "../split/taoTenBanMica2M.jsx";
            }

            var typeCrop = "den";
            var sttCropBox = [1, 1, 1, 3]
            openFile(FileDesign, arr[i], type);
            cropCanvasSize(ggg);
            #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";



        }
        if ((G_boundDen[2] - G_boundDen[0]) != 0) {
            #include "caculatorPosition.jsx";
            #include "translateKHUNG.jsx";
            Group_In = "IN TRUOC" //group file in
            var sttCropBox = [1, 2, 1, 3]
            openFile(FileDesign, arr[i], type);
            cropCanvasSize(ggg);
            #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_resize_Dup_trans.jsx";




            Group_In = "IN SAU" //group file in
            lat = false; // lật mica
            var sttCropBox = [1, 3, 1, 3]
            openFile(FileDesign, arr[i], type);
            cropCanvasSize(ggg);
            #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_resize_Dup_trans.jsx";



            #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_In




        }




    }
    #include "../split/nganCachDoNew.jsx"; // căn giữa 1 file  Group_Khung và Group_In
    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem


    }
}


function cropCanvasSize(ggg) {
    if (ggg == 0) {
        app.activeDocument.crop([
            UnitValue(0, "px"),
            UnitValue(0, "px"),
            UnitValue(1259, "px"),
            UnitValue(5578, "px")
        ]);
    }
    else if (ggg == 1) {
        app.activeDocument.crop([
            UnitValue(1260, "px"),
            UnitValue(0, "px"),
            UnitValue(2520, "px"),
            UnitValue(5578, "px")
        ]);
    }
    else if (ggg == 2) {
        app.activeDocument.crop([
            UnitValue(2520, "px"),
            UnitValue(0, "px"),
            UnitValue(3239, "px"),
            UnitValue(5578, "px")
        ]);
    }
    else if (ggg == 3) {
        app.activeDocument.crop([
            UnitValue(3240, "px"),
            UnitValue(0, "px"),
            UnitValue(3964, "px"),
            UnitValue(5578, "px")
        ]);
    }
    else if (ggg == 4) {
        app.activeDocument.crop([
            UnitValue(3965, "px"),
            UnitValue(0, "px"),
            UnitValue(4681, "px"),
            UnitValue(5578, "px")
        ]);
    }
    else if (ggg == 5) {
        app.activeDocument.crop([
            UnitValue(4682, "px"),
            UnitValue(0, "px"),
            UnitValue(5404, "px"),
            UnitValue(5578, "px")
        ]);

    }
    else if (ggg == 6) {
        app.activeDocument.crop([
            UnitValue(5405, "px"),
            UnitValue(0, "px"),
            UnitValue(6530, "px"),
            UnitValue(5578, "px")
        ]);
    }
}