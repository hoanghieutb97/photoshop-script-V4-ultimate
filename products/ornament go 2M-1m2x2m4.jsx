
///////////////////////////

#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    var xoay = 0;
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], "front");

    { // crop xóa khoảng trắng và crop cỡ 9cm

        app.activeDocument.activeLayer.name = 1;
        if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);

        if (arr[i].direction == "2")
            app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);

        else if (arr[i].direction == "1") {
            if (app.activeDocument.width < app.activeDocument.height) {
                app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
            }
            else {
                app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
            }
        }
        else
            app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);


    }

    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    // #include "boxWFlexible.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save2Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], "front");

        { // crop xóa khoảng trắng và crop cỡ 9cm

            app.activeDocument.activeLayer.name = 1;
            if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);

            if (arr[i].direction == "2")
                app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);

            else if (arr[i].direction == "1") {
                if (app.activeDocument.width < app.activeDocument.height) {
                    app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
                }
                else {
                    app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
                }
            }
            else
                app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);


        }

        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        // #include "boxWFlexible.jsx";

        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";

    openFile(FileDesign, arr[i], "back");

    { // crop xóa khoảng trắng và crop cỡ 9cm

        app.activeDocument.activeLayer.name = 1;
        if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
        var PSpotKhung = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);

        if (arr[i].direction == "2")
            app.activeDocument.resizeImage(UnitValue(wphone, "px"), UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);

        else if (arr[i].direction == "1") {
            if (app.activeDocument.width < app.activeDocument.height) {
                app.activeDocument.resizeImage(null, UnitValue(hphone, "px"), 300, ResampleMethod.BICUBIC);
            }
            else {
                app.activeDocument.resizeImage(UnitValue(wphone, "px"), null, 300, ResampleMethod.BICUBIC);
            }
        }
        else
            app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);


    }

    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    { // translate layer đến vị trí cần in
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition + hphone + 40) * (-1));
    }

    if (i == arr.length - 1) {
        #include "save2Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

