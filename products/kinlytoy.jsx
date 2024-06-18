

function xuLy(arr, wAll, hAll, FileDesign, FileName, type) {
    var folder1 = Folder("//192.168.1.240/in/" + type + "-" + FileName + "/con vat");
    if (!folder1.exists) { folder1.create(); }

    var yPosition, xPosition, hLast, wLast;
    var stt = 0;
    var arrcut = [];



    var wallcut = 10630;
    var hallcut = 10630;

    app.documents.add(wallcut, hallcut, 300, "GLLM");
    app.activeDocument.layerSets.add();
    app.activeDocument.activeLayer.name = "CMYK";
    app.activeDocument.layerSets.add();
    app.activeDocument.activeLayer.name = "SPOT";


    
    var yPosition = 0;
    var xPosition = 0;
    var hLast = 0;
    var wLast = 0;
    var ban = 0;
    var stt = 0;
    var khoangcach = 30;
    var folderall = Folder("//192.168.1.240/in/" + type + "-" + FileName);
    if (!folderall.exists) { folderall.create(); }
    for (var i = 0; i < arr.length; i++) { // tao arr cut
        for (var j = 0; j <= arr[i].length - 1; j++) {
            arrcut.push(arr[i][j]);
        }
    }
    for (var i = 0; i <= arrcut.length - 1; i++) { // loop làm file in

        var newpo = sttkinlytoy(yPosition, xPosition, hLast, wLast, ban, khoangcach, arrcut, i, k, hallcut, wallcut, true, type, FileName);
        yPosition = newpo[0]; xPosition = newpo[1]; hLast = newpo[2]; wLast = newpo[3]; ban = newpo[4];
        app.open(File(FileDesign + "/" + arrcut[i].sku + ".psd"));
        for (var k = 0; k < app.documents[arrcut[i].sku + ".psd"].layers.length; k++) {
            app.activeDocument = app.documents[arrcut[i].sku + ".psd"];
            app.activeDocument.activeLayer = app.activeDocument.layers[k]
            var theBounds = app.activeDocument.layers[k].bounds;
            var layerWidth = theBounds[2] - theBounds[0];
            var layerHeight = theBounds[3] - theBounds[1];
            var boxW = layerWidth + khoangcach;
            var boxH = layerHeight + khoangcach;
            if (layerHeight > 630)
                if (layerHeight > layerWidth) {
                    boxW = layerHeight + khoangcach;
                    boxH = layerWidth + khoangcach;

                    app.doAction("f4 90 do", "tool");
                }


            // qua ban in thi tao ban moi
            if ((yPosition + layerHeight + 30 + hLast > hallcut) && (xPosition + layerWidth + 30 + wLast) > wallcut) {
                app.activeDocument = app.documents["GLLM"];
                {

                    cropin();
                    app.activeDocument.saveAs(Folder(folder1 + "/cut " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                }

                app.documents.add(wallcut, hallcut, 300, "GLLM");
                app.activeDocument.layerSets.add();
                app.activeDocument.activeLayer.name = "CMYK";
                app.activeDocument.layerSets.add();
                app.activeDocument.activeLayer.name = "SPOT";

                yPosition = 0;
                xPosition = 0;
                hLast = 0;
                wLast = 0;
                ban = ban + 1;

            }
            // qua ban in thi tao ban moi


            {// tinh boxW va boxH moi


                if (xPosition + wLast + boxW <= wallcut) {
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
            }
            {
                app.activeDocument = app.documents[arrcut[i].sku + ".psd"];
                app.activeDocument.activeLayer.name = arrcut[i].stt + "-" + k;
                app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in

                { // translate layer đến vị trí cần in
                    app.activeDocument = app.documents["GLLM"];
                    app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arrcut[i].stt + "-" + k);
                    app.doAction("moveZero", "tool");
                    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
                }




            }


        }

        var newpo = sttkinlytoy(yPosition, xPosition, hLast, wLast, ban, khoangcach, arrcut, i, k, hallcut, wallcut, false, type, FileName);
        yPosition = newpo[0]; xPosition = newpo[1]; hLast = newpo[2]; wLast = newpo[3]; ban = newpo[4];
        app.documents[arrcut[i].sku + ".psd"].close(SaveOptions.DONOTSAVECHANGES);
    } // hết làm cut

    for (var i = 0; i < arrcut.length; i++) {

        app.open(File(FileDesign + "/" + arrcut[i].sku + ".png"));
        #include "saveDesign.jsx";
        saveImageTool(arrcut[i]);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }

    {
        app.open(File("//192.168.1.194/ps script data/tem.tif"));


        for (var j = 0; j < arrcut.length; j++) {
            moveTem(arrcut[j], type);
            var folder2 = Folder("//192.168.1.240/in/" + type + "-" + FileName + "/tem");
            if (!folder2.exists) { folder2.create(); }
            app.activeDocument.saveAs(Folder(folder2 + "/" + arrcut[j].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
        }
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
}


function sttkinlytoy(yPosition, xPosition, hLast, wLast, ban, khoangcach, arrcut, i, k, hallcut, wallcut, start, type, FileName) {

    app.open(File("//192.168.1.194/ps script data/sttkinlytoy.tif"));
    app.activeDocument.artLayers[0].textItem.contents = i + 1;
    app.doAction("sttkinlytoy", "tool");
    var boxW = app.activeDocument.width;
    var boxH = app.activeDocument.height;
    app.activeDocument.activeLayer.name = "stt" + i + start
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


    if ((yPosition + boxH + + khoangcach + hLast > hallcut) && (xPosition + boxW + + khoangcach + wLast) > wallcut) {
        app.activeDocument = app.documents["GLLM"];
        {

            cropin();
            app.activeDocument.saveAs(Folder(folder1 + "/cut " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }

        app.documents.add(wallcut, hallcut, 300, "GLLM");
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "CMYK";
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "SPOT";

        yPosition = 0;
        xPosition = 0;
        hLast = 0;
        wLast = 0;
        ban = ban + 1;

    }
    {// tinh boxW va boxH moi
        boxW = boxW + khoangcach;
        boxH = boxH + khoangcach;

        if (xPosition + wLast + boxW <= wallcut) {
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
    }
    app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + i + start);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

    if (i == arrcut.length - 1) {
        if (start != true) {

            if (k == app.documents[arrcut[i].sku + ".psd"].layers.length) {
                var folder1 = Folder("//192.168.1.240/in/" + type + "-" + FileName + "/con vat");
                cropin();

                app.activeDocument.saveAs(Folder(folder1 + "/cut " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }
        }

    }
    return [yPosition, xPosition, hLast, wLast, ban]

}
function cropin() {
    app.doAction("crop document normal", "tool");
    app.activeDocument.activeLayer = app.activeDocument.artLayers["CMYK copy"];
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
    app.activeDocument.artLayers["CMYK copy"].remove();
    app.activeDocument.resizeCanvas(app.activeDocument.width + 30, app.activeDocument.height + 30, AnchorPosition.MIDDLECENTER);
}

var pathmoveTemm = File("//192.168.1.194/photoshop-script-V4-ultimate/label/moveTem.jsx");
$.evalFile(pathmoveTemm);
