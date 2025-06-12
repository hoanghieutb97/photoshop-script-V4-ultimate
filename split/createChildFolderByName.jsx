if (tonTai("typeFolderLuu")) {
    folderBanInTool = Folder(folderContainer + "/ban in-tool" + "/" + typeFolderLuu);
    if (!folderBanInTool.exists) { folderBanInTool.create() }
}