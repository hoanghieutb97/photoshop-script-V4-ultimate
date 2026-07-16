

for (var sttBan = 0; sttBan < 4; sttBan++) {

    #include "createDocumentAll2.jsx";
    var ten="truoc";
    if(sttBan=="1") ten="sau";
    if(sttBan=="2") ten="phai";
    if(sttBan=="3") ten="trai";
    var doc = app.activeDocument;
    var typeTem = "in xuoi mat " + ten; // khi createtem-group thì mới dùng
    var nameSave = "in xuoi mat " + ten; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var Min_Number_auto = 1000; // giới hạn 10 file để tạo bàn in
    var lat = false; // lật mica
    var kenhSpot1 = true;

    if (arr.length > Min_Number_auto) {
        #include "../split/taoTenBan.jsx";
    }

    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";


        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không

        var typeCrop = "den";

        var sttCropBox = [sttBan + 1, 1, 2, 1];
        if (sttBan > 1) sttCropBox = [sttBan - 1, 1, 2, 1];
        openFile(FileDesign, arr[i], type);
        cropCanvasSize(arr[i].nameId, sttBan);
        #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_transBock.jsx";





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


            var sttCropBox = [sttBan + 1, 1, 2, 1];
            if (sttBan > 1) sttCropBox = [sttBan - 1, 1, 2, 1];
            openFile(FileDesign, arr[i], type);
            cropCanvasSize(arr[i].nameId, sttBan);
            #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_transBock.jsx";

        }

        if ((G_boundDen[2] - G_boundDen[0]) != 0) {
            #include "caculatorPosition.jsx";
            #include "translateKHUNG.jsx";
            // var sttCropBox = soLayerCut[0][0]
            // Group_In = "IN TRUOC" //group file in
            // lat = true;
            // #include "../split/cropBoxXY_resize_Dup_trans.jsx";



            // #include "../split/canGiua11.jsx"; // căn giữa 1 file  Group_Khung và Group_In

        }








        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do
        // #include "../split/nganCachDoNew.jsx"; // căn giữa 1 file  Group_Khung và Group_In

        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem


        }
    }


}




function cropCanvasSize(nameIDdd, sttBan) {
    if (nameIDdd == "BlockPO-2,5in") {
        if (sttBan < 2)
            app.activeDocument.resizeCanvas(1632, app.activeDocument.height, AnchorPosition.TOPLEFT);
        else app.activeDocument.resizeCanvas(1632, app.activeDocument.height, AnchorPosition.TOPRIGHT);



    }
    else if (nameIDdd == "BlockPO-3,8in") {
        if (sttBan < 2)
            app.activeDocument.resizeCanvas(2388, app.activeDocument.height, AnchorPosition.TOPLEFT);
        else app.activeDocument.resizeCanvas(1632, app.activeDocument.height, AnchorPosition.TOPRIGHT);
    }

}