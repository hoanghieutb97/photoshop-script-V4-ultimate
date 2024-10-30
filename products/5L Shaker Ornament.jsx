#include "createDocumentMica.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    var boundsLayer1 = 0;
    var layer1Width = 0;
    var layer1Height = 0;
    { // lop 1
        var lop = 1;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");
        app.activeDocument.activeLayer.name = arr[i].stt;


        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();

            #include "cropDocumentAll.jsx";
            app.activeDocument.saveAs(Folder(folderTool + "/1mat- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentMica.jsx";
            ban = ban + 1;
            var lop = 1;
            openFile(FileDesign, arr[i], type);
            cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");
            app.activeDocument.activeLayer.name = arr[i].stt;

            stt = i;
        }
        var bounds1 = app.activeDocument.activeLayer.bounds;
        var boxW = bounds1[2] - bounds1[0] + 30;
        var boxH = bounds1[3] - bounds1[1] + 30;

        #include "caculatorPosition.jsx";
        #include "translateCMYK.jsx";

        boundsLayer1 = app.activeDocument.activeLayer.bounds; // Lấy giới hạn của Layer 1 (tọa độ trái, trên, phải, dưới)
        layer1Width = boundsLayer1[2] - boundsLayer1[0];
        layer1Height = boundsLayer1[3] - boundsLayer1[1];

    }

    { // lop 7
        var lop = 7;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;

        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");
        var bounds2 = app.activeDocument.activeLayer.bounds;


        if ((bounds2[2] - bounds2[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
            var layer2Width = bounds2[2] - bounds2[0];
            var layer2Height = bounds2[3] - bounds2[1];
            // Tính toán vị trí mới để căn giữa Layer 2 theo Layer 1
            var centerX = boundsLayer1[0] + (layer1Width / 2);
            var centerY = boundsLayer1[1] + (layer1Height / 2);
            app.activeDocument.activeLayer.translate(centerX - (layer2Width / 2) - bounds2[0], centerY - (layer2Height / 2) - bounds2[1]);

            // app.doAction("moveZero", "tool");
            // app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));



        }
        else app.activeDocument.activeLayer.remove();


    }


    { // lop 6
        var lop = 6;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");
        app.activeDocument.activeLayer.name = arr[i].stt;

        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();

            #include "cropDocumentAll.jsx";
            app.activeDocument.saveAs(Folder(folderTool + "/1mat- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            #include "createDocumentMica.jsx";
            ban = ban + 1;
            var lop = 6;
            openFile(FileDesign, arr[i], type);
            cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");
            app.activeDocument.activeLayer.name = arr[i].stt;


            stt = i;
        }

        var bounds1 = app.activeDocument.activeLayer.bounds;
        var boxW = bounds1[2] - bounds1[0] + 30;
        var boxH = bounds1[3] - bounds1[1] + 30;
        #include "caculatorPosition.jsx";
        #include "translateCMYK.jsx";

        boundsLayer1 = app.activeDocument.activeLayer.bounds; // Lấy giới hạn của Layer 1 (tọa độ trái, trên, phải, dưới)
        layer1Width = boundsLayer1[2] - boundsLayer1[0];
        layer1Height = boundsLayer1[3] - boundsLayer1[1];

    }

    { // lop 12
        var lop = 12;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = arr[i].stt;

        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");
        var bounds2 = app.activeDocument.activeLayer.bounds;
        if ((bounds2[2] - bounds2[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
            var layer2Width = bounds2[2] - bounds2[0];
            var layer2Height = bounds2[3] - bounds2[1];
            // Tính toán vị trí mới để căn giữa Layer 2 theo Layer 1
            var centerX = boundsLayer1[0] + (layer1Width / 2);
            var centerY = boundsLayer1[1] + (layer1Height / 2);
            app.activeDocument.activeLayer.translate(centerX - (layer2Width / 2) - bounds2[0], centerY - (layer2Height / 2) - bounds2[1]);

            // app.doAction("moveZero", "tool");
            // app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));
        }
        else app.activeDocument.activeLayer.remove();


    }

    { // lop 2
        var lop = 2;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
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

            #include "cropDocumentAll.jsx";
            app.activeDocument.saveAs(Folder(folderTool + "/1mat- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            #include "createDocumentMica.jsx";
            ban = ban + 1;
            var lop = 2;
            openFile(FileDesign, arr[i], type);
            cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
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
        #include "translateCMYK.jsx";

    }
    { //lop 8
        var lop = 8;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
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



    { // lop 5
        var lop = 5;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
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

            #include "cropDocumentAll.jsx";
            app.activeDocument.saveAs(Folder(folderTool + "/1mat- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            #include "createDocumentMica.jsx";
            ban = ban + 1;
            var lop = 5;
            openFile(FileDesign, arr[i], type);
            cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
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
        #include "translateCMYK.jsx";

    }
    { //  lop 11
        var lop = 11;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
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


    if ((i == arr.length - 1) & (lop == 11)) {
        #include "cropDocumentAll.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/1mat- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


var stt = 0;
ban = 0;
#include "createDocumentMica.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    { // lop 4
        var lop = 4;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
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

            #include "cropDocumentAll.jsx";
            app.activeDocument.saveAs(Folder(folderTool + "/2mat- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            #include "createDocumentMica.jsx";
            ban = ban + 1;
            var lop = 4;
            openFile(FileDesign, arr[i], type);
            cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
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
        #include "translateCMYK.jsx";
        boundsLayer1 = app.activeDocument.activeLayer.bounds; // Lấy giới hạn của Layer 1 (tọa độ trái, trên, phải, dưới)
        layer1Width = boundsLayer1[2] - boundsLayer1[0];
        layer1Height = boundsLayer1[3] - boundsLayer1[1];
    }


    { // lop 9
        var lop = 9;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
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
            var layer2Width = bounds2[2] - bounds2[0];
            var layer2Height = bounds2[3] - bounds2[1];
            // Tính toán vị trí mới để căn giữa Layer 2 theo Layer 1
            var centerX = boundsLayer1[0] + (layer1Width / 2);
            var centerY = boundsLayer1[1] + (layer1Height / 2);
            app.activeDocument.activeLayer.translate(centerX - (layer2Width / 2) - bounds2[0], centerY - (layer2Height / 2) - bounds2[1]);
        }
        else app.activeDocument.activeLayer.remove();

    }

    { // lop 10
        var lop = 10;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
        app.doAction("canvasHoriz", "tool");

        app.activeDocument.activeLayer.name = arr[i].stt;

        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.doAction("xoa stroke layer", "tool");

        var bounds2 = app.activeDocument.activeLayer.bounds;
        if ((bounds2[2] - bounds2[0]) != 0) {
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt);
            var layer2Width = bounds2[2] - bounds2[0];
            var layer2Height = bounds2[3] - bounds2[1];
            // Tính toán vị trí mới để căn giữa Layer 2 theo Layer 1
            var centerX = boundsLayer1[0] + (layer1Width / 2);
            var centerY = boundsLayer1[1] + (layer1Height / 2);
            app.activeDocument.activeLayer.translate(centerX - (layer2Width / 2) - bounds2[0], centerY - (layer2Height / 2) - bounds2[1]);
        }
        else app.activeDocument.activeLayer.remove();

    }



    {
        app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
        app.doAction("sttkinlytoy", "tool");
        var boxW = app.activeDocument.width;
        var boxH = app.activeDocument.height;
        app.activeDocument.activeLayer.name = "stt" + arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
            app.activeDocument.layerSets["SPOT"].artLayers.getByName("stt" + arr[i].stt).remove();
            app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + arr[i].stt).remove();

            #include "cropDocumentAll.jsx";
            app.activeDocument.saveAs(Folder(folderTool + "/2mat- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            #include "createDocumentMica.jsx";

            ban = ban + 1;
            stt = i;
            app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
            app.activeDocument.artLayers[0].textItem.contents = i + 1;
            app.doAction("sttkinlytoy", "tool");
            var boxW = app.activeDocument.width;
            var boxH = app.activeDocument.height;
            app.activeDocument.activeLayer.name = "stt" + arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
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
        app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName("stt" + arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
    }
    if ((i == arr.length - 1) & (lop == 10)) {
        #include "cropDocumentAll.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/2mat- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    }
}





var stt = 0;
ban = 0;
#include "createDocumentMica.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";



    { // lop 3
        var lop = 3;
        openFile(FileDesign, arr[i], type);
        cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
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

            #include "cropDocumentAll.jsx";
            app.activeDocument.saveAs(Folder(folderTool + "/CUT-mica3mm-- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            #include "createDocumentMica.jsx";
            ban = ban + 1;
            var lop = 3;
            openFile(FileDesign, arr[i], type);
            cropBoxIn8(lop, app.activeDocument.width, app.activeDocument.height);
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
        #include "translateCMYK.jsx";

    }


    if ((i == arr.length - 1) & (lop == 3)) {
        #include "cropDocumentAll.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/CUT-mica3mm-- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }
}



function cropBoxIn8(box, widthF, heightF) {
    if (box == 1) app.activeDocument.selection.select([[0, 0], [0, heightF / 2], [widthF / 6, heightF / 2], [widthF / 6, 0]]);
    if (box == 2) app.activeDocument.selection.select([[widthF / 6, 0], [widthF / 6, heightF / 2], [2 * widthF / 6, heightF / 2], [2 * widthF / 6, 0]]);
    if (box == 3) app.activeDocument.selection.select([[2 * widthF / 6, 0], [2 * widthF / 6, heightF / 2], [widthF / 2, heightF / 2], [widthF / 2, 0]]);
    if (box == 4) app.activeDocument.selection.select([[widthF / 2, 0], [widthF / 2, heightF / 2], [4 * widthF / 6, heightF / 2], [4 * widthF / 6, 0]]);

    if (box == 5) app.activeDocument.selection.select([[4 * widthF / 6, 0], [4 * widthF / 6, heightF / 2], [5 * widthF / 6, heightF / 2], [5 * widthF / 6, 0]]);
    if (box == 6) app.activeDocument.selection.select([[5 * widthF / 6, 0], [5 * widthF / 6, heightF / 2], [widthF, heightF / 2], [widthF, 0]]);




    if (box == 7) app.activeDocument.selection.select([[0, heightF / 2], [0, heightF], [widthF / 6, heightF], [widthF / 6, heightF / 2]]);
    if (box == 8) app.activeDocument.selection.select([[widthF / 6, heightF / 2], [widthF / 6, heightF], [2 * widthF / 6, heightF], [2 * widthF / 6, heightF / 2]]);
    if (box == 9) app.activeDocument.selection.select([[2 * widthF / 6, heightF / 2], [2 * widthF / 6, heightF], [3 * widthF / 6, heightF], [3 * widthF / 6, heightF / 2]]);
    if (box == 10) app.activeDocument.selection.select([[widthF / 2, heightF / 2], [widthF / 2, heightF], [4 * widthF / 6, heightF], [4 * widthF / 6, heightF / 2]]);
    if (box == 11) app.activeDocument.selection.select([[4 * widthF / 6, heightF / 2], [4 * widthF / 6, heightF], [5 * widthF / 6, heightF], [5 * widthF / 6, heightF / 2]]);
    if (box == 12) app.activeDocument.selection.select([[5 * widthF / 6, heightF / 2], [5 * widthF / 6, heightF], [widthF, heightF], [widthF, heightF / 2]]);




    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    app.doAction("duplicateSelection", "tool")

}


