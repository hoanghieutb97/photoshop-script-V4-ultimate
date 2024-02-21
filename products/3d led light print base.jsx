#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);

    if (arr[i].nameId == "RGB-oval-5,9in"
        || arr[i].nameId == "RGB-oval-printB-5,9in"
        || arr[i].nameId == "Y-oval-5,9in"
        || arr[i].nameId == "Y-oval-printB-5,9in") {

        app.activeDocument.resizeCanvas(1890, 4252, AnchorPosition.TOPCENTER);

    } else if (arr[i].nameId == "RGB-led-WB-7,87in" || arr[i].nameId == "Y-led-WB-7,87in" || arr[i].nameId == "RGB-led-OB-7,87" || arr[i].nameId == "RGB-led-OB-7,87in" || arr[i].nameId == "Y-oval-7,87") {
        app.activeDocument.resizeCanvas(2480, 5315, AnchorPosition.TOPCENTER);
    }

    else if (arr[i].nameId == "Y-led-WB-5,9in") {
        app.activeDocument.resizeCanvas(1890, 3780, AnchorPosition.TOPCENTER);
    }
    #include "cropBlackCut-1Size.jsx";
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);

        if (arr[i].nameId == "RGB-oval-5,9in"
            || arr[i].nameId == "RGB-oval-printB-5,9in"
            || arr[i].nameId == "Y-oval-5,9in"
            || arr[i].nameId == "Y-oval-printB-5,9in") {

            app.activeDocument.resizeCanvas(1890, 4252, AnchorPosition.TOPCENTER);

        } else if (arr[i].nameId == "RGB-led-WB-7,87in") {
            app.activeDocument.resizeCanvas(2480, 5315, AnchorPosition.TOPCENTER);
        }

        else if (arr[i].nameId == "Y-led-WB-5,9in") {
            app.activeDocument.resizeCanvas(1890, 3780, AnchorPosition.TOPCENTER);
        }
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
    #include "xoaExpand12px.jsx";
    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}







var stt = 0;
ban = 0;
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    if (arr[i].nameId == "RGB-oval-5,9in"
        || arr[i].nameId == "RGB-oval-printB-5,9in"
        || arr[i].nameId == "Y-oval-5,9in"
        || arr[i].nameId == "Y-oval-printB-5,9in") {

        app.activeDocument.resizeCanvas(1890, 472, AnchorPosition.BOTTOMCENTER);

    } else if (arr[i].nameId == "RGB-led-WB-7,87in" || arr[i].nameId == "Y-led-WB-7,87in" || arr[i].nameId == "RGB-led-OB-7,87" || arr[i].nameId == "RGB-led-OB-7,87in" || arr[i].nameId == "Y-oval-7,87") {
        app.activeDocument.resizeCanvas(2480, 484, AnchorPosition.BOTTOMCENTER);
    } else if (arr[i].nameId == "Y-led-WB-5,9in") {
        app.activeDocument.resizeCanvas(1890, 472, AnchorPosition.TOPCENTER);
    }
    app.activeDocument.artLayers.add();

    app.doAction("strokeRed1px", "tool");
    #include "boxWFlexible.jsx";



    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
        app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        if (arr[i].nameId == "RGB-oval-5,9in"
            || arr[i].nameId == "RGB-oval-printB-5,9in"
            || arr[i].nameId == "Y-oval-5,9in"
            || arr[i].nameId == "Y-oval-printB-5,9in") {

            app.activeDocument.resizeCanvas(1890, 472, AnchorPosition.BOTTOMCENTER);

        } else if (arr[i].nameId == "RGB-led-WB-7,87in" || arr[i].nameId == "Y-led-WB-7,87in" || arr[i].nameId == "RGB-led-OB-7,87" || arr[i].nameId == "RGB-led-OB-7,87in" || arr[i].nameId == "Y-oval-7,87") {
            app.activeDocument.resizeCanvas(2480, 484, AnchorPosition.BOTTOMCENTER);
        } else if (arr[i].nameId == "Y-led-WB-5,9in") {
            app.activeDocument.resizeCanvas(1890, 472, AnchorPosition.TOPCENTER);
        }
        app.activeDocument.artLayers.add();
        app.doAction("strokeRed1px", "tool");
        #include "boxWFlexible.jsx";
        stt = i;
    }
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";

    if (i == arr.length - 1) {
        #include "cropDocument.jsx";

        app.activeDocument.saveAs(Folder(folderTool + "/chan " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

