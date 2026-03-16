{ ////////////////////////////////////////////////////////////// go 5mm
    #include "createDocumentWooden2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go 5mm 2M"; // khi createtem-group thì mới dùng
    var nameSave = "go 5mm 2M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG"; // group file cắt đen, file khung
    var Group_In = "IN TRUOC"; //group file in

    var lat = false; // lật mica
    var kenhSpot1 = true;


    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";

        var soLayerCut = [[[1, 1, 3, 3], [1, 2, 3, 3], [1, 3, 3, 3]]];

        var layerCutGoc = [1, 1, 3, 3];
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



        var xoay = true;

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";
            lat = false; // lật mica
            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {


                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

                ban = ban + 1;
                stt = i;
                #include "createDocumentWooden2.jsx";
                doc = app.activeDocument;
                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0]
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                var sttCropBox = soLayerCut[g][1]

                var Group_In = "IN TRUOC" //group file in
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";



                var Group_In = "IN SAU" //group file in
                var sttCropBox = soLayerCut[g][2]
                lat = true; // lật mica
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_In
            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do


        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


        }
    }
}

{ ////////////////////////////////////////////////////////////// go 3mm
    stt = 0;
    ban = 0;
    #include "createDocumentWooden2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go 3mm 1M"; // khi createtem-group thì mới dùng
    var nameSave = "go 3mm 1M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG"; // group file cắt đen, file khung
    var Group_In = "IN TRUOC"; //group file in

    var lat = false; // lật mica
    var kenhSpot1 = true;


    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";

        var soLayerCut = [[[2, 1, 3, 3], [2, 2, 3, 3]]];

        var layerCutGoc = [1, 1, 3, 3];
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



        var xoay = true;

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";
            lat = false; // lật mica
            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {


                #include "saveallcropByNameNew.jsx";


                ban = ban + 1;
                stt = i;
                #include "createDocumentWooden2.jsx";
                doc = app.activeDocument;
                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0]
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                var sttCropBox = soLayerCut[g][1]

                var Group_In = "IN TRUOC" //group file in
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";




                #include "../split/canGiua11.jsx"; // căn giữa 1 file  Group_Khung và Group_In
            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do


        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";



        }
    }
}


{ ////////////////////////////////////////////////////////////// go 6mm
    stt = 0;
    ban = 0;
    #include "createDocumentWooden2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go 6mm- in bong"; // khi createtem-group thì mới dùng
    var nameSave = "go 6mm- in bong"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG"; // group file cắt đen, file khung
    var Group_In = "IN TRUOC"; //group file in

    var lat = false; // lật mica
    var kenhSpot1 = true;


    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";

        var soLayerCut = [[[3, 1, 3, 3], [3, 2, 3, 3], [3, 3, 3, 3]]];

        var layerCutGoc = [1, 1, 3, 3];
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



        var xoay = true;

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";
            lat = false; // lật mica
            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {


                #include "saveallcropByNameNew.jsx";


                ban = ban + 1;
                stt = i;
                #include "createDocumentWooden2.jsx";
                doc = app.activeDocument;
                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0]
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";
                #include "translateKHUNG.jsx";
                var sttCropBox = soLayerCut[g][1]

                var Group_In = "IN TRUOC" //group file in
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";


                var Group_In = "IN SAU" //group file in
                var sttCropBox = soLayerCut[g][2]
                lat = true; // lật mica
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";

                #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_In
            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do


        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";



        }
    }
}
