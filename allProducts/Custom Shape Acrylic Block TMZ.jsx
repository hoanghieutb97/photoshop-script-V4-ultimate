
//////////////////////////////////////
#include "createDocumentAll2.jsx";

var nameSave = "mica15mm"; // tên khi lưu

var typeTem = "mica15mm"; // khi createtem-group thì mới dùng
var grop_Merge = "IN TRUOC"; // merge 1 mặt- bàn in
var Group_Khung = "KHUNG" // group file cắt đen, file khung
var Group_In = "IN TRUOC" //group file in
var Min_Number_auto = 10; // giới hạn 10 file để tạo bàn in
var lat = true; // lật mica
var kenhSpot1 = true;
var Status_delete_redLine = true;



var BuVienTong = 1.5 / 0.084667;

for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    app.doAction("strokeRed1px", "tool");
    app.doAction("canvasHoriz", "tool");
    // if (arr[i].nameId == "CSA-TMZ-4,3x5,9in") app.activeDocument.rotateCanvas(90);
    #include "cropAndResize-boxW.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocumentAll2.jsx";

        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        app.doAction("strokeRed1px", "tool");
        app.doAction("canvasHoriz", "tool");
        // if (arr[i].nameId == "CSA-TMZ-4,3x5,9in") app.activeDocument.rotateCanvas(90);
        #include "cropAndResize-boxW.jsx";



        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN SAU"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateTRUOC.jsx";
    #include "translateSAU.jsx";




    app.doAction("create reactangle tool", "tool")
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.move(app.activeDocument.layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);

    // Tính tỉ lệ cần scale
    var boundsKHUNGR = app.activeDocument.activeLayer.bounds;
    var widthR = boundsKHUNGR[2].as("px") - boundsKHUNGR[0].as("px");
    var heightR = boundsKHUNGR[3].as("px") - boundsKHUNGR[1].as("px");

    var scaleXR = ((wphone - BuVienTong) / widthR) * 100;  // phần trăm
    var scaleYR = ((hphone - BuVienTong) / heightR) * 100; // phần trăm

    app.activeDocument.activeLayer.resize(scaleXR, scaleYR);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition + BuVienTong / 2, (yPosition + BuVienTong / 2) * (-1));



    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}
// if (chayTuDong) {

//     var folderBanInTool = Folder(folderContainer + "/ban in-tool");
//     if (!folderBanInTool.exists) { folderBanInTool.create() }
//     if (arr.length > Min_Number_auto) {


//         #include "../split/taoBanGopMicaTo.jsx";

//         #include "../split/tif_mergeRed_groupMica2M.jsx";
//     }
//     else {
//         #include "../split/taoBanCatXongInMica2M.jsx";
//     }
//     // #include "../split/taoFileCatDen.jsx";
// }
