// #include "cropDocument.jsx";
// var arrlayer = app.activeDocument.layerSets["CMYK"].layers.length;
// for (var m = 0; m < arrlayer; m++) {
//     app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers[m];
//     app.doAction("selection and expand 12px", "tool");
//     app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers[m];
//     app.doAction("delete selection", "tool");
//     app.activeDocument.selection.clear();

// }

// ////////////////
 {// xoa  expand 12 px
    app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
    app.doAction("selection and expand 1px", "tool");
    app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
    app.doAction("delete selection", "tool");
    app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt);
    app.doAction("delete selection", "tool");
    app.activeDocument.selection.clear();
}  