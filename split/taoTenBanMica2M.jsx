app.open(File("//192.168.2.240/ps script data/tenban.tif"));

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
app.activeDocument.activeLayer.duplicate(doc.layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.activeLayer.duplicate(doc.layerSets["IN SAU"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

app.activeDocument.activeLayer = doc.layerSets["IN TRUOC"].artLayers.getByName("tenBan");
app.doAction("moveZero", "tool");
app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

app.activeDocument.activeLayer = doc.layerSets["IN SAU"].artLayers.getByName("tenBan");
app.doAction("moveZero", "tool");
app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
