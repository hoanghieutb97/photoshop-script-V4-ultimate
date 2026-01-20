var arrGo3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if ((arr[i].nameId.split("-").pop() == "W")) arrGo3mm.push(arr[i])
}

var arrMica3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if ((arr[i].nameId.split("-").pop() == "T")) arrMica3mm.push(arr[i])
}

var arrholoB3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if ((arr[i].nameId.split("-").pop() == "B")) arrholoB3mm.push(arr[i])
}
var arrholoS3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if ((arr[i].nameId.split("-").pop() == "S")) arrholoS3mm.push(arr[i])
}
var arrholoAL3mm = []
for (var i = 0; i <= arr.length - 1; i++) {
    if ((arr[i].nameId.split("-").pop() == "AL")) arrholoAL3mm.push(arr[i])
}


var danhSach = [
    ["go 3mm 2M", arrGo3mm, "createDocumentWooden2", false],
    ["mica 3mm 2M", arrMica3mm, "createDocumentMica2", true],
    ["holo Bro 2M", arrholoB3mm, "createDocumentMica2", true],
    ["holo Star 2M", arrholoS3mm, "createDocumentMica2", true],
    ["nhom 2M", arrholoAL3mm, "CreateDocumentWooden2", false]
];
for (var xnxx = 0; xnxx < danhSach.length; xnxx++) {


    if (danhSach[xnxx][1].length > 0) {


        { ////////////////////////////////////////////////////////////// chay lop mica
            arr = danhSach[xnxx][1];
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/" + danhSach[xnxx][2] + ".jsx"));

            var doc = app.activeDocument;
            var typeTem = danhSach[xnxx][0]; // khi createtem-group thì mới dùng
            var nameSave = danhSach[xnxx][0]; // tên khi lưu


            var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
            var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
            var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

            var Group_Khung = "KHUNG" // group file cắt đen, file khung
            var Group_In = "IN TRUOC" //group file in
            var Min_Number_auto = 5; // giới hạn 10 file để tạo bàn in

            var kenhSpot1 = true;

            if (arr.length > Min_Number_auto) {
                #include "../split/taoTenBan.jsx";
            }

            for (var i = stt; i <= arr.length - 1; i++) {
                #include "convertPixel.jsx";
                var StatusCanGiua = false; // trạng thái sau khi duplicate có căn giữa với nhau không
                soLayerCut = [[[1, 1, 1, 3], [1, 2, 1, 3], [1, 3, 1, 3]], [[1, 1, 1, 3], [1, 2, 1, 3], [1, 3, 1, 3]]];
                var layerCutGoc = [1, 1, 1, 3]

                var widthden = 0;
                var heightden = 0;
                var xoay = false;
                {// lấy file đen làm file gốc tính kích thước
                    openFile(FileDesign, arr[i], type);

                    if (typeof xoay90_File !== 'undefined') app.activeDocument.rotateCanvas(90);

                    if (arr[i].nameId.split("-")[0] == "4in" || arr[i].nameId.split("-")[0] == "6in")
                        app.activeDocument.resizeCanvas(app.activeDocument.width - 958, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                    else if (arr[i].nameId.split("-")[0] == "8in" || arr[i].nameId.split("-")[0] == "10in")
                        app.activeDocument.resizeCanvas(app.activeDocument.width - 1259, app.activeDocument.height, AnchorPosition.MIDDLELEFT);

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
                    var lat = danhSach[xnxx][3];

                    openFile(FileDesign, arr[i], type);
                    if (arr[i].nameId.split("-")[0] == "4in" || arr[i].nameId.split("-")[0] == "6in") {
                        if (g == 1) app.activeDocument.resizeCanvas(958, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
                        else app.activeDocument.resizeCanvas(app.activeDocument.width - 958, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                    } else if (arr[i].nameId.split("-")[0] == "8in" || arr[i].nameId.split("-")[0] == "10in") {
                        if (g == 1) app.activeDocument.resizeCanvas(1259, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
                        else app.activeDocument.resizeCanvas(app.activeDocument.width - 1259, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                    }
                    #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";


                    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                        doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

                        #include "saveallcropByNameNew.jsx";
                        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

                        ban = ban + 1;
                        stt = i;

                        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/" + danhSach[xnxx][2] + ".jsx"));

                        doc = app.activeDocument;
                        if (arr.length > Min_Number_auto) {
                            #include "../split/taoTenBan.jsx";
                        }

                        var typeCrop = "den";
                        var sttCropBox = soLayerCut[g][0]
                        openFile(FileDesign, arr[i], type);
                        if (arr[i].nameId.split("-")[0] == "4in" || arr[i].nameId.split("-")[0] == "6in") {
                            if (g == 1) app.activeDocument.resizeCanvas(958, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
                            else app.activeDocument.resizeCanvas(app.activeDocument.width - 958, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                        } else if (arr[i].nameId.split("-")[0] == "8in" || arr[i].nameId.split("-")[0] == "10in") {
                            if (g == 1) app.activeDocument.resizeCanvas(1259, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
                            else app.activeDocument.resizeCanvas(app.activeDocument.width - 1259, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                        }
                        #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";

                    }

                    if ((G_boundDen[2] - G_boundDen[0]) != 0) {
                        #include "caculatorPosition.jsx";
                        #include "translateKHUNG.jsx";

                        var sttCropBox = soLayerCut[g][1]
                        Group_In = "IN TRUOC" //group file in
                        openFile(FileDesign, arr[i], type);
                        if (arr[i].nameId.split("-")[0] == "4in" || arr[i].nameId.split("-")[0] == "6in") {
                            if (g == 1) app.activeDocument.resizeCanvas(958, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
                            else app.activeDocument.resizeCanvas(app.activeDocument.width - 958, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                        } else if (arr[i].nameId.split("-")[0] == "8in" || arr[i].nameId.split("-")[0] == "10in") {
                            if (g == 1) app.activeDocument.resizeCanvas(1259, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
                            else app.activeDocument.resizeCanvas(app.activeDocument.width - 1259, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                        }
                        #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_resize_Dup_trans.jsx";

                        var sttCropBox = soLayerCut[g][2]
                        Group_In = "IN SAU" //group file in
                        lat = !lat;
                        openFile(FileDesign, arr[i], type);
                        if (arr[i].nameId.split("-")[0] == "4in" || arr[i].nameId.split("-")[0] == "6in") {
                            if (g == 1) app.activeDocument.resizeCanvas(958, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
                            else app.activeDocument.resizeCanvas(app.activeDocument.width - 958, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                        } else if (arr[i].nameId.split("-")[0] == "8in" || arr[i].nameId.split("-")[0] == "10in") {
                            if (g == 1) app.activeDocument.resizeCanvas(1259, app.activeDocument.height, AnchorPosition.MIDDLERIGHT);
                            else app.activeDocument.resizeCanvas(app.activeDocument.width - 1259, app.activeDocument.height, AnchorPosition.MIDDLELEFT);
                        }
                        #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_resize_Dup_trans.jsx";



                        #include "../split/canGiua13.jsx"; // căn giữa 1 file  Group_Khung và Group_In




                    }





                }


                /////////////////////////////////////////////////////////////////////////////////////////////////////////////ngan cach do


                if (i == arr.length - 1) {
                    #include "saveallcropByNameNew.jsx";
                    $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


                }

            }

        }
    }


}



