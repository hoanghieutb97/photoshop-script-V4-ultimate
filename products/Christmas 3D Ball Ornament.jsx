#include "createDocumentMica2.jsx";
typeTem = "mica3mm";
nameSave = "mica3mm";
var sanpham = "go";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";



    var widthden = 0;
    var heightden = 0;
    var xoay = false;
    var bounds1 = [];
    var bounds2 = [];
    var bounds3 = [];
    var boundsxxx = [];
    var boxW = 0;
    var boxH = 0;

    if (arr[i].nameId == "1M-CMS-Ball-1Line") {
        openFile(FileDesign, arr[i], type);
        #include "cropBlackCut-1Size2.jsx";

        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt).remove();
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

            #include "createDocumentMica2.jsx";


            openFile(FileDesign, arr[i], type);



            #include "cropBlackCut-1Size2.jsx";

            ban = ban + 1;
            stt = i;
        }
        #include "caculatorPosition.jsx";
        #include "translateKHUNG.jsx";

        if ((bounds2[2] - bounds2[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(((xPosition + (bounds2[0] - bounds1[0]))), ((yPosition + (bounds1[3] - bounds2[3]))) * (-1));
        }
        else {
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
            app.activeDocument.activeLayer.remove();
        }

    }
    else if (arr[i].nameId == "2M-CMS-Ball-1Line") {
        openFile(FileDesign, arr[i], type);
        #include "cropBlackCut-2Size2.jsx";

        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt).remove();
            app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt).remove();
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

            #include "createDocumentMica2.jsx";


            openFile(FileDesign, arr[i], type);



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
            app.activeDocument.activeLayer.translate(((xPosition + (bounds2[0] - bounds1[0]))), ((yPosition + (bounds1[3] - bounds2[3]))) * (-1));
        }
        else {
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
            app.activeDocument.activeLayer.remove();
        }
        if ((bounds3[2] - bounds3[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(((xPosition + (bounds3[0] - bounds1[0]))), ((yPosition + (bounds1[3] - bounds3[3]))) * (-1));
        }
        else {
            app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
            app.activeDocument.activeLayer.remove();
        }
    }
    else if (arr[i].nameId == "1M-CMS-Ball-2Line") {
        for (var k = 1; k < 3; k++) {
            openFile(FileDesign, arr[i], type);
            cropBoxInXY(k, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
            app.doAction("xoa stroke layer", "tool");

            #include "cropBlackCut-1Size2.jsx";

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
                app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt).remove();
                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

                #include "createDocumentMica2.jsx";


                openFile(FileDesign, arr[i], type);
                cropBoxInXY(k, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
                app.doAction("xoa stroke layer", "tool");


                #include "cropBlackCut-1Size2.jsx";

                ban = ban + 1;
                stt = i;
            }
            #include "caculatorPosition.jsx";
            #include "translateKHUNG.jsx";

            if ((bounds2[2] - bounds2[0]) != 0) {
                app.activeDocument.activeLayer.name = arr[i].stt;
                app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
                app.doAction("moveZero", "tool");
                app.activeDocument.activeLayer.translate(((xPosition + (bounds2[0] - bounds1[0]))), ((yPosition + (bounds1[3] - bounds2[3]))) * (-1));
            }
            else {
                app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
                app.activeDocument.activeLayer.remove();
            }

        }
    } else if (arr[i].nameId == "2M-CMS-Ball-2Line") {
        for (var k = 1; k < 3; k++) {
            openFile(FileDesign, arr[i], type);
            cropBoxInXY(k, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
            app.doAction("xoa stroke layer", "tool");
            #include "cropBlackCut-2Size2.jsx";

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt).remove();
                app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt).remove();
                app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt).remove();
                #include "saveallcropByNameNew.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

                #include "createDocumentMica2.jsx";


                openFile(FileDesign, arr[i], type);
                cropBoxInXY(k, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
                app.doAction("xoa stroke layer", "tool");


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
                app.activeDocument.activeLayer.translate(((xPosition + (bounds2[0] - bounds1[0]))), ((yPosition + (bounds1[3] - bounds2[3]))) * (-1));
            }
            else {
                app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
                app.activeDocument.activeLayer.remove();
            }
            if ((bounds3[2] - bounds3[0]) != 0) {
                app.activeDocument.activeLayer.name = arr[i].stt;
                app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
                app.doAction("moveZero", "tool");
                app.activeDocument.activeLayer.translate(((xPosition + (bounds3[0] - bounds1[0]))), ((yPosition + (bounds1[3] - bounds3[3]))) * (-1));
            }
            else {
                app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
                app.activeDocument.activeLayer.remove();
            }
        }
    }
    else alert("kiem tra lai nameId khong khop hehe")





    {
        app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
        app.doAction("sttkinlytoy", "tool");
        var boxW = app.activeDocument.width;
        var boxH = app.activeDocument.height;
        app.activeDocument.activeLayer.name = + arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN SAU"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
            app.activeDocument.layerSets["KHUNG"].artLayers.getByName("stt" + arr[i].stt).remove();
            app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName("stt" + arr[i].stt).remove();
            app.activeDocument.layerSets["IN SAU"].artLayers.getByName("stt" + arr[i].stt).remove();
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentMica2.jsx";

            ban = ban + 1;
            stt = i;
            app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
            app.activeDocument.artLayers[0].textItem.contents = arr[i].stt + 1;
            app.doAction("sttkinlytoy", "tool");
            var boxW = app.activeDocument.width;
            var boxH = app.activeDocument.height;
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN SAU"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
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
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

        app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
        app.activeDocument.activeLayer = app.activeDocument.layerSets["IN SAU"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
    }



    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem

    }
}

