{ ////////////////////////////////////////////////////////////// go 3mm
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

        var typeLop = "3L";
        if ((arr[i].nameId).substr(0, 2) == "3L") {
            if (arr[i].nameId.substr(arr[i].nameId.length - 2, 2) != "2M") soLayerCut = [[[1, 1, 4, 3], [1, 2, 4, 3]], [[2, 1, 4, 3], [2, 2, 4, 3]], [[4, 1, 4, 3], [4, 2, 4, 3]]];
            else soLayerCut = [[[2, 1, 4, 3], [2, 2, 4, 3]], [[4, 1, 4, 3], [4, 2, 4, 3]]];
        }
        else if (((arr[i].nameId).substr(0, 2) == "4L")) {
            if (arr[i].nameId.substr(arr[i].nameId.length - 2, 2) != "2M") soLayerCut = [[[1, 1, 5, 3], [1, 2, 5, 3]], [[2, 1, 5, 3], [2, 2, 5, 3]], [[4, 1, 5, 3], [4, 2, 5, 3]], [[5, 1, 5, 3], [5, 2, 5, 3]]];
            else soLayerCut = [[[2, 1, 5, 3], [2, 2, 5, 3]], [[4, 1, 5, 3], [4, 2, 5, 3]], [[5, 1, 5, 3], [5, 2, 5, 3]]];
        }
        else alert("goi Hieu xu ly ", arr[i].nameId);



        var xoay = true;

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
            app.activeDocument.activeLayer.name = "cattttttt" + arr[i].stt;
            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName("cattttttt" + arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

                ban = ban + 1;
                stt = i;
                #include "createDocumentWooden2.jsx";
                doc = app.activeDocument;
                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0]
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
                app.activeDocument.activeLayer.name = "cattttttt" + arr[i].stt;
            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";

                app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName("cattttttt" + arr[i].stt);
                app.doAction("moveZero", "tool");
                app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

                var sttCropBox = soLayerCut[g][1]
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";
                app.activeDocument.activeLayer.name = "T " + arr[i].stt;

                { // can giua 11
                    var W_ACtiveB = activebounds[2] - activebounds[0];
                    var H_ACtiveB = activebounds[3] - activebounds[1];
                    var W_DenB = G_boundDen[2] - G_boundDen[0];
                    var H_DenB = G_boundDen[3] - G_boundDen[1];
                    if (Math.abs(W_DenB - W_ACtiveB) < 10 && Math.abs(H_DenB - H_ACtiveB) < 10) {
                        var id1 = false;
                        var id2 = false;
                        if (doc.layerSets[Group_Khung].layers[0].name == ("cattttttt" + arr[i].stt))
                            id1 = doc.layerSets[Group_Khung].artLayers.getByName("cattttttt" + arr[i].stt).id;

                        if (doc.layerSets[Group_In].layers[0].name == ("T " + arr[i].stt))
                            id2 = doc.layerSets[Group_In].artLayers.getByName("T " + arr[i].stt).id;




                        multiSelectByIDs([id2, id1]);

                        app.doAction("move center selction", "tool")

                    }
                }

            }





        }


        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do
        #include "../split/nganCachDoNew.jsx"; // căn giữa 1 file  Group_Khung và Group_In

        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


        }
    }
}


