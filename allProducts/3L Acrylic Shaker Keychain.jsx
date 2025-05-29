{ ////////////////////////////////////////////////////////////// 1m- mica 2mm
    #include "createDocumentMica2.jsx";
    var doc = app.activeDocument;
    var typeTem = "mica"; // khi createtem-group thì mới dùng
    var nameSave = "1M-mica2mm"; // tên khi lưu


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
        ///////////////////////////////////////////////////// check so luogn cot
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        var layerCutGoc = [1, 1, 5, 2]
        var soLayerCut = [[[1, 1, 5, 2], [1, 2, 5, 2]]]
        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        {// lấy file đen làm file gốc tính kích thước
            openFile(FileDesign, arr[i], type);

            if (typeof xoay90_File !== 'undefined') app.activeDocument.rotateCanvas(90);

            cropBoxInXY(layerCutGoc[0], layerCutGoc[1], layerCutGoc[2], layerCutGoc[3], app.activeDocument.width, app.activeDocument.height);
            if (lat) app.doAction("canvasHoriz", "tool");
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

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];

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
                var sttCropBox = soLayerCut[g][0]
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                var sttCropBox = soLayerCut[g][1]
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";
                #include "../split/canGiua11.jsx"; // căn giữa 1 file  Group_Khung và Group_In

            }





        }
        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem


        }
    }
}

{ ////////////////////////////////////////////////////////////// mica 3mm khong in
    #include "createDocumentMica2.jsx";
    stt = 0;
    ban = 0;
    var doc = app.activeDocument;
    var typeTem = "mica"; // khi createtem-group thì mới dùng
    var nameSave = "cut mica 3mm"; // tên khi lưu
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
        var layerCutGoc = [1, 1, 5, 2]
        var soLayerCut = [[[2, 1, 5, 2]]]
        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        {// lấy file đen làm file gốc tính kích thước
            openFile(FileDesign, arr[i], type);
            if (typeof xoay90_File !== 'undefined') app.activeDocument.rotateCanvas(90);
            cropBoxInXY(layerCutGoc[0], layerCutGoc[1], layerCutGoc[2], layerCutGoc[3], app.activeDocument.width, app.activeDocument.height);
            if (lat) app.doAction("canvasHoriz", "tool");
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

        for (var g = 0; g < soLayerCut.length; g++) {
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


{ ////////////////////////////////////////////////////////////// 2m- mica 2mm
    #include "createDocumentMica2.jsx";
    var doc = app.activeDocument;
    var typeTem = "mica"; // khi createtem-group thì mới dùng
    var nameSave = "2M-mica2mm"; // tên khi lưu
    stt = 0;
    ban = 0;

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
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        ///////////////////////////////////////////////////// check so luogn cot

        var layerCutGoc = [1, 1, 5, 2]
        var soLayerCut = [[[4, 1, 5, 2], [4, 2, 5, 2], [5, 2, 5, 2]], [[3, 1, 5, 2], [2, 2, 5, 2], [3, 2, 5, 2]]]
        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        {// lấy file đen làm file gốc tính kích thước
            openFile(FileDesign, arr[i], type);

            if (typeof xoay90_File !== 'undefined') app.activeDocument.rotateCanvas(90);

            cropBoxInXY(layerCutGoc[0], layerCutGoc[1], layerCutGoc[2], layerCutGoc[3], app.activeDocument.width, app.activeDocument.height);
            if (lat) app.doAction("canvasHoriz", "tool");
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

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];
            lat = true;
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
                lat = true;
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                var sttCropBox = soLayerCut[g][1]
                Group_In = "IN TRUOC" //group file in
                lat = true;
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";
                #include "../split/canGiua11.jsx"; // căn giữa 1 file  Group_Khung và Group_In

                var sttCropBox = soLayerCut[g][2]
                Group_In = "IN SAU" //group file in
                lat = false
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";
                #include "../split/canGiua11.jsx"; // căn giữa 1 file  Group_Khung và Group_In

            }





        }
        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";



        }
    }
}


