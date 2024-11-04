
nameSave = "1M-tool";
#include "createDocumentWooden2.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    var Current_Width_Height = tinhKichThuocToNhatHaiLop_coToaDo(arr[i], FileDesign, type);
    for (var k = 0; k < 2; k++) {


        openFile(FileDesign, arr[i], type);
        crop_X_Per_Y(1, k + 1, 1, 2, app.activeDocument.width, app.activeDocument.height);
        app.doAction("xoa stroke layer", "tool");
        resize_Document_____tinhKichThuocToNhatHaiLop_coToaDo(arr[i], Current_Width_Height);
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        #include "boxWFlexible.jsx";
        if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {

            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            #include "saveallcropByNameNew.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocumentWooden2.jsx";
            ban = ban + 1;
            stt = i;

            openFile(FileDesign, arr[i], type);
            crop_X_Per_Y(1, k + 1, 1, 2, app.activeDocument.width, app.activeDocument.height);
            app.doAction("xoa stroke layer", "tool");
            resize_Document_____tinhKichThuocToNhatHaiLop_coToaDo(arr[i], Current_Width_Height);
            if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
            #include "boxWFlexible.jsx";

        }

        app.activeDocument.activeLayer.name = arr[i].stt + "-" + (k + 1);
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["IN TRUOC"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "caculatorPosition.jsx";
        app.activeDocument.activeLayer = app.activeDocument.layerSets["IN TRUOC"].artLayers.getByName(arr[i].stt + "-" + (k + 1));
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
        // app.doAction("fill 12px layer", "tool");


        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt + "-" + (k + 1));
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
        app.doAction("olverlay DEN CAT", "tool");



    }



    if (i == arr.length - 1) {
        #include "saveallcropByNameNew.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
    }
}
