

var arrWA = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i].nameId.split("-").shift() == "WA") arrWA.push(arr[i])

}
#include "createDocumentWooden2.jsx";

typeTem = "go5mm";
nameSave = "go5mm";
for (var i = stt; i <= arr.length - 1; i++) {
#include "convertPixel.jsx";

    var sanpham = "go";

    var widthden = 0;
    var heightden = 0;
    var xoay = false;
    var bounds1 = [];
    var bounds2 = [];
    var bounds3 = [];
    var boundsxxx = [];
    var boxW = 0;
    var boxH = 0;
    
    openFile(FileDesign, arr[i], "0front");
    cropBoxInXY(1, 1, 2, 3, app.activeDocument.width, app.activeDocument.height);
    app.doAction("xoa stroke layer", "tool");
    var boundsGoc = app.activeDocument.activeLayer.bounds;
    var widthden = boundsGoc[2] - boundsGoc[0];
    var heightden = boundsGoc[3] - boundsGoc[1];
    if (widthden > heightden) {
        xoay = true;
        var x = widthden;
        widthden = heightden;
        heightden = x;
    }
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);



    { // lop w1

        openFile(FileDesign, arr[i], type);
        cropBoxInXY(1, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
        app.doAction("xoa stroke layer", "tool");
        #include "cropBlackCut-2Size2.jsx";
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt).remove();

            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

            #include "createDocumentWooden2.jsx";


            openFile(FileDesign, arr[i], type);
            cropBoxInXY(1, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
            #include "cropBlackCut-2Size2.jsx";

            ban = ban + 1;
            stt = i;
        }


        #include "caculatorPosition.jsx";
        #include "translateKHUNG.jsx";

        if ((bounds2[2] - bounds2[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(((xPosition + (wphone / heightden) * (bounds2[0] - bounds1[0]))), ((yPosition + (wphone / heightden) * (bounds1[3] - bounds2[3]))) * (-1));

        }
        else {
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
            app.activeDocument.activeLayer.remove();
        }

        if ((bounds3[2] - bounds3[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(((xPosition + (wphone / heightden) * (bounds3[0] - bounds1[0]))), ((yPosition + (wphone / heightden) * (bounds1[3] - bounds3[3]))) * (-1));

        }
        else {
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
            app.activeDocument.activeLayer.remove();
        }
    }

    if (arr[i].nameId.split("-").shift() == "WW") { // lop w2

        openFile(FileDesign, arr[i], type);
        cropBoxInXY(2, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
        app.doAction("xoa stroke layer", "tool");
        #include "cropBlackCut-2Size2.jsx";
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt).remove();

            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

            #include "createDocumentWooden2.jsx";


            openFile(FileDesign, arr[i], type);
            cropBoxInXY(2, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
            #include "cropBlackCut-2Size2.jsx";

            ban = ban + 1;
            stt = i;
        }


        #include "caculatorPosition.jsx";
        #include "translateKHUNG.jsx";

        if ((bounds2[2] - bounds2[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(((xPosition + (wphone / heightden) * (bounds2[0] - bounds1[0]))), ((yPosition + (wphone / heightden) * (bounds1[3] - bounds2[3]))) * (-1));

        }
        else {
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
            app.activeDocument.activeLayer.remove();
        }

        if ((bounds3[2] - bounds3[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(((xPosition + (wphone / heightden) * (bounds3[0] - bounds1[0]))), ((yPosition + (wphone / heightden) * (bounds1[3] - bounds3[3]))) * (-1));

        }
        else {
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
            app.activeDocument.activeLayer.remove();
        }

    }

    { // ngan cach do
        app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
        app.doAction("sttkinlytoy", "tool");
        var boxW = app.activeDocument.width;
        var boxH = app.activeDocument.height;
        app.activeDocument.activeLayer.name = arr[i].stt;
        if (app.documents["GLLM"].layerSets["KHUNG"].layers.length > 0) app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);
        if (app.documents["GLLM"].layerSets["IN TRUOC"].layers.length > 0) app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);
        if (app.documents["GLLM"].layerSets["IN SAU"].layers.length > 0) app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN SAU"], ElementPlacement.PLACEATBEGINNING);

        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
            app.activeDocument.layerSets["KHUNG"].artLayers.getByName("stt" + arr[i].stt).remove();
            app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName("stt" + arr[i].stt).remove();
            app.activeDocument.layerSets["IN SAU"].artLayers.getByName("stt" + arr[i].stt).remove();
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

            #include "createDocumentMica.jsx";

            ban = ban + 1;
            stt = i;
            app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
            app.activeDocument.artLayers[0].textItem.contents = i + 1;
            app.doAction("sttkinlytoy", "tool");
            var boxW = app.activeDocument.width;
            var boxH = app.activeDocument.height;
            app.activeDocument.activeLayer.name = arr[i].stt;
            if (app.activeDocument.layerSets["KHUNG"].layers.length > 0) app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);
            if (app.activeDocument.layerSets["KHUNG"].layers.length > 0) app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);
            if (app.activeDocument.layerSets["KHUNG"].layers.length > 0) app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN SAU"], ElementPlacement.PLACEATBEGINNING);

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
        if (app.activeDocument.layerSets["KHUNG"].layers.length > 0)
            #include "translateKHUNG.jsx";
        if (app.activeDocument.layerSets["IN TRUOC"].layers.length > 0)
            #include "translateTRUOC.jsx";
        if (app.activeDocument.layerSets["IN SAU"].layers.length > 0)
            #include "translateSAU.jsx";



    }

    if ((i == arr.length - 1)) {

        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

    }
}

arr = arrWA;
if (arrWA.length > 0) {
    #include "createDocumentMica2.jsx";
    typeTem = "mica5mm";
    nameSave = "mica5mm";
    for (var i = stt; i <= arr.length - 1; i++) {
        var sanpham = "mica";

        var widthden = 0;
        var heightden = 0;
        var xoay = false;
        #include "convertPixel.jsx";
        openFile(FileDesign, arr[i], "0front");
        cropBoxInXY(1, 1, 2, 3, app.activeDocument.width, app.activeDocument.height);
        app.doAction("xoa stroke layer", "tool");
        var boundsGoc = app.activeDocument.activeLayer.bounds;
        var widthden = boundsGoc[2] - boundsGoc[0];
        var heightden = boundsGoc[3] - boundsGoc[1];
        if (widthden > heightden) {
            xoay = true;
            var x = widthden;
            widthden = heightden;
            heightden = x;
        }
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


        var bounds1 = [];
        var bounds2 = [];
        var bounds3 = [];
        var boundsxxx = [];
        var boxW = 0;
        var boxH = 0;



        openFile(FileDesign, arr[i], type);
        cropBoxInXY(2, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
        app.doAction("xoa stroke layer", "tool");
        #include "cropBlackCut-2Size2.jsx";
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt).remove();

            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

            #include "createDocumentMica2.jsx";


            openFile(FileDesign, arr[i], type);
            cropBoxInXY(2, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
            #include "cropBlackCut-2Size2.jsx";

            ban = ban + 1;
            stt = i;
        }


        #include "caculatorPosition.jsx";
        #include "translateKHUNG.jsx";

        if ((bounds2[2] - bounds2[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(((xPosition + (wphone / heightden) * (bounds2[0] - bounds1[0]))), ((yPosition + (wphone / heightden) * (bounds1[3] - bounds2[3]))) * (-1));

        }
        else {
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
            app.activeDocument.activeLayer.remove();
        }

        if ((bounds3[2] - bounds3[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(((xPosition + (wphone / heightden) * (bounds3[0] - bounds1[0]))), ((yPosition + (wphone / heightden) * (bounds1[3] - bounds3[3]))) * (-1));

        }
        else {
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
            app.activeDocument.activeLayer.remove();
        }





        if ((i == arr.length - 1)) {

            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem

        }
    }

}