var arrNew = []
for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i].nameId != "PAINTED PIECE") arrNew.push(arr[i])
}
// alert(arrNew)
arr = arrNew;
var stt = 0;
ban = 0;
#include "createDocument.jsx";
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    openAndResizeFile(arr[i], FileDesign, wphone, hphone, "type");

    app.activeDocument.activeLayer = app.activeDocument.layers.getByName("0")
    boxW = app.activeDocument.width + 30;
    boxH = app.activeDocument.height + 30;

    #include "boxWFlexible.jsx";

    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        nameSave = "go5mm-";
        app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        #include "createDocument.jsx";
        ban = ban + 1;

        openAndResizeFile(arr[i], FileDesign, wphone, hphone, "type");

        { // resize document

            boxW = app.activeDocument.width + 30;
            boxH = app.activeDocument.height + 30;
        }
        #include "boxWFlexible.jsx";

        stt = i;

    }


    app.activeDocument.activeLayer.name = arr[i].stt;
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "caculatorPosition.jsx";
    #include "translateCMYK.jsx";


    {// text stt
        var textLayer = app.activeDocument.artLayers.add();
        textLayer.name = "a" + arr[i].stt;
        textLayer.kind = LayerKind.TEXT;
        textLayer.textItem.contents = arr[i].stt;
        textLayer.textItem.size = 70;
        var textColor = new SolidColor();
        textColor.rgb.hexValue = "FF0000"; // Red color
        textLayer.textItem.color = textColor;


        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
        app.activeDocument.layers["a" + arr[i].stt].move(app.activeDocument.layerSets["SPOT"], ElementPlacement.INSIDE);
    }
    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        nameSave = "go5mm-";
        app.activeDocument.saveAs(Folder(folderTool + "/" + nameSave + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);


        //$.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}



#include "createDocument.jsx";
var stt = 0;
ban = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";

    openAndResizeFile(arr[i], FileDesign, wphone, hphone, "type");


    var layerSet = app.activeDocument.layerSets.add();
    layerSet.name = "a" + arr[i].stt;
    var arr2 = [];
    for (var k = 0; k < app.activeDocument.layers.length; k++) {
        if (app.activeDocument.layers[k].name.toLowerCase().split(" ").join("") == "wooden")
            arr2.push(app.activeDocument.layers[k])
    }

    for (var k = 0; k < arr2.length; k++) {
        arr2[k].move(layerSet, ElementPlacement.INSIDE);
    }

    var bounds4 = app.activeDocument.layerSets[0].bounds;
    boxW = bounds4[2] - bounds4[0];
    boxH = bounds4[3] - bounds4[1];




    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.layerSets["SPOT"].move(app.activeDocument, ElementPlacement.PLACEATBEGINNING)

        app.activeDocument.saveAs(Folder(folderTool + "/go3mm-" + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        //$.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openAndResizeFile(arr[i], FileDesign, wphone, hphone, "type");

        var layerSet = app.activeDocument.layerSets.add();
        layerSet.name = "a" + arr[i].stt;
        var arr2 = [];
        for (var k = 0; k < app.activeDocument.layers.length; k++) {
            if (app.activeDocument.layers[k].name.toLowerCase() == "wooden")
                arr2.push(app.activeDocument.layers[k])
        }
        for (var k = 0; k < arr2.length; k++) {
            arr2[k].move(layerSet, ElementPlacement.INSIDE);
        }

        var bounds4 = app.activeDocument.layerSets[0].bounds;
        boxW = bounds4[2] - bounds4[0];
        boxH = bounds4[3] - bounds4[1];




        stt = i;

    }


    var noneGroup = true;
    app.activeDocument.layerSets[0].duplicate(app.documents["GLLM"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "caculatorPosition.jsx";
    if (app.activeDocument.layerSets[0].artLayers.length > 0) {
        noneGroup = false;
        app.doAction("moveZero", "tool");
        app.activeDocument.layerSets[0].translate(xPosition, (yPosition) * (-1));
    }

    {// text stt
        var textLayer = app.activeDocument.artLayers.add();

        textLayer.name = "a" + arr[i].stt;
        textLayer.kind = LayerKind.TEXT;
        textLayer.textItem.contents = arr[i].stt;
        textLayer.textItem.size = 70;
        var textColor = new SolidColor();
        textColor.rgb.hexValue = "FF0000"; // Red color
        textLayer.textItem.color = textColor;


        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));
        if (!noneGroup) app.activeDocument.layers["a" + arr[i].stt].move(app.activeDocument.layerSets["SPOT"], ElementPlacement.INSIDE);
        else app.activeDocument.layers["a" + arr[i].stt].remove();
    }
    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        app.activeDocument.layerSets["SPOT"].move(app.activeDocument, ElementPlacement.PLACEATBEGINNING)

        app.activeDocument.saveAs(Folder(folderTool + "/go3mm-" + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        //$.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));
    }
}


#include "createDocument.jsx";
var stt = 0;
ban = 0;
for (var i = stt; i <= arr.length - 1; i++) {
    #include "convertPixel.jsx";



    openAndResizeFile(arr[i], FileDesign, wphone, hphone, "mica");


    var layerSet = app.activeDocument.layerSets.add();
    layerSet.name = "a" + arr[i].stt;
    var arr2 = [];
    for (var k = 0; k < app.activeDocument.layers.length; k++) {
        if (app.activeDocument.layers[k].name.toLowerCase().split(" ").join("") == "acrylic")
            arr2.push(app.activeDocument.layers[k])
    }
    for (var k = 0; k < arr2.length; k++) {
        arr2[k].move(layerSet, ElementPlacement.INSIDE);
    }

    var bounds4 = app.activeDocument.layerSets[0].bounds;
    boxW = bounds4[2] - bounds4[0];
    boxH = bounds4[3] - bounds4[1];




    if ((yPosition + boxH + hLast) > hAll && (xPosition + boxW + wLast) > wAll) {
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument.layerSets["SPOT"].move(app.activeDocument, ElementPlacement.PLACEATBEGINNING)

        app.activeDocument.saveAs(Folder(folderTool + "/mica3mm-" + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFillKT.jsx")); // in tem
        #include "createDocument.jsx";
        ban = ban + 1;

        openAndResizeFile(arr[i], FileDesign, wphone, hphone, "mica");

        var layerSet = app.activeDocument.layerSets.add();
        layerSet.name = "a" + arr[i].stt;
        var arr2 = [];
        for (var k = 0; k < app.activeDocument.layers.length; k++) {
            if (app.activeDocument.layers[k].name.toLowerCase() == "acrylic")
                arr2.push(app.activeDocument.layers[k])
        }
        if (arr2.length > 0)
            for (var k = 0; k < arr2.length; k++) {
                arr2[k].move(layerSet, ElementPlacement.INSIDE);
            }

        var bounds4 = app.activeDocument.layerSets[0].bounds;
        boxW = bounds4[2] - bounds4[0];
        boxH = bounds4[3] - bounds4[1];




        stt = i;

    }

    var noneGroup = true;

    app.activeDocument.layerSets[0].duplicate(app.documents["GLLM"], ElementPlacement.PLACEATBEGINNING);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    #include "caculatorPosition.jsx";
    if (app.activeDocument.layerSets[0].layers.length !== 0) {
        noneGroup = false;
        app.doAction("moveZero", "tool");
        app.activeDocument.layerSets[0].translate(xPosition, (yPosition) * (-1));
    }

    {// text stt
        var textLayer = app.activeDocument.artLayers.add();

        textLayer.name = "a" + arr[i].stt;
        textLayer.kind = LayerKind.TEXT;
        textLayer.textItem.contents = arr[i].stt;
        textLayer.textItem.size = 70;
        var textColor = new SolidColor();
        textColor.rgb.hexValue = "FF0000"; // Red color
        textLayer.textItem.color = textColor;


        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, (yPosition) * (-1));

        if (!noneGroup) app.activeDocument.layers["a" + arr[i].stt].move(app.activeDocument.layerSets["SPOT"], ElementPlacement.INSIDE);
        else app.activeDocument.layers["a" + arr[i].stt].remove();
    }
    if (i == arr.length - 1) {
        // #include "xoaExpand12px.jsx";
        app.activeDocument.layerSets["SPOT"].move(app.activeDocument, ElementPlacement.PLACEATBEGINNING)

        app.activeDocument.saveAs(Folder(folderTool + "/mica3mm-" + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        $.evalFile(File("//192.168.1.240/photoshop-script-V4-ultimate/label/createm-autoFillKT.jsx"));
    }
}


var stt = 0;

var folderThumb = Folder(folderContainer + "/imageThumb");
if (!folderThumb.exists) { folderThumb.create(); }

for (var i = stt; i <= arr.length - 1; i++) {
    // app.open(File(FileDesign + "/" + item.sku + ".psd"));
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    var GAP = 20;
    var partCount = 0;
    var doc = null;

    function px(v) { return v.as("px"); }

    function getAllLayers(parent, arr) {
        for (var i = 0; i < parent.layers.length; i++) {
            var l = parent.layers[i];
            if (l.typename === "ArtLayer") arr.push(l);
            else if (l.typename === "LayerSet") getAllLayers(l, arr);
        }
    }

    function getBounds(layer) {
        var b = layer.bounds;
        return {
            left: px(b[0]),
            top: px(b[1]),
            right: px(b[2]),
            bottom: px(b[3])
        };
    }

    function getCenter(bounds) {
        return {
            x: (bounds.left + bounds.right) / 2,
            y: (bounds.top + bounds.bottom) / 2
        };
    }

    function pointInBounds(point, bounds) {
        return point.x >= bounds.left && point.x <= bounds.right &&
            point.y >= bounds.top && point.y <= bounds.bottom;
    }

    function findOverlappingIndices(layers) {
        var allOverlap = [];
        var beingOverlap = [];

        // Bước 1: Tìm tất cả layers đè lên layer khác
        for (var i = 0; i < layers.length; i++) {
            var layerA = layers[i];
            var boundsA = getBounds(layerA);
            var centerA = getCenter(boundsA);

            for (var j = 0; j < layers.length; j++) {
                if (i === j) continue;
                try {
                    var layerB = layers[j];
                    var boundsB = getBounds(layerB);

                    if (pointInBounds(centerA, boundsB)) {
                        allOverlap.push(i);
                        break;
                    }
                } catch (e) { }
            }
        }

        // Bước 2: Tìm layers bị đè (trong tất cả overlap)
        for (var i = 0; i < allOverlap.length; i++) {
            var idx = allOverlap[i];
            var layerA = layers[idx];
            var boundsA = getBounds(layerA);

            // Check xem có layer khác trong overlap có center nằm trong bounds của layer này không
            for (var j = 0; j < allOverlap.length; j++) {
                if (i === j) continue;
                var idx2 = allOverlap[j];
                var layerB = layers[idx2];

                try {
                    var boundsB = getBounds(layerB);
                    var centerB = getCenter(boundsB);

                    if (pointInBounds(centerB, boundsA)) {
                        beingOverlap.push(idx);
                        break;
                    }
                } catch (e) { }
            }
        }

        // Bước 3: Tìm layer bị đè nhiều nhất (nằm dưới cùng) và loại bỏ chỉ layer đó
        var beingOverlapCount = {};
        for (var i = 0; i < beingOverlap.length; i++) {
            var idx = beingOverlap[i];
            beingOverlapCount[idx] = (beingOverlapCount[idx] || 0) + 1;
        }

        // Tìm layer bị đè nhiều nhất
        var maxBeingOverlapIdx = -1;
        var maxCount = 0;
        for (var idx in beingOverlapCount) {
            if (beingOverlapCount[idx] > maxCount) {
                maxCount = beingOverlapCount[idx];
                maxBeingOverlapIdx = parseInt(idx);
            }
        }

        // Return allOverlap trừ layer bị đè nhiều nhất
        var result = [];
        for (var k = 0; k < allOverlap.length; k++) {
            var idx = allOverlap[k];
            if (idx !== maxBeingOverlapIdx) {
                result.push(idx);
            }
        }

        // Debug
        var debugMsg = "=== findOverlappingIndices ===\n";
        debugMsg += "Total layers: " + layers.length + "\n";
        debugMsg += "allOverlap (all overlapping): [";
        for (var d = 0; d < allOverlap.length; d++) {
            debugMsg += layers[allOverlap[d]].name + (d < allOverlap.length - 1 ? ", " : "");
        }
        debugMsg += "]\n";
        debugMsg += "beingOverlap (being overlapped): [";
        for (var d = 0; d < beingOverlap.length; d++) {
            debugMsg += layers[beingOverlap[d]].name + (d < beingOverlap.length - 1 ? ", " : "");
        }
        debugMsg += "]\n";
        debugMsg += "beingOverlapCount: ";
        for (var idx in beingOverlapCount) {
            debugMsg += layers[idx].name + "=" + beingOverlapCount[idx] + ", ";
        }
        debugMsg += "\n";
        debugMsg += "maxBeingOverlapIdx (to move to Group 2): " + (maxBeingOverlapIdx >= 0 ? layers[maxBeingOverlapIdx].name : "none") + "\n";
        debugMsg += "result (to move to Group 1): [";
        for (var d = 0; d < result.length; d++) {
            debugMsg += layers[result[d]].name + (d < result.length - 1 ? ", " : "");
        }
        debugMsg += "]\n\n";

        // alert(debugMsg);

        return result;
    }

    function cropToVisible(targetDoc) {
        var visibleBounds = null;
        var allLayers = [];
        getAllLayers(targetDoc, allLayers);

        for (var i = 0; i < allLayers.length; i++) {
            try {
                var b = getBounds(allLayers[i]);
                if (!visibleBounds) {
                    visibleBounds = { left: b.left, top: b.top, right: b.right, bottom: b.bottom };
                } else {
                    visibleBounds.left = Math.min(visibleBounds.left, b.left);
                    visibleBounds.top = Math.min(visibleBounds.top, b.top);
                    visibleBounds.right = Math.max(visibleBounds.right, b.right);
                    visibleBounds.bottom = Math.max(visibleBounds.bottom, b.bottom);
                }
            } catch (e) { }
        }

        if (visibleBounds) {
            targetDoc.crop([visibleBounds.left, visibleBounds.top, visibleBounds.right, visibleBounds.bottom]);
        }
    }

    function savePNG(filename, sourceDoc) {
        var filepath = new File(outputFolder + "/" + filename + ".png");

        var opts = new PNGSaveOptions();
        opts.interlaced = false;

        sourceDoc.saveAs(filepath, opts, true);
    }

    function processIteration(doc, baseFilename) {
        var layers = [];
        getAllLayers(doc, layers);

        if (layers.length === 0) {
            return false;
        }

        var overlappingIndices = findOverlappingIndices(layers);

        if (overlappingIndices.length === 0) {
            // No overlapping - save final PNG
            cropToVisible(doc);
            partCount++;
            var filename = baseFilename + "_part" + partCount;
            savePNG(filename, doc);
            return false;
        }

        // Create Group 1 (overlapping layers)
        var group1 = doc.layerSets.add();
        group1.name = "Group_Overlapping";

        for (var k = overlappingIndices.length - 1; k >= 0; k--) {
            var idx = overlappingIndices[k];
            var layer = layers[idx];
            layer.move(group1, ElementPlacement.INSIDE);
        }

        // Create Group 2 (remaining layers)
        var group2 = doc.layerSets.add();
        group2.name = "Group_Remaining";

        var i = doc.layers.length - 1;
        while (i >= 0) {
            var l = doc.layers[i];
            if (l.typename === "ArtLayer" && l.name !== group1.name && l.name !== group2.name) {
                l.move(group2, ElementPlacement.INSIDE);
            }
            i--;
        }
        var activeDocX = app.activeDocument;

        // Duplicate Group 2 to new document
        var docW = px(doc.width);
        var docH = px(doc.height);
        var newDoc = app.documents.add(docW, docH, doc.resolution, "abc", NewDocumentMode.RGB, DocumentFill.TRANSPARENT);

        // Duplicate layers from Group 2 to new document
        app.activeDocument = activeDocX;
        for (var gl = 0; gl < group2.layers.length; gl++) {
            // alert(group2.layers[gl].name);
            // alert(newDoc.name);
            group2.layers[gl].duplicate(newDoc, ElementPlacement.INSIDE);
            // svsv
        }
        app.activeDocument = newDoc;
        // Crop and save PNG from new document
        cropToVisible(newDoc);
        partCount++;
        var filename = baseFilename ? baseFilename + (partCount > 1 ? "_part" + partCount : "") : "_part" + partCount;
        savePNG(filename, newDoc);

        newDoc.close(SaveOptions.DONOTSAVECHANGES);
        app.activeDocument = activeDocX;

        // Delete Group 2 from original document
        group2.remove();

        // Ungroup Group 1
        var group1 = app.activeDocument.layerSets.getByName("Group_Overlapping");

        while (group1.layers.length > 0) {
            group1.layers[0].move(
                app.activeDocument,
                ElementPlacement.PLACEATBEGINNING
            );
        }

        group1.remove();




        return true;
    }

    function showAllLayers(parent) {
        for (var i = 0; i < parent.layers.length; i++) {
            var l = parent.layers[i];
            l.visible = true;
            if (l.typename === "LayerSet") {
                showAllLayers(l);
            }
        }
    }

    function processLayerGroup(layerType, baseFilename) {
        partCount = 0;

        open(psdFile);
        doc = app.activeDocument;

        // Show all hidden layers
        showAllLayers(doc);

        // Filter to keep only specific layer type
        var allLayers = [];
        getAllLayers(doc, allLayers);

        for (var i = allLayers.length - 1; i >= 0; i--) {
            var layer = allLayers[i];
            var shouldKeep = false;

            if (layerType === "bottom") {
                shouldKeep = (layer === doc.layers[doc.layers.length - 1]);
            } else {
                try {
                    var name = layer.name.replace(/^\s+|\s+$/g, '').toLowerCase();
                    shouldKeep = (name === layerType);
                } catch (e) { }
            }

            if (!shouldKeep) {
                layer.remove();
            }
        }

        // Process iterations
        while (processIteration(doc, baseFilename)) {
            // Continue
        }

        doc.close(SaveOptions.DONOTSAVECHANGES);
    }


    ///////////////////////////////////////////////////////////////

    var psdFile = File(FileDesign + "/" + arr[i].sku + ".psd")
    var currentPsdFilename = arr[i].barcode;

    // Create output folder in /xoa/ for this PSD
    var xoaFolder = new Folder(Folder.desktop + "/xoa");
    if (!xoaFolder.exists) xoaFolder.create();
    var outputFolder = Folder(folderThumb + "/" + arr[i].barcode);
    if (!outputFolder.exists) { outputFolder.create(); }


    // alert("Processing: " + currentPsdFilename);

    // Process with specific base filenames - reset partCount for each layer type
    partCount = 0;
    processLayerGroup("bottom", "wood-5mm-");

    partCount = 0;
    processLayerGroup("wooden", "wood-3mm-");

    partCount = 0;
    processLayerGroup("acrylic", "acrylic-3mm-");


}




function openAndResizeFile(item, FileDesign, wphone, hphone, type) {

    try {
        app.open(File(FileDesign + "/" + item.sku + ".psd"));
        if (type == "mica") app.doAction("canvasHoriz", "tool");
    } catch (error2) {

    }


    app.activeDocument.mergeVisibleLayers();
    var xoay = false;
    var PSpotKhung = app.activeDocument.activeLayer.bounds;
    if ((PSpotKhung[2] - PSpotKhung[0]) > (PSpotKhung[3] - PSpotKhung[1])) {
        app.activeDocument.rotateCanvas(90);
        xoay = true
    }
    PSpotKhung = app.activeDocument.activeLayer.bounds;
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    try {
        app.open(File(FileDesign + "/" + item.sku + ".psd"));
        if (type == "mica") app.doAction("canvasHoriz", "tool");
    } catch (error2) {

    }


    if (xoay) app.activeDocument.rotateCanvas(90);
    if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);

    app.activeDocument.resizeImage(UnitValue(wphone * app.activeDocument.width / (PSpotKhung[2] - PSpotKhung[0]), "px"), UnitValue(hphone * app.activeDocument.height / (PSpotKhung[3] - PSpotKhung[1]), "px"), 300, ResampleMethod.BICUBIC);


    // var khungW = PSpotKhung[2] - PSpotKhung[0];
    // var khungH = PSpotKhung[3] - PSpotKhung[1];

    // var scaleW = wphone * 1.0 / khungW;
    // var scaleH = hphone * 1.0 / khungH;

    // var scale = Math.min(scaleW, scaleH); // scale nhỏ hơn để không vượt

    // app.activeDocument.resizeImage(
    //     UnitValue(scale * app.activeDocument.width, "px"),
    //     UnitValue(scale * app.activeDocument.height, "px"),
    //     300,
    //     ResampleMethod.BICUBIC
    // );

}





