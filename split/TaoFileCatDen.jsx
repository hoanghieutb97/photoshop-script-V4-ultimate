var folderCatLaze = Folder(folderContainer + "/file cat-tool");
if (!folderCatLaze.exists) { folderCatLaze.create() }
for (var k = 0; k <= ban; k++) {
    app.open(File(folderTool + "/" + nameSave + "-" + (k + 1) + ".tif"));

    for (var m = app.activeDocument.layerSets.length - 1; m >= 0; m--) {
        var group = app.activeDocument.layerSets[m];
        if (group.name !== Group_Khung) {
            group.remove();
        }
    }
    app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName(Group_Khung);
    app.doAction("tao den group cat", "tool");
    app.activeDocument.saveAs(Folder(folderCatLaze + "/cat-" + nameSave + "-b" + (k + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

} 
