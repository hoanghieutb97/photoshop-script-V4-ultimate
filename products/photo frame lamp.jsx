
//////////////////////////////////////
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    var assss = false;
    #include "convertPixel.jsx";
    openFile(FileDesign, arr[i], type);
    app.doAction("strokeRed1px", "tool");

    app.doAction("canvasHoriz", "tool");
    #include "cropAndResize-autoFill.jsx";
    #include "boxWFlexible.jsx";


    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        if ((yPosition + boxW + wLast) > hAll && (xPosition + boxH + hLast) > wAll) {
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            #include "save1Mat.jsx";
            $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx")); // in tem
            #include "createDocument.jsx";
            ban = ban + 1;
            openFile(FileDesign, arr[i], type);
            app.doAction("strokeRed1px", "tool");
            app.doAction("canvasHoriz", "tool");
            #include "cropAndResize-autoFill.jsx";
            #include "boxWFlexible.jsx";
            stt = i;
        }

        else {
            alert(arr[i].stt)
            app.activeDocument.rotateCanvas(90);
            boxWN = app.activeDocument.width + 30;
            boxHN = app.activeDocument.height + 30;

            if (xPosition + wLast + boxWN <= wAll) {
                xPosition = xPosition + hLast;
                wLast = boxWN;
                if (hLast <= boxHN)
                    hLast = boxHN;
            }
            else {
                xPosition = 30;
                yPosition = yPosition + wLast;
                wLast = boxWN;
                hLast = boxHN;
            }
            assss=true;
            
        }

    }



    if (!assss) {
        if (xPosition + wLast + boxW <= wAll) {
            xPosition = xPosition + wLast;
            wLast = boxW;
            if (hLast <= boxH)
                hLast = boxH;
        }
        else {
            xPosition = 30;
            yPosition = yPosition + hLast;
            wLast = boxW;
            hLast = boxH;
        }
    }
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    {// tao khung 
        app.open(File("//192.168.1.194/back up in/ps script data/3d led/photo frame lamp.png"));
        app.activeDocument.activeLayer.name = arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "translateKHUNG.jsx";
    }

    if (i == arr.length - 1) {
        #include "save1Mat.jsx";
        $.evalFile(File("//192.168.1.194/photoshop script V4-ultimate/label/createm-autoFill.jsx"));
    }
}

