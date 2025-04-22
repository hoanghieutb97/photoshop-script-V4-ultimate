app.open(File("//192.168.1.240/ps script data/tenban.tif"));

app.activeDocument.artLayers[0].textItem.contents = getShortCodeLabel(FileName, ban); // thong tin stt;
// app.activeDocument.mergeVisibleLayers();
app.activeDocument.activeLayer.name = "tenBan";
app.activeDocument.activeLayer.rasterize(RasterizeType.ENTIRELAYER); // Rasterize toàn bộ layer
var PSCROten = app.activeDocument.activeLayer.bounds;
app.activeDocument.crop(PSCROten, 0, PSCROten[2] - PSCROten[0], PSCROten[3] - PSCROten[1]);

{// tinh boxW va boxH moi
    boxW = app.activeDocument.width + 30;
    boxH = app.activeDocument.height + 30;


    xPosition = 30;
    yPosition = 30;
    wLast = boxW;
    hLast = boxH;

}
app.activeDocument.activeLayer.duplicate(doc.layerSets[grop_Merge], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
app.activeDocument.activeLayer = doc.layerSets[grop_Merge].artLayers.getByName("tenBan");

app.doAction("moveZero", "tool");
app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
