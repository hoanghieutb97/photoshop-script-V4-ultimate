

var arrS3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if (((arr[i].nameId).substr(0, 1) == "S")) arrS3mm.push(arr[i])
}
var arrB3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if (((arr[i].nameId).substr(0, 1) == "B")) arrB3mm.push(arr[i])
}



{ ////////////////////////////////////////////////////////////// 2m- mica 2mm
    #include "createDocumentMica2.jsx";

    var doc = app.activeDocument;
    var typeTem = "mica2mm 2M in Nguoc"; // khi createtem-group thì mới dùng
    var nameSave = "mica2mm 2M in Nguoc"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// mergze 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 10; // giới hạn 10 file để tạo bàn in

    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        ///////////////////////////////////////////////////// check so luogn cot
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không

        var soLayerCut = [[[1, 1, 4, 3], [1, 2, 4, 3], [1, 3, 4, 3]], [[3, 1, 4, 3], [3, 2, 4, 3], [3, 3, 4, 3]], [[4, 1, 4, 3], [4, 2, 4, 3], [4, 3, 4, 3]]]
        if (((arr[i].nameId).substr(0, 1) != "A")) soLayerCut = [[[1, 1, 4, 3], [1, 2, 4, 3], [1, 3, 4, 3]], [[3, 1, 4, 3], [3, 2, 4, 3], [3, 3, 4, 3]]]
        var widthden = 0;
        var heightden = 0;
        var xoay = false;

        for (var g = 0; g < soLayerCut.length; g++) {
            var lat = true; // lật mica
            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";


            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

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
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                var sttCropBox = soLayerCut[g][2]
                Group_In = "IN SAU" //group file in
                lat = false; // lật mica
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_In

            }





        }
        #include "../split/nganCachDoNew.jsx"; // căn giữa 1 file  Group_Khung và Group_In
        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


        }
    }
}





{ ////////////////////////////////////////////////////////////// mica 3mm
    #include "createDocumentMica2.jsx";
    stt = 0;
    ban = 0;
    var doc = app.activeDocument;
    var typeTem = "mica 3mm-cat Ko in"; // khi createtem-group thì mới dùng
    var nameSave = "mica 3mm-cat Ko in"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// mergze 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 10; // giới hạn 10 file để tạo bàn in

    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        ///////////////////////////////////////////////////// check so luogn cot
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không

        var soLayerCut = [[[2, 1, 4, 3]]]
        var widthden = 0;
        var heightden = 0;
        var xoay = false;

        for (var g = 0; g < soLayerCut.length; g++) {
            var lat = false; // lật mica
            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";


            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";


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


            }





        }

        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";



        }
    }
}


if (arrS3mm.length > 0) { ////////////////////////////////////////////////////////////// 2m- mica 2mm
    #include "createDocumentMica2.jsx";
    ban = 0;
    stt = 0;
    arr = arrS3mm;
    var doc = app.activeDocument;
    var typeTem = "Holo-Star 3mm in Nguoc"; // khi createtem-group thì mới dùng
    var nameSave = "Holo-Star 3mm in Nguoc"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// mergze 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 10; // giới hạn 10 file để tạo bàn in

    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        ///////////////////////////////////////////////////// check so luogn cot
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không

        var soLayerCut = [[[4, 1, 4, 3], [4, 2, 4, 3]]]

        var widthden = 0;
        var heightden = 0;
        var xoay = false;

        for (var g = 0; g < soLayerCut.length; g++) {
            var lat = true; // lật mica
            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";


            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

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
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                #include "../split/canGiua11.jsx"; // căn giữa 1 file  Group_Khung và Group_In

            }





        }
        
        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


        }
    }
}


if (arrB3mm.length > 0) { ////////////////////////////////////////////////////////////// 2m- mica 2mm
    #include "createDocumentMica2.jsx";
    ban = 0;
    stt = 0;
    arr = arrB3mm;
    var doc = app.activeDocument;
    var typeTem = "Holo-Broken 3mm in Nguoc"; // khi createtem-group thì mới dùng
    var nameSave = "Holo-Broken 3mm in Nguoc"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// mergze 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 10; // giới hạn 10 file để tạo bàn in

    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        ///////////////////////////////////////////////////// check so luogn cot
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không

        var soLayerCut = [[[4, 1, 4, 3], [4, 2, 4, 3]]]

        var widthden = 0;
        var heightden = 0;
        var xoay = false;

        for (var g = 0; g < soLayerCut.length; g++) {
            var lat = true; // lật mica
            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";


            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

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
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                #include "../split/canGiua11.jsx"; // căn giữa 1 file  Group_Khung và Group_In

            }





        }
        
        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


        }
    }
}