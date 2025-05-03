app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt);
app.doAction("moveZero", "tool");
if (arr[i].direction == "2")
    app.activeDocument.activeLayer.translate(((xPosition + (wphone / widthden) * (activebounds[0] - G_boundDen[0]))), ((yPosition + (hphone / heightden) * (G_boundDen[3] - activebounds[3]))) * (-1))
else if (arr[i].direction == "1")
    app.activeDocument.activeLayer.translate(((xPosition + (hphone / heightden) * (activebounds[0] - G_boundDen[0]))), ((yPosition + (hphone / heightden) * (G_boundDen[3] - activebounds[3]))) * (-1))
else app.activeDocument.activeLayer.translate(((xPosition + (activebounds[0] - G_boundDen[0]))), ((yPosition + (G_boundDen[3] - activebounds[3]))) * (-1));
