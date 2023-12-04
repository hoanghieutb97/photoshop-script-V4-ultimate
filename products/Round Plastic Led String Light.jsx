

wAll = 10748;
hAll = 10748;
app.documents.add(wAll, hAll, 300, "GLLM");
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "CMYK";
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "SPOT";
app.activeDocument.layerSets.add();
app.activeDocument.activeLayer.name = "KHUNG";
yPosition = 30;
xPosition = 30;
hLast = 0;
wLast = 0;
var boxSumX = 10;
var boxSumY = 2;
for (var i = stt; i <= arr.length - 1; i++) {

    #include "convertPixel.jsx";




    for (var m = 1; m <= boxSumX; m++) {
        var nameB1 = arr[i].stt + "-" + m;
        openFile(FileDesign, arr[i], type);
        

        cropBoxIn(m, 1, boxSumX, boxSumY, app.activeDocument.width, app.activeDocument.height);
        
        app.activeDocument.activeLayer.name = nameB1;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


        openFile(FileDesign, arr[i], type);
        

        cropBoxIn(m, 2, boxSumX, boxSumY, app.activeDocument.width, app.activeDocument.height);
        app.activeDocument.activeLayer.name = nameB1;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        var bounds1 = app.activeDocument.layerSets["SPOT"].artLayers.getByName(nameB1).bounds;
        var boxW = bounds1[2] - bounds1[0] + 30;
        var boxH = bounds1[3] - bounds1[1] + 30;
        
        #include "caculatorPosition.jsx";
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(nameB1);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

        app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(nameB1);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
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
    app.doAction("duplicateSelection", "tool")

}


