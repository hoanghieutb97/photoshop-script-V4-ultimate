
if (xPosition !== 30 && app.activeDocument.layerSets.getByName("KHUNG").layers.length > 1) { //// tồn tại layer trước thì mới nesting

    // Ẩn các group IN TRUOC và IN SAU
    var inTruocLayerSet = app.activeDocument.layerSets.getByName("IN TRUOC");
    var inSauLayerSet = app.activeDocument.layerSets.getByName("IN SAU");
    var khungLayerSet = app.activeDocument.layerSets.getByName("KHUNG");
    var co_inTruoc_G = false;
    var co_inSau_G = false;
    var boundsKhung_G = khungLayerSet.layers[0].bounds;


    if (inTruocLayerSet.layers.length > 0) {
        co_inTruoc_G = true;
        var boundsInTruoc_G = inTruocLayerSet.layers[0].bounds;
        if (Math.abs(boundsInTruoc_G[0] - boundsKhung_G[0]) >= (boundsKhung_G[2] - boundsKhung_G[0])) co_inTruoc_G = false
    }

    if (inSauLayerSet.layers.length > 0) {
        co_inSau_G = true;
        var boundsInSau_G = inSauLayerSet.layers[0].bounds;
        if (Math.abs(boundsInSau_G[0] - boundsKhung_G[0]) >= (boundsKhung_G[2] - boundsKhung_G[0])) co_inSau_G = false
    }


    if (khungLayerSet.layers.length > 0) var boundsKhung_G = khungLayerSet.layers[0].bounds;



    inTruocLayerSet.visible = false;
    inSauLayerSet.visible = false;
    var boundsKhung_AfterN_0 = undefined;
    var boundsKhung_AfterN_180 = undefined;
    var boundsKhung_END = undefined;
    // Kiểm tra layer tại vị trí activeIndex + 1 có tồn tại không

    // Lấy histogram ban đầu (khi 2 layer chưa chạm)
    createSelectionFromTwoLayers(khungLayerSet.layers[1], khungLayerSet.layers[0]);

    var gocHistogram = getHistogramFromSelection();

    var gocTotal = getTotalPixelCount(gocHistogram);



    movelayer2NestingUntilCollision(khungLayerSet.layers[1], khungLayerSet.layers[0], gocTotal);
    boundsKhung_AfterN_0 = khungLayerSet.layers[0].bounds;


    xoay180D0(khungLayerSet.layers[0]);
    movelayer2NestingUntilCollision(khungLayerSet.layers[1], khungLayerSet.layers[0], gocTotal);
    boundsKhung_AfterN_180 = khungLayerSet.layers[0].bounds;


    
    inTruocLayerSet.visible = true;
    inSauLayerSet.visible = true;
    // alert(boundsKhung_AfterN_0[0] - boundsKhung_AfterN_180[0]);
    // alert(boundsKhung_AfterN_0)
    // alert(boundsKhung_AfterN_180)

    if (boundsKhung_AfterN_0[0] - boundsKhung_AfterN_180[0] > 0) { // oke xoay 180 di
        // khungLayerSet.layers[0].translate(24, 0);
        boundsKhung_END = khungLayerSet.layers[0].bounds;

        if (co_inTruoc_G) {
            xoay180D0(inTruocLayerSet.layers[0]);

            inTruocLayerSet.layers[0].translate(boundsKhung_END[0] - boundsKhung_G[0] + (boundsKhung_G[2] + boundsKhung_G[0] - boundsInTruoc_G[2] - boundsInTruoc_G[0]),
                boundsKhung_END[1] - boundsKhung_G[1] + (boundsKhung_G[3] + boundsKhung_G[1] - boundsInTruoc_G[3] - boundsInTruoc_G[1]));

        }
        if (co_inSau_G) {
            xoay180D0(inSauLayerSet.layers[0]);
            inSauLayerSet.layers[0].translate(boundsKhung_END[0] - boundsKhung_G[0] + (boundsKhung_G[2] + boundsKhung_G[0] - boundsInSau_G[2] - boundsInSau_G[0]),
                boundsKhung_END[1] - boundsKhung_G[1] + (boundsKhung_G[3] + boundsKhung_G[1] - boundsInSau_G[3] - boundsInSau_G[1]));

        }
    }
    else {
        xoay180D0(khungLayerSet.layers[0]);

        khungLayerSet.layers[0].translate(boundsKhung_AfterN_0[0] - boundsKhung_AfterN_180[0], 0);
        boundsKhung_END = khungLayerSet.layers[0].bounds;
        // khungLayerSet.layers[0].translate(24, 0);

        if (co_inTruoc_G) {
            inTruocLayerSet.layers[0].translate(boundsKhung_END[0] - boundsKhung_G[0], boundsKhung_END[1] - boundsKhung_G[1]);
        }
        if (co_inSau_G) {
            inSauLayerSet.layers[0].translate(boundsKhung_END[0] - boundsKhung_G[0], boundsKhung_END[1] - boundsKhung_G[1]);
        }


    }

    // boxW = boundsKhung_END[2] - boundsKhung_END[0];
    // boxH = boundsKhung_END[3] - boundsKhung_END[1];

}

