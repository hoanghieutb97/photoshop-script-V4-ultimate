var W_ACtiveB = activebounds[2] - activebounds[0];
var H_ACtiveB = activebounds[3] - activebounds[1];


var W_DenB = G_boundDen[2] - G_boundDen[0];
var H_DenB = G_boundDen[3] - G_boundDen[1];
// if (i == 2) alert(W_ACtiveB)
if (Math.abs(W_DenB - W_ACtiveB) < 10 && Math.abs(H_DenB - H_ACtiveB) < 10) {
    var id1 = false;
    var id2 = false;
    var id3 = false;


    if (doc.layerSets[Group_Khung].layers[0].name == arr[i].stt)
        id1 = doc.layerSets[Group_Khung].artLayers.getByName(arr[i].stt).id;

    if (doc.layerSets["IN TRUOC"].layers[0].name == arr[i].stt)
        id2 = doc.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt).id;

    if (doc.layerSets["IN SAU"].layers[0].name == arr[i].stt)
        id3 = doc.layerSets["IN SAU"].artLayers.getByName(arr[i].stt).id;




    multiSelectByIDs([id2, id1, id3]);
    // alert(i)
    app.doAction("move center selction", "tool")

}
