var W_ACtiveB = activebounds[2] - activebounds[0];
var H_ACtiveB = activebounds[3] - activebounds[1];


var W_DenB = G_boundDen[2] - G_boundDen[0];
var H_DenB = G_boundDen[3] - G_boundDen[1];

if (Math.abs(W_DenB - W_ACtiveB) < 10 && Math.abs(H_DenB - H_ACtiveB) < 10) {
    doc.activeLayer = doc.layerSets[Group_Khung].artLayers.getByName(arr[i].stt);
    app.doAction("selectArea", "tool")
    doc.activeLayer = doc.layerSets[Group_In].artLayers.getByName(arr[i].stt);

    app.doAction("move center selction", "tool")

}