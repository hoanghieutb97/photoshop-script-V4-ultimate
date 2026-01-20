


{ /// go 1 mat
    #include "createDocumentAll2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go3mm-1mat"; // khi createtem-group thì mới dùng
    var nameSave = "go3mm-1mat"; // tên khi lưu
    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in
    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    var lat = false; // lật mica
    for (var i = stt; i <= arr.length - 1; i++) {
        openFile(FileDesign, arr[i], type);
        var typeTemplate = true; // true là template cũ bị to
        var typeLop = "1L";
        #include "convertPixel.jsx";
        if ((arr[i].nameId).substr(0, 2) == "1L") {
            if ((arr[i].nameId).split("-").pop() == "6in") {
                if (Math.abs(app.activeDocument.width.as("px") - 9300) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "8in") || ((arr[i].nameId).split("-").pop() == "8x4in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 12300) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "10in") || ((arr[i].nameId).split("-").pop() == "10x5in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 15300) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "12in") || ((arr[i].nameId).split("-").pop() == "12x4in")|| ((arr[i].nameId).split("-").pop() == "12x12in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 18300) > 5) typeTemplate = false
            }
            else alert("goi Hieu them GLLM ", arr[i].nameId)
        }
        else if ((arr[i].nameId).substr(0, 2) == "2L") {
            typeLop = "2L"
            if ((arr[i].nameId).split("-").pop() == "6in") {
                if (Math.abs(app.activeDocument.width.as("px") - 13020) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "8in") || ((arr[i].nameId).split("-").pop() == "8x4in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 17220) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "10in") || ((arr[i].nameId).split("-").pop() == "10x5in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 21420) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "12in") || ((arr[i].nameId).split("-").pop() == "12x4in")|| ((arr[i].nameId).split("-").pop() == "12x12in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 25619) > 5) typeTemplate = false
            }
            else alert("goi Hieu them GLLM ", arr[i].nameId)
        }
        else alert("goi Hieu them GLLM ", arr[i].nameId)

        var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
        var soLayerCut = [];

        if (typeTemplate) {// xử lý nếu template cũ

            soLayerCut = [[[1, 1, 5, 3], [1, 2, 5, 3]], [[2, 1, 5, 3], [2, 2, 5, 3]], [[3, 1, 5, 3], [3, 2, 5, 3]], [[4, 1, 5, 3], [4, 2, 5, 3]]];

            if (typeLop == "2L") {
                soLayerCut = [[[1, 1, 7, 3], [1, 2, 7, 3]], [[2, 1, 7, 3], [2, 2, 7, 3]], [[3, 1, 7, 3], [3, 2, 7, 3]], [[4, 1, 7, 3], [4, 2, 7, 3]], [[5, 1, 7, 3], [5, 2, 7, 3]], [[6, 1, 7, 3], [6, 2, 7, 3]]];

            }
        }
        else {
            soLayerCut = [[[1, 1, 3, 2], [1, 1, 3, 2]], [[2, 1, 3, 2], [2, 1, 3, 2]], [[1, 2, 3, 2], [1, 2, 3, 2]], [[2, 2, 3, 2], [2, 2, 3, 2]]];

            if (typeLop == "2L") {
                soLayerCut = [[[1, 1, 4, 2], [1, 1, 4, 2]], [[2, 1, 4, 2], [2, 1, 4, 2]], [[3, 1, 4, 2], [3, 1, 4, 2]], [[1, 2, 4, 2], [1, 2, 4, 2]], [[2, 2, 4, 2], [2, 2, 4, 2]], [[3, 2, 4, 2], [3, 2, 4, 2]]];

            }
        }


        var xoay = true;



        for (var g = 0; g < soLayerCut.length; g++) {

            var typeCrop = "den";

            var sttCropBox = soLayerCut[g][0];

            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
            app.activeDocument.activeLayer.name = "cattttttt" + arr[i].stt;
            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                doc.layerSets["KHUNG"].artLayers.getByName("cattttttt" + arr[i].stt).remove();

                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

                ban = ban + 1;
                stt = i;
                #include "createDocumentAll2.jsx";
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
        // #include "../split/nganCachDoNew.jsx"; // căn giữa 1 file  Group_Khung và Group_In

        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem


        }



    }
}


ban = 0;
stt = 0;

