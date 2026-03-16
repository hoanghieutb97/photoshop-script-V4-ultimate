

var stt = 0;
var ban = 0;
#include "createDocumentAll2.jsx";
var doc = app.activeDocument;
var typeTem = "glassOrnament 2M"; // khi createtem-group thì mới dùng
var nameSave = "glassOrnament 2M"; // tên khi lưu


var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

var Group_Khung = "KHUNG" // group file cắt đen, file khung
var Group_In = "IN TRUOC" //group file in

var xoay = false;

var kenhSpot1 = true;


for (var i = stt; i <= arr.length - 1; i++) {
    var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
    #include "convertPixel.jsx";
    var lat = false; // lật mica
    var soLayerCut = [[[1, 1, 1, 2], [1, 2, 1, 2]]];



    for (var g = 0; g < soLayerCut.length; g++) {

        var typeCrop = "den";


        lat = true; // lật mica
        {/////////////////khung
            var tenKhung = "round2M";
            if (arr[i].nameId == "2M-round-Glass-O") tenKhung = "round2M";
            else if (arr[i].nameId == "2M-heart-Glass-O") tenKhung = "heart2M";
            // alert("//192.168.1.240/ps script data/glass ornament/" + tenKhung + ".png")
            app.open(File("//192.168.1.240/ps script data/glass ornament/" + tenKhung + ".png"));

            G_boundDen = app.activeDocument.activeLayer.bounds;
            var boxW = G_boundDen[2] - G_boundDen[0] + 30;
            var boxH = G_boundDen[3] - G_boundDen[1] + 30;
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_Khung], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }

        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

            ban = ban + 1;
            stt = i;
            #include "createDocumentAll2.jsx";
            doc = app.activeDocument;


            {/////////////////khung
                var tenKhung = "round2M";
                if (arr[i].nameId == "2M-round-Glass-O") tenKhung = "round2M";
                else if (arr[i].nameId == "2M-heart-Glass-O") tenKhung = "heart2M";
                // alert("//192.168.1.240/ps script data/glass ornament/" + tenKhung + ".png")
                app.open(File("//192.168.1.240/ps script data/glass ornament/" + tenKhung + ".png"));
    
                G_boundDen = app.activeDocument.activeLayer.bounds;
                var boxW = G_boundDen[2] - G_boundDen[0] + 30;
                var boxH = G_boundDen[3] - G_boundDen[1] + 30;
                app.activeDocument.activeLayer.name = arr[i].stt;
                app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_Khung], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }
        }


        #include "caculatorPosition.jsx";
        #include "translateKHUNG.jsx";
        lat = true; // lật mica
        var sttCropBox = soLayerCut[g][0]
        var Group_In = "IN TRUOC" //group file in
        #include "../split/cropBoxXY_resize_Dup_trans.jsx";

        var Group_In = "IN SAU" //group file in
        var sttCropBox = soLayerCut[g][1]

        lat = false; // lật mica
        #include "../split/cropBoxXY_resize_Dup_trans.jsx";



    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do


    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem


    }
}