/////////////nesting function
function xoay180D0(activeLayer) {
    var oldBounds = activeLayer.bounds;
    var oldCenterX = (oldBounds[0].as("px") + oldBounds[2].as("px")) / 2;
    var oldCenterY = (oldBounds[1].as("px") + oldBounds[3].as("px")) / 2;
    activeLayer.rotate(180, AnchorPosition.MIDDLECENTER);


    var newBounds = activeLayer.bounds;
    var newCenterX = (newBounds[0].as("px") + newBounds[2].as("px")) / 2;
    var newCenterY = (newBounds[1].as("px") + newBounds[3].as("px")) / 2;
    activeLayer.translate(oldCenterX - newCenterX, oldCenterY - newCenterY);

}
function xoay90D0(activeLayer) {
    var oldBounds = activeLayer.bounds;
    var oldCenterX = (oldBounds[0].as("px") + oldBounds[2].as("px")) / 2;
    var oldCenterY = (oldBounds[1].as("px") + oldBounds[3].as("px")) / 2;
    activeLayer.rotate(90, AnchorPosition.MIDDLECENTER);


    var newBounds = activeLayer.bounds;
    var newCenterX = (newBounds[0].as("px") + newBounds[2].as("px")) / 2;
    var newCenterY = (newBounds[1].as("px") + newBounds[3].as("px")) / 2;
    activeLayer.translate(oldCenterX - newCenterX, oldCenterY - newCenterY);

}

// Bước 1: Tạo vùng chọn bao gồm cả 2 layer
function createSelectionFromTwoLayers(layerGoc, layerNesting) {
    try {

        // Lấy 2 layer đầu tiên
        var layer1Nesting = layerGoc;
        var layer2Nesting = layerNesting;

        // Lấy bounds của 2 layer
        var bounds1Nesting = layer1Nesting.bounds;
        var bounds2Nesting = layer2Nesting.bounds;


        // Tính vùng chọn bao quanh cả 2 layer
        var leftNesting = Math.min(bounds1Nesting[0], bounds2Nesting[0]);
        var topNesting = Math.min(bounds1Nesting[1], bounds2Nesting[1]);
        var rightNesting = Math.max(bounds1Nesting[2], bounds2Nesting[2]);
        var bottomNesting = Math.max(bounds1Nesting[3], bounds2Nesting[3]);


        // Tạo vùng chọn
        var selection = [[leftNesting, topNesting], [rightNesting, topNesting], [rightNesting, bottomNesting], [leftNesting, bottomNesting]];
        app.activeDocument.selection.select(selection);


    } catch (error) {
        alert("Lỗi: " + error.message);
    }
}
// Bước 2: Lấy histogram của vùng chọn
function getHistogramFromSelection() {
    try {


        // Lấy histogram của vùng chọn
        var histo = app.activeDocument.histogram;
        // alert(histo)
        // Xóa vùng chọn
        app.activeDocument.selection.deselect();

        return histo;

    } catch (error) {
        alert("Lỗi lấy histogram: " + error.message);
        return null;
    }
}
// Hàm tính tổng pixel từ histogram (0-250)
function getTotalPixelCount(histogram) {
    var total = 0;
    for (var mm = 0; mm < 255; mm++) {
        total = total + histogram[mm];
    }
    return total;
}

