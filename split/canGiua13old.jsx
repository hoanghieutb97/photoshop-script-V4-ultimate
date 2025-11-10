
// alert(StatusCanGiua)
if (StatusCanGiua) {
    // alert("can giua")
    var id1 = false;
    var id2 = false;
    var id3 = false;


    if (doc.layerSets[Group_Khung].layers[0].name == arr[i].stt)
        id1 = doc.layerSets[Group_Khung].artLayers.getByName(arr[i].stt).id;

    if (doc.layerSets["IN TRUOC"].layers[0].name == arr[i].stt)
        id2 = doc.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt).id;

    if ((doc.layerSets["IN SAU"].layers.length !== 0)) {

        if (doc.layerSets["IN SAU"].layers[0].name == arr[i].stt)
            id3 = doc.layerSets["IN SAU"].artLayers.getByName(arr[i].stt).id;
    }




    multiSelectByIDs([id2, id1, id3]);
    // alert(i)
    app.doAction("move center selction", "tool")

}
