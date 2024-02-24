#include "createDocument.jsx";
var lastName = ""

for (var i = 0; i <= arr.length - 1; i++) { // loop làm file in
    // for loop items

    #include "convertPixel.jsx";
    #include "caculatorPosition.jsx";
    stt = arr[i].stt;
    openFile(FileDesign, arr[i], type);
    #include "cropAndResize-autoFill.jsx";
    app.doAction("canvasHoriz", "tool");

    { // xử lý file in và duplicate sang bàn GLLM
        app.activeDocument.activeLayer.name = arr[i].stt; // đặt tên cho layer voi stt
        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
        app.activeDocument.artLayers.add();
        app.activeDocument.artLayers.getByName(arr[i].stt).remove();
        app.doAction("strokeRed1px", "tool");

        app.activeDocument.artLayers.add();
        app.activeDocument.activeLayer.kind = LayerKind.TEXT;
        app.activeDocument.activeLayer.textItem.contents = arr[i].stt;
        app.activeDocument.activeLayer.textItem.size = 30;
        var textColor = new SolidColor;
        textColor.rgb.red = 255;
        textColor.rgb.green = 0;
        textColor.rgb.blue = 0;
        app.activeDocument.activeLayer.textItem.color = textColor;
        app.activeDocument.activeLayer.name = "1 copy";
        app.doAction("moveCenter", "tool");
        app.activeDocument.activeLayer.name = "1 copy 2";


        if (arr[i].nameId != lastName) {
            app.activeDocument.artLayers.add();
            app.activeDocument.activeLayer.kind = LayerKind.TEXT;
            app.activeDocument.activeLayer.textItem.contents = arr[i].nameId;
            app.activeDocument.activeLayer.textItem.size = 40;
            app.activeDocument.activeLayer.textItem.color = textColor;
            app.activeDocument.activeLayer.name = "1 copy";
            app.doAction("moveCenter", "tool");
            app.activeDocument.activeLayer.translate(0, 300);
            lastName = arr[i].nameId;
        }
        app.activeDocument.mergeVisibleLayers();
        app.activeDocument.activeLayer.name = arr[i].stt;

        app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["KHUNG"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in

        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    }

    { // translate layer đến vị trí cần in
        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, yPosition * (-1));
        app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName(arr[i].stt);
        app.doAction("moveZero", "tool");
        app.activeDocument.activeLayer.translate(xPosition, yPosition * (-1));
        if (i > 0) app.activeDocument.activeLayer.merge();
        app.activeDocument.activeLayer.name = "SPOTKhung";
    }




    // lam SPOT2
    try {
        app.open(File(FileDesign + "/" + arr[i].sku + "flash.png"));
        app.doAction("canvasHoriz", "tool");
    } catch (error) { alert("thieu file: skuflash.png") }

    app.doAction("strokeWhite1px", "tool");

    #include "cropAndResize-autoFill.jsx";


    app.activeDocument.activeLayer.name = arr[i].stt; // đặt tên cho layer voi stt
    app.activeDocument.activeLayer.duplicate(app.documents["GLLM"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
    app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[i].stt);
    app.doAction("moveZero", "tool");
    app.activeDocument.activeLayer.translate(xPosition, yPosition * (-1));
    if (i > 0) app.activeDocument.activeLayer.merge();
    app.activeDocument.activeLayer.name = "SPOTWhite";

    if (i == arr.length - 1) {

        {
            { // xử lý sau khi duplicate hết items
                app.activeDocument.activeLayer = app.activeDocument.layerSets["KHUNG"].artLayers.getByName("SPOTKhung");
                var PSpotKhung = app.activeDocument.activeLayer.bounds;
                app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
                app.doAction("selectArea", "tool");
                app.doAction("Area expan 1", "tool");
                app.doAction("createSPOTWithArea", "tool");
            }
            { // lưu file khung
                app.activeDocument.layerSets.getByName("KHUNG").visible = false;
                app.activeDocument.layerSets.getByName("SPOT").visible = false;
                app.activeDocument.layerSets.getByName("CMYK").visible = false;
                app.activeDocument.saveAs(Folder(folderTool + "/khung 1.tif"), TiffSaveOptions, false, Extension.LOWERCASE);

            }
            {// lưu file in 1\
                app.activeDocument.channels.getByName("1").remove();
                app.activeDocument.layerSets.getByName("CMYK").visible = true;
                app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName("CMYK");
                app.doAction("createSmarkOBJ", "tool");
                app.doAction("selectArea", "tool");
                app.doAction("createSPOTWithArea", "tool");
                app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName("SPOT").artLayers.getByName("SPOTWhite");
                app.doAction("selectArea", "tool");

                app.activeDocument.activeChannels = [app.activeDocument.channels.getByName("1")];
                app.doAction("fillChannelsLED0", "tool");
                showRGBChannel();

                app.activeDocument.channels.getByName("1").visible = true;
                if (app.activeDocument.mode != "DocumentMode.CMYK") app.activeDocument.changeMode(ChangeMode.CMYK);
                app.activeDocument.saveAs(Folder(folderTool + "/in truoc 100 trang.tif"), TiffSaveOptions, false, Extension.LOWERCASE);

            }
            { // lưu file in 2
                app.activeDocument.channels.getByName("1").remove();
                app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("CMYK");
                app.doAction("selectArea", "tool");
                {
                    var bColor = new SolidColor;
                    bColor.cmyk.cyan = 75;
                    bColor.cmyk.magenta = 68;
                    bColor.cmyk.yellow = 67;
                    bColor.cmyk.black = 90;
                    var wColor = new SolidColor;
                    wColor.cmyk.cyan = 0;
                    wColor.cmyk.magenta = 0;
                    wColor.cmyk.yellow = 0;
                    wColor.cmyk.black = 0;
                }
                app.activeDocument.artLayers.add();
                app.activeDocument.activeLayer.name = "black";
                app.activeDocument.selection.fill(bColor);
                app.activeDocument.artLayers.getByName("CMYK").visible = false;

                app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName("SPOT").artLayers.getByName("SPOTWhite");
                app.doAction("selectArea", "tool");
                app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("black");
                app.activeDocument.selection.fill(wColor);
                app.activeDocument.selection.deselect();
                app.doAction("createSPOTWithArea", "tool");
                app.activeDocument.activeLayer = app.activeDocument.layerSets.getByName("SPOT").artLayers.getByName("SPOTWhite");
                app.doAction("selectArea", "tool");
                app.activeDocument.activeChannels = [app.activeDocument.channels.getByName("1")];
                app.doAction("fillChannelsLED20", "tool");
                app.activeDocument.saveAs(Folder(folderTool + "/in sau 15 trang.tif"), TiffSaveOptions, false, Extension.LOWERCASE);



            }
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        stt = 0;
        $.evalFile(File("//192.168.1.194/photoshop-script-V4-ultimate/label/createm-autoFill.jsx"));

    }
}

function showRGBChannel() {
    app.activeDocument.channels.getByName("Red").visible = true;
    app.activeDocument.channels.getByName("Green").visible = true;
    app.activeDocument.channels.getByName("Blue").visible = true;
}