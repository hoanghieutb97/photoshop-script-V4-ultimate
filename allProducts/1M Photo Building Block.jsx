
#include "createDocumentAll2.jsx";
var doc = app.activeDocument;
var typeTem = "in Xuoi"; // khi createtem-group thì mới dùng
var nameSave = "in Xuoi"; // tên khi lưu
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
    if ((arr[i].nameId).substr(0, 1) == "x") app.activeDocument.rotateCanvas(-90);
    #include "../split/cropAndResize-autoFillNew.jsx";


    // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

        #include "createDocumentAll2.jsx";
        ban = ban + 1;
        stt = i;
        openFile(FileDesign, arr[i], type);
        app.doAction("strokeRed1px", "tool");
        if ((arr[i].nameId).substr(0, 1) == "x") app.activeDocument.rotateCanvas(-90);
        #include "../split/cropAndResize-autoFillNew.jsx";



    }
    #include "caculatorPosition.jsx";

    var Group_Duplicate_layer = "IN TRUOC"
    #include "../split/DuplicateLayerGroup.jsx";
    #include "translateTRUOC.jsx";

    openFile(FileDesign, arr[i], type);
    app.doAction("strokeRed1px", "tool");
    if ((arr[i].nameId).substr(0, 1) == "x") app.activeDocument.rotateCanvas(-90);
    #include "../split/cropAndResize-autoFillNew.jsx";
    app.doAction("LayerToBackgroundWhite", "tool");
    Group_Duplicate_layer = "KHUNG"
    #include "../split/DuplicateLayerGroup.jsx";
    #include "translateKHUNG.jsx";
    app.doAction("overlayblack", "tool");




    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


// if (chayTuDong) {
//     var folderBanInTool = Folder(folderContainer + "/ban in-tool");
//     if (!folderBanInTool.exists) { folderBanInTool.create() }


//     #include "../split/taoBanCatXongIn.jsx";

// }