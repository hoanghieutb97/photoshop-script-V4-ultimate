
if (tonTai("Status_delete_redLine")) {
    app.doAction("selection to delete red line", "tool");
    app.doAction("Area expan 1", "tool");
    app.activeDocument.selection.clear();
    app.activeDocument.selection.deselect();
} else {
}