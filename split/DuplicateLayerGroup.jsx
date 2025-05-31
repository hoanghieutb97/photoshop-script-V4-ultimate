app.activeDocument.activeLayer.name = arr[i].stt;
app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets[Group_Duplicate_layer], ElementPlacement.PLACEATBEGINNING);
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);