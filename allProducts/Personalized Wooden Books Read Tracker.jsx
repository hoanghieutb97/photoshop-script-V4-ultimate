



{ ////////////////////////////////////////////////////////////// chay lop 5mm 2M
    #include "createDocumentWooden2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go 5mm 2M"; // khi createtem-group thì mới dùng
    var nameSave = "go 5mm 2M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 1; // giới hạn 10 file để tạo bàn in
    var lat = true; // lật mica
    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        var soLayerCut = [[[1, 1, 5, 3], [1, 2, 5, 3], [1, 3, 5, 3]],
        [[1, 1, 1, 3], [1, 2, 1, 3], [1, 3, 1, 3]]];



        var widthden = 0;
        var heightden = 0;
        var xoay = false;


        for (var g = 0; g < soLayerCut.length; g++) {
            lat = false;
            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];
            openFile(FileDesign, arr[i], type);
            if (g == 1) app.activeDocument.resizeCanvas(360, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
            else app.activeDocument.resizeCanvas(app.activeDocument.width - 360, app.activeDocument.height, AnchorPosition.MIDDLELEFT);

            #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

                ban = ban + 1;
                stt = i;
                #include "createDocumentWooden2.jsx";
                doc = app.activeDocument;
                if (arr.length > Min_Number_auto) {
                    #include "../split/taoTenBan.jsx";
                }

                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0]
                openFile(FileDesign, arr[i], type);
                if (g == 1) app.activeDocument.resizeCanvas(360, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
                else app.activeDocument.resizeCanvas(app.activeDocument.width - 360, app.activeDocument.height, AnchorPosition.MIDDLELEFT);

                #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";
            }
            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                var sttCropBox = soLayerCut[g][1]
                Group_In = "IN TRUOC" //group file in
                lat = false;
                openFile(FileDesign, arr[i], type);
                if (g == 1) app.activeDocument.resizeCanvas(360, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
                else app.activeDocument.resizeCanvas(app.activeDocument.width - 360, app.activeDocument.height, AnchorPosition.MIDDLELEFT);

                #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_resize_Dup_trans.jsx";


                var sttCropBox = soLayerCut[g][2]
                Group_In = "IN SAU" //group file in
                lat = true
                openFile(FileDesign, arr[i], type);
                if (g == 1) app.activeDocument.resizeCanvas(360, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
                else app.activeDocument.resizeCanvas(app.activeDocument.width - 360, app.activeDocument.height, AnchorPosition.MIDDLELEFT);

                #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_resize_Dup_trans.jsx";

                #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_Inv




            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do
        #include "../split/nganCachDoNew.jsx"; // căn giữa 1 file  Group_Khung và Group_In

        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem


        }

    }

}



{ ////////////////////////////////////////////////////////////// chay lop 3MM 1M
    ban = 0;
    stt = 0;
    #include "createDocumentWooden2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go 3mm 1M"; // khi createtem-group thì mới dùng
    var nameSave = "go 3mm 1M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 1; // giới hạn 10 file để tạo bàn in
    var lat = false; // lật mica
    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        var soLayerCut = [[[2, 1, 5, 3], [2, 2, 5, 3]]];



        var widthden = 0;
        var heightden = 0;
        var xoay = false;


        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];
            openFile(FileDesign, arr[i], type);
            app.activeDocument.resizeCanvas(app.activeDocument.width - 360, app.activeDocument.height, AnchorPosition.MIDDLELEFT);

            #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";

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
                openFile(FileDesign, arr[i], type);
                app.activeDocument.resizeCanvas(app.activeDocument.width - 360, app.activeDocument.height, AnchorPosition.MIDDLELEFT);

                #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";
            }
            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                var sttCropBox = soLayerCut[g][1]
                Group_In = "IN TRUOC" //group file in

                openFile(FileDesign, arr[i], type);

                app.activeDocument.resizeCanvas(app.activeDocument.width - 360, app.activeDocument.height, AnchorPosition.MIDDLELEFT);

                #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_resize_Dup_trans.jsx";


                #include "../split/canGiua11.jsx"; // căn giữa 1 file  Group_Khung và Group_Inv




            }





        }



        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";



        }

    }

}


{ ////////////////////////////////////////////////////////////// chay lop 3mm 2 M
    ban = 0;
    stt = 0;
    #include "createDocumentWooden2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go 3mm 2M"; // khi createtem-group thì mới dùng
    var nameSave = "go 3mm 2M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 1; // giới hạn 10 file để tạo bàn in
    var lat = true; // lật mica
    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        var soLayerCut = [[[3, 1, 5, 3], [3, 2, 5, 3], [3, 3, 5, 3]],
        [[4, 1, 5, 3], [4, 2, 5, 3], [4, 3, 5, 3]],
        [[5, 1, 5, 3], [5, 2, 5, 3], [5, 3, 5, 3]]];
        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        for (var g = 0; g < soLayerCut.length; g++) {
            lat = false;
            var typeCrop = "den";
            var sttCropBox = soLayerCut[g][0];
            openFile(FileDesign, arr[i], type);
            app.activeDocument.resizeCanvas(app.activeDocument.width - 360, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
            #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";
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
                openFile(FileDesign, arr[i], type);
                app.activeDocument.resizeCanvas(app.activeDocument.width - 360, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";
            }
            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                var sttCropBox = soLayerCut[g][1]
                Group_In = "IN TRUOC" //group file in
                lat = false;
                openFile(FileDesign, arr[i], type);
                app.activeDocument.resizeCanvas(app.activeDocument.width - 360, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_resize_Dup_trans.jsx";
                var sttCropBox = soLayerCut[g][2]
                Group_In = "IN SAU" //group file in
                lat = true
                openFile(FileDesign, arr[i], type);
                app.activeDocument.resizeCanvas(app.activeDocument.width - 360, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_resize_Dup_trans.jsx";
                #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_Inv
            }
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do
        #include "../split/nganCachDoNewWoodenNoTem.jsx"; // căn giữa 1 file  Group_Khung và Group_In 

        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";



        }

    }

}

