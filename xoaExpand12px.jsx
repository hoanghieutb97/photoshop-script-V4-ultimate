
 {// xoa  expand 12 px
    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
    app.doAction("selection and expand 12px", "tool");
    app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
    app.doAction("delete selection", "tool");
   
    app.activeDocument.selection.clear();
}  