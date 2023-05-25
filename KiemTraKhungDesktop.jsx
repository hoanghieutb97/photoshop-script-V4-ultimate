var folderDesktop = Folder("~/Desktop/khung tool");
if (!folderDesktop.exists) { folderDesktop.create(); }
{// kiem tra vao tao khung su
    var folderKhungSu = Folder(folderDesktop + "/khung su");
    if (!folderKhungSu.exists) { folderKhungSu.create(); }

    var DSKhungSu = ["khung tron", "khung sao", "khung tim", "khung oval", "tron", "sao", "tim", "oval"];
    for (var g = 0; g < DSKhungSu.length; g++) {
        var saveFilex = File(folderKhungSu + "/" + DSKhungSu[g] + ".png")
        if (!saveFilex.exists) {
            app.open(File("//192.168.1.89/ps script data/oal su/" + DSKhungSu[g] + ".png"));
            app.activeDocument.saveAs(Folder(folderKhungSu + "/" + DSKhungSu[g] + ".png"), PNGSaveOptions);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
    }

}


{// kiem tra vao tao khung nhom
    var folderKhungSu = Folder(folderDesktop + "/khung nhom");
    if (!folderKhungSu.exists) { folderKhungSu.create(); }

    var DSKhungNom = ["elip", "medalion", "sao", "scalop", "tim", "tron"];
    for (var g = 0; g < DSKhungNom.length; g++) {
        var saveFilex = File(folderKhungSu + "/" + DSKhungNom[g] + ".png")
        if (!saveFilex.exists) {
            app.open(File("//192.168.1.89/ps script data/phoi dls/" + DSKhungNom[g] + ".png"));
            app.activeDocument.saveAs(Folder(folderKhungSu + "/" + DSKhungNom[g] + ".png"), PNGSaveOptions);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
    }

}
