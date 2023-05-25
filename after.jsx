var folderhehe = Folder(folderContainer + "/hehe");

if (!folderhehe.exists) { folderhehe.create(); folderhehe.remove(); }
else {
    folderhehe.remove();
}
