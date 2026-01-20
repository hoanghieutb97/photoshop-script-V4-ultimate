
var arr1mat = [];
var arr2mat = [];

for (var i = stt; i <= arr.length - 1; i++) {
    if (arr[i].nameId.split("-").shift() == "2M") arr2mat.push(arr[i])
    else arr1mat.push(arr[i])
}
// alert("arr1mat", arr1mat.length)
// alert("arr2mat", arr2mat.length)
if (arr1mat.length > 0) {
    arr = arr1mat;
    typeTem = "1 mat";
    #include "createDocumentMica.jsx";
    for (var i = stt; i <= arr.length - 1; i++) {


        #include "convertPixel.jsx";
        openFile(FileDesign, arr[i], type);
        app.doAction("canvasHoriz", "tool");

        {
            app.activeDocument.activeLayer.name = 1;
            if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
            app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
            app.activeDocument.crop([(app.activeDocument.width - 2724) / 2, (app.activeDocument.height - 3774) / 2, 2724 + (app.activeDocument.width - 2724) / 2, 3774 + (app.activeDocument.height - 3774) / 2]);
            app.doAction("strokeRed1px", "tool");
            boxW = app.activeDocument.width + 4;
            boxH = app.activeDocument.height + 4;

        }
        // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            nameSave = "1M-mica3mm";
            #include "saveallcropByName.jsx";

            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
            #include "createDocumentMica.jsx";
            ban = ban + 1;
            openFile(FileDesign, arr[i], type);
            app.doAction("canvasHoriz", "tool");

            {
                app.activeDocument.activeLayer.name = 1;
                if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
                app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
                app.activeDocument.crop([(app.activeDocument.width - 2724) / 2, (app.activeDocument.height - 3774) / 2, 2724 + (app.activeDocument.width - 2724) / 2, 3774 + (app.activeDocument.height - 3774) / 2]);
                app.doAction("strokeRed1px", "tool");
                boxW = app.activeDocument.width + 4;
                boxH = app.activeDocument.height + 4;

            }
            stt = i;

        }
        #include "caculatorPosition.jsx";
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "translateCMYK.jsx";

        if (arr[i].nameId.split("-").pop() == "9x125in") {
            app.open(File("//192.168.2.240/ps script data/clipboard/clipboard9x125.tif"));

            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(xPosition + 12, (yPosition + 12) * (-1));

        }


        if (i == arr.length - 1) {
            nameSave = "1M-mica3mm";
            #include "saveallcropByName.jsx";
            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
        }
    }


}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (arr2mat.length > 0) {
    ban = 0;
    stt = 0;
    arr = arr2mat;
    typeTem = "2 mat";
    nameSave = "2M-mica3mm";
    #include "createDocumentMica.jsx";
    for (var i = stt; i <= arr.length - 1; i++) {


        #include "convertPixel.jsx";
        openFile(FileDesign, arr[i], type);
        app.doAction("canvasHoriz", "tool");
        app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height / 2]);


        {
            app.activeDocument.activeLayer.name = 1;
            if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
            app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
            app.activeDocument.crop([(app.activeDocument.width - 2724) / 2, (app.activeDocument.height - 3774) / 2, 2724 + (app.activeDocument.width - 2724) / 2, 3774 + (app.activeDocument.height - 3774) / 2]);
            app.doAction("strokeRed1px", "tool");
            boxW = app.activeDocument.width + 4;
            boxH = app.activeDocument.height + 4;

        }
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            #include "saveallcropByName.jsx";

            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
            #include "createDocumentMica.jsx";
            ban = ban + 1;
            openFile(FileDesign, arr[i], type);
            app.doAction("canvasHoriz", "tool");
            app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height / 2]);

            {
                app.activeDocument.activeLayer.name = 1;
                if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
                app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
                app.activeDocument.crop([(app.activeDocument.width - 2724) / 2, (app.activeDocument.height - 3774) / 2, 2724 + (app.activeDocument.width - 2724) / 2, 3774 + (app.activeDocument.height - 3774) / 2]);
                app.doAction("strokeRed1px", "tool");
                boxW = app.activeDocument.width + 4;
                boxH = app.activeDocument.height + 4;

            }
            stt = i;

        }
        #include "caculatorPosition.jsx";
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "translateCMYK.jsx";

        {// mat sau
            openFile(FileDesign, arr[i], type);

            app.activeDocument.crop([0, app.activeDocument.height / 2, app.activeDocument.width, app.activeDocument.height]);
            {
                app.activeDocument.activeLayer.name = 1;
                if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
                app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
                app.activeDocument.crop([(app.activeDocument.width - 2724) / 2, (app.activeDocument.height - 3774) / 2, 2724 + (app.activeDocument.width - 2724) / 2, 3774 + (app.activeDocument.height - 3774) / 2]);
                app.doAction("strokeRed1px", "tool");
                boxW = app.activeDocument.width + 4;
                boxH = app.activeDocument.height + 4;

            }


        }

        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "translateSPOT.jsx";

        if (arr[i].nameId.split("-").pop() == "9x125in") {
            app.open(File("//192.168.2.240/ps script data/clipboard/clipboard9x125.tif"));

            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

            app.doAction("moveZero", "tool");
            app.activeDocument.activeLayer.translate(xPosition + 12, (yPosition + 12) * (-1));

        }


        if (i == arr.length - 1) {

            #include "saveallcropByName.jsx";


            $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
        }
    }

}
