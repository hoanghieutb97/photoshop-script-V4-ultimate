
#include "createDocumentWooden.jsx";
nameSave = "go5mm";
stt = 0;
ban = 0;
for (var i = stt; i <= arr.length - 1; i++) {

    var NameBackGround = "createBackground";
    #include "convertPixel.jsx";
    app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
    ungroupAllGroups(app.activeDocument);
    app.activeDocument.selection.selectAll();
    app.activeDocument.crop(app.activeDocument.selection.bounds);
    deleteHiddenLayers(app.activeDocument);
    var haveBackGround = findAndRenameLargestLayer(app.activeDocument);
    app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
    if (haveBackGround) NameBackGround = "activeBackground";
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    var PSpotKhung = app.activeDocument.artLayers.getByName(NameBackGround).bounds;
    boxW = PSpotKhung[2] - PSpotKhung[0] + 30;
    boxH = PSpotKhung[3] - PSpotKhung[1] + 30;




    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "saveallcropByName.jsx";

        #include "createDocumentWooden.jsx";
        ban = ban + 1;
        app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
        ungroupAllGroups(app.activeDocument);
        app.activeDocument.selection.selectAll();
        app.activeDocument.crop(app.activeDocument.selection.bounds);
        deleteHiddenLayers(app.activeDocument);
        findAndRenameLargestLayer(app.activeDocument);
        app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
        if (haveBackGround) NameBackGround = "activeBackground";
        var PSpotKhung = app.activeDocument.artLayers.getByName(NameBackGround);
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        boxW = PSpotKhung[2] - PSpotKhung[0] + 30;
        boxH = PSpotKhung[3] - PSpotKhung[1] + 30;
        stt = i;

    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName(NameBackGround);
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    if (i == arr.length - 1) {
        #include "saveallcropByName.jsx";

    }
}
////////////////////////////////////////////////////////////////////////////////
#include "createDocumentWooden.jsx";
nameSave = "go3mm";
stt = 0;
ban = 0;
for (var i = stt; i <= arr.length - 1; i++) {

    var NameBackGround = "createBackground";
    #include "convertPixel.jsx";
    app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
    ungroupAllGroups(app.activeDocument);
    app.activeDocument.selection.selectAll();
    app.activeDocument.crop(app.activeDocument.selection.bounds);
    deleteHiddenLayers(app.activeDocument);
    var haveBackGround = findAndRenameLargestLayer(app.activeDocument);
    app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
    if (haveBackGround) NameBackGround = "activeBackground";
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName(NameBackGround);
    if (app.activeDocument.activeLayer.kind === LayerKind.SMARTOBJECT) {
        app.activeDocument.activeLayer.rasterize(RasterizeType.ENTIRELAYER); // Rasterize toàn bộ layer
    }
    app.doAction("duplicateSelection", "tool");
    for (var m = 0; m < app.activeDocument.layers.length; m++) {
        if (app.activeDocument.layers[m].name == NameBackGround || app.activeDocument.layers[m].name == NameBackGround + " copy") {

        }
        else {
            app.activeDocument.activeLayer = app.activeDocument.layers[m];
            app.doAction("puzzle_selectionlayer", "tool");
            app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName(NameBackGround);
            app.activeDocument.selection.clear()


        }

    }


    var PSpotKhung = app.activeDocument.artLayers.getByName(NameBackGround).bounds;
    boxW = PSpotKhung[2] - PSpotKhung[0] + 30;
    boxH = PSpotKhung[3] - PSpotKhung[1] + 30;




    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "saveallcropByName.jsx";

        #include "createDocumentWooden.jsx";
        ban = ban + 1;
        app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
        ungroupAllGroups(app.activeDocument);
        app.activeDocument.selection.selectAll();
        app.activeDocument.crop(app.activeDocument.selection.bounds);
        deleteHiddenLayers(app.activeDocument);
        var haveBackGround = findAndRenameLargestLayer(app.activeDocument);
        app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
        if (haveBackGround) NameBackGround = "activeBackground";
        if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);
        app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName(NameBackGround);
        if (app.activeDocument.activeLayer.kind === LayerKind.SMARTOBJECT) {
            app.activeDocument.activeLayer.rasterize(RasterizeType.ENTIRELAYER); // Rasterize toàn bộ layer
        }
        app.doAction("duplicateSelection", "tool");
        for (var m = 0; m < app.activeDocument.layers.length; m++) {
            if (app.activeDocument.layers[m].name == NameBackGround || app.activeDocument.layers[m].name == NameBackGround + " copy") {

            }
            else {
                app.activeDocument.activeLayer = app.activeDocument.layers[m];
                app.doAction("puzzle_selectionlayer", "tool");
                app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName(NameBackGround);
                app.activeDocument.selection.clear()


            }

        }


        var PSpotKhung = app.activeDocument.artLayers.getByName(NameBackGround).bounds;
        boxW = PSpotKhung[2] - PSpotKhung[0] + 30;
        boxH = PSpotKhung[3] - PSpotKhung[1] + 30;



        stt = i;

    }

    #include "caculatorPosition.jsx";
    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName(NameBackGround);
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);

    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName(NameBackGround + " copy");
    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "translateCMYK.jsx";
    #include "translateKHUNG.jsx";
    if (i == arr.length - 1) {
        #include "saveallcropByName.jsx";

    }
}

