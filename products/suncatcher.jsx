

typeTem = "mica 3mm";
nameSave = typeTem;
#include "createDocumentMica.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    var scall = 1;
    #include "convertPixel.jsx";
    { // tinh scale
        openFile(FileDesign, arr[i], type);
        var bounds1 = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(bounds1, 0, bounds1[2] - bounds1[0], bounds1[3] - bounds1[1]);
        app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height / 2]);
        bounds1 = app.activeDocument.activeLayer.bounds;
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        openFile(FileDesign, arr[i], type);
        var bounds2 = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(bounds2, 0, bounds2[2] - bounds2[0], bounds2[3] - bounds2[1]);
        app.activeDocument.crop([0, app.activeDocument.height / 2, app.activeDocument.width, app.activeDocument.height]);
        bounds2 = app.activeDocument.activeLayer.bounds;
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        {
            var maxX = bounds1[3] - bounds1[1];
            if (bounds1[2] - bounds1[0] > maxX) maxX = bounds1[2] - bounds1[0];
            else if (bounds2[2] - bounds2[0] > maxX) maxX = bounds2[2] - bounds2[0];
            else if (bounds2[3] - bounds2[1] > maxX) maxX = bounds2[3] - bounds2[1];
        }
        scall = wphone * 100 / maxX;


    }


    openFile(FileDesign, arr[i], type);
    app.doAction("canvasHoriz", "tool");
    app.activeDocument.crop([0, app.activeDocument.height / 2, app.activeDocument.width, app.activeDocument.height]);
    app.activeDocument.activeLayer.resize(scall, scall, AnchorPosition.MIDDLECENTER);
    var boundss = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(boundss, 0, boundss[2] - boundss[0], boundss[3] - boundss[1]);
    boxW = app.activeDocument.width + 30;
    boxH = app.activeDocument.height + 30;

    // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        #include "saveallcropByName.jsx";

        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
        #include "createDocumentMica.jsx";
        ban = ban + 1;

        openFile(FileDesign, arr[i], type);
        app.doAction("canvasHoriz", "tool");
        app.activeDocument.crop([0, app.activeDocument.height / 2, app.activeDocument.width, app.activeDocument.height]);

        app.activeDocument.activeLayer.resize(scall, scall, AnchorPosition.MIDDLECENTER);
        var boundss = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(boundss, 0, boundss[2] - boundss[0], boundss[3] - boundss[1]);
        boxW = app.activeDocument.width + 30;
        boxH = app.activeDocument.height + 30;

        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";


    if (i == arr.length - 1) {

        #include "saveallcropByName.jsx";


        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


typeTem = "go 3mm";
nameSave = typeTem;
ban = 0;
stt = 0;

#include "createDocumentWooden.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    var scall = 1;
    #include "convertPixel.jsx";
    { // tinh scale
        openFile(FileDesign, arr[i], type);
        var bounds1 = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(bounds1, 0, bounds1[2] - bounds1[0], bounds1[3] - bounds1[1]);
        app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height / 2]);
        bounds1 = app.activeDocument.activeLayer.bounds;
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        openFile(FileDesign, arr[i], type);
        var bounds2 = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(bounds2, 0, bounds2[2] - bounds2[0], bounds2[3] - bounds2[1]);
        app.activeDocument.crop([0, app.activeDocument.height / 2, app.activeDocument.width, app.activeDocument.height]);
        bounds2 = app.activeDocument.activeLayer.bounds;
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        {
            var maxX = bounds1[3] - bounds1[1];
            if (bounds1[2] - bounds1[0] > maxX) maxX = bounds1[2] - bounds1[0];
            else if (bounds2[2] - bounds2[0] > maxX) maxX = bounds2[2] - bounds2[0];
            else if (bounds2[3] - bounds2[1] > maxX) maxX = bounds2[3] - bounds2[1];
        }
        scall = wphone * 100 / maxX;


    }


    openFile(FileDesign, arr[i], type);

    app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height / 2]);


    app.activeDocument.activeLayer.resize(scall, scall, AnchorPosition.MIDDLECENTER);
    var boundss = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(boundss, 0, boundss[2] - boundss[0], boundss[3] - boundss[1]);
    boxW = app.activeDocument.width + 30;
    boxH = app.activeDocument.height + 30;

    // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        #include "saveallcropByName.jsx";

        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
        #include "createDocumentWooden.jsx";
        ban = ban + 1;

        openFile(FileDesign, arr[i], type);

        app.activeDocument.crop([0, 0, app.activeDocument.width, app.activeDocument.height / 2]);


        app.activeDocument.activeLayer.resize(scall, scall, AnchorPosition.MIDDLECENTER);
        var boundss = app.activeDocument.activeLayer.bounds;
        app.activeDocument.crop(boundss, 0, boundss[2] - boundss[0], boundss[3] - boundss[1]);
        boxW = app.activeDocument.width + 30;
        boxH = app.activeDocument.height + 30;

        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";


    if (i == arr.length - 1) {

        #include "saveallcropByName.jsx";


        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-group.jsx")); // in tem
    }
}



