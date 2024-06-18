
#include "createDocumentWooden.jsx";
for (var i = stt; i <= arr.length - 1; i++) {

    var end = 0;
    var coanh = false;
    #include "convertPixel.jsx";
    // alert((arr[i].nameId.split("-")[0] == "P"))
    var typex = arr[i].nameId.split("-");
    typex = typex[typex.length - 2];
    switch (typex) {
        case "2L":
            typex = 2;
            break;
        case "3L":
            typex = 3;
            break;
        case "5L":
            typex = 5;
            break;
        default:
            typex = 4;
            break;
    }
    // if (arr[i].nameId.split("-")[0] == "P") coanh = true
    for (var k = 0; k < typex - 1; k++) {
        { // lop 11

            if (coanh) openFile(FileDesign, arr[i], "front");
            else openFile(FileDesign, arr[i], type);
            xulyGOD(typex);
            cropBoxIn(k + 1, 1, typex, 2, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");
            app.activeDocument.activeLayer.name = arr[i].stt;

            var bounds1 = app.activeDocument.activeLayer.bounds;
            var boxW = bounds1[2] - bounds1[0] + 30;
            var boxH = bounds1[3] - bounds1[1] + 30;
            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
                nameSave = "go3mm";
                #include "saveallcropByName.jsx";
                $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
                #include "createDocumentWooden.jsx";
                ban = ban + 1;

                if (coanh) openFile(FileDesign, arr[i], "front");
                else openFile(FileDesign, arr[i], type);
                xulyGOD(typex);

                cropBoxIn(k + 1, 1, typex, 2, app.activeDocument.width, app.activeDocument.height);
                app.activeDocument.activeLayer.name = arr[i].stt;
                app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
                app.doAction("moveZero", "tool");
                app.doAction("xoa stroke layer", "tool");
                app.activeDocument.activeLayer.name = arr[i].stt;

                var bounds1 = app.activeDocument.activeLayer.bounds;
                var boxW = bounds1[2] - bounds1[0] + 30;
                var boxH = bounds1[3] - bounds1[1] + 30;
                stt = i;
            }


            #include "caculatorPosition.jsx";
            if ((bounds1[2] - bounds1[0]) != 0) {
                #include "translateCMYK.jsx";
            }
            else app.activeDocument.activeLayer.remove();


        }
        { // lop 12


            if (coanh) openFile(FileDesign, arr[i], "front");
            else openFile(FileDesign, arr[i], type);
            xulyGOD(typex);

            cropBoxIn(k + 1, 2, typex, 2, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = arr[i].stt;

            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");

            app.activeDocument.activeLayer.name = arr[i].stt;

            var bounds2 = app.activeDocument.activeLayer.bounds;
            if ((bounds2[2] - bounds2[0]) != 0) {
                app.activeDocument.activeLayer.name = arr[i].stt;
                app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
                app.doAction("moveZero", "tool");
                app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
            }
            else app.activeDocument.activeLayer.remove();

        }

    }

    if (arr[i].nameId.split("-").pop() == "WW") {

        { // lop 41

            if (coanh) openFile(FileDesign, arr[i], "front");
            else openFile(FileDesign, arr[i], type);
            xulyGOD(typex);

            cropBoxIn(typex, 1, typex, 2, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");
            app.activeDocument.activeLayer.name = arr[i].stt;

            var bounds1 = app.activeDocument.activeLayer.bounds;
            var boxW = bounds1[2] - bounds1[0] + 30;
            var boxH = bounds1[3] - bounds1[1] + 30;
            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
                nameSave = "go3mm";
                #include "saveallcropByName.jsx";
                $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
                #include "createDocumentWooden.jsx";
                ban = ban + 1;

                if (coanh) openFile(FileDesign, arr[i], "front");
                else openFile(FileDesign, arr[i], type);
                xulyGOD(typex);

                cropBoxIn(typex, 1, typex, 2, app.activeDocument.width, app.activeDocument.height);
                app.activeDocument.activeLayer.name = arr[i].stt;
                app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
                app.doAction("moveZero", "tool");
                app.doAction("xoa stroke layer", "tool");
                app.activeDocument.activeLayer.name = arr[i].stt;

                var bounds1 = app.activeDocument.activeLayer.bounds;
                var boxW = bounds1[2] - bounds1[0] + 30;
                var boxH = bounds1[3] - bounds1[1] + 30;
                stt = i;
            }


            #include "caculatorPosition.jsx";
            if ((bounds1[2] - bounds1[0]) != 0) {
                #include "translateCMYK.jsx";
            }
            else app.activeDocument.activeLayer.remove();

        }
        { // lop 4-2
            var lop = 42;
            if (coanh) openFile(FileDesign, arr[i], "front");
            else openFile(FileDesign, arr[i], type);
            xulyGOD(typex);

            cropBoxIn(typex, 2, typex, 2, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = arr[i].stt;

            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");

            app.activeDocument.activeLayer.name = arr[i].stt;

            var bounds2 = app.activeDocument.activeLayer.bounds;
            if ((bounds2[2] - bounds2[0]) != 0) {
                app.activeDocument.activeLayer.name = arr[i].stt;
                app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
                app.doAction("moveZero", "tool");
                app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
            }
            else app.activeDocument.activeLayer.remove();

        }
    }
    nameSave = "go3mm";
    folderLuu = folderTool;
    #include "nganCachDo.jsx";


    end = arr[i].stt;

    if ((end == arr.length)) {

        nameSave = "go3mm";
        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}




stt = 0;
ban = 0;
var noMica = false;
#include "createDocumentMica.jsx";
for (var i = stt; i <= arr.length - 1; i++) {

    var end = 0;

    #include "convertPixel.jsx";
    // alert((arr[i].nameId.split("-")[0] == "P"))
    var typex = arr[i].nameId.split("-");
    typex = typex[typex.length - 2];
    switch (typex) {
        case "2L":
            typex = 2;
            break;
        case "3L":
            typex = 3;
            break;
        case "5L":
            typex = 5;
            break;
        default:
            typex = 4;
            break;
    }

    if (arr[i].nameId.split("-").pop() == "WA") {
        noMica = true;
        var coanh = false;
        #include "convertPixel.jsx";
        // if (arr[i].nameId.split("-")[0] == "P") coanh = true

        { // lop 41

            if (coanh) openFile(FileDesign, arr[i], "front");
            else openFile(FileDesign, arr[i], type);
            xulyGOD(typex);

            cropBoxIn(typex, 1, typex, 2, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = arr[i].stt;
            activeDocument.activeLayer.resize(-100, undefined); //flip horizone
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");
            app.activeDocument.activeLayer.name = arr[i].stt;

            var bounds1 = app.activeDocument.activeLayer.bounds;
            var boxW = bounds1[2] - bounds1[0] + 30;
            var boxH = bounds1[3] - bounds1[1] + 30;
            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
                nameSave = "go3mm";
                #include "saveallcropByName.jsx";
                $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
                #include "createDocumentWooden.jsx";
                ban = ban + 1;

                if (coanh) openFile(FileDesign, arr[i], "front");
                else openFile(FileDesign, arr[i], type);
                xulyGOD(typex);

                cropBoxIn(typex, 1, typex, 2, app.activeDocument.width, app.activeDocument.height);
                app.activeDocument.activeLayer.name = arr[i].stt;
                activeDocument.activeLayer.resize(-100, undefined); //flip horizone
                app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
                app.doAction("moveZero", "tool");
                app.doAction("xoa stroke layer", "tool");
                app.activeDocument.activeLayer.name = arr[i].stt;

                var bounds1 = app.activeDocument.activeLayer.bounds;
                var boxW = bounds1[2] - bounds1[0] + 30;
                var boxH = bounds1[3] - bounds1[1] + 30;
                stt = i;
            }


            #include "caculatorPosition.jsx";
            if ((bounds1[2] - bounds1[0]) != 0) {
                #include "translateCMYK.jsx";
            }
            else app.activeDocument.activeLayer.remove();

        }
        { // lop 4-2
            var lop = 42;
            if (coanh) openFile(FileDesign, arr[i], "front");
            else openFile(FileDesign, arr[i], type);
            xulyGOD(typex);

            cropBoxIn(typex, 2, typex, 2, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = arr[i].stt;
            activeDocument.activeLayer.resize(-100, undefined); //flip horizone
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");

            app.activeDocument.activeLayer.name = arr[i].stt;

            var bounds2 = app.activeDocument.activeLayer.bounds;
            if ((bounds2[2] - bounds2[0]) != 0) {
                app.activeDocument.activeLayer.name = arr[i].stt;
                app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
                app.doAction("moveZero", "tool");
                app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
            }
            else app.activeDocument.activeLayer.remove();

        }


        nameSave = "mica3mm";
        folderLuu = folderTool;
        #include "nganCachDo.jsx";

    }

    end = arr[i].stt;

    if ((end == arr.length)) {

        if (noMica) {
            nameSave = "mica3mm";
            #include "saveallcropByName.jsx";

        }
        else app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    }

}


stt = 0;
ban = 0;
var nogiay = false;

#include "createDocumentA4.jsx";
var folderKhac = Folder(folderContainer + "/inGiay");
if (!folderKhac.exists) { folderKhac.create(); }

for (var i = stt; i <= arr.length - 1; i++) {

    nogiay = true;
    openFile(FileDesign, arr[i], "vvsvsv");
    xulyAnhGOD()
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    if ((PSpotKhung[2] - PSpotKhung[0]) != 0) {
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        app.doAction("strokeRed1px", "tool");
        boxW = app.activeDocument.width + 30;
        boxH = app.activeDocument.height + 30;

        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            #include "cropDocument.jsx";
            app.activeDocument.resizeCanvas(2480, 3508, AnchorPosition.MIDDLECENTER);
            app.activeDocument.saveAs(Folder(folderKhac + "/giay " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            #include "createDocumentA4.jsx";
            ban = ban + 1;
            openFile(FileDesign, arr[i], "dvdvdv");
            xulyAnhGOD()
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
            app.doAction("strokeRed1px", "tool");

            stt = i;

        }
        #include "caculatorPosition.jsx";
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "translateCMYK.jsx";




        { // ma vach
            app.open(File("//192.168.1.194/ps script data/bcsttkinlytoy.tif"));
            app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
            app.activeDocument.artLayers[1].textItem.contents = arr[i].orderId;
            app.doAction("sttkinlytoy", "tool");
            var boxW = app.activeDocument.width;
            var boxH = app.activeDocument.height;
            app.activeDocument.activeLayer.name = "stt" + arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
                app.activeDocument.layerSets["SPOT"].artLayers.getByName("stt" + arr[i].stt).remove();
                {
                    #include "cropDocumentAll.jsx";
                    app.activeDocument.resizeCanvas(2480, 3508, AnchorPosition.MIDDLECENTER);
                    app.activeDocument.saveAs(Folder(folderKhac + "/giay-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);

                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                }
                $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
                #include "createDocumentWooden.jsx";
                ban = ban + 1;
                stt = i;
                app.open(File("//192.168.1.194/ps script data/bcsttkinlytoy.tif"));
                app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
                app.activeDocument.artLayers[1].textItem.contents = arr[i].orderId;

                app.doAction("sttkinlytoy", "tool");
                var boxW = app.activeDocument.width;
                var boxH = app.activeDocument.height;
                app.activeDocument.activeLayer.name = "stt" + arr[i].stt;
                app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
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
            app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName("stt" + arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

        }

    } else app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);




    if (i == arr.length - 1) {
        if (nogiay) {
            #include "cropDocumentAll.jsx";
            app.activeDocument.resizeCanvas(2480, 3508, AnchorPosition.MIDDLECENTER);
            app.activeDocument.saveAs(Folder(folderKhac + "/giay-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);

        }
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }

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
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
}
function xulyGOD(typex) {

    app.activeDocument.crop([0, 0, typex * app.activeDocument.width / 9, 2 * app.activeDocument.height / 3]); //crop 4 in

}

function xulyAnhGOD() {
    app.activeDocument.crop([0, app.activeDocument.height * 2 / 3, app.activeDocument.width, app.activeDocument.height]); //crop 4 in
}