
/////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    app.doAction("strokeRed1px", "tool");
    #include "cropAndResize-autoFill.jsx";
    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        app.doAction("strokeRed1px", "tool");
        #include "cropAndResize-autoFill.jsx";
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    {// tao khung 
        if (arr[i].nameId == "chanNen thuong")
            app.open(File("//192.168.1.240/ps script data/khung Wood Candle.png"));
        else if ((arr[i].nameId == "chanNen tim"))
            app.open(File("//192.168.1.240/ps script data/khung Wood Candle tim.png"));

        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "translateKHUNG.jsx";
    }

    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}



