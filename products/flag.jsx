/////////////
// #include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    #include "cropAndResize-autoFill.jsx";
    app.doAction("flag cmyk", "tool");
    {// tao khung su
        if (arr[i].nameId == "flag28x40in") embedKhung("28x40in")
        else if (arr[i].nameId == "flag12x18in") embedKhung("12x18in")

        app.doAction("moveZero", "tool");
    }

    app.activeDocument.mergeVisibleLayers();
    if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
    app.activeDocument.saveAs(Folder(folderContainer + "/" + arr[i].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    if (i == arr.length - 1) {
        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


// app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

function embedKhung(param) {
    var idPlc = charIDToTypeID("Plc ");
    var desc16 = new ActionDescriptor();
    var idIdnt = charIDToTypeID("Idnt");
    desc16.putInteger(idIdnt, 2);
    var idnull = charIDToTypeID("null");
    desc16.putPath(idnull, new File("//192.168.2.240/ps script data/flag/" + param + ".png"));
    var idFTcs = charIDToTypeID("FTcs");
    var idQCSt = charIDToTypeID("QCSt");
    var idQcsa = charIDToTypeID("Qcsa");
    desc16.putEnumerated(idFTcs, idQCSt, idQcsa);
    var idOfst = charIDToTypeID("Ofst");
    var desc17 = new ActionDescriptor();
    var idHrzn = charIDToTypeID("Hrzn");
    var idPxl = charIDToTypeID("#Pxl");
    desc17.putUnitDouble(idHrzn, idPxl, 0.000000);
    var idVrtc = charIDToTypeID("Vrtc");
    var idPxl = charIDToTypeID("#Pxl");
    desc17.putUnitDouble(idVrtc, idPxl, 0.000000);
    var idOfst = charIDToTypeID("Ofst");
    desc16.putObject(idOfst, idOfst, desc17);
    var idLnkd = charIDToTypeID("Lnkd");
    desc16.putBoolean(idLnkd, true);
    var idAntA = charIDToTypeID("AntA");
    desc16.putBoolean(idAntA, true);
    executeAction(idPlc, desc16, DialogModes.NO);
    
}