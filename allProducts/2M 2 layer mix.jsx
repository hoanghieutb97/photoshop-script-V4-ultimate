



{ ////////////////////////////////////////////////////////////// chay lop mica
    #include "createDocumentMica2.jsx";
    var doc = app.activeDocument;
    var typeTem = "mica 3mm 2M"; // khi createtem-group thì mới dùng
    var nameSave = "mica 3mm2M "; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 5; // giới hạn 10 file để tạo bàn in
    var lat = true; // lật mica
    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        var soLayerCut = [[[1, 1, 2, 3], [1, 2, 2, 3], [1, 3, 2, 3]]];

        if ((arr[i].nameId).substr(3, 2) == "WA") soLayerCut = [[[2, 1, 2, 3], [2, 2, 2, 3], [2, 3, 2, 3]]];



        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        {// lấy file đen làm file gốc tính kích thước
            var W_H = tinhkichthuoc(arr[i], FileDesign, type);
            widthden = W_H[0];
            heightden = W_H[1];

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
                $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

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
                var sttCropBox = soLayerCut[g][1]
                Group_In = "IN TRUOC" //group file in
                lat = true;
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";


                var sttCropBox = soLayerCut[g][2]
                Group_In = "IN SAU" //group file in
                lat = false
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_In




            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do
        // #include "../split/nganCachDoNew.jsx"; // căn giữa 1 file  Group_Khung và Group_In

        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem


        }

    }

}



{ ////////////////////////////////////////////////////////////// chay lop go
    #include "createDocumentWooden2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go 3mm 2M"; // khi createtem-group thì mới dùng
    var nameSave = "go 3mm2M "; // tên khi lưu


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
        var soLayerCut = [[[2, 1, 2, 3], [2, 2, 2, 3], [2, 3, 2, 3]]];

        if ((arr[i].nameId).substr(3, 2) == "WA") soLayerCut = [[[1, 1, 2, 3], [1, 2, 2, 3], [1, 3, 2, 3]]];



        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        {// lấy file đen làm file gốc tính kích thước
            var W_H = tinhkichthuoc(arr[i], FileDesign, type);
            widthden = W_H[0];
            heightden = W_H[1];

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
                var sttCropBox = soLayerCut[g][1]
                Group_In = "IN TRUOC" //group file in
                lat = false;
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";


                var sttCropBox = soLayerCut[g][2]
                Group_In = "IN SAU" //group file in
                lat = true
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_In




            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do
        // #include "../split/nganCachDoNew.jsx"; // căn giữa 1 file  Group_Khung và Group_In

        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            


        }

    }

}

function tinhkichthuoc(item, FileDesign, type) {
    openFile(FileDesign, item, type);
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(-90)
    var activeWidth = app.activeDocument.width;
    cropBoxInXY_onlyDuplicate(1, 1, 2, 3, app.activeDocument.width, app.activeDocument.height);

    app.activeDocument.activeLayer = app.activeDocument.layers[1];

    cropBoxInXY_onlyDuplicate(2, 1, 2, 3, app.activeDocument.width, app.activeDocument.height);
    app.activeDocument.layers[2].remove();

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
