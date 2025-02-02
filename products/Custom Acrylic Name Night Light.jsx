#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {

    #include "convertPixel.jsx";

    openFile(FileDesign, arr[i], type);
    app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height - 412]);

    #include "cropBlackCut-1Size.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        // #include "xoaExpand12px.jsx";
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openFile(FileDesign, arr[i], type);
        app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height - 412]);
        #include "cropBlackCut-1Size.jsx";
        stt = i;
    }
    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";
    { // translate khung
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
    }

    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }



}

hAll=14173; wAll=28346;

#include "createDocument.jsx";
ban = 0;
stt = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    var nho = false


    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    if (app.activeDocument.width < 2400) nho = true
    app.activeDocument.crop([0, app.activeDocument.height - 412, app.activeDocument.width, app.activeDocument.height]);

    app.doAction("strokeRed1px", "tool");
    #include "cropAndResize-autoFill.jsx";

    boxW = app.activeDocument.width + 591;
    boxH = app.activeDocument.height + 591;

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "cropDocument.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/chan " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        
        hAll=14173; wAll=28346;

        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        if (app.activeDocument.width < 2400) nho = true
        app.activeDocument.crop([0, app.activeDocument.height - 412, app.activeDocument.width, app.activeDocument.height]);

        app.doAction("strokeRed1px", "tool");
        #include "cropAndResize-autoFill.jsx";
        boxW = app.activeDocument.width + 591;
        boxH = app.activeDocument.height + 591;
        stt = i;

    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    #include "translateCMYK.jsx";
    {// tao khung su
        if (nho) app.open(File("//192.168.1.240/ps script data/chan custom acrylic name night light.png"));
        else app.open(File("//192.168.1.240/ps script data/chan custom acrylic name night light to.png"));
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

    }
    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        #include "cropDocument.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/chan " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    }



}
