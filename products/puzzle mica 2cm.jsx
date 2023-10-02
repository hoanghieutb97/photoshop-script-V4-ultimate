function xuLy(arr, wAll, hAll, FileDesign, FileName, type) {
    var yPosition, xPosition, hLast, wLast;
    var stt = 0;
    for (var i = 0; i <= arr.length - 1; i++) { // loop làm file in
        #include "createDocument.jsx";
        var lastName = "";
        // for loop items
        for (var j = 0; j <= arr[i].length - 1; j++) {
            #include "compute coordinates.jsx"; // tính toán toạ độ
            {
                // open File 
                #include "openFile.jsx";
                openFile(FileDesign, arr[i][j], type)
                app.doAction("strokeRed1px", "tool");
                app.doAction("canvasHoriz", "tool");
                // crop and resize width height
                #include "cropAndResizeWidth-Height.jsx";
            }
            {
                app.activeDocument.activeLayer.name = arr[i][j].stt;
                app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                app.doAction("canvasHoriz", "tool");
                #include "saveDesign.jsx";
                saveImageTool(arr[i][j]);
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                { // translate layer đến vị trí cần in
                    app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i][j].stt);
                    app.doAction("moveZero", "tool");
                    app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
                }
            }
            {// tao khung su


                app.open(File("//192.168.1.194/ps script data/khung mica 2cm/" + arr[i][j].case + ".png"));
                app.doAction("canvasHoriz", "tool");
                app.activeDocument.activeLayer.name = arr[i][j].stt;
                app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i][j].stt);
                app.doAction("moveZero", "tool");
                app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

            }
        }
        {
            var folder1 = Folder("//192.168.1.199/in/" + type + "-" + FileName);
            if (!folder1.exists) { folder1.create(); }
            #include "cropDocument.jsx";
            app.activeDocument.saveAs(Folder(folder1 + "/in " + (i + 1) + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        { // tạo nhãn
            #include "label 1-saveInSubFolder.jsx";
        }
    } // hết làm file
}

