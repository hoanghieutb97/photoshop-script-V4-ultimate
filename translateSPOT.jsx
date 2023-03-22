app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt);
app.doAction("moveZero", "autoUv");
app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));