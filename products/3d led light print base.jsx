var textColor = new SolidColor;
textColor.rgb.red = 255;
textColor.rgb.green = 0;
textColor.rgb.blue = 0;
function isOval59in(nameId) {
    return nameId == "RGB-OB-5,9in"
        || nameId == "RGB-OB-5,9in-upb"
        || nameId == "Y-OB-5,9in-upb"
        || nameId == "Y-OB-5,9in"
}
function isWB59in(nameId) {
    return nameId == "RGB-WB-5,9in"
        || nameId == "Y-WB-5,9in"
    // || nameId == "RGB-WB-5,9in-upb";
}
function isOval7in(nameId) {
    return nameId == "RGB-OB-7in"
        || nameId == "RGB-OB-7in-upb"
        || nameId == "Y-OB-7in"
        || nameId == "Y-OB-7in-upb"
}
function isWB7in(nameId) {
    return nameId == "RGB-WB-7in"
        || nameId == "Y-WB-7in"
    // || nameId == "RGB-WB-7in-upb";
}

function isOval787in(nameId) {
    return nameId == "RGB-OB-7,87in"
        || nameId == "RGB-OB-7,87in-upb"
        || nameId == "Y-OB-7,87in"
        || nameId == "Y-OB-7,87in-upb"
}
function isWB787in(nameId) {
    return nameId == "RGB-WB-7,87in"
        || nameId == "Y-WB-7,87in"
    // || nameId == "RGB-WB-7,87in-upb";
}


function isOval95in(nameId) {
    return nameId == "RGB-OB-9,5in"
        || nameId == "RGB-OB-9,5in-upb"
        || nameId == "Y-OB-9,5in"
        || nameId == "Y-OB-9,5in-upb"
}
function isWB95in(nameId) {
    return nameId == "RGB-WB-9,5in"
        || nameId == "Y-WB-9,5in"
    // || nameId == "RGB-WB-9,5in-upb";
}
function isWB1012in(nameId) {
    return nameId == "RGB-WB-10x12in"
        || nameId == "Y-WB-10x12in"
    // || nameId == "RGB-WB-10x12in-upb";
}


function cropCanvasSize(nameIDdd) {
    if (isOval59in(nameIDdd)) app.activeDocument.resizeCanvas(1890, 4252, AnchorPosition.TOPCENTER);
    else if (isOval7in(nameIDdd)) app.activeDocument.resizeCanvas(2159, 4674, AnchorPosition.TOPCENTER);
    else if (isOval787in(nameIDdd)) app.activeDocument.resizeCanvas(2480, 5314, AnchorPosition.TOPCENTER);
    else if (isOval95in(nameIDdd)) app.activeDocument.resizeCanvas(2909, 6173, AnchorPosition.TOPCENTER);
    else if (isWB59in(nameIDdd)) app.activeDocument.resizeCanvas(1890, 3780, AnchorPosition.TOPCENTER);
    else if (isWB7in(nameIDdd)) app.activeDocument.resizeCanvas(2159, 4317, AnchorPosition.TOPCENTER);
    else if (isWB787in(nameIDdd)) app.activeDocument.resizeCanvas(2480, 5315, AnchorPosition.TOPCENTER);
    else if (isWB95in(nameIDdd)) app.activeDocument.resizeCanvas(2909, 5820, AnchorPosition.TOPCENTER);
    else if (isWB1012in(nameIDdd)) app.activeDocument.resizeCanvas(2421, 6120, AnchorPosition.TOPCENTER);
}
function cropCanvasSizeChan(nameIDdd) {
    if (isOval59in(nameIDdd)) {
        app.activeDocument.resizeCanvas(1890, app.activeDocument.height - 4252, AnchorPosition.BOTTOMCENTER);
        app.activeDocument.resizeCanvas(app.activeDocument.width - 120, app.activeDocument.height - 120, AnchorPosition.MIDDLECENTER);
    }
    else if (isOval7in(nameIDdd)) {
        app.activeDocument.resizeCanvas(2159, app.activeDocument.height - 4674, AnchorPosition.BOTTOMCENTER);
        app.activeDocument.resizeCanvas(app.activeDocument.width - 364, app.activeDocument.height - 60, AnchorPosition.MIDDLECENTER);
    }
    else if (isOval787in(nameIDdd)) {
        app.activeDocument.resizeCanvas(2480, app.activeDocument.height - 5314, AnchorPosition.BOTTOMCENTER);
        app.activeDocument.resizeCanvas(app.activeDocument.width - 120, app.activeDocument.height - 120, AnchorPosition.MIDDLECENTER);
    }
    else if (isOval95in(nameIDdd)) {
        app.activeDocument.resizeCanvas(2909, app.activeDocument.height - 6173, AnchorPosition.BOTTOMCENTER);
        app.activeDocument.resizeCanvas(app.activeDocument.width - 576, app.activeDocument.height - 60, AnchorPosition.MIDDLECENTER);
    }
    else if (isWB59in(nameIDdd)) {
        app.activeDocument.resizeCanvas(1890, app.activeDocument.height - 3780, AnchorPosition.BOTTOMCENTER);
        app.activeDocument.resizeCanvas(app.activeDocument.width - 120, app.activeDocument.height - 60, AnchorPosition.MIDDLECENTER);
    }
    else if (isWB7in(nameIDdd)) {
        app.activeDocument.resizeCanvas(2159, app.activeDocument.height - 4317, AnchorPosition.BOTTOMCENTER);
        app.activeDocument.resizeCanvas(app.activeDocument.width - 364, app.activeDocument.height - 120, AnchorPosition.MIDDLECENTER);
    }
    else if (isWB787in(nameIDdd)) {
        app.activeDocument.resizeCanvas(2480, app.activeDocument.height - 5315, AnchorPosition.BOTTOMCENTER);
        app.activeDocument.resizeCanvas(app.activeDocument.width - 120, app.activeDocument.height - 120, AnchorPosition.MIDDLECENTER);
    }
    else if (isWB95in(nameIDdd)) {
        app.activeDocument.resizeCanvas(2909, app.activeDocument.height - 5820, AnchorPosition.BOTTOMCENTER);
        app.activeDocument.resizeCanvas(app.activeDocument.width - 576, app.activeDocument.height - 60, AnchorPosition.MIDDLECENTER);
    }
    else if (isWB1012in(nameIDdd)) {
        app.activeDocument.resizeCanvas(2421, app.activeDocument.height - 6120, AnchorPosition.BOTTOMCENTER);
        app.activeDocument.resizeCanvas(app.activeDocument.width - 706, app.activeDocument.height - 120, AnchorPosition.MIDDLECENTER);
    }
    else return false;

    return true;

}