////////////////////////////////////////////////////////////////////////////////
#include "createDocumentWooden.jsx";
nameSave = "go6mm";
typeTem = "go6mm";
stt = 0;
ban = 0;
for (var i = stt; i <= arr.length - 1; i++) {

    var NameBackGround = "createBackground";
    #include "convertPixel.jsx";
    app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
    var activeDoc = app.activeDocument;
    ungroupAllGroups(app.activeDocument);
    app.activeDocument.selection.selectAll();
    app.activeDocument.crop(app.activeDocument.selection.bounds);
    deleteHiddenLayers(app.activeDocument);
    var haveBackGround = findAndRenameLargestLayer(app.activeDocument);
    app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
    if (haveBackGround) NameBackGround = "activeBackground";
    if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);




    for (var m = 0; m < app.activeDocument.layers.length; m++) {
        if (app.activeDocument.layers[m].name == NameBackGround || app.activeDocument.layers[m].name == NameBackGround + " copy") {

        }
        else {
            app.activeDocument.activeLayer = app.activeDocument.layers[m];
            rotateLayerIfWidthGreater(app.activeDocument);
            var PSpotKhung = app.activeDocument.activeLayer.bounds;
            boxW = PSpotKhung[2] - PSpotKhung[0] + 30;
            boxH = PSpotKhung[3] - PSpotKhung[1] + 30;

            if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                #include "saveallcropByName.jsx";

                #include "createDocumentWooden.jsx";
                ban = ban + 1;

                app.open(File(FileDesign + "/" + arr[i].sku + ".psd"));
                ungroupAllGroups(app.activeDocument);
                app.activeDocument.selection.selectAll();
                app.activeDocument.crop(app.activeDocument.selection.bounds);
                deleteHiddenLayers(app.activeDocument);
                var haveBackGround = findAndRenameLargestLayer(app.activeDocument);
                app.activeDocument.resizeImage(UnitValue(app.activeDocument.width, "px"), UnitValue(app.activeDocument.height, "px"), 300, ResampleMethod.BICUBIC);
                if (haveBackGround) NameBackGround = "activeBackground";
                if (app.activeDocument.width > app.activeDocument.height) app.activeDocument.rotateCanvas(90);

                if (app.activeDocument.layers[m].name == NameBackGround || app.activeDocument.layers[m].name == NameBackGround + " copy") {

                }
                else {
                    app.activeDocument.activeLayer = app.activeDocument.layers[m];
                    rotateLayerIfWidthGreater(app.activeDocument);
                    var PSpotKhung = app.activeDocument.activeLayer.bounds;
                    boxW = PSpotKhung[2] - PSpotKhung[0] + 30;
                    boxH = PSpotKhung[3] - PSpotKhung[1] + 30;



                    stt = i;

                }
            }

            #include "caculatorPosition.jsx";
            app.activeDocument.activeLayer = app.activeDocument.layers[m];
            app.activeDocument.activeLayer.name = arr[i].stt;
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
            app.activeDocument = app.documents["GLLM"];

            #include "translateCMYK.jsx";

            app.activeDocument = activeDoc;



        }

    }

    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


    {
        app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
        app.activeDocument.artLayers[0].textItem.contents = arr[i].stt;
        app.doAction("sttkinlytoy", "tool");
        var boxW = app.activeDocument.width;
        var boxH = app.activeDocument.height;
        app.activeDocument.activeLayer.name = "stt" + arr[i].stt;
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        if ((yPosition + boxH + 30 + hLast > hAll) && (xPosition + boxW + 30 + wLast) > wAll) {
            app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + arr[i].stt).remove();
            #include "saveallcropByName.jsx";
            $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));

            #include "createDocumentWooden.jsx";
            ban = ban + 1;
            stt = i;
            app.open(File("//192.168.1.240/ps script data/sttkinlytoy.tif"));
            app.activeDocument.artLayers[0].textItem.contents = i + 1;
            app.doAction("sttkinlytoy", "tool");
            var boxW = app.activeDocument.width;
            var boxH = app.activeDocument.height;
            app.activeDocument.activeLayer.name = "stt" + arr[i].stt
            app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        {// tinh boxW va boxH moi
            boxW = boxW + 30;
            boxH = boxH + 30;

            if (xPosition + wLast + boxW <= wAll) {
                xPosition = xPosition + wLast;
                wLast = boxW;
                if (hLast <= boxH)
                    hLast = boxH;
            }
            else {
                xPosition = 0;
                yPosition = yPosition + hLast;
                wLast = boxW;
                hLast = boxH;
            }
        }
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName("stt" + arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

    }

    if (i == arr.length - 1) {
        #include "saveallcropByName.jsx";

    }







}

