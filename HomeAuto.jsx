
#target photoshop;

app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel
"object" != typeof JSON && (JSON = {}), function () { "use strict"; var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { var j; function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();



{
    var file = new File("~/Desktop/ServerFile/photoshopStatus.txt");
    file.open("w");
    var noidung = '{"state":"busy","err":false,"cardId":false}';
    file.write(noidung);
    file.close();
}


const JSONFILE = ("~/Desktop/ServerFile/data.json");
var selectFileJson;
var itemxx = JSONFILE.items;

var file = new File(JSONFILE); file.open("r"); var strFile; strFile = file.read(); file.close();
// read data from json

var data = JSON.parse(strFile);
var type = data.type;
var arr = data.items;
var FileName = data.fileName;
var FileDesign = "~/Desktop/ServerFile/design"
var hAll = Math.round(data.hAll / 0.084667);
var wAll = Math.round(data.wAll / 0.084667);
var fileHong = 0;
var cardId = data.cardId;

for (var k = 0; k < arr.length; k++) {

    arr[k].Quantity = arr[k].QuantityAll

}


try {
    // app.displayDialogs = savedDisplayDialogs;
    app.displayDialogs = DialogModes.NO;
    {// before
        var yPosition = 0;
        var xPosition = 0;
        var hLast = 0;
        var wLast = 0;
        var ban = 0;
        var stt = 0;

        var folderContainer = Folder("//192.168.1.240/in/" + type + "-" + FileName);
        if (!folderContainer.exists) { folderContainer.create(); }

        var folderTool = Folder(folderContainer + "/file tool");
        if (!folderTool.exists) { folderTool.create(); }

        var folderTem = Folder(folderContainer + "/tem");
        if (!folderTem.exists) { folderTem.create(); }


        #include "openFile.jsx";
        #include "saveDesign.jsx";

    }
    var geo_dynamic = File("//192.168.1.194/photoshop-script-V4-ultimate/products/" + type + ".jsx");
    if (fileHong == 0)
        $.evalFile(geo_dynamic);

    {// after
        {
            var file = new File("~/Desktop/ServerFile/photoshopStatus.txt");
            file.open("w");
            var noidung = '{"state":"awaitReady","err":false,"cardId":"' + cardId + '"}';
            file.write(noidung);
            file.close();
        }
        var folderhehe = Folder(folderContainer + "/hehe");
        if (!folderhehe.exists) { folderhehe.create(); folderhehe.remove(); }
        else {
            folderhehe.remove();
        }

    }

} catch (error) {
    #include "runfail.jsx";

}




