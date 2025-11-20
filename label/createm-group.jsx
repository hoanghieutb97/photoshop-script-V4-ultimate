
// app.open(File("//192.168.1.240/ps script data/tem.tif"));
app.open(File("//192.168.1.240/ps script data/tem128.tif"));

if (i < arr.length - 1)
    for (var j = stt; j < i; j++) {
        // $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/moveTem.jsx"));
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/moveTem128.jsx"));


        moveTem(arr[j], type);


        folderType = Folder(folderTem + "/" + typeTem + "--b-" + (ban + 1));
        if (!folderType.exists) { folderType.create(); }
   
        app.activeDocument.saveAs(Folder(folderType + "/" + arr[j].stt + "-" + arr[j].barcode + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
    }
else if (i == arr.length - 1)
    for (var j = stt; j <= i; j++) {

        // $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/moveTem.jsx"));
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/moveTem128.jsx"));


        moveTem(arr[j], type);
         folderType = Folder(folderTem + "/" + typeTem + "--b-" + (ban + 1));
        if (!folderType.exists) { folderType.create(); }
   
        app.activeDocument.saveAs(Folder(folderType + "/" + arr[j].stt + "-" + arr[j].barcode + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);

    }
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

