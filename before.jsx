var yPosition = 0;
var xPosition = 0;
var hLast = 0;
var wLast = 0;
var ban = 0;
var stt = 0;

var TiffSaveOptionsLZW = new TiffSaveOptions();
TiffSaveOptionsLZW.imageCompression = TIFFEncoding.TIFFLZW;

var folderContainer = Folder("//192.168.1.240/in/" + type + "-" + FileName);
if (!folderContainer.exists) { folderContainer.create(); }

var folderTool = Folder(folderContainer + "/file tool");
if (!folderTool.exists) { folderTool.create(); }

var folderTem = Folder(folderContainer + "/tem");
if (!folderTem.exists) { folderTem.create(); }



#include "openFile.jsx";
#include "saveDesign.jsx";
 