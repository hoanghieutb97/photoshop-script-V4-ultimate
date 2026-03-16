
#include "createDocumentMica.jsx";
for (var i = stt; i <= arr.length - 1; i++) {

    var end = 0;
    var coanh = false;
    #include "convertPixel.jsx";
    var typex = 2;
    var scall = 0;
    var xoay = false;
    for (var k = typex - 1; k >= 0; k--) {

        { // lop 11

            openFile(FileDesign, arr[i], type);
            app.doAction("canvasHoriz", "tool");
            cropBoxIn(k + 1, 1, typex, 2, app.activeDocument.width, app.activeDocument.height);

            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");

            app.activeDocument.activeLayer.name = arr[i].stt;

            var bounds1 = app.activeDocument.activeLayer.bounds;
            var widthden = bounds1[2] - bounds1[0];
            var heightden = bounds1[3] - bounds1[1];

            if (k == typex - 1) {


                if ((wphone / widthden) < (hphone / heightden))
                    scall = wphone * 100 / widthden;
                else scall = hphone * 100 / heightden;





            }



            app.activeDocument.activeLayer.resize(scall, scall, AnchorPosition.MIDDLECENTER);





            // var bounds1 = app.activeDocument.activeLayer.bounds;

            var boxW = bounds1[2] - bounds1[0] + 30;
            var boxH = bounds1[3] - bounds1[1] + 30;
            if (boxW > boxH) {
                xoay = true;
                app.activeDocument.activeLayer.rotate(-90);
                var hehe = boxW;
                boxW = boxH;
                boxH = hehe
            }

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt).remove();
                nameSave = "mica3mm";
                #include "saveallcropByName.jsx";
                $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
                #include "createDocumentMica.jsx";
                ban = ban + 1;
                openFile(FileDesign, arr[i], type);

                app.doAction("canvasHoriz", "tool");
                cropBoxIn(k + 1, 1, typex, 2, app.activeDocument.width, app.activeDocument.height);

                app.activeDocument.activeLayer.name = arr[i].stt;
                app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
                app.doAction("moveZero", "tool");
                app.doAction("xoa stroke layer", "tool");
                app.activeDocument.activeLayer.name = arr[i].stt;

                var bounds1 = app.activeDocument.activeLayer.bounds;
                var widthden = bounds1[2] - bounds1[0];
                var heightden = bounds1[3] - bounds1[1];

                if (k == typex - 1) {


                    if ((wphone / widthden) < (hphone / heightden))
                        scall = wphone * 100 / widthden;
                    else scall = hphone * 100 / heightden;

                    app.activeDocument.activeLayer.resize(scall, scall, AnchorPosition.MIDDLECENTER);



                }
                else {

                    if (arr[i].direction == "2")
                        app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
                    else if (arr[i].direction == "1") {
                        app.activeDocument.activeLayer.resize(scall, scall, AnchorPosition.MIDDLECENTER);


                    }
                }
                var bounds1 = app.activeDocument.activeLayer.bounds;
                var boxW = bounds1[2] - bounds1[0] + 30;
                var boxH = bounds1[3] - bounds1[1] + 30;
                if (boxW > boxH) {
                    xoay = true;
                    app.activeDocument.activeLayer.rotate(-90);
                    var hehe = boxW;
                    boxW = boxH;
                    boxH = hehe
                }

                stt = i;
            }
            // if (boxW > boxH) app.activeDocument.activeLayer.rotate(-90);


            #include "caculatorPosition.jsx";
            if ((bounds1[2] - bounds1[0]) != 0) {
                #include "translateCMYK.jsx";
            }
            else app.activeDocument.activeLayer.remove();


        }
        { // lop 12

            openFile(FileDesign, arr[i], type);

            app.doAction("canvasHoriz", "tool");
            cropBoxIn(k + 1, 2, typex, 2, app.activeDocument.width, app.activeDocument.height);

            app.activeDocument.activeLayer.name = arr[i].stt;

            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
            app.doAction("moveZero", "tool");
            app.doAction("xoa stroke layer", "tool");
            var bounds2 = app.activeDocument.activeLayer.bounds;

            app.activeDocument.activeLayer.name = arr[i].stt;


            app.activeDocument.activeLayer.resize(scall, scall, AnchorPosition.MIDDLECENTER);




            if (xoay) {
                app.activeDocument.activeLayer.rotate(-90);
            }

            if ((bounds2[2] - bounds2[0]) != 0) {
                app.activeDocument.activeLayer.name = arr[i].stt;
                app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
                app.doAction("moveZero", "tool");
                if (xoay) {


                    app.activeDocument.activeLayer.translate((xPosition + (bounds2[1] - bounds1[1]) * scall / 100), (yPosition + (bounds2[0] - bounds1[0]) * scall / 100) * (-1));
                }
                else
                    app.activeDocument.activeLayer.translate((xPosition + bounds2[0] - bounds1[0]), (yPosition + bounds1[3] - bounds2[3]) * (-1));


            }
            else app.activeDocument.activeLayer.remove();

        }

    }



    // nameSave = "go3mm";
    // folderLuu = folderTool;
    // #include "nganCachDo.jsx";


    end = arr[i].stt;

    if ((end == arr.length)) {

        nameSave = "mica3mm";
        #include "saveallcropByName.jsx";
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}



function cropBoxIn(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
        [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

    ]);





    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    // if(boxX==2 && boxY==2)vsvsdv
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.layers[1].remove();
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
}
function xulyGOD(typex) {

    app.activeDocument.crop([0, 0, typex * app.activeDocument.width / 9, 2 * app.activeDocument.height / 3]); //crop 4 in

}

function xulyAnhGOD() {
    app.activeDocument.crop([0, app.activeDocument.height * 2 / 3, app.activeDocument.width, app.activeDocument.height]); //crop 4 in
}