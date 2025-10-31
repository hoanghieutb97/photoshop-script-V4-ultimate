#target photoshop;

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
        var histogram = app.activeDocument.histogram;

        // Xóa vùng chọn
        app.activeDocument.selection.deselect();

        return histogram;

    } catch (error) {
        alert("Lỗi lấy histogram: " + error.message);
        return null;
    }
}

// Hàm tính tổng pixel từ histogram (0-250)
function getTotalPixelCount(histogram) {
    var total = 0;
    for (var i = 0; i <= 250; i++) {
        total += histogram[i];
    }
    return total;
}

// Bước 3: Thuật toán di chuyển layer 2 sang trái
function movelayer2NestingUntilCollision(layerGoc, layerNesting) {
    try {

        var layer2Nesting = layerNesting;


        // Lấy histogram ban đầu (khi 2 layer chưa chạm)
        createSelectionFromTwoLayers(layerGoc, layerNesting);
        var initialHistogram = getHistogramFromSelection();
        var initialTotal = getTotalPixelCount(initialHistogram);

        // Thuật toán Binary Search
        var layer2NestingWidth = layer2Nesting.bounds[2] - layer2Nesting.bounds[0]; // Width của layer2Nesting
        var aNesPosition = Math.floor(layer2NestingWidth / 2); // Bước đầu = 1/2 width của layer2Nesting
        var totalMoved = 0; // Tổng số pixel đã di chuyển
        var collisionStep = -1;
        var maxIterations = 20; // Số lần lặp tối đa để tránh vòng lặp vô hạn



        for (var iteration = 0; iteration < maxIterations; iteration++) {
            // Di chuyển layer2Nesting sang trái với bước a
            layer2Nesting.translate(-aNesPosition, 0);
            totalMoved += aNesPosition;

            // Kiểm tra collision
            createSelectionFromTwoLayers(layerGoc, layerNesting);
            var currentHistogram = getHistogramFromSelection();
            var currentTotal = getTotalPixelCount(currentHistogram);

            // alert("Bước " + iteration + ": Histogram = " + currentTotal + " pixels");
            var difference = initialTotal - currentTotal;

            if (difference > 0) {
                // Có collision - quay lại và giảm bước
                layer2Nesting.translate(aNesPosition, 0); // Quay lại
                totalMoved -= aNesPosition;

                if (aNesPosition <= 1) {
                    // Đã tìm thấy chính xác
                    collisionStep = totalMoved;
                    break;
                } else {
                    // Giảm bước đi một nửa
                    aNesPosition = Math.floor(aNesPosition / 2);
                }
            }
        }



    } catch (error) {
        alert("Lỗi di chuyển layer: " + error.message);
    }
}


// Chạy script
movelayer2NestingUntilCollision(layerGoc, layerNesting);
