var W_ACtiveB = activebounds[2] - activebounds[0];
var H_ACtiveB = activebounds[3] - activebounds[1];


var W_DenB = G_boundDen[2] - G_boundDen[0];
var H_DenB = G_boundDen[3] - G_boundDen[1];

if (Math.abs(W_DenB - W_ACtiveB) < 10 && Math.abs(H_DenB - H_ACtiveB) < 10) {
    var id1 = false;
    var id2 = false;

    if (doc.layerSets[Group_Khung].layers[0].name == arr[i].stt)
        id1 = doc.layerSets[Group_Khung].artLayers.getByName(arr[i].stt).id;

    if (doc.layerSets[Group_In].layers[0].name == arr[i].stt)
        id2 = doc.layerSets[Group_In].artLayers.getByName(arr[i].stt).id;




    multiSelectByIDs([id2, id1]);

    app.doAction("move center selction", "tool")

}
