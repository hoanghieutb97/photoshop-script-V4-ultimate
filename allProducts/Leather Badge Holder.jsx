
#include "createDocumentAll2.jsx";
var doc = app.activeDocument;
var typeTem = "in Xuoi 1M"; // khi createtem-group thì mới dùng
var nameSave = "in Xuoi 1M"; // tên khi lưu
var MarginByBox = true; // nếu có thì nó lấy BOX ừ trong sheet để lưu

var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
var Group_Delete1 = "KHUNG";// merge 1 mặt- bàn in
var Group_Delete2 = "IN SAU";// merge 1 mặt- bàn in

var Group_Khung = "KHUNG" // group file cắt đen, file khung
var Group_In = "IN TRUOC" //group file in
var Status_delete_redLine = true;
var lat = false; // lật mica
var kenhSpot1 = true;
var strokeDo = true;


for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx"; 
    openFile(FileDesign, arr[i], type);
    app.doAction("strokeRed1px", "tool");
    #include "cropAndResize-boxW.jsx";


    // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

        #include "createDocumentAll2.jsx";
        ban = ban + 1;
        stt = i;
        openFile(FileDesign, arr[i], type);
        openFile(FileDesign, arr[i], type);
        app.doAction("strokeRed1px", "tool");
        #include "cropAndResize-boxW.jsx";




    }
    #include "caculatorPosition.jsx";

    var Group_Duplicate_layer = "IN TRUOC"
    #include "../split/DuplicateLayerGroup.jsx";
    #include "translateTRUOC.jsx";
    app.doAction("xoa stroke layer", "tool");


    {// tao khung
        app.open(File("//192.168.2.240/ps script data/Leather Badge Holder/Leather Badge Holder.png"));
        var Group_Duplicate_layer = "KHUNG"
        #include "../split/DuplicateLayerGroup.jsx";
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition + 24, (yPosition + 24) * (-1));



    }



    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


