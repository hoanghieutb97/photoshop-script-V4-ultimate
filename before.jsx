var yPosition = 0;
var xPosition = 0;
var hLast = 0;
var wLast = 0;
var ban = 0;
var stt = 0;

var folderContainer = Folder("//192.168.1.199/in/" + type + "-" + FileName);
if (!folderContainer.exists) { folderContainer.create(); }

var folderTool = Folder(folderContainer + "/file tool");
if (!folderTool.exists) { folderTool.create(); }

var folderTem = Folder(folderContainer + "/tem");
if (!folderTem.exists) { folderTem.create(); }

if (type != "PC led")
    for (var i = 0; i <= arr.length - 1; i++) { // loop làm file in

        if (arr[i].amountFile == "1") {
            try {
                app.open(File(FileDesign + "/" + arr[i].sku + ".jpg"));
                saveImageTool(arr[i]);
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            } catch (error) {
                var saveFile = File(FileDesign + "/" + arr[i].sku + ".jpg");
                if (saveFile.exists) {
                    saveFile.remove();
                    fileHong = fileHong + 1;
                }
                try {
                    arr[i].sku
                    app.open(File(FileDesign + "/" + arr[i].sku + ".png"));
                    saveImageTool(arr[i]);

                    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                } catch (error) {
                    var saveFile = File(FileDesign + "/" + arr[i].sku + ".png");
                    if (saveFile.exists) {
                        saveFile.remove();
                        fileHong = fileHong + 1;
                    }
                }
            }
        }
        if (arr[i].amountFile == "2") {
            try {
                app.open(File(FileDesign + "/" + arr[i].sku + " front.png"));
                saveImageTool(arr[i], "front");

                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            } catch (error) {
                var saveFile = File(FileDesign + "/" + arr[i].sku + ". front.png");
                if (saveFile.exists) {
                    saveFile.remove();
                    fileHong = fileHong + 1;
                }

            }
            try {
                app.open(File(FileDesign + "/" + arr[i].sku + " back.png"));
                saveImageTool(arr[i], "back");
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            } catch (error) {
                app.open(File(FileDesign + "/" + arr[i].sku + " front.png"));
                saveImageTool(arr[i], "back");
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }
        }


    }
#include "openFile.jsx";
#include "saveDesign.jsx";
