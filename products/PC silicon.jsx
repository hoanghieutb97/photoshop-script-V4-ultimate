
#include "createDocument.jsx";
var paddingPrintTB = 4 / 0.084667;
var paddingPrintLR = 4 / 0.084667;
for (var i = 0; i < arr.length; i++) {
    var Fhphone = Math.round(arr[i].hight / 0.084667);
    var Fwphone = Math.round(arr[i].width / 0.084667);
    var boxW = Math.round(arr[i].box[0] / 0.084667);
    var boxH = Math.round(arr[i].box[1] / 0.084667);


    stt = arr[i].stt;
    if (xPosition + wLast + boxW <= wAll) {
        xPosition = xPosition + wLast;
        wLast = boxW;
        if (hLast <= boxH)
            hLast = boxH;
    }
    else {
        xPosition = 0;
        yPosition = yPosition + hLast;
        wLast = boxW;
        hLast = boxH;
    }
    var wphone = Math.round(Fwphone - paddingPrintLR);
    var hphone = Math.round(Fhphone - paddingPrintTB);
    openFile(FileDesign, arr[i], type);
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    #include "cropAndResize-autoFill.jsx";


    if (arr[i].nameId.slice(0, 6) == "note10" || arr[i].nameId.slice(0, 6) == "22plus")
        app.doAction("createRectangle20", "tool");

    else if (arr[i].nameId.slice(0, 8) == "s22ultra" || arr[i].nameId.slice(0, 8) == "s23ultra")
        app.doAction("createRectangle10", "tool");
    else if (arr[i].nameId.slice(0, 1) == "i")
        app.doAction("createRectangle120", "tool");
    else
        app.doAction("createRectangle80", "tool");
    var boundKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.activeLayer.resize(wphone * 100 / (boundKhung[2] - boundKhung[0]), 100 * hphone / (boundKhung[3] - boundKhung[1]), AnchorPosition.MIDDLECENTER);
    var boundKhung2 = app.activeDocument.activeLayer.bounds;
    // alert((boundKhung[2] - boundKhung[0]), (boundKhung[3] - boundKhung[1]))
    app.doAction("selectAreaLayer", "tool");
    app.activeDocument.activeLayer.remove();
    app.doAction("duplicateSelection", "tool"); // tạo layer mới từ vùng chọn
    app.activeDocument.activeLayer.name = arr[i].stt; // đặt tên cho layer voi stt
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in\

    {// tao khung
        app.doAction("createRectangle10", "tool");


        app.activeDocument.activeLayer.resize(Fwphone * 100 / 1113, 100 * Fhphone / 1438, AnchorPosition.MIDDLECENTER);
        app.activeDocument.activeLayer.name = arr[i].stt; // đặt tên cho layer voi stt
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in


        app.activeDocument.activeLayer.remove();
    }


    // #include "saveDesign.jsx";
    // saveImageTool(arr[i], "a", "noneCrop");
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition + Math.round(paddingPrintLR / 2), ((yPosition + Math.round(paddingPrintTB / 2))) * (-1));

    app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

    if (i == arr.length - 1) {
        #include "cropDocument.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/ban 1.tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        var stt = 0;
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}

