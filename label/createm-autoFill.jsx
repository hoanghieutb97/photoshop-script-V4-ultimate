
app.open(File("//192.168.1.99/ps script data/tem.tif"));
for (var j = stt; j <= i; j++) {


    $.evalFile(File("//192.168.1.99/photoshop script V4-ultimate/label/moveTem.jsx"));
    moveTem(arr[j], type);
    folderBan = Folder(folderTem + "/b-" + (ban + 1));
    if (!folderBan.exists) { folderBan.create(); }
    app.activeDocument.saveAs(Folder(folderBan + "/" + arr[j].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
}
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

