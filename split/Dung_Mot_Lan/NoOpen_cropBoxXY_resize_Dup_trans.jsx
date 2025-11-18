
if (typeof xoay90_File !== 'undefined') app.activeDocument.rotateCanvas(90);

cropBoxInXY(sttCropBox[0], sttCropBox[1], sttCropBox[2], sttCropBox[3], app.activeDocument.width, app.activeDocument.height);

if (lat) app.doAction("canvasHoriz", "tool");
if (xoay) app.activeDocument.activeLayer.rotate(90);
app.doAction("xoa stroke layer", "tool");


var activebounds = app.activeDocument.activeLayer.bounds;



if ((activebounds[2] - activebounds[0]) != 0) {

    if (Math.abs((G_boundDen[2] - G_boundDen[0]) - (activebounds[2] - activebounds[0])) < 10 && Math.abs((G_boundDen[3] - G_boundDen[1]) - (activebounds[3] - activebounds[1])) < 10) StatusCanGiua = true;
    else StatusCanGiua = false;



    if (arr[i].direction == "2")
        app.activeDocument.activeLayer.resize(wphone * 100 / widthden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);
    else if (arr[i].direction == "1") {
        if (typeof tyLe_Scale !== 'undefined')
            app.activeDocument.activeLayer.resize(tyLe_Scale, tyLe_Scale, AnchorPosition.MIDDLECENTER);
        else
            app.activeDocument.activeLayer.resize(hphone * 100 / heightden, hphone * 100 / heightden, AnchorPosition.MIDDLECENTER);

    }

}


app.activeDocument.activeLayer.name = arr[i].stt;

app.activeDocument.activeLayer.duplicate(doc.layerSets[Group_In], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

if ((activebounds[2] - activebounds[0]) != 0) {
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer = app.activeDocument.layerSets[Group_In].artLayers.getByName(arr[i].stt);
    app.doAction("moveZero", "tool");

    if (arr[i].direction == "2")
        app.activeDocument.activeLayer.translate(((xPosition + (wphone / widthden) * (activebounds[0] - G_boundDen[0]))), ((yPosition + (hphone / heightden) * (G_boundDen[3] - activebounds[3]))) * (-1))
    else if (arr[i].direction == "1") {
        // alert(tyLe_Scale)
        if (typeof tyLe_Scale !== 'undefined') app.activeDocument.activeLayer.translate(((xPosition + (tyLe_Scale / 100) * (activebounds[0] - G_boundDen[0]))), ((yPosition + (tyLe_Scale / 100) * (G_boundDen[3] - activebounds[3]))) * (-1))
        else app.activeDocument.activeLayer.translate(((xPosition + (hphone / heightden) * (activebounds[0] - G_boundDen[0]))), ((yPosition + (hphone / heightden) * (G_boundDen[3] - activebounds[3]))) * (-1))
    }

    else app.activeDocument.activeLayer.translate(((xPosition + (activebounds[0] - G_boundDen[0]))), ((yPosition + (G_boundDen[3] - activebounds[3]))) * (-1));



}
else {
    app.activeDocument.activeLayer = app.activeDocument.layerSets[Group_In].artLayers.getByName(arr[i].stt);
    app.activeDocument.activeLayer.remove();
} 