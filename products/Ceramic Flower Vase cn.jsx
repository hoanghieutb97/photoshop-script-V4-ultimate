/////////////
// #include "createDocument.jsx";
var jpegOptions = new JPEGSaveOptions();
jpegOptions.quality = 12;
;
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);
    app.activeDocument.activeLayer.name = "all";
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
    if (app.activeDocument.height > 780) app.activeDocument.resizeImage(null, UnitValue(780, "px"), 300, ResampleMethod.BICUBIC);
    cropBoxIn(1, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
    app.activeDocument.activeLayer.name = "1";

    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("all");

    cropBoxIn(2, 1, 2, 1, app.activeDocument.width, app.activeDocument.height);
    app.activeDocument.activeLayer.name = "2";
    app.activeDocument.artLayers.getByName("all").remove();
    app.activeDocument.resizeCanvas(2601, 862, AnchorPosition.MIDDLECENTER);


    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("1");

    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(168, (53) * (-1));
    app.activeDocument.activeLayer.rotate(-0.7)

    app.doAction("canvasHoriz", "tool");

    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("2");

    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(168, (53) * (-1));
    app.activeDocument.activeLayer.rotate(-0.7)
    app.doAction("canvasHoriz", "tool");
    app.activeDocument.mergeVisibleLayers();
    app.doAction("strokeRed1px", "tool");
    app.doAction("Jpan coarted color", "tool");  
    
    
    app.activeDocument.saveAs(Folder(folderTool + "/ " + (arr[i].stt) + ".jpg"), jpegOptions, true, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    if (i == arr.length - 1) {
     
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


function embedKhung(param) {
    var idPlc = charIDToTypeID("Plc ");
    var desc16 = new ActionDescriptor();
    var idIdnt = charIDToTypeID("Idnt");
    desc16.putInteger(idIdnt, 2);
    var idnull = charIDToTypeID("null");
    desc16.putPath(idnull, new File("//192.168.1.240/ps script data/flag/" + param + ".png"));
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


function cropBoxIn(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
        [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

    ]);






    // if(boxX==2 && boxY==2)vsvsdv
    app.doAction("duplicateSelection", "tool")

} 