function LoaiChan(nameIDdd) {
    if (nameIDdd.substr(nameIDdd.length - 3) == "upb") return false;
    else if (nameIDdd.split("-")[1] == ("OB")) return "oval";
    else if (nameIDdd.split("-")[1] == ("WB")) return "vuong";

    else return "????";

}


{

    #include "createDocumentMica2.jsx";
    // alert("okex")
    var doc = app.activeDocument;
    var typeTem = "mica 5mm 1M"; // khi createtem-group thì mới dùng
    var nameSave = "mica 5mm 1M"; // tên khi lưu


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


        var typeCrop = "den";
        var sttCropBox = [1, 1, 1, 2];
        openFile(FileDesign, arr[i], type);
        cropCanvasSize(arr[i].nameId);
        #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";

        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            doc.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();

            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

            ban = ban + 1;
            stt = i;
            #include "createDocumentMica2.jsx";
            doc = app.activeDocument;
            if (arr.length > Min_Number_auto) {
                #include "../split/taoTenBan.jsx";
            }

            var typeCrop = "den";
            var sttCropBox = [1, 1, 1, 2]
            openFile(FileDesign, arr[i], type);
            cropCanvasSize(arr[i].nameId);
            #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_black_resize_Dup_trans.jsx";




        }
        if ((G_boundDen[2] - G_boundDen[0]) != 0) {
            #include "caculatorPosition.jsx";
            #include "translateKHUNG.jsx";
            var sttCropBox = [1, 2, 1, 2]
            openFile(FileDesign, arr[i], type);
            cropCanvasSize(arr[i].nameId);
            #include "../split/Dung_Mot_Lan/NoOpen_cropBoxXY_resize_Dup_trans.jsx";
            #include "../split/canGiua11.jsx"; // căn giữa 1 file  Group_Khung và Group_In
        }


        if (i == arr.length - 1) {
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


        }
    }
}





var arrChan = []
for (var i = 0; i <= arr.length - 1; i++) {
    if (LoaiChan(arr[i].nameId)) arrChan.push(arr[i])
}

arr = arrChan;


var stt = 0;
ban = 0;

#include "createDocumentAll2.jsx";
// alert("okex")
var doc = app.activeDocument;
var typeTem = "chan de 1M"; // khi createtem-group thì mới dùng
var nameSave = "chan de 1M"; // tên khi lưu


var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

var Group_Khung = "KHUNG" // group file cắt đen, file khung
var Group_In = "IN TRUOC" //group file in
var Min_Number_auto = 10; // giới hạn 10 file để tạo bàn in

var kenhSpot1 = true;


for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    var sttcropCHan = cropCanvasSizeChan(arr[i].nameId);
    // if (!sttcropCHan) alert(arr[i].nameId);

    app.activeDocument.artLayers.add();
    app.doAction("strokeRed1px", "tool");
    app.activeDocument.mergeVisibleLayers();
    boxW = app.activeDocument.width + 591;
    boxH = app.activeDocument.height + 591;


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {


        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

        ban = ban + 1;
        stt = i;
        openFile(FileDesign, arr[i], type);
        cropCanvasSizeChan(arr[i].nameId);
        app.activeDocument.artLayers.add();
        app.doAction("strokeRed1px", "tool");
        app.activeDocument.mergeVisibleLayers();


    }

    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(doc.layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in


    {// them text

        app.activeDocument.artLayers.add();
        // app.activeDocument.activeLayer.move(app.activeDocument.layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.activeLayer.kind = LayerKind.TEXT;

        app.activeDocument.activeLayer.textItem.contents = "stt: " + arr[i].stt + " - " + LoaiChan(arr[i].nameId);
        app.activeDocument.activeLayer.textItem.size = 25;
        app.activeDocument.activeLayer.textItem.color = textColor;


        app.activeDocument.activeLayer.name = arr[i].stt;
        app.doAction("moveZero", "tool");



        app.activeDocument.activeLayer.translate((50), (50) * (-1));
        app.activeDocument.activeLayer.rasterize(RasterizeType.ENTIRELAYER);
        app.doAction("strokeRed1px", "tool");
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(doc.layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in


    }

    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    #include "caculatorPosition.jsx";
    #include "translateTRUOC.jsx";
    #include "translateKHUNG.jsx";


    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem


    }
}