////////////////////////////////tem

stt = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    if (i == arr.length - 1) {

        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


//////////////////////////////////////////////////////////////////// function
function ungroupAllGroups(doc) {
    function ungroupGroup(group) {
        // Xử lý tất cả nhóm con trước
        while (group.layerSets.length > 0) {
            ungroupGroup(group.layerSets[0]); // Gọi đệ quy để xử lý Group con
        }
        app.activeDocument.activeLayer = group;

        app.doAction("ungroupkindlytoy", "tool")
    }

    // Lặp qua tất cả Group từ dưới lên trên để tránh lỗi khi xóa
    for (var i = doc.layerSets.length - 1; i >= 0; i--) {
        ungroupGroup(doc.layerSets[i]);
    }

}

function deleteHiddenLayers(doc) {
    var layers = doc.artLayers; // Lấy tất cả các layer thường
    var groups = doc.layerSets; // Lấy tất cả các group

    // Xóa tất cả layer bị ẩn
    for (var k = layers.length - 1; k >= 0; k--) {

        if (!layers[k].visible) {


            var namelayerheh = layers[k].name
            layers.getByName(namelayerheh).remove();

        }
    }
}
function findAndRenameLargestLayer(doc) {
    var docWidth = doc.width;
    var docHeight = doc.height;
    var layers = doc.artLayers;
    var groups = doc.layerSets;
    var targetLayer = null;

    function checkLayerSize(layer) {
        var bounds = layer.bounds;
        var layerWidth = bounds[2] - bounds[0]; // width = right - left
        var layerHeight = bounds[3] - bounds[1]; // height = bottom - top

        if (layerWidth >= docWidth * 0.9 && layerHeight >= docHeight * 0.9) {
            return true;
        }
        return false;
    }

    // Kiểm tra tất cả layer thường
    for (var i = 0; i < layers.length; i++) {
        if (checkLayerSize(layers[i])) {
            targetLayer = layers[i];
        }
    }

    // Kiểm tra layer trong group
    function checkLayersInGroup(group) {
        for (var i = 0; i < group.artLayers.length; i++) {
            if (checkLayerSize(group.artLayers[i])) {
                targetLayer = group.artLayers[i];
            }
        }
        for (var j = 0; j < group.layerSets.length; j++) {
            checkLayersInGroup(group.layerSets[j]); // Đệ quy kiểm tra group lồng nhau
        }
    }

    for (var j = 0; j < groups.length; j++) {
        checkLayersInGroup(groups[j]);
    }

    // Nếu tìm thấy layer phù hợp, đổi tên
    if (targetLayer) {
        targetLayer.name = "activeBackground";
        return true
    }
    else {
        createBlackBackground(app.activeDocument);
        return false
    }

}


function createBlackBackground(doc) {
    // Tạo layer mới
    var newLayer = doc.artLayers.add();
    newLayer.name = "createBackground";

    // Đặt layer về chế độ Normal (đề phòng nếu bị đặt chế độ khác)
    newLayer.blendMode = BlendMode.NORMAL;

    // Chọn toàn bộ vùng làm việc
    doc.selection.selectAll();

    // Đổ màu đen
    var blackColor = new SolidColor();
    blackColor.rgb.red = 0;
    blackColor.rgb.green = 0;
    blackColor.rgb.blue = 0;

    doc.selection.fill(blackColor);

    // Bỏ vùng chọn
    doc.selection.deselect();
}
function rotateLayerIfWidthGreater(doc) {
    var activeLayer = doc.activeLayer;
    var bounds = activeLayer.bounds;

    var layerWidth = bounds[2] - bounds[0]; // right - left
    var layerHeight = bounds[3] - bounds[1]; // bottom - top

    // Nếu width > height thì xoay 90 độ
    if (layerWidth > layerHeight) {
        activeLayer.rotate(90); // Xoay 90 độ
    }
} 