{ /// go 2 mat
    #include "createDocumentAll2.jsx";
    var doc = app.activeDocument;
    var typeTem = "go3mm-2mat"; // khi createtem-group thì mới dùng
    var nameSave = "go3mm-2mat"; // tên khi lưu
    var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
    var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
    var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in
    var Group_Khung = "KHUNG" // group file cắt đen, file khung
    var Group_In = "IN TRUOC" //group file in
    
    for (var i = stt; i <= arr.length - 1; i++) {
        var lat = false; // lật mica
        openFile(FileDesign, arr[i], type);
        var typeTemplate = true; // true là template cũ bị to
        var typeLop = "1L";
        #include "convertPixel.jsx";
        if ((arr[i].nameId).substr(0, 2) == "1L") {
            if ((arr[i].nameId).split("-").pop() == "6in") {
                if (Math.abs(app.activeDocument.width.as("px") - 9300) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "8in") || ((arr[i].nameId).split("-").pop() == "8x4in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 12300) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "10in") || ((arr[i].nameId).split("-").pop() == "10x5in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 15300) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "12in") || ((arr[i].nameId).split("-").pop() == "12x4in")|| ((arr[i].nameId).split("-").pop() == "12x12in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 18300) > 5) typeTemplate = false
            }
            else alert("goi Hieu them GLLM ", arr[i].nameId)
        }
        else if ((arr[i].nameId).substr(0, 2) == "2L") {
            typeLop = "2L"
            if ((arr[i].nameId).split("-").pop() == "6in") {
                if (Math.abs(app.activeDocument.width.as("px") - 13020) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "8in") || ((arr[i].nameId).split("-").pop() == "8x4in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 17220) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "10in") || ((arr[i].nameId).split("-").pop() == "10x5in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 21420) > 5) typeTemplate = false
            }
            else if (((arr[i].nameId).split("-").pop() == "12in") || ((arr[i].nameId).split("-").pop() == "12x4in")|| ((arr[i].nameId).split("-").pop() == "12x12in")) {
                if (Math.abs(app.activeDocument.width.as("px") - 25619) > 5) typeTemplate = false
            }
            else alert("goi Hieu them GLLM ", arr[i].nameId)
        }
        else alert("goi Hieu them GLLM ", arr[i].nameId)

        var StatusCanGiua = true;

        var soLayerCut = [];
        if (typeTemplate) {// xử lý nếu template cũ
            soLayerCut = [[5, 1, 5, 3], [5, 2, 5, 3], [5, 3, 5, 3]];
            if (typeLop == "2L") soLayerCut = [[7, 1, 7, 3], [7, 2, 7, 3], [7, 3, 7, 3]]
        }
        else {
            soLayerCut = [[3, 1, 3, 2], [3, 1, 3, 2], [3, 2, 3, 2]];
            if (typeLop == "2L") layerCut2M = [[4, 1, 4, 2], [4, 1, 4, 2], [4, 2, 4, 2]]

        }
        var xoay = true;


        var typeCrop = "den";

        var sttCropBox = soLayerCut[0];

        #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
        app.activeDocument.activeLayer.name = "cattttttt" + arr[i].stt;
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            doc.layerSets["KHUNG"].artLayers.getByName("cattttttt" + arr[i].stt).remove();

            #include "saveallcropByNameNew.jsx";


            ban = ban + 1;
            stt = i;
            #include "createDocumentAll2.jsx";
            doc = app.activeDocument;
            var typeCrop = "den";
            var sttCropBox = soLayerCut[0];
            #include "../split/cropBoxXY_black_resize_Dup_trans.jsx";
            app.activeDocument.activeLayer.name = "cattttttt" + arr[i].stt;
        }

        if ((G_boundDen[2] - G_boundDen[0]) != 0) {
            #include "caculatorPosition.jsx";
            app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName("cattttttt" + arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));



            Group_In = "IN TRUOC" //group file in
           
            var sttCropBox = soLayerCut[1];
            #include "../split/cropBoxXY_resize_Dup_trans.jsx";
            app.activeDocument.activeLayer.name = "T " + arr[i].stt;



            Group_In = "IN SAU" //group file in
            lat = true; // lật mica
            var sttCropBox = soLayerCut[2];
            #include "../split/cropBoxXY_resize_Dup_trans.jsx";
            app.activeDocument.activeLayer.name = "S " + arr[i].stt;

            if (StatusCanGiua) {

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









        /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do
        // #include "../split/nganCachDoNew.jsx"; // căn giữa 1 file  Group_Khung và Group_In

        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";



        }



    }
}
