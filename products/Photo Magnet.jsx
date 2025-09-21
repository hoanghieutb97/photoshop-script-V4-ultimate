#include "createDocumentWooden.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    var end = 0;
    var coanh = false;
    #include "convertPixel.jsx";
    // alert((arr[i].nameId.split("-")[0] == "P"))
    if (arr[i].nameId.split("-")[0] == "P") coanh = true
    { // lop 11
        var lop = 11;
        if (coanh) openFile(FileDesign, arr[i], "");
        else openFile(FileDesign, arr[i], type);
        xulyGOD();
        cropBoxIn(1, 1, 4, 2, app.activeDocument.width, app.activeDocument.height);
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
            app.activeDocument.saveAs(Folder(folderTool + "/go3mm- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden.jsx";
            ban = ban + 1;
            var lop = 11;
            if (coanh) openFile(FileDesign, arr[i], "");
            else openFile(FileDesign, arr[i], type);
            xulyGOD();

            cropBoxIn(1, 1, 4, 2, app.activeDocument.width, app.activeDocument.height);
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
        var lop = 12;

        if (coanh) openFile(FileDesign, arr[i], "");
        else openFile(FileDesign, arr[i], type);
        xulyGOD();

        cropBoxIn(1, 2, 4, 2, app.activeDocument.width, app.activeDocument.height);
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


    { // lop 21
        var lop = 21;
        if (coanh) openFile(FileDesign, arr[i], "");
        else openFile(FileDesign, arr[i], type);
        xulyGOD();

        cropBoxIn(2, 1, 4, 2, app.activeDocument.width, app.activeDocument.height);

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
            app.activeDocument.saveAs(Folder(folderTool + "/go3mm- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden.jsx";
            ban = ban + 1;
            var lop = 21;
            if (coanh) openFile(FileDesign, arr[i], "");
            else openFile(FileDesign, arr[i], type);
            xulyGOD();

            cropBoxIn(2, 1, 4, 2, app.activeDocument.width, app.activeDocument.height);
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
    { // lop 2-1
        var lop = 22;
        if (coanh) openFile(FileDesign, arr[i], "");
        else openFile(FileDesign, arr[i], type);
        xulyGOD();

        cropBoxIn(2, 2, 4, 2, app.activeDocument.width, app.activeDocument.height);
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

    { // lop 3-1
        var lop = 31;
        if (coanh) openFile(FileDesign, arr[i], "");
        else openFile(FileDesign, arr[i], type);
        xulyGOD();

        cropBoxIn(3, 1, 4, 2, app.activeDocument.width, app.activeDocument.height);
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
            app.activeDocument.saveAs(Folder(folderTool + "/go3mm- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden.jsx";
            ban = ban + 1;
            var lop = 31;
            if (coanh) openFile(FileDesign, arr[i], "");
            else openFile(FileDesign, arr[i], type);
            xulyGOD();

            cropBoxIn(3, 1, 4, 2, app.activeDocument.width, app.activeDocument.height);
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
    { // lop 3-2
        var lop = 32;
        if (coanh) openFile(FileDesign, arr[i], "");
        else openFile(FileDesign, arr[i], type);
        xulyGOD();

        cropBoxIn(3, 2, 4, 2, app.activeDocument.width, app.activeDocument.height);
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
    if (arr[i].nameId.split("-").pop() == "WW") {

        { // lop 41
            var lop = 41;
            if (coanh) openFile(FileDesign, arr[i], "");
            else openFile(FileDesign, arr[i], type);
            xulyGOD();

            cropBoxIn(4, 1, 4, 2, app.activeDocument.width, app.activeDocument.height);
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
                app.activeDocument.saveAs(Folder(folderTool + "/go3mm- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
                #include "createDocumentWooden.jsx";
                ban = ban + 1;
                var lop = 41;
                if (coanh) openFile(FileDesign, arr[i], "");
                else openFile(FileDesign, arr[i], type);
                xulyGOD();

                cropBoxIn(4, 1, 4, 2, app.activeDocument.width, app.activeDocument.height);
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
            if (coanh) openFile(FileDesign, arr[i], "");
            else openFile(FileDesign, arr[i], type);
            xulyGOD();

            cropBoxIn(4, 2, 4, 2, app.activeDocument.width, app.activeDocument.height);
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

    {
        app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
        app.doAction("sttkinlytoy", "tool");
        var boxW = app.activeDocument.width;
        var boxH = app.activeDocument.height;
        app.activeDocument.activeLayer.name = "stt" + arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
            app.activeDocument.layerSets["SPOT"].artLayers.getByName("stt" + arr[i].stt).remove();
            {
                app.doAction("crop document all", "tool");

                var selectionBounds = app.activeDocument.activeLayer.bounds;
                var padding = 30;
                var newBounds = [
                    selectionBounds[0] - padding,
                    selectionBounds[1] - padding,
                    selectionBounds[2] + padding,
                    selectionBounds[3] + padding
                ];
                app.activeDocument.crop(newBounds);
                app.activeDocument.activeLayer.remove();
                if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);

                app.activeDocument.saveAs(Folder(folderTool + "/go3mm-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden.jsx";
            ban = ban + 1;
            stt = i;
            app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
            app.activeDocument.artLayers[0].textItem.contents = i + 1;
            app.doAction("sttkinlytoy", "tool");
            var boxW = app.activeDocument.width;
            var boxH = app.activeDocument.height;
            app.activeDocument.activeLayer.name = "stt" + arr[i].stt
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
    end = arr[i].stt;
    if ((end == arr.length)) {
        #include "cropDocumentAll.jsx";
        app.activeDocument.saveAs(Folder(folderTool + "/go3mm- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}




stt = 0;
ban = 0;
var noMica = false;
#include "createDocumentMica.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    var end = 0;
    if (arr[i].nameId.split("-").pop() == "WA") {
        noMica = true;
        var coanh = false;
        #include "convertPixel.jsx";
        if (arr[i].nameId.split("-")[0] == "P") coanh = true

        { // lop 21
            var lop = 41;
            if (coanh) openFile(FileDesign, arr[i], "");
            else openFile(FileDesign, arr[i], type);
            xulyGOD();

            cropBoxIn(4, 1, 4, 2, app.activeDocument.width, app.activeDocument.height);
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

                #include "cropDocumentAll.jsx";
                app.activeDocument.saveAs(Folder(folderTool + "/mica3mm- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
                #include "createDocumentMica.jsx";
                ban = ban + 1;
                var lop = 41;
                if (coanh) openFile(FileDesign, arr[i], "");
                else openFile(FileDesign, arr[i], type);
                xulyGOD();

                cropBoxIn(4, 1, 4, 2, app.activeDocument.width, app.activeDocument.height);
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
        { // lop 12
            var lop = 42;
            if (coanh) openFile(FileDesign, arr[i], "");
            else openFile(FileDesign, arr[i], type);
            xulyGOD();

            cropBoxIn(4, 2, 4, 2, app.activeDocument.width, app.activeDocument.height);
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


        {
            app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
            app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
            app.doAction("sttkinlytoy", "tool");
            var boxW = app.activeDocument.width;
            var boxH = app.activeDocument.height;
            app.activeDocument.activeLayer.name = "stt" + arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
                app.activeDocument.layerSets["SPOT"].artLayers.getByName("stt" + arr[i].stt).remove();
                {
                    app.doAction("crop document all", "tool");

                    var selectionBounds = app.activeDocument.activeLayer.bounds;
                    var padding = 30;
                    var newBounds = [
                        selectionBounds[0] - padding,
                        selectionBounds[1] - padding,
                        selectionBounds[2] + padding,
                        selectionBounds[3] + padding
                    ];
                    app.activeDocument.crop(newBounds);
                    app.activeDocument.activeLayer.remove();
                    if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);

                    app.activeDocument.saveAs(Folder(folderTool + "/mica3mm-" + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                }
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
                #include "createDocumentMica.jsx";
                ban = ban + 1;
                stt = i;
                app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
                app.activeDocument.artLayers[0].textItem.contents = i + 1;
                app.doAction("sttkinlytoy", "tool");
                var boxW = app.activeDocument.width;
                var boxH = app.activeDocument.height;
                app.activeDocument.activeLayer.name =  "stt" + arr[i].stt;
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

    }
    end = arr[i].stt;

    if ((end == arr.length)) {

        if (noMica) {
            #include "cropDocumentAll.jsx";
            app.activeDocument.saveAs(Folder(folderTool + "/mica3mm- " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
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
    if (arr[i].nameId.split("-")[0] == "P") {
        nogiay = true;
        openFile(FileDesign, arr[i], "");
        xulyAnhGOD()
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
        app.doAction("strokeRed1px", "tool");
        boxW = app.activeDocument.width + 30;
        boxH = app.activeDocument.height + 30;

        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            #include "cropDocumentAll.jsx";
            // app.activeDocument.resizeCanvas(2480, 3508, AnchorPosition.MIDDLECENTER);
            app.activeDocument.saveAs(Folder(folderKhac + "/giay " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            #include "createDocumentA4.jsx";
            ban = ban + 1;
            openFile(FileDesign, arr[i], "");
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
            app.open(File("//192.168.1.240/ps script data/bcsttkinlytoy.tif"));
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
                #include "cropDocumentAll.jsx";
                // app.activeDocument.resizeCanvas(2480, 3508, AnchorPosition.MIDDLECENTER);
                app.activeDocument.saveAs(Folder(folderKhac + "/giay " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

                #include "createDocumentA4.jsx";
                ban = ban + 1;
                stt = i;
                app.open(File("//192.168.1.240/ps script data/bcsttkinlytoy.tif"));
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


    }


    if (i == arr.length - 1) {
        if (nogiay) {
            #include "cropDocumentAll.jsx";
            // app.activeDocument.resizeCanvas(2480, 3508, AnchorPosition.MIDDLECENTER);
            app.activeDocument.saveAs(Folder(folderKhac + "/giay " + (ban + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);

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
function xulyGOD() {
    if (app.activeDocument.width == 11333 || app.activeDocument.width == 11322) app.activeDocument.crop([0, 0, 5032, 2516]); //crop 4 in
    else if (app.activeDocument.width == 14033 || app.activeDocument.width == 14022) app.activeDocument.crop([0, 0, 6232, 3116]);// crop 5 in
    else if (app.activeDocument.width == 16733 || app.activeDocument.width == 16722) app.activeDocument.crop([0, 0, 7432, 3716]);// crop 6 in
}

function xulyAnhGOD() {
    if (app.activeDocument.width == 11333 || app.activeDocument.width == 11322) if (app.activeDocument.height > 2510) app.activeDocument.crop([0, 2516, app.activeDocument.width, app.activeDocument.height]); //crop 4 in
    else if (app.activeDocument.width == 14033 || app.activeDocument.width == 14022) if (app.activeDocument.height > 2510) app.activeDocument.crop([0, 3116, app.activeDocument.width, app.activeDocument.height]);// crop 5 in
    else if (app.activeDocument.width == 16733 || app.activeDocument.width == 16722) if (app.activeDocument.height > 2510) app.activeDocument.crop([0, 3716, app.activeDocument.width, app.activeDocument.height]);// crop 6 in
}