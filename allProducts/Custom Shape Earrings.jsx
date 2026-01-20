var arrGo3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if ((arr[i].nameId).substr(0, 1) == "W") arrGo3mm.push(arr[i])
}


var arrA3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if ((arr[i].nameId).substr(0, 1) == "A") arrA3mm.push(arr[i])
}
var arrS3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if ((arr[i].nameId).substr(0, 1) == "S") arrS3mm.push(arr[i])
}
var arrB3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if ((arr[i].nameId).substr(0, 1) == "B") arrB3mm.push(arr[i])
}


if (arrGo3mm.length > 0) { ////////////////////////////////////////////////////////////// chay lop go
    arr = arrGo3mm;
    #include "createDocumentWooden2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go 3mm 2M"; // khi createtem-group thì mới dùng
    var nameSave = "go 3mm 2M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 5; // giới hạn 10 file để tạo bàn in
    var lat = false; // lật mica
    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        var sttCropBox = [];
        var lay1 = [];
        var lay2 = [];

        soLayerCut = [[[1, 1, 2, 3], [1, 2, 2, 3], [1, 3, 2, 3]], [[2, 1, 2, 3], [2, 2, 2, 3], [2, 3, 2, 3]]];
        lay1 = [1, 1, 2, 3]
        lay2 = [2, 1, 2, 3]





        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        {// lấy file đen làm file gốc tính kích thước
            var W_H = tinhkichthuoc(arr[i], FileDesign, type, lay1, lay2);
            widthden = W_H[0];
            heightden = W_H[1];
            // alert(heightden);


            if (widthden > heightden) {
                xoay = true;
                var x = widthden;
                widthden = heightden;
                heightden = x;
            }

        }

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];
            lat = false;
            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

                ban = ban + 1;
                stt = i;
                #include "createDocumentWooden2.jsx";
                doc = app.activeDocument;
                if (arr.length > Min_Number_auto) {
                    #include "../split/taoTenBan.jsx";
                }

                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0]
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                app.doAction("overlayblack", "tool")

                var sttCropBox = soLayerCut[g][1]
                Group_In = "IN TRUOC" //group file in

                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                lat = true;
                Group_In = "IN SAU" //group file in
                var sttCropBox = soLayerCut[g][2]
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";



                #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_In




            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do


        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


        }

    }

}



if (arrA3mm.length > 0) { ////////////////////////////////////////////////////////////// chay lop go
    ban = 0;
    stt = 0;

    arr = arrA3mm;
    #include "createDocumentMica2.jsx";
    var doc = app.activeDocument;
    var typeTem = "Mica 3mm 2M"; // khi createtem-group thì mới dùng
    var nameSave = "Mica 3mm 2M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 5; // giới hạn 10 file để tạo bàn in
    var lat = false; // lật mica
    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        var sttCropBox = [];
        var lay1 = [];
        var lay2 = [];

        soLayerCut = [[[1, 1, 2, 3], [1, 2, 2, 3], [1, 3, 2, 3]], [[2, 1, 2, 3], [2, 2, 2, 3], [2, 3, 2, 3]]];
        lay1 = [1, 1, 2, 3]
        lay2 = [2, 1, 2, 3]





        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        {// lấy file đen làm file gốc tính kích thước
            var W_H = tinhkichthuoc(arr[i], FileDesign, type, lay1, lay2);
            widthden = W_H[0];
            heightden = W_H[1];
            // alert(heightden);


            if (widthden > heightden) {
                xoay = true;
                var x = widthden;
                widthden = heightden;
                heightden = x;
            }

        }

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];
            lat = true;
            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

                ban = ban + 1;
                stt = i;
                #include "createDocumentMica2.jsx";
                doc = app.activeDocument;
                if (arr.length > Min_Number_auto) {
                    #include "../split/taoTenBan.jsx";
                }

                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0]
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                app.doAction("overlayblack", "tool")

                var sttCropBox = soLayerCut[g][1]
                Group_In = "IN TRUOC" //group file in

                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                lat = false;
                Group_In = "IN SAU" //group file in
                var sttCropBox = soLayerCut[g][2]
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";



                #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_In




            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do


        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


        }

    }

}