ban = 0;
stt = 0;
{ ////////////////////////////////////////////////////////////// go 3mm 2M
    #include "createDocumentWooden2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go 3mm-2M"; // khi createtem-group thì mới dùng
    var nameSave = "go 3mm-2M"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG"; // group file cắt đen, file khung
    var Group_In = "IN TRUOC";//group file in

    var lat = false; // lật mica
    var kenhSpot1 = true;


    for (var i = stt; i <= arr.length - 1; i++) {

        if (arr[i].nameId.substr(arr[i].nameId.length - 2, 2) != "2M") continue;

        #include "convertPixel.jsx";
        var typeLop = "3L";
        if ((arr[i].nameId).substr(0, 2) == "3L")
            soLayerCut = [[[1, 1, 4, 3], [1, 2, 4, 3], [1, 3, 4, 3]]];

        else if (((arr[i].nameId).substr(0, 2) == "4L"))
            soLayerCut = [[[1, 1, 5, 3], [1, 2, 5, 3], [1, 3, 5, 3]]];


        else alert("goi Hieu xu ly ", arr[i].nameId);



        var xoay = true;

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
            app.activeDocument.activeLayer.name = "cattttttt" + arr[i].stt;
            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName("cattttttt" + arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


                ban = ban + 1;
                stt = i;
                #include "createDocumentWooden2.jsx";
                doc = app.activeDocument;
                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0];
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
                app.activeDocument.activeLayer.name = "cattttttt" + arr[i].stt;
            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";

                app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName("cattttttt" + arr[i].stt);
                app.doAction("moveZero", "tool");
                app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

                Group_In = "IN TRUOC"; //group file in
                var sttCropBox = soLayerCut[g][1]
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";
                app.activeDocument.activeLayer.name = "T " + arr[i].stt;



                Group_In = "IN SAU";//group file in
                lat = true; // lật mica
                var sttCropBox = soLayerCut[g][2];
                #include "../split/cropBoxXY_resize_Dup_trans.jsx";
                app.activeDocument.activeLayer.name = "S " + arr[i].stt;


                {// can giua 1 3
                    var id1 = false;
                    var id2 = false;
                    var id3 = false;
                    if (doc.layerSets["KHUNG"].layers[0].name == ("cattttttt" + arr[i].stt))
                        id1 = doc.layerSets["KHUNG"].artLayers.getByName("cattttttt" + arr[i].stt).id;

                    if (doc.layerSets["IN TRUOC"].layers[0].name == ("T " + arr[i].stt))
                        id2 = doc.layerSets["IN TRUOC"].artLayers.getByName("T " + arr[i].stt).id;

                    if ((doc.layerSets["IN SAU"].layers.length !== 0)) {

                        if (doc.layerSets["IN SAU"].layers[0].name == ("S " + arr[i].stt))
                            id3 = doc.layerSets["IN SAU"].artLayers.getByName("S " + arr[i].stt).id;
                    }
                    multiSelectByIDs([id2, id1, id3]);
                    // alert(i)
                    app.doAction("move center selction", "tool")
                }


            }
        }

        if (i == arr.length - 1) {

            if (app.activeDocument.layerSets["IN TRUOC"].layers.length > 0) {
                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
            }


        }
    }

    if (app.activeDocument.layerSets["IN TRUOC"].layers.length == 0) app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
ban = 0;
stt = 0;
{ ////////////////////////////////////////////////////////////// mica 3mm
    #include "createDocumentWooden2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go 4mm only Cut"; // khi createtem-group thì mới dùng
    var nameSave = "go 4mm only Cut"; // tên khi lưu


    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

    var Group_Khung = "KHUNG"; // group file cắt đen, file khung
    var Group_In = "IN TRUOC"; //group file in

    var lat = false; // lật mica
    var kenhSpot1 = true;


    for (var i = stt; i <= arr.length - 1; i++) {
        #include "convertPixel.jsx";

        var typeLop = "3L";
        if ((arr[i].nameId).substr(0, 2) == "3L") soLayerCut = [[[3, 1, 4, 3]]];


        else if (((arr[i].nameId).substr(0, 2) == "4L"))
            soLayerCut = [[[3, 1, 5, 3]]];


        else alert("goi Hieu xu ly ", arr[i].nameId);



        var xoay = true;

        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
            app.activeDocument.activeLayer.name = "cattttttt" + arr[i].stt;
            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName("cattttttt" + arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";


                ban = ban + 1;
                stt = i;
                #include "createDocumentWooden2.jsx";
                doc = app.activeDocument;
                var typeCrop = "den";
                var sttCropBox = soLayerCut[g][0]
                #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
                app.activeDocument.activeLayer.name = "cattttttt" + arr[i].stt;
            }

            if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                #include "caculatorPosition.jsx";

                app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName("cattttttt" + arr[i].stt);
                app.doAction("moveZero", "tool");
                app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));


            }





        }




        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";



        }
    }
}


