// alert("okex")

if (xPosition !== 30 && app.activeDocument.layerSets.getByName("KHUNG").layers.length > 1) { //// tồn tại layer trước thì mới nesting
    // alert(app.activeDocument.layerSets.getByName("KHUNG").layers.length )
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
        if (inTruocLayerSet.layers[0].name == "tenBan") co_inSau_G = false
    }

    if (inSauLayerSet.layers.length > 0) {
        co_inSau_G = true;
        var boundsInSau_G = inSauLayerSet.layers[0].bounds;
        if (Math.abs(boundsInSau_G[0] - boundsKhung_G[0]) >= (boundsKhung_G[2] - boundsKhung_G[0])) co_inSau_G = false
        if (inSauLayerSet.layers[0].name == "tenBan") co_inSau_G = false
    }


    if (khungLayerSet.layers.length > 0) var boundsKhung_G = khungLayerSet.layers[0].bounds;



    inTruocLayerSet.visible = false;
    inSauLayerSet.visible = false;
    var boundsKhung_AfterN_0 = undefined;
    var boundsKhung_AfterN_180 = undefined;
    var boundsKhung_AfterN_90 = undefined;
    var boundsKhung_END = undefined;

    calculatorNesting(khungLayerSet.layers[1], khungLayerSet.layers[0], "0 do");
    boundsKhung_AfterN_0 = khungLayerSet.layers[0].bounds;


    xoay180D0(khungLayerSet.layers[0]);
    calculatorNesting(khungLayerSet.layers[1], khungLayerSet.layers[0]);
    boundsKhung_AfterN_180 = khungLayerSet.layers[0].bounds;


    xoay90D0(khungLayerSet.layers[0]);

    calculatorNesting(khungLayerSet.layers[1], khungLayerSet.layers[0], "90 do");
    boundsKhung_AfterN_90 = khungLayerSet.layers[0].bounds;

    inTruocLayerSet.visible = true;
    inSauLayerSet.visible = true;

    if ((boundsKhung_AfterN_180[0] <= boundsKhung_AfterN_90[0]) && (boundsKhung_AfterN_180[0] <= boundsKhung_AfterN_0[0])) { // oke xoay 180 di
        // alert("boundsKhung_AfterN_180")
        xoayAm90D0(khungLayerSet.layers[0]);
        if (boundsKhung_AfterN_180[2] > FullWidth) {
            app.activeDocument.activeLayer = khungLayerSet.layers[0];
            app.doAction("moveZero", "tool");
            yPosition = yPosition + maxHeight + 24;
            khungLayerSet.layers[0].translate(30, -yPosition);


        }
        else khungLayerSet.layers[0].translate(boundsKhung_AfterN_180[0] - khungLayerSet.layers[0].bounds[0], 0);
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


    else if ((boundsKhung_AfterN_0[0] < boundsKhung_AfterN_180[0]) && (boundsKhung_AfterN_0[0] < boundsKhung_AfterN_90[0])) {
        xoay90D0(khungLayerSet.layers[0]);
        if (boundsKhung_AfterN_0[2] > FullWidth) {
            app.activeDocument.activeLayer = khungLayerSet.layers[0];
            app.doAction("moveZero", "tool");
            yPosition = yPosition + maxHeight + 24;
            khungLayerSet.layers[0].translate(30, -yPosition);
        }
        else khungLayerSet.layers[0].translate(boundsKhung_AfterN_0[0] - khungLayerSet.layers[0].bounds[0], 0);
        boundsKhung_END = khungLayerSet.layers[0].bounds;
        if (co_inTruoc_G) {
            inTruocLayerSet.layers[0].translate(boundsKhung_END[0] - boundsKhung_G[0], boundsKhung_END[1] - boundsKhung_G[1]);
        }
        if (co_inSau_G) {
            inSauLayerSet.layers[0].translate(boundsKhung_END[0] - boundsKhung_G[0], boundsKhung_END[1] - boundsKhung_G[1]);
        }


    }


    else {
        if (boundsKhung_AfterN_90[2] > FullWidth) {
            app.activeDocument.activeLayer = khungLayerSet.layers[0];
            app.doAction("moveZero", "tool");
            yPosition = yPosition + maxHeight + 24;
            khungLayerSet.layers[0].translate(30, -yPosition);

        }
        boundsKhung_END = khungLayerSet.layers[0].bounds;
        if (co_inTruoc_G) {
            xoay180D0(inTruocLayerSet.layers[0]);
            var Bounds_Layer_Goc = inTruocLayerSet.layers[0].bounds;
            DiChuyenLayerKhi90Do(boundsKhung_G, Bounds_Layer_Goc, boundsKhung_AfterN_90, inTruocLayerSet.layers[0]);


        }
        if (co_inSau_G) {
            xoay180D0(inSauLayerSet.layers[0]);
            var Bounds_Layer_Goc = inSauLayerSet.layers[0].bounds;
            DiChuyenLayerKhi90Do(boundsKhung_G, Bounds_Layer_Goc, boundsKhung_AfterN_90, inSauLayerSet.layers[0]);
        }

    }
    var newBOXWH = khungLayerSet.layers[0].bounds;

    if ((newBOXWH[3].as("px") - newBOXWH[1].as("px")) > maxHeight) {

        maxHeight = newBOXWH[3].as("px") - newBOXWH[1].as("px");

    }

    // xPosition = khungLayerSet.layers[0].bounds[2].as("px");

}
function DiChuyenLayerKhi90Do(b0_90D0, b1_90D0, b2_90D0, layer_1) {
    // Tính khoảng cách tương đối ban đầu
    var a_90D0 = b0_90D0[3] - b1_90D0[3]; // khoảng cách từ đáy layer 1 đến đáy layer 0
    var b_90D0 = b1_90D0[0] - b0_90D0[0]; // khoảng cách từ trái layer 1 đến trái layer 0

    // Xoay layer 1 theo chiều kim đồng hồ
    layer_1.rotate(90, AnchorPosition.MIDDLECENTER);

    // Lấy lại bounds layer 1 sau xoayv
    var b1_new = layer_1.bounds;
    // Vị trí mới cần đặt layer 1:
    var targetLeft_90D0 = b2_90D0[0] + a_90D0;
    var targetTop_90D0 = b2_90D0[1] + b_90D0;

    // Tọa độ hiện tại
    var currentLeft_90D0 = b1_new[0];
    var currentTop_90D0 = b1_new[1];

    // Dịch layer 1
    var dx_90D0 = targetLeft_90D0 - currentLeft_90D0;
    var dy_90D0 = targetTop_90D0 - currentTop_90D0;
    if ((b0_90D0[2] - b0_90D0[0] + b0_90D0[3] - b0_90D0[1]) % 2 != 0) {
        dx_90D0 = dx_90D0 - 1
        dy_90D0 = dy_90D0 - 1
    }
    layer_1.translate(dx_90D0, dy_90D0);
}
/////////////nesting function
function xoay180D0(activeLayer) {
    var oldBounds = activeLayer.bounds;
    var oldCenterX = (oldBounds[0] + oldBounds[2]) / 2;
    var oldCenterY = (oldBounds[1] + oldBounds[3]) / 2;
    activeLayer.rotate(180, AnchorPosition.MIDDLECENTER);


    var newBounds = activeLayer.bounds;
    var newCenterX = (newBounds[0] + newBounds[2]) / 2;
    var newCenterY = (newBounds[1] + newBounds[3]) / 2;
    activeLayer.translate(oldCenterX - newCenterX, oldCenterY - newCenterY);

}
function xoay90D0(activeLayer) {
    var oldBounds = activeLayer.bounds;
    var oldCenterX = (oldBounds[0] + oldBounds[2]) / 2;
    var oldCenterY = (oldBounds[1] + oldBounds[3]) / 2;
    activeLayer.rotate(90, AnchorPosition.MIDDLECENTER);


    var newBounds = activeLayer.bounds;
    var newCenterX = (newBounds[0] + newBounds[2]) / 2;
    var newCenterY = (newBounds[1] + newBounds[3]) / 2;
    activeLayer.translate(oldCenterX - newCenterX, oldCenterY - newCenterY);

}
function xoayAm90D0(activeLayer) {
    var oldBounds = activeLayer.bounds;
    var oldCenterX = (oldBounds[0] + oldBounds[2]) / 2;
    var oldCenterY = (oldBounds[1] + oldBounds[3]) / 2;
    activeLayer.rotate(-90, AnchorPosition.MIDDLECENTER);


    var newBounds = activeLayer.bounds;
    var newCenterX = (newBounds[0] + newBounds[2]) / 2;
    var newCenterY = (newBounds[1] + newBounds[3]) / 2;
    activeLayer.translate(oldCenterX - newCenterX, oldCenterY - newCenterY);

}

