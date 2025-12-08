
var W_DenB = G_boundDen[2] - G_boundDen[0];
var H_DenB = G_boundDen[3] - G_boundDen[1];
if (app.activeDocument.layerSets.getByName("IN TRUOC").layers.length > 0) {
    var layerTBCG = app.activeDocument.layerSets.getByName("IN TRUOC").layers[0].bounds;
    var W_ACtiveB = layerTBCG[2] - layerTBCG[0];
    var H_ACtiveB = layerTBCG[3] - layerTBCG[1];
    if (Math.abs(W_DenB - W_ACtiveB) < 10 && Math.abs(H_DenB - H_ACtiveB) < 10) {
        var layerK = doc.layerSets["KHUNG"].layers[0];
        var layerT = doc.layerSets["IN TRUOC"].layers[0];
        var boudns_LK = layerK.bounds;
        var boudns_LT = layerT.bounds;


        if (Math.abs(boudns_LK[2].as("px") - boudns_LT[2].as("px")) <= (boudns_LK[2].as("px") - boudns_LK[0].as("px"))) {
            cangiua(layerT, layerK);
        }


    }

}


if (app.activeDocument.layerSets.getByName("IN SAU").layers.length > 0) {
    var layerTBCG = app.activeDocument.layerSets.getByName("IN SAU").layers[0].bounds;
    var W_ACtiveB = layerTBCG[2] - layerTBCG[0];
    var H_ACtiveB = layerTBCG[3] - layerTBCG[1];
    if (Math.abs(W_DenB - W_ACtiveB) < 10 && Math.abs(H_DenB - H_ACtiveB) < 10) {
        var layerK = doc.layerSets["KHUNG"].layers[0];
        var layerT = doc.layerSets["IN SAU"].layers[0];
        var boudns_LK = layerK.bounds;
        var boudns_LT = layerT.bounds;


        if (Math.abs(boudns_LK[2].as("px") - boudns_LT[2].as("px")) <= (boudns_LK[2].as("px") - boudns_LK[0].as("px"))) {
            cangiua(layerT, layerK);
        }


    }

}

function cangiua(layerT, layerK) {
    // Lấy bounds của layerK
    var boundsK_CG = layerK.bounds;

    // Tính vùng chọn từ bounds
    var left_CG = boundsK_CG[0];
    var top_CG = boundsK_CG[1];
    var right_CG = boundsK_CG[2];
    var bottom_CG = boundsK_CG[3];
    // Tạo vùng chọn
    var selection_CG = [[left_CG, top_CG], [right_CG, top_CG], [right_CG, bottom_CG], [left_CG, bottom_CG]];
    app.activeDocument.selection.select(selection_CG);
    // Tính center của vùng chọn
    var centerX_CG = (left_CG + right_CG) / 2;
    var centerY_CG = (top_CG + bottom_CG) / 2;
    // Lấy bounds của layerT và layerS
    var boundsT_CG = layerT.bounds;
    // Tính center của layerT và layerS
    var centerT_X_CG = (boundsT_CG[0] + boundsT_CG[2]) / 2;
    var centerT_Y_CG = (boundsT_CG[1] + boundsT_CG[3]) / 2;
    // Tính khoảng cách cần di chuyển để căn giữa
    var dxT_CG = centerX_CG - centerT_X_CG;
    var dyT_CG = centerY_CG - centerT_Y_CG;

    // Di chuyển layerT và layerS vào giữa vùng chọn
    layerT.translate(dxT_CG, dyT_CG);
    app.activeDocument.selection.deselect();
    // alert("căn giữa 1 file  Group_Khung và Group_Inv")
}