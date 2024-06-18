
var file = new File("~/Desktop/ServerFile/photoshopStatus.txt");
file.open("w");
var noidung = '{"state":"busy","err":true,"cardId":"' + cardId + '"}';
file.write(noidung);
file.close();
for (var k = 0; k < app.documents.length; k++) {
    app.documents[k].close(SaveOptions.DONOTSAVECHANGES);

}




