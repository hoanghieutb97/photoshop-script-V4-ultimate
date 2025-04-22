
#include "createDocument DTF.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    #include "cropAndResize-boxW.jsx";
    var activeItemHeight = app.activeDocument.height;
    boxW = app.activeDocument.width + 236;
    boxH = activeItemHeight + 118 + 236 + 120;

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        {
            #include "cropDocument.jsx";
            app.doAction("chay ban DTF", "tool");
            var folderBanIn = Folder(folderContainer + "/ban in");
            if (!folderBanIn.exists) { folderBanIn.create(); }
            var WSave = Math.ceil(app.activeDocument.width.as("px") * 0.084667 / 10);
            var HSave = Math.ceil(app.activeDocument.height.as("px") * 0.084667 / 10);
            app.activeDocument.saveAs(Folder(folderBanIn + "/b" + (ban + 1) + "-" + WSave + "x" + HSave + "cm" + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
        }
        
        #include "createDocument DTF.jsx";
        ban = ban + 1;
        stt = i;

        openFile(FileDesign, arr[i], type);
        #include "cropAndResize-boxW.jsx";
        var activeItemHeight = app.activeDocument.height;
        boxW = app.activeDocument.width + 236;
        boxH = activeItemHeight + 118 + 236 + 120;


    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";



    app.open(File("//192.168.1.240/ps script data/sttkinlytoyNGang.tif"));
    app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
    app.doAction("sttkinlytoy", "tool");
    app.activeDocument.activeLayer.name = "stt" + i
    var Phtem = yPosition + activeItemHeight + 118;


    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + i);
    app.doAction("moveZero", "tool");

    app.activeDocument.activeLayer.translate(xPosition, (Phtem) * (-1));





    if (i == arr.length - 1) {

        #include "cropDocument.jsx";
        app.doAction("chay ban DTF", "tool");

        var folderBanIn = Folder(folderContainer + "/ban in");
        if (!folderBanIn.exists) { folderBanIn.create(); }

        var WSave = Math.ceil(app.activeDocument.width.as("px") * 0.084667 / 10);
        var HSave = Math.ceil(app.activeDocument.height.as("px") * 0.084667 / 10);

        app.activeDocument.saveAs(Folder(folderBanIn + "/b" + (ban + 1) + "-" + WSave + "x" + HSave + "cm" + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

