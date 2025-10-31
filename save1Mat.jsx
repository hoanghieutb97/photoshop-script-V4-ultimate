#include "cropDocument.jsx";

app.activeDocument.saveAs(Folder(folderTool + "/tool " + (ban + 1) + ".tif"), TiffSaveOptionsLZW, false, Extension.LOWERCASE);
app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);