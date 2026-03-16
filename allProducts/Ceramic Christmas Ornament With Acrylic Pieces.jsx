

//////////////////////////////////=====================================================================================
#include "createDocumentALL2.jsx";
var doc = app.activeDocument;
var Group_Khung = "KHUNG" // group file cắt đen, file khung
var typeTem = "Ceramic 1-2M"; // khi createtem-group thì mới dùng
var nameSave = "Ceramic 1-2M"; // tên khi lưu

for (var i = stt; i <= arr.length - 1; i++) {
    var soLayerCut = [[1, 1, 2, 2], [1, 2, 2, 2]];
    sttCropBox = soLayerCut[0];
    #include "convertPixel.jsx";

    openKhung(arr[i]);
    var WHbounds = app.activeDocument.activeLayer.bounds;

    var boxW = WHbounds[2] - WHbounds[0] + 30;
    var boxH = WHbounds[3] - WHbounds[1] + 30;



    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx"));
        #include "createDocumentALL2.jsx";
        ban = ban + 1;
        stt = i;


        openKhung(arr[i]);

    }
    #include "caculatorPosition.jsx";
    #include "translateKHUNG.jsx";

    var Group_In = "IN TRUOC" //group file in
    openFile(FileDesign, arr[i], type);

    cropBoxInXY(sttCropBox[0], sttCropBox[1], sttCropBox[2], sttCropBox[3], app.activeDocument.width, app.activeDocument.height);

    app.activeDocument.activeLayer.name = arr[i].stt;

    app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_In], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateTRUOC.jsx";
    app.doAction("xoa stroke layer", "tool");
    {
        var activebounds = app.activeDocument.activeLayer.bounds;
        if ((activebounds[2] - activebounds[0]) == 0) app.activeDocument.activeLayer.remove();
    }

    sttCropBox = soLayerCut[1];
    if (arr[i].nameId.substr(arr[i].nameId.length - 2) == "2M") {
        var Group_In = "IN SAU" //group file in
        openFile(FileDesign, arr[i], type);

        cropBoxInXY(sttCropBox[0], sttCropBox[1], sttCropBox[2], sttCropBox[3], app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;


        app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_In], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "translateSAU.jsx";
        app.doAction("xoa stroke layer", "tool");
        {
            var activebounds = app.activeDocument.activeLayer.bounds;
            if ((activebounds[2] - activebounds[0]) == 0) app.activeDocument.activeLayer.remove();
        }

    }



    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx"));
    }
}


{ ////////////////////////////////////////////////////////////// mica 2mm-2
    var stt = 0;
    var ban = 0;
    #include "createDocumentMica2.jsx";
    var doc = app.activeDocument;
    var typeTem = "Mica 3mm 1M"; // khi createtem-group thì mới dùng
    var nameSave = "Mica 3mm 1M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in


    var kenhSpot1 = true;


    for (var i = stt; i <= arr.length - 1; i++) {
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        #include "convertPixel.jsx";
        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không

        var lay1 = [];
        var lay2 = [];

        soLayerCut = [[[2, 1, 2, 2], [2, 2, 2, 2]]];



        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];
            lat = true; // lật mica
            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

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

                var Group_In = "IN TRUOC" //group file in
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


function openKhung(item) {
    var tenKhung = item.nameId.split("-")[0];

    app.open(File("//192.168.1.240/ps script data/oal su piece/" + tenKhung + ".png"));
    app.activeDocument.activeLayer.name = item.stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
