#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    var somanh = 5;
    var canvW = 412;

    #include "convertPixel.jsx";
    for (var k = 0; k < somanh; k++) {
        var coKhung = false;
        openFile(FileDesign, arr[i], type);
        app.activeDocument.crop([canvW, 0, app.activeDocument.width, app.activeDocument.height]);

        cropBoxIn(k + 1, 1, somanh, 2, app.activeDocument.width, app.activeDocument.height);



        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            #include "saveallcrop.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocument.jsx";
            ban = ban + 1;
            openFile(FileDesign, arr[i], type);
            app.activeDocument.crop([canvW, 0, app.activeDocument.width - canvW, app.activeDocument.height]);
            cropBoxIn(k + 1, 1, somanh, 1, app.activeDocument.width, app.activeDocument.height);
            #include "cropAndResize-autoFill.jsx";
            stt = i;
        }
        if (app.activeDocument.width > 1) {
            coKhung = true;
            #include "cropAndResize-autoFill.jsx";
            #include "caculatorPosition.jsx";
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            #include "translateCMYK.jsx";
        } else
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        openFile(FileDesign, arr[i], type);
        app.activeDocument.crop([canvW, 0, app.activeDocument.width, app.activeDocument.height]);
        cropBoxIn(k + 1, 2, somanh, 2, app.activeDocument.width, app.activeDocument.height);
        if (app.activeDocument.width > 1) {
            coKhung = true;
            #include "cropAndResize-autoFill.jsx";
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            #include "translateSPOT.jsx";
        }
        else
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        if (coKhung) {
            app.open(File("//192.168.1.240/ps script data/khung photoAlbumKeychain.png"));
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            #include "translateKHUNG.jsx";


        }
    }





    {
        app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = i + 1;
        app.doAction("sttkinlytoy", "tool");
        var boxW = app.activeDocument.width;
        var boxH = app.activeDocument.height;
        app.activeDocument.activeLayer.name = "stt" + i
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + i).remove();
            #include "saveallcrop.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocument.jsx";
            ban = ban + 1;

            app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
            app.activeDocument.artLayers[0].textItem.contents = i + 1;
            app.doAction("sttkinlytoy", "tool");
            var boxW = app.activeDocument.width;
            var boxH = app.activeDocument.height;
            app.activeDocument.activeLayer.name = "stt" + i
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        {// tinh boxW va boxH moi
            boxW = boxW + 30;
            boxH = boxH + 30;

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
        }
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + i);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
    }

    if (i == arr.length - 1) {
        #include "saveallcrop.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
    }

}

// Tạo và đặt các tùy chọn lưu BMP
var bmpOptions = new BMPSaveOptions();
bmpOptions.depth = BMPDepthType.EIGHT; // Độ sâu bit là 8
bmpOptions.alphaChannels = false; // Không sử dụng kênh alpha
bmpOptions.rleCompression = false; // Không nén RLE
var folderKhac = Folder(folderContainer + "/khac");
if (!folderKhac.exists) { folderKhac.create(); }

for (var i = stt; i <= arr.length - 1; i++) {
    var canvW = 412;
    var nameXX = arr[i].nameId;
    nameXX = nameXX.split("-")[0]
    openFile(FileDesign, arr[i], type);
    app.activeDocument.crop([0, 0, canvW, app.activeDocument.height]);

    cropBoxKhac(1, 1, 1, 2, app.activeDocument.width, app.activeDocument.height);
    if (app.activeDocument.width != 1) {
        app.activeDocument.resizeCanvas(415, 472, AnchorPosition.MIDDLECENTER);

        app.doAction("overlayblack", "tool");
        app.doAction("khac moca khoa da", "tool");

        app.activeDocument.changeMode(ChangeMode.GRAYSCALE);
        app.activeDocument.saveAs(Folder(folderKhac + "/" + arr[i].stt + "-ngoai-" + nameXX + ".bmp"), bmpOptions, true, Extension.LOWERCASE);
    }
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


    openFile(FileDesign, arr[i], type);
    app.activeDocument.crop([0, 0, canvW, app.activeDocument.height]);

    cropBoxKhac(1, 2, 1, 2, app.activeDocument.width, app.activeDocument.height);
    if (app.activeDocument.width != 1) {
        app.activeDocument.resizeCanvas(415, 472, AnchorPosition.MIDDLECENTER);
        app.doAction("overlayblack", "tool");
        app.doAction("khac moca khoa da", "tool");
        app.activeDocument.changeMode(ChangeMode.GRAYSCALE);
        app.activeDocument.saveAs(Folder(folderKhac + "/" + arr[i].stt + "-trong-" + nameXX + ".bmp"), bmpOptions, true, Extension.LOWERCASE);



    }
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

}




function cropBoxIn(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
        [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

    ]);





    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    // if(boxX==2 && boxY==2)vsvsdv
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.layers[1].remove();
    app.doAction("xoa stroke layer", "tool");


    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    if ((PSpotKhung[2] - PSpotKhung[0]) != 0) {
        app.activeDocument.selection.select([
            [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
            [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
            [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
            [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

        ]);

        app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
        app.activeDocument.crop(app.activeDocument.selection.bounds);
    }
    else app.activeDocument.crop([0, 0, 1, 1]);



}
function cropBoxKhac(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
        [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

    ]);





    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    // if(boxX==2 && boxY==2)vsvsdv
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.layers[1].remove();
    app.doAction("xoa stroke layer", "tool");


    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    if ((PSpotKhung[2] - PSpotKhung[0]) != 0) {
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
    }
    else app.activeDocument.crop([0, 0, 1, 1]);


}