function getSelectionActiveLayer(params) {
    var idsetd = charIDToTypeID("setd");
    var desc16 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref5 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref5.putProperty(idChnl, idfsel);
    desc16.putReference(idnull, ref5);
    var idT = charIDToTypeID("T   ");
    var ref6 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idTrsp = charIDToTypeID("Trsp");
    ref6.putEnumerated(idChnl, idChnl, idTrsp);
    desc16.putReference(idT, ref6);
    executeAction(idsetd, desc16, DialogModes.NO);


}


function tinhKichThuocToNhatHaiLop_coToaDo(item, FileDesign, type) {
    openFile(FileDesign, item, type);
    if (app.activeDocument.width < app.activeDocument.height) app.activeDocument.rotateCanvas(-90)
    var activeWidth = app.activeDocument.width;
    app.activeDocument.selection.select([[0, 0], [0, app.activeDocument.height], [app.activeDocument.width / 2, app.activeDocument.height], [app.activeDocument.width / 2, 0]]);
    app.doAction("cat paste", "tool");
    var bounds1 = app.activeDocument.layers[0].bounds;
    var bounds2 = app.activeDocument.layers[1].bounds;
    var b0 = bounds1[0];
    var b1 = bounds1[1];
    var b2 = bounds1[2];
    var b3 = bounds1[3];
    // alert(bounds1)
    if (bounds1[0] > (bounds2[0] - activeWidth / 2)) b0 = bounds2[0] - (activeWidth / 2);
    if (bounds1[1] > (bounds2[1])) b1 = bounds2[1];
    if (bounds1[2] < (bounds2[2] - activeWidth / 2)) b2 = bounds2[2] - (activeWidth / 2);
    if (bounds1[3] < (bounds2[3])) b3 = bounds2[3];
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    return [b2 - b0, b3 - b1]
}

function crop_X_Per_Y(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [(boxX - 1) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],
        [(boxX - 1) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY) * (heightF / boxSumY)],
        [(boxX) * (widthF / boxSumX), (boxY - 1) * (heightF / boxSumY)],

    ]);
    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.layers[1].remove();
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
}

function resize_Document_____tinhKichThuocToNhatHaiLop_coToaDo(item, Current_Width_Height) {
    var CurWidth = Current_Width_Height[0];
    var CurHeight = Current_Width_Height[1];
    var hphone = Math.round(item.hight / 0.084667);
    var wphone = Math.round(item.width / 0.084667);

    app.activeDocument.activeLayer.name = 1;
    if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);

    if (CurWidth > CurHeight) app.activeDocument.activeLayer.resize(wphone * 100 / CurWidth, hphone * 100 / CurWidth, AnchorPosition.MIDDLECENTER);
    else app.activeDocument.activeLayer.resize(wphone * 100 / CurHeight, hphone * 100 / CurHeight, AnchorPosition.MIDDLECENTER);

    var activeBounds = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(activeBounds, 0, activeBounds[2] - activeBounds[0], activeBounds[3] - activeBounds[1]);
}


function cropBoxInXY(boxX, boxY, boxSumX, boxSumY, widthF, heightF) {

    app.activeDocument.selection.select([
        [Math.round((boxX - 1) * (widthF / boxSumX)), Math.round((boxY - 1) * (heightF / boxSumY))],
        [Math.round((boxX - 1) * (widthF / boxSumX)), Math.round((boxY) * (heightF / boxSumY))],
        [Math.round((boxX) * (widthF / boxSumX)), Math.round((boxY) * (heightF / boxSumY))],
        [Math.round((boxX) * (widthF / boxSumX)), Math.round((boxY - 1) * (heightF / boxSumY))],

    ]);


    app.activeDocument.selection.stroke(app.foregroundColor, 1, StrokeLocation.INSIDE);
    app.doAction("duplicateSelection", "tool")
    app.activeDocument.layers[1].remove();
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);


}
function selectWhitePixels() {
    var idClrR = charIDToTypeID("ClrR");
    var desc = new ActionDescriptor();

    // Fuzziness = 0 (chọn chính xác trắng 255,255,255)
    desc.putInteger(charIDToTypeID("Fzns"), 15);

    // Màu trắng RGB(255,255,255)
    var white = new ActionDescriptor();
    white.putDouble(charIDToTypeID("Rd  "), 255);
    white.putDouble(charIDToTypeID("Grn "), 255);
    white.putDouble(charIDToTypeID("Bl  "), 255);

    desc.putObject(charIDToTypeID("Mnm "), charIDToTypeID("RGBC"), white);

    executeAction(idClrR, desc, DialogModes.NO);
    if (hasSelection()) app.doAction("select same color", "tool");
}
function hasSelection() {
    try {
        var b = app.activeDocument.selection.bounds;
        return true;
    } catch (e) {
        return false;
    }
}

function getShortCodeLabel(str, ban) {
    var parts = str.replace(/ /g, "_").split("_");

    var result = "";
    var dayMonth = "";
    var hasDate = false;

    // Check nếu có ngày kiểu yyyy-mm-dd
    var last3 = parts.slice(-3);
    if (last3[0] && last3[0].match(/^\d{4}-\d{2}-\d{2}$/)) {
        hasDate = true;
        var dateParts = last3[0].split("-");
        var day = parseInt(dateParts[2], 10);   // bỏ số 0 đầu
        var month = parseInt(dateParts[1], 10); // bỏ số 0 đầu
        dayMonth = day + "-" + month;
    }

    // Lấy phần chính (trừ ngày/giờ/đuôi)
    var mainParts = hasDate ? parts.slice(0, parts.length - 3) : parts;

    // Tạo mã viết tắt từ ký tự đầu
    for (var i = 0; i < mainParts.length; i++) {
        result += mainParts[i].charAt(0).toUpperCase();
    }

    // Nếu ký tự đầu là số thì tách riêng

    if (!isNaN(mainParts[0])) {
        return mainParts[0] + " " + result.slice(mainParts[0].length) + (hasDate ? " " + dayMonth : "");
    }
    else {
        return "Ban " + (ban + 1) + " - " + result + (hasDate ? " " + dayMonth : "");
    }
}


function doesIdExists(id) {// function to check if the id exists
    var res = true;
    var ref = new ActionReference();
    ref.putIdentifier(charIDToTypeID('Lyr '), id);
    try { var desc = executeActionGet(ref) } catch (err) { res = false };
    return res;
}

function multiSelectByIDs(ids) {
    if (ids.constructor != Array) ids = [ids];
    var layers = new Array();
    var id54 = charIDToTypeID("slct");
    var desc12 = new ActionDescriptor();
    var id55 = charIDToTypeID("null");
    var ref9 = new ActionReference();
    for (var i = 0; i < ids.length; i++) {
        if (doesIdExists(ids[i]) == true) {// a check to see if the id stil exists
            layers[i] = charIDToTypeID("Lyr ");
            ref9.putIdentifier(layers[i], ids[i]);
        }
    }
    desc12.putReference(id55, ref9);
    var id58 = charIDToTypeID("MkVs");
    desc12.putBoolean(id58, false);
    executeAction(id54, desc12, DialogModes.NO);
}

function tonTai(params) {
    if (typeof params !== 'undefined') return params;
    else return false

}