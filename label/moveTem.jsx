
function moveTem(item, type) {


    app.activeDocument.artLayers[3].textItem.contents = item.nameId + " - " + item.stt // thong tin stt

    app.activeDocument.artLayers[0].textItem.contents = item.orderId; // thong tin order
   
    var pathObj = File("//192.168.1.240/photoshop-script-V4-ultimate/label/objBarcode.jsx");
    $.evalFile(pathObj);

    var nameItem = item.barcode.split("");

    var nameConvert = [];
    for (var i = 0; i < nameItem.length; i = i + 2) {
        nameConvert.push(nameItem[i].concat(nameItem[i + 1]));

    }
    for (var j = 0; j < nameConvert.length; j++) {
        nameConvert[j] = obj[nameConvert[j]]

    }
    nameConvert = nameConvert.join("");
    app.activeDocument.artLayers[2].textItem.contents = String.fromCharCode(203) + nameConvert + String.fromCharCode(204); // thong bin barcode
    if (item.partner !== null)
        app.activeDocument.artLayers[4].textItem.contents = item.partner; // thong tin partner
    else
        app.activeDocument.artLayers[4].textItem.contents = "!!!"; // thong tin partner
    app.activeDocument.artLayers[5].textItem.contents = item.dateItem.substr(8, 2) + "-" + item.dateItem.substr(5, 2) // thong tin date

    if (item.Quantity <= 1) { app.activeDocument.artLayers.getByName("amount").textItem.contents = "" }
    else {
        app.activeDocument.artLayers.getByName("amount").textItem.contents = item.Quantity;
    }

    app.activeDocument.artLayers[6].textItem.contents = item.country; // country

}
