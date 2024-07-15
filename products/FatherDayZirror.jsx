//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {


    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    if ((arr[i].nameId == "Zir-nd01-6x8in") || (arr[i].nameId == "Zir-nd01-8x10in") || (arr[i].nameId == "Zir-nd01-8x8in")) {
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
    }
    app.doAction("strokeRed1px", "tool");
    // app.doAction("canvasHoriz", "tool");
    if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    #include "cropAndResize-autoFill.jsx";
    boxW = boxW - 30;
    boxH = boxH - 30;


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        // if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        { // crop document
            app.doAction("crop document normal", "tool");
            app.activeDocument.activeLayer = app.activeDocument.artLayers["CMYK copy"];
            var selectionBounds = app.activeDocument.activeLayer.bounds;
            var padding = 0;
            var newBounds = [
                selectionBounds[0] - padding,
                selectionBounds[1] - padding,
                selectionBounds[2] + padding,
                selectionBounds[3] + padding
            ];
            app.activeDocument.crop(newBounds);
            app.activeDocument.artLayers["CMYK copy"].remove();
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

            app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        { /// lam tem
            app.open(File("//192.168.1.240/ps script data/tem.tif"));
            if (i < arr.length - 1)
                for (var j = stt; j < i; j++) {

                    moveTem(arr[j], type);
                    folderBan = Folder(folderTem + "/b-" + (ban + 1));
                    if (!folderBan.exists) { folderBan.create(); }
                    app.activeDocument.saveAs(Folder(folderBan + "/" + arr[j].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
                }
            else if (i == arr.length - 1)
                for (var j = stt; j <= i; j++) {

                    moveTem(arr[j], type);
                    folderBan = Folder(folderTem + "/b-" + (ban + 1));
                    if (!folderBan.exists) { folderBan.create(); }
                    app.activeDocument.saveAs(Folder(folderBan + "/" + arr[j].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
                }
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        }


        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        if ((arr[i].nameId == "Zir-nd01-6x8in") || (arr[i].nameId == "Zir-nd01-8x10in") || (arr[i].nameId == "Zir-nd01-8x8in")) {
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        }
        app.doAction("strokeRed1px", "tool");
        // app.doAction("canvasHoriz", "tool");
        if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        #include "cropAndResize-autoFill.jsx";

        boxW = boxW - 30;
        boxH = boxH - 30;


        stt = i;
    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    // app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    // #include "translateSPOT.jsx";





    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"];
    if (arr[i].nameId == "fathersday26x16cm") app.doAction("createRectangle26x16cm", "tool");
    else if (arr[i].nameId == "fathersday18x10cm") app.doAction("createRectangle18x10cm", "tool");
    else if (arr[i].nameId == "Zir-nd01-6x8in") app.doAction("createRectangle6x8in", "tool");
    else if (arr[i].nameId == "Zir-nd01-8x10in") app.doAction("createRectangle8x10in", "tool");
    else if (arr[i].nameId == "Zir-nd01-8x8in") app.doAction("createRectangle8x8in", "tool");
    else  app.doAction("createRectangle8x8in", "tool");

    app.activeDocument.activeLayer.name = arr[i].stt;
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate((xPosition + 12), (yPosition + 12) * (-1));
    if (i == arr.length - 1) {
        { // crop document
            app.doAction("crop document normal", "tool");
            app.activeDocument.activeLayer = app.activeDocument.artLayers["CMYK copy"];
            var selectionBounds = app.activeDocument.activeLayer.bounds;
            var padding = 0;
            var newBounds = [
                selectionBounds[0] - padding,
                selectionBounds[1] - padding,
                selectionBounds[2] + padding,
                selectionBounds[3] + padding
            ];
            app.activeDocument.crop(newBounds);
            app.activeDocument.artLayers["CMYK copy"].remove();
            if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);

            app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }



        { /// lam tem
            app.open(File("//192.168.1.240/ps script data/tem.tif"));
            if (i < arr.length - 1)
                for (var j = stt; j < i; j++) {

                    moveTem(arr[j], type);
                    folderBan = Folder(folderTem + "/b-" + (ban + 1));
                    if (!folderBan.exists) { folderBan.create(); }
                    app.activeDocument.saveAs(Folder(folderBan + "/" + arr[j].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
                }
            else if (i == arr.length - 1)
                for (var j = stt; j <= i; j++) {

                    moveTem(arr[j], type);
                    folderBan = Folder(folderTem + "/b-" + (ban + 1));
                    if (!folderBan.exists) { folderBan.create(); }
                    app.activeDocument.saveAs(Folder(folderBan + "/" + arr[j].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
                }
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        }


    }
}





function moveTem(item, type) {


    app.activeDocument.artLayers[3].textItem.contents = item.nameId + " - " + item.stt // thong tin stt

    app.activeDocument.artLayers[0].textItem.contents = item.orderId; // thong tin order

    var pathObj = File("//192.168.1.240/photoshop-script-V4-ultimate/label/objBarcode.jsx");
    $.evalFile(pathObj);

    var nameItem = item.barcode.split("");

    var nameConvert = [];
    for (var i = 0; i < nameItem.length; i = i + 2) {
        nameConvert.push(nameItem[i].concat(nameItem[i + 1]));

    }
    for (var j = 0; j < nameConvert.length; j++) {
        nameConvert[j] = obj[nameConvert[j]]

    }
    nameConvert = nameConvert.join("");
    app.activeDocument.artLayers[2].textItem.contents = String.fromCharCode(203) + nameConvert + String.fromCharCode(204); // thong bin barcode
    if (item.partner !== null)
        app.activeDocument.artLayers[4].textItem.contents = item.orderName; // thong tin partner
    else
        app.activeDocument.artLayers[4].textItem.contents = "!!!"; // thong tin partner
    app.activeDocument.artLayers[5].textItem.contents = item.dateItem.substr(8, 2) + "-" + item.dateItem.substr(5, 2) // thong tin date

    if (item.Quantity <= 1) { app.activeDocument.artLayers.getByName("amount").textItem.contents = "" }
    else {
        app.activeDocument.artLayers.getByName("amount").textItem.contents = item.Quantity;
    }

    // app.activeDocument.artLayers[6].textItem.contents = item.country; // country

}
