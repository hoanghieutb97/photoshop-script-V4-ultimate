
#target photoshop;
app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel
"object" != typeof JSON && (JSON = {}), function () { "use strict"; var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { var j; function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();


var selectFileJson;
// DIALOG
// ======
{
    var dialog = new Window("dialog");
    dialog.text = "photoshop script V4-ultimate..............................................................";
    dialog.preferredSize.width = 600;
    dialog.preferredSize.height = 250;
    dialog.orientation = "row";
    dialog.alignChildren = ["left", "top"];
    dialog.spacing = 10;
    dialog.margins = 16;

    #include "image.jsx";

    // group2
    // ======
    var group1 = dialog.add("group", undefined, { name: "group1" });
    group1.preferredSize.width = 250;
    group1.orientation = "column";
    group1.alignChildren = ["fill", "top"];
    group1.spacing = 10;
    group1.margins = 0;


    $.evalFile(linkFIle = File("//192.168.1.194/photoshop script V4-ultimate/image/utimate.jsx"));
    var image3 = group1.add("image", undefined, File.decode(image3_imgString), { name: "image3" });

    var radiobutton1 = group1.add("radiobutton", undefined, undefined, { name: "radiobutton1" });
    radiobutton1.text = "Không chạy ảnh";

    var group2 = dialog.add("group", undefined, { name: "group2" });
    group2.preferredSize.width = 250;
    group2.orientation = "column";
    group2.alignChildren = ["fill", "top"];
    group2.spacing = 10;
    group2.margins = 0;









    // PANEL1
    // ======
    var panel1 = group2.add("panel", undefined, undefined, { name: "panel1" });
    panel1.text = "Json";
    panel1.preferredSize.height = 140;
    panel1.orientation = "column";
    panel1.alignChildren = ["left", "top"];
    panel1.spacing = 10;
    panel1.margins = 10;

    // PANEL2
    // ======
    var panel2 = panel1.add("panel", undefined, undefined, { name: "panel2" });
    panel2.text = "Chọn JSON";
    panel2.orientation = "row";
    panel2.alignChildren = ["center", "top"];
    panel2.spacing = 15;
    panel2.margins = 10;
    panel2.alignment = ["fill", "top"];

    var selectJson = panel2.add("button", undefined, undefined, { name: "selectJson" });
    selectJson.text = "Select File";

    var statictext1 = panel2.add("statictext", undefined, undefined, { name: "statictext1" });
    statictext1.text = "...";

    // CREATEJSON
    // ==========
    var CreateJson = panel1.add("group", undefined, { name: "CreateJson" });
    CreateJson.orientation = "row";
    CreateJson.alignChildren = ["center", "top"];
    CreateJson.spacing = 10;
    CreateJson.margins = 0;
    CreateJson.alignment = ["center", "top"];

    var button2 = CreateJson.add("button", undefined, undefined, { name: "button2" });
    button2.text = "Create";

    var image1_imgString;

    var image1 = CreateJson.add("image", undefined, File.decode(image1_imgString), { name: "image1" });

    // GROUP2
    // ======
    // var group2 = dialog.add("group", undefined, { name: "group2" });
    // group2.preferredSize.width = 200;
    // group2.orientation = "column";
    // group2.alignChildren = ["fill", "top"];
    // group2.spacing = 10;
    // group2.margins = 0;

    // PANEL3
    // ======
    var panel3 = group2.add("panel", undefined, undefined, { name: "panel3" });
    panel3.text = "Tính năng";
    panel3.preferredSize.height = 140;
    panel3.orientation = "column";
    panel3.alignChildren = ["left", "top"];
    panel3.spacing = 10;
    panel3.margins = 10;

    // PANEL4
    // ======
    var panel4 = panel3.add("panel", undefined, undefined, { name: "panel4" });
    panel4.text = "Create Barcode";
    panel4.preferredSize.width = 200;
    panel4.orientation = "row";
    panel4.alignChildren = ["center", "top"];
    panel4.spacing = 10;
    panel4.margins = 5;

    var button3 = panel4.add("button", undefined, undefined, { name: "button3" });
    button3.text = "Run";

    var inputBarcode = panel4.add('edittext {properties: {name: "inputBarcode"}}');
    inputBarcode.preferredSize.width = 120;
    inputBarcode.alignment = ["center", "center"];

    // PANEL5
    // ======
    var panel5 = panel3.add("panel", undefined, undefined, { name: "panel5" });
    panel5.text = "check file Xoa";
    panel5.preferredSize.width = 200;
    panel5.orientation = "row";
    panel5.alignChildren = ["center", "top"];
    panel5.spacing = 10;
    panel5.margins = 6;

    var button4 = panel5.add("button", undefined, undefined, { name: "button4" });
    button4.text = "Run";

    var inputXoa = panel5.add('edittext {properties: {name: "inputXoa"}}');
    inputXoa.text = "~\\Desktop\\xoa";
    inputXoa.preferredSize.width = 120;
    inputXoa.alignment = ["center", "center"];

    // PANEL3
    // ======
    // var divider1 = panel3.add("panel", undefined, undefined, { name: "divider1" });
    // divider1.enabled = false;
    // divider1.alignment = "fill";

    // GROUP3
    // ======
    // var group3 = dialog.add("group", undefined, { name: "group3" });
    // group3.preferredSize.width = 200;
    // group3.orientation = "column";
    // group3.alignChildren = ["fill", "top"];
    // group3.spacing = 10;
    // group3.margins = 0;

    // PANEL6
    // ======
    var panel6 = group2.add("panel", undefined, undefined, { name: "panel6" });
    panel6.text = "Tách FIle";
    panel6.preferredSize.height = 140;
    panel6.orientation = "column";
    panel6.alignChildren = ["left", "top"];
    panel6.spacing = 10;
    panel6.margins = 10;

    // PANEL7
    // ======
    var panel7 = panel6.add("panel", undefined, undefined, { name: "panel7" });
    panel7.text = "Front-back";
    panel7.preferredSize.width = 200;
    panel7.orientation = "column";
    panel7.alignChildren = ["center", "top"];
    panel7.spacing = 10;
    panel7.margins = 5;

    // GROUP4
    // ======
    var group4 = panel7.add("group", undefined, { name: "group4" });
    group4.orientation = "row";
    group4.alignChildren = ["center", "center"];
    group4.spacing = 10;
    group4.margins = 0;

    var statictext2 = group4.add("statictext", undefined, undefined, { name: "statictext2" });
    statictext2.text = " inPut";
    statictext2.preferredSize.width = 45;
    statictext2.justify = "right";

    var input_input = group4.add('edittext {properties: {name: "input_input"}}');
    input_input.text = "~\\Desktop\\input";
    input_input.preferredSize.width = 150;
    input_input.alignment = ["center", "center"];

    // GROUP5
    // ======
    var group5 = panel7.add("group", undefined, { name: "group5" });
    group5.orientation = "row";
    group5.alignChildren = ["left", "center"];
    group5.spacing = 10;
    group5.margins = 0;

    var statictext3 = group5.add("statictext", undefined, undefined, { name: "statictext3" });
    statictext3.text = "outPut";

    var input_output = group5.add('edittext {properties: {name: "input_output"}}');
    input_output.text = "~\\Desktop\\output";
    input_output.preferredSize.width = 150;
    input_output.alignment = ["left", "center"];

    // PANEL7
    // ======
    var button5 = panel7.add("button", undefined, undefined, { name: "button5" });
    button5.text = "Run";

    // PANEL6
    // ======
    // var divider2 = panel6.add("panel", undefined, undefined, { name: "divider2" });
    // divider2.enabled = false;
    // divider2.alignment = "fill";

    // {// them anh
    // GROUP6
    // ======
    // var group6 = dialog.add("group", undefined, { name: "group6" });
    // group6.preferredSize.width = 200;
    // group6.orientation = "column";
    // group6.alignChildren = ["fill", "top"];
    // group6.spacing = 10;
    // group6.margins = 0;

    // PANEL8
    // ======
    // var panel8 = group6.add("panel", undefined, undefined, { name: "panel8" });
    // panel8.preferredSize.height = 205;
    // panel8.orientation = "column";
    // panel8.alignChildren = ["left", "top"];
    // panel8.spacing = 10;
    // panel8.margins = 10;

    // var image2 = panel8.add("image", undefined, File.decode(image2_imgString), { name: "image2" });
    // }


}


selectJson.onClick = function () {
    selectFileJson = File.openDialog("Please select file .json", "*.json");
    if (selectFileJson != null) {
        statictext1.text = decodeURI(selectFileJson.name);
    }
}
// chạy file JSON
button2.onClick = function () {
    dialog.hide();
    #include "KiemTraKhungDesktop.jsx";

    {
        if (statictext1.text !== "...") {

            var file = new File(selectFileJson); file.open("r"); var strFile; strFile = file.read(); file.close();
            // read data from json

            var data = JSON.parse(strFile);
            var type = data.type;
            var arr = data.items;
            var FileName = data.fileName;
            var FileDesign = data.FileDesign;
            var hAll = Math.round(data.hAll / 0.084667);
            var wAll = Math.round(data.wAll / 0.084667);
            var fileHong = 0;

            try {
              
                    #include "before.jsx";

                var geo_dynamic = File("//192.168.1.194/photoshop script V4-ultimate/products/" + type + ".jsx");
                if (fileHong == 0)
                    $.evalFile(geo_dynamic);
                else alert(fileHong + " : file bi hong !")
                // #include "openFile.jsx";
                #include "after.jsx";

            } catch (error) {
                alert("home: " + error)
            }
        }
        else { alert("hay chon file .Json") }
    }


}

// create barcode
button3.onClick = function () {
    dialog.hide();
    if (inputBarcode.text != "") {
        app.open(File("//192.168.1.194/ps script data/tem.tif"));

        var pathObj = File("//192.168.1.194/photoshop script V4-ultimate/label/objBarcode.jsx");
        $.evalFile(pathObj);
        var nameItem = inputBarcode.text.split("");
        // alert(nameItem)`
        var nameConvert = [];
        for (var i = 0; i < nameItem.length; i = i + 2) {
            nameConvert.push(nameItem[i].concat(nameItem[i + 1]));

        }
        for (var j = 0; j < nameConvert.length; j++) {
            nameConvert[j] = obj[nameConvert[j]]

        }
        nameConvert = nameConvert.join("");
        // alert(nameConvert)
        app.activeDocument.artLayers[2].textItem.contents = String.fromCharCode(203) + nameConvert + String.fromCharCode(204); // thong bin barcode
        app.activeDocument.artLayers[5].remove();
        app.activeDocument.artLayers[3].remove();
        app.activeDocument.artLayers[1].remove();
        app.activeDocument.artLayers[0].remove();
        app.activeDocument.artLayers[1].textItem.contents = inputBarcode.text;

        app.activeDocument.mergeVisibleLayers();
        app.activeDocument.saveAs(Folder("~/Downloads/" + inputBarcode.text + ".png"), PNGSaveOptions);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES)
    }



}

// checkxoa
button4.onClick = function () {
    dialog.hide();
    var stringFolder = inputXoa.text.split("\\");
    stringFolder = stringFolder.join("/")


    var customerChildren = Folder(stringFolder).getFiles("*");
    for (var i = 0; i < customerChildren.length; i++) {
        try {
            app.open(File(customerChildren[i]));
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        } catch (error) {
            var saveFile = File(customerChildren[i]);
            if (saveFile.exists)
                saveFile.remove();
        }


    }
    alert("đã xóa xong !")
}

// tach doi file
button5.onClick = function () {
    dialog.hide();
    var Folder_input = input_input.text.split("\\");
    Folder_input = Folder_input.join("/")
    var Folder_output = input_output.text.split("\\");
    Folder_output = Folder_output.join("/")



    var customerChildren = Folder(Folder_input).getFiles("*");
    for (var i = 0; i < customerChildren.length; i++) {


        try {
            var tenFile = customerChildren[i].name;
            tenFile = tenFile.split(".");
            tenFile.pop();
            tenFile = tenFile.join(".");
            var endName = tenFile.split("%20");
            endName = endName[endName.length - 1]

            if (endName.toLowerCase() == "front") {


                app.open(File(customerChildren[i]));
                if (app.activeDocument.width > app.activeDocument.height) {
                    // var PSpotKhung = app.activeDocument.activeLayer.bounds;
                    // app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
                    var wd = app.activeDocument.width;
                    app.activeDocument.activeLayer.name = "1";
                    app.activeDocument.resizeCanvas(wd / 2, app.activeDocument.height, AnchorPosition.BOTTOMLEFT);
                    app.activeDocument.saveAs(Folder(Folder_output + "/" + tenFile + ".png"), PNGSaveOptions);
                    app.activeDocument.resizeCanvas(wd, app.activeDocument.height, AnchorPosition.BOTTOMLEFT);
                    app.activeDocument.resizeCanvas(wd / 2, app.activeDocument.height, AnchorPosition.BOTTOMRIGHT);
                    var name2 = tenFile;

                    name2 = name2.split("%20");
                    name2.pop();
                    name2.push("back");
                    name2 = name2.join(" ")

                    app.activeDocument.saveAs(Folder(Folder_output + "/" + name2 + ".png"), PNGSaveOptions);

                }
                else {
                    // alert(name2)
                    // var PSpotKhung = app.activeDocument.activeLayer.bounds;
                    // app.activeDocument.crop(PSpotKhung, 0, PSpotKhung[2] - PSpotKhung[0], PSpotKhung[3] - PSpotKhung[1]);
                    var wd = app.activeDocument.height;
                    app.activeDocument.activeLayer.name = "1";
                    app.activeDocument.resizeCanvas(app.activeDocument.width, wd / 2, AnchorPosition.TOPLEFT);
                    app.activeDocument.saveAs(Folder(Folder_output + "/" + tenFile + ".png"), PNGSaveOptions);
                    app.activeDocument.resizeCanvas(app.activeDocument.width, wd, AnchorPosition.TOPLEFT);
                    app.activeDocument.resizeCanvas(app.activeDocument.width, wd / 2, AnchorPosition.BOTTOMRIGHT);
                    var name2 = tenFile;
                    name2 = name2.split("%20");
                    name2.pop();
                    name2.push("back");
                    name2 = name2.join(" ")

                    app.activeDocument.saveAs(Folder(Folder_output + "/" + name2 + ".png"), PNGSaveOptions);
                }
                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }

        } catch (error) {
            var saveFile = File(customerChildren[i]);
            if (saveFile.exists)
                saveFile.remove();
        }


    }
    alert("đã tách xong !")
}

dialog.show();

