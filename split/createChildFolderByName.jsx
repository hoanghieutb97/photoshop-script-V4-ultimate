if (typeof typeFolderLuu !== 'undefined') {
    folderBanInTool = Folder(folderContainer + "/ban in-tool" + "/" + typeFolderLuu);
    if (!folderBanInTool.exists) { folderBanInTool.create() }
}