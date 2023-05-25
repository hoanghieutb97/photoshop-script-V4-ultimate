app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
app.doAction("moveZero", "tool");
app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));