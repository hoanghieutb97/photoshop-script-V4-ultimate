
/////////////////
#include "createDocument.jsx";
var lastName = ""
for (var i = 0; i <= arr.length - 1; i++) { // loop làm file in
    #include "convertPixel.jsx";
    #include "caculatorPosition.jsx";
    #include "phoneCase arrangeFile.jsx"; // xử mở và xử lý file, đưa sang document GLLM
    if (i == arr.length - 1) {
        { // xử lý sau khi duplicate hết items crop, xoay 180, tao spot
            app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName("SPOTKhung");
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
            app.doAction("selectArea", "tool");
            app.doAction("Area expan 1", "tool");
            app.doAction("createSPOTWithArea", "tool");
        }
        { // lưu file khung
            app.activeDocument.layerSets.getByName("SPOT").visible = false;
            app.activeDocument.layerSets.getByName("CMYK").visible = false;
            app.activeDocument.saveAs(Folder(folderTool + "/khung 1.tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        }
        {// lưu file in
            app.activeDocument.channels.getByName("1").remove();
            app.activeDocument.layerSets.getByName("CMYK").visible = true;
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);
            app.activeDocument.saveAs(Folder(folderTool + "/in 1.tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            
        }
        {// file trang
            app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName("CMYK");
            app.doAction("createSmarkOBJ", "tool");
            app.doAction("selectArea", "tool");
            app.doAction("createSPOTWithArea", "tool");
            app.activeDocument.artLayers.getByName("CMYK").visible = false;
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);
            app.activeDocument.saveAs(Folder(folderTool + "/white 1.tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
       var  stt = 0;
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }

}