// Bước 1: Tạo vùng chọn bao gồm cả 2 layer
function readHistogram(layerGoc, layerNesting) {
    try {

        // Lấy 2 layer đầu tiên
        var layer1Nesting = layerGoc;
        var layerNesting = layerNesting;

        // Lấy bounds của 2 layer
        var bounds1Nesting = layer1Nesting.bounds;
        var bounds2Nesting = layerNesting.bounds;


        // Tính vùng chọn bao quanh cả 2 layer
        var leftNesting = Math.min(bounds1Nesting[0], bounds2Nesting[0]);
        var topNesting = Math.min(bounds1Nesting[1], bounds2Nesting[1]);
        var rightNesting = Math.max(bounds1Nesting[2], bounds2Nesting[2]);
        var bottomNesting = Math.max(bounds1Nesting[3], bounds2Nesting[3]);


        // Tạo vùng chọn
        var selection = [[leftNesting, topNesting], [rightNesting, topNesting], [rightNesting, bottomNesting], [leftNesting, bottomNesting]];
        app.activeDocument.selection.select(selection);

        var histo = app.activeDocument.histogram;

        app.activeDocument.selection.deselect();

        var total = 0;
        for (var mm = 0; mm < 255; mm++) {
            total = total + histo[mm];
        }
        return total;


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
    var histo = app.activeDocument.histogram;

    app.activeDocument.selection.deselect();
    var total = 0;
    for (var mm = 0; mm < 255; mm++) {
        total = total + histo[mm];
    }
    return total;
}

// Bước 3: Thuật toán di chuyển layer 2 sang trái
function calculatorNesting(layerGoc, layerNesting, statusCHeck) {
    try {

        var min_Bounds_0 = 9999999999;
        var layerNesting = layerNesting;

        layerNesting.translate(layerGoc.bounds[2] - layerNesting.bounds[0], 0);
        var gocHisto = readHistogram(layerGoc, layerNesting);

        var aNesPosition = Math.floor((layerGoc.bounds[2] - layerGoc.bounds[0]) * 2 / 3); // Bước đầu = 1/2 width của layerNesting
        var maxIterations = 20; // Số lần lặp tối đa để tránh vòng lặp vô hạn

        for (var iteration = 0; iteration < maxIterations; iteration++) {

            layerNesting.translate(-aNesPosition, 0);  // Di chuyển layerNesting sang trái với bước aNesPosition



            var tongHisto = readHistogram(layerGoc, layerNesting);
            var difference = Math.abs(gocHisto - tongHisto);

            if (difference > 0) {
                // // Có collision - quay lại và giảm bước
                // layerNesting.translate(aNesPosition, 0); // Quay lại
                // totalMoved -= aNesPosition;

                aNesPosition = - Math.floor(Math.abs(aNesPosition) * 2 / 3);


            }
            else {
                if (layerNesting.bounds[0] < min_Bounds_0)
                    min_Bounds_0 = layerNesting.bounds[0];
                aNesPosition = Math.floor(Math.abs(aNesPosition) * 2 / 3);
            }


            if (Math.abs(aNesPosition) == 0) {
                // alert("iteration", iteration);
                break;
            }

        }

        layerNesting.translate(min_Bounds_0 - layerNesting.bounds[0], 0);
        // alert(min_Bounds_0)

        // Bước 4: Di chuyển sang phải 24px và kiểm tra
        var stepRight = 24;
        var maxAdjustments = 10; // Tối đa 10 lần điều chỉnh

        for (var adj = 0; adj < maxAdjustments; adj++) {
            // Di chuyển sang phải 24px
            layerNesting.translate(stepRight, 0);

            var tongHisto = readHistogram(layerGoc, layerNesting);

            var difference = gocHisto - tongHisto;
            if (difference == 0) {
                // alert("difference",difference);
                break;
            }
            // else alert("difference", difference);

        }
        // if (statusCHeck) {
        //     alert(statusCHeck, layerNesting.bounds[0]);

        // }


    } catch (error) {
        alert("Lỗi di chuyển layer: " + error.message);
    }
}
////////////////////////////////////// nesting