if (arrS3mm.length > 0) { ////////////////////////////////////////////////////////////// chay lop go
    ban = 0;
    stt = 0;

    arr = arrS3mm;
    #include "createDocumentMica2.jsx";
    var doc = app.activeDocument;
    var typeTem = "holo-Star 3mm 2M"; // khi createtem-group thì mới dùng
    var nameSave = "holo-Star 3mm 2M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 5; // giới hạn 10 file để tạo bàn in
    var lat = false; // lật mica
    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        var sttCropBox = [];
        var lay1 = [];
        var lay2 = [];

        soLayerCut = [[[1, 1, 2, 3], [1, 2, 2, 3], [1, 3, 2, 3]], [[2, 1, 2, 3], [2, 2, 2, 3], [2, 3, 2, 3]]];
        lay1 = [1, 1, 2, 3]
        lay2 = [2, 1, 2, 3]





        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        {// lấy file đen làm file gốc tính kích thước
            var W_H = tinhkichthuoc(arr[i], FileDesign, type, lay1, lay2);
            widthden = W_H[0];
            heightden = W_H[1];
            // alert(heightden);


            if (widthden > heightden) {
                xoay = true;
                var x = widthden;
                widthden = heightden;
                heightden = x;
            }

        }

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];
            lat = true;
            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

                ban = ban + 1;
                stt = i;
                #include "createDocumentMica2.jsx";
                doc = app.activeDocument;
                if (arr.length > Min_Number_auto) {
                    #include "../split/taoTenBan.jsx";
                }

                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0]
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                app.doAction("overlayblack", "tool")

                var sttCropBox = soLayerCut[g][1]
                Group_In = "IN TRUOC" //group file in

                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                lat = false;
                Group_In = "IN SAU" //group file in
                var sttCropBox = soLayerCut[g][2]
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";



                #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_In




            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do


        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


        }

    }

}
if (arrB3mm.length > 0) { ////////////////////////////////////////////////////////////// chay lop go
    ban = 0;
    stt = 0;

    arr = arrB3mm;
    #include "createDocumentMica2.jsx";
    var doc = app.activeDocument;
    var typeTem = "holo-Bro 3mm 2M"; // khi createtem-group thì mới dùng
    var nameSave = "holo-Bro 3mm 2M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 5; // giới hạn 10 file để tạo bàn in
    var lat = false; // lật mica
    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        var sttCropBox = [];
        var lay1 = [];
        var lay2 = [];

        soLayerCut = [[[1, 1, 2, 3], [1, 2, 2, 3], [1, 3, 2, 3]], [[2, 1, 2, 3], [2, 2, 2, 3], [2, 3, 2, 3]]];
        lay1 = [1, 1, 2, 3]
        lay2 = [2, 1, 2, 3]





        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        {// lấy file đen làm file gốc tính kích thước
            var W_H = tinhkichthuoc(arr[i], FileDesign, type, lay1, lay2);
            widthden = W_H[0];
            heightden = W_H[1];
            // alert(heightden);


            if (widthden > heightden) {
                xoay = true;
                var x = widthden;
                widthden = heightden;
                heightden = x;
            }

        }

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];
            lat = true;
            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

                ban = ban + 1;
                stt = i;
                #include "createDocumentMica2.jsx";
                doc = app.activeDocument;
                if (arr.length > Min_Number_auto) {
                    #include "../split/taoTenBan.jsx";
                }

                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0]
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                app.doAction("overlayblack", "tool")

                var sttCropBox = soLayerCut[g][1]
                Group_In = "IN TRUOC" //group file in

                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                lat = false;
                Group_In = "IN SAU" //group file in
                var sttCropBox = soLayerCut[g][2]
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";



                #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_In




            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do


        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


        }

    }

}
function tinhkichthuoc(item, FileDesign, type, lay1, lay2) {
    openFile(FileDesign, item, type);
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(-90)

    cropBoxInXY_onlyDuplicate_Stroke(lay1[0], lay1[1], lay1[2], lay1[3], app.activeDocument.width, app.activeDocument.height);


    app.doAction("moveZero", "tool");


    var bounds1Layer = app.activeDocument.activeLayer.bounds;
    app.doAction("xoa stroke layer", "tool");
    app.activeDocument.activeLayer = app.activeDocument.layers[1];

    cropBoxInXY_onlyDuplicate_Stroke(lay2[0], lay2[1], lay2[2], lay2[3], app.activeDocument.width, app.activeDocument.height);
    app.doAction("moveZero", "tool");

    app.activeDocument.activeLayer.translate(bounds1Layer[2], (0) * (-1));

    app.doAction("xoa stroke layer", "tool");

    app.activeDocument.layers[2].remove();
    app.activeDocument.resizeCanvas(bounds1Layer[2] * 3, bounds1Layer[2] * 3, AnchorPosition.BOTTOMLEFT);
    // app.activeDocument.mergeVisibleLayers();

    app.activeDocument.flipCanvas(Direction.VERTICAL);

    app.activeDocument.crop([0, 0, (bounds1Layer[2] - bounds1Layer[0]) * 2, bounds1Layer[3] - bounds1Layer[1]]);
    app.activeDocument.flipCanvas(Direction.VERTICAL);

    var activeWidth = app.activeDocument.width;


    var bounds1 = app.activeDocument.layers[0].bounds;
    var bounds2 = app.activeDocument.layers[1].bounds;
    var b0 = bounds1[0];
    var b1 = bounds1[1];
    var b2 = bounds1[2];
    var b3 = bounds1[3];

    if (bounds1[0] > (bounds2[0] - activeWidth / 2)) b0 = bounds2[0] - (activeWidth / 2);
    if (bounds1[1] > (bounds2[1])) b1 = bounds2[1];
    if (bounds1[2] < (bounds2[2] - activeWidth / 2)) b2 = bounds2[2] - (activeWidth / 2);
    if (bounds1[3] < (bounds2[3])) b3 = bounds2[3];

    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    return [b2 - b0, b3 - b1]
}
