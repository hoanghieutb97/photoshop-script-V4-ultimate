//////////////////////////////////
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    app.open(File("//192.168.2.240/ps script data/tat/crop tat.png"));
    app.activeDocument.activeLayer.name="Layer 1"
    openFile(FileDesign, arr[i], type);
    #include "cropAndResize-autoFill.jsx";
    app.activeDocument.activeLayer.name = "1 copy";
    app.activeDocument.activeLayer.duplicate(app.documents["crop tat.png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.doAction("moveCenter", "tool");
    app.doAction("crop mica dzt", "tool");
    app.activeDocument.selection.selectAll();
    app.activeDocument.selection.contract(2);
    app.activeDocument.selection.invert();
    app.activeDocument.selection.clear();
    app.activeDocument.layers["1 copy"].remove();
    app.activeDocument.layers["Layer 1"].remove();
    app.open(File("//192.168.2.240/ps script data/tat/khung tat.png"));
    
    app.activeDocument.activeLayer.duplicate(app.documents["crop tat.png"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer.merge();
    
    if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);
    app.doAction("Jpan coarted color", "tool");

    
    app.activeDocument.saveAs(Folder(folderContainer + "/" + arr[i].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    if (i == arr.length - 1) {

        $.evalFile(File("//192.168.2.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