// Bước 3: Thuật toán di chuyển layer 2 sang trái
function movelayer2NestingUntilCollision(layerGoc, layerNesting, gocTotal) {
    try {

        var layer2Nesting = layerNesting;
        var min_Bounds_0 = 9999999999;
        createSelectionFromTwoLayers(layerGoc, layerNesting);
        var currentHistogram = getHistogramFromSelection();
        var currentTotal = getTotalPixelCount(currentHistogram);
        var difference = Math.abs(gocTotal - currentTotal);
        var layer2NestingWidth = layer2Nesting.bounds[2] - layer2Nesting.bounds[0]; // Width của layer2Nesting
        var aNesPosition = Math.floor(layer2NestingWidth * 2 / 3); // Bước đầu = 1/2 width của layer2Nesting
        var maxIterations = 20; // Số lần lặp tối đa để tránh vòng lặp vô hạn

        var aNesPosition = Math.floor(layer2NestingWidth * 2 / 3); // Bước đầu = 1/2 width của layer2Nesting
        if (difference > 0) {
            aNesPosition = -Math.floor(layer2NestingWidth * 2 / 3); // Bước đầu = 1/2 width của layer2Nesting
        }


        for (var iteration = 0; iteration < maxIterations; iteration++) {
            // Di chuyển layer2Nesting sang trái với bước a
            layer2Nesting.translate(-aNesPosition, 0);
            // totalMoved += aNesPosition;

            // Kiểm tra collision
            createSelectionFromTwoLayers(layerGoc, layerNesting);
            var currentHistogram = getHistogramFromSelection();
            var currentTotal = getTotalPixelCount(currentHistogram);


            var difference = Math.abs(gocTotal - currentTotal);

            if (difference > 0) {
                // // Có collision - quay lại và giảm bước
                // layer2Nesting.translate(aNesPosition, 0); // Quay lại
                // totalMoved -= aNesPosition;

                aNesPosition = - Math.floor(Math.abs(aNesPosition) * 2 / 3);


            }
            else {
                if (layer2Nesting.bounds[0] < min_Bounds_0)
                    min_Bounds_0 = layer2Nesting.bounds[0];
                aNesPosition = Math.floor(Math.abs(aNesPosition) * 2 / 3);
            }


            if (Math.abs(aNesPosition) == 0) {
                // alert("iteration", iteration);
                break;
            }

        }

        layer2Nesting.translate(min_Bounds_0 - layer2Nesting.bounds[0], 0);
        // alert(min_Bounds_0)

        // Bước 4: Di chuyển sang phải 24px và kiểm tra
        var stepRight = 24;
        var maxAdjustments = 10; // Tối đa 10 lần điều chỉnh

        for (var adj = 0; adj < maxAdjustments; adj++) {
            // Di chuyển sang phải 24px
            layer2Nesting.translate(stepRight, 0);

            createSelectionFromTwoLayers(layerGoc, layerNesting);
            var currentHistogram = getHistogramFromSelection();
            var currentTotal = getTotalPixelCount(currentHistogram);


            var difference = gocTotal - currentTotal;
            if (difference == 0) {
                // alert("difference",difference);
                break;
            }
            // else alert("difference", difference);

        }



    } catch (error) {
        alert("Lỗi di chuyển layer: " + error.message);
    }
}
////////////////////////////////////// nesting
