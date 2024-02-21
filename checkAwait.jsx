
var file = new File("~/Desktop/ServerFile/photoshopStatus.txt");
file.open("w");
var noidung = '{"state":"awaitReady","err":false,"cardId":false}';
file.write(noidung);
file.close();

