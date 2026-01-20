/////////////
// #include "createDocument.jsx";
var jpegOptions = new JPEGSaveOptions();
jpegOptions.quality = 12;

var folderBanInTool = Folder(folderContainer + "/ban in");
if (!folderBanInTool.exists) { folderBanInTool.create() }

#include "createDocumentGiayCN.jsx";

var doc = app.activeDocument;
var Group_In = "IN TRUOC" //group file in


for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    app.doAction("canvasHoriz", "tool");
    if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
    app.activeDocument.resizeImage(null, UnitValue(700, "px"), 300, ResampleMethod.BICUBIC);
    app.activeDocument.resizeCanvas(2553, 699, AnchorPosition.MIDDLECENTER);
    app.doAction("strokeRed1px", "tool");
    app.activeDocument.activeLayer.name = arr[i].stt;
    var G_boundAll = app.activeDocument.activeLayer.bounds;
    app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_In], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    var boxW = G_boundAll[2] - G_boundAll[0] + 30;
    var boxH = G_boundAll[3] - G_boundAll[1] + 30;
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        doc.layerSets[Group_In].artLayers.getByName(arr[i].stt).remove();
        if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
          app.open(File("//192.168.2.240/ps script data/mau coc a4.tif"));
    app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_In], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
             doc.activeLayer = doc.layerSets.getByName(Group_In);
        app.doAction("merge active group", "tool");
        var selectionBounds = app.activeDocument.activeLayer.bounds;
        var padding = 30;
        var newBounds = [selectionBounds[0] - padding, selectionBounds[1] - padding, selectionBounds[2] + padding, selectionBounds[3] + padding];
        app.activeDocument.crop(newBounds);
               app.activeDocument.mergeVisibleLayers();
        app.doAction("canvasHoriz", "tool");
        app.doAction("lam mau coc flowervase", "tool");
            app.doAction("canvasHoriz", "tool");
         app.doAction("crop canvas a4", "tool");
   
        
        app.activeDocument.saveAs(Folder(folderBanInTool + "/ban - " + (ban + 1) + ".jpg"), jpegOptions, true, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));


        #include "createDocumentGiayCN.jsx";
        var doc = app.activeDocument;
        ban = ban + 1;
        stt = i;
        openFile(FileDesign, arr[i], type);
        app.doAction("canvasHoriz", "tool");
        if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
        app.activeDocument.resizeImage(null, UnitValue(700, "px"), 300, ResampleMethod.BICUBIC);
        app.activeDocument.resizeCanvas(2553, 699, AnchorPosition.MIDDLECENTER);
        app.doAction("strokeRed1px", "tool");
        app.activeDocument.activeLayer.name = arr[i].stt;
        var G_boundAll = app.activeDocument.activeLayer.bounds;
        app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_In], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        var boxW = G_boundAll[2] - G_boundAll[0] + 30;
        var boxH = G_boundAll[3] - G_boundAll[1] + 30;

    }

    #include "caculatorPosition.jsx";
    #include "translateTRUOC.jsx";
     #include "../split/nganCachDoNew.jsx"; // căn giữa 1 file  Group_Khung và Group_In
    if (i == arr.length - 1) {
        if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
          app.open(File("//192.168.2.240/ps script data/mau coc a4.tif"));
    app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_In], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
     app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        doc.activeLayer = doc.layerSets.getByName(Group_In);
        app.doAction("merge active group", "tool");
        var selectionBounds = app.activeDocument.activeLayer.bounds;
        var padding = 30;
        var newBounds = [selectionBounds[0] - padding, selectionBounds[1] - padding, selectionBounds[2] + padding, selectionBounds[3] + padding];
        app.activeDocument.crop(newBounds);
        app.activeDocument.mergeVisibleLayers();
        app.doAction("canvasHoriz", "tool");
        app.doAction("lam mau coc flowervase", "tool");
            app.doAction("canvasHoriz", "tool");
         app.doAction("crop canvas a4", "tool");

        app.activeDocument.saveAs(Folder(folderBanInTool + "/ban - " + (ban + 1) + ".jpg"), jpegOptions, true, Extension.LOWERCASE);
       
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


