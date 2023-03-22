
/////////////////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    app.doAction("strokeRed1px", "autoUv");
    #include "cropAndResize-autoFill.jsx";
    // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    if ((yPosition + boxH + hLast > hAll) && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.99/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;
        openFile(FileDesign, arr[i], type);
        app.doAction("strokeRed1px", "autoUv");
        #include "cropAndResize-autoFill.jsx";
        // if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        stt = i;

    }
    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    {// tao khung su
        if (arr[i][j].case == "lotCoc-tron") { // tuy chinh product type
            app.open(File("//192.168.1.99/ps script data/khung drink coaster/tron.png"));
        }
        else if (arr[i][j].case == "lotCoc-Vuong") {
            app.open(File("//192.168.1.99/ps script data/khung drink coaster/vuong.png"));
        }
        app.activeDocument.activeLayer.name = arr[i][j].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "translateKHUNG.jsx";

    }

    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.99/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

