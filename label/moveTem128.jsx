
function moveTem(item, type) {


    app.activeDocument.artLayers[3].textItem.contents = item.nameId; // thong tin stt;
    app.activeDocument.artLayers[7].textItem.contents = item.stt; // thong tin stt;

    app.activeDocument.artLayers[0].textItem.contents = item.orderId; // thong tin order

    var encoded = Code128_encode(item.barcode);
    app.activeDocument.artLayers[2].textItem.contents = encoded;
  

  
    if (item.partner !== null)
        app.activeDocument.artLayers[4].textItem.contents = item.partner; // thong tin partner
    else
        app.activeDocument.artLayers[4].textItem.contents = "!!!"; // thong tin partner
    app.activeDocument.artLayers[5].textItem.contents = item.dateItem.substr(8, 2) + "-" + item.dateItem.substr(5, 2) // thong tin date

    if (item.Quantity <= 1) { app.activeDocument.artLayers.getByName("amount").textItem.contents = "" }
    else {
        app.activeDocument.artLayers.getByName("amount").textItem.contents = item.Quantity;
    }

    app.activeDocument.artLayers[6].textItem.contents = item.country; // country

    var NameUuTien = "";

    if (item.orderId.substring(0, 3).toLowerCase() == "pwt" ) {
        NameUuTien = "T";
        app.activeDocument.artLayers[8].textItem.contents = NameUuTien; // country
        if (app.activeDocument.artLayers[9].visible === false) app.activeDocument.artLayers[9].visible = true;
    }
    else if (item.partner == "PWSER1411") {
        NameUuTien = "K";
        app.activeDocument.artLayers[8].textItem.contents = NameUuTien; // country
        if (app.activeDocument.artLayers[9].visible === false) app.activeDocument.artLayers[9].visible = true;
    }
    else if (item.partner == "PWSER115") {
        NameUuTien = "N";
        app.activeDocument.artLayers[8].textItem.contents = NameUuTien; // country
        if (app.activeDocument.artLayers[9].visible === false) app.activeDocument.artLayers[9].visible = true;
    }
    else {
        if (app.activeDocument.artLayers[9].visible === true) app.activeDocument.artLayers[9].visible = false;

    }




}


function Code128_encode(inputStrObf) {
    // Validate characters: allowed ASCII 32–126 and 203
    for (var iaa = 0; iaa < inputStrObf.length; iaa++) {
        var charCodeObf = inputStrObf.charCodeAt(iaa);
        if (!((charCodeObf >= 32 && charCodeObf <= 126) || charCodeObf == 203)) return "";
    }

    var resultObf = "";
    var tableBObf = true;
    var iaa = 0;

    while (iaa < inputStrObf.length) {
        if (tableBObf) {
            // Check if switching to table C
            var minimumRunObf = (iaa == 0 || iaa + 3 == inputStrObf.length) ? 4 : 6;
            if (isNumberRun(inputStrObf, iaa, minimumRunObf)) {
                // Switch to table C
                resultObf += (iaa == 0) ? String.fromCharCode(210) : String.fromCharCode(204);
                tableBObf = false;
            } else {
                if (iaa == 0) resultObf += String.fromCharCode(209); // Start B
            }
        }

        if (!tableBObf) {
            // In table C, process 2 digits at once
            if (isNumberRun(inputStrObf, iaa, 2)) {
                var valueObf = parseInt(inputStrObf.substr(iaa, 2), 10);
                valueObf = (valueObf < 95) ? (valueObf + 32) : (valueObf + 105);
                resultObf += String.fromCharCode(valueObf);
                iaa += 2;
            } else {
                // Switch to table B
                resultObf += String.fromCharCode(205);
                tableBObf = true;
            }
        }

        if (tableBObf) {
            // Table B: 1 char
            resultObf += inputStrObf.charAt(iaa);
            iaa++;
        }
    }

    // ----- CHECKSUM -----
    var checksumObf = 0;
    for (var kaa = 0; kaa < resultObf.length; kaa++) {
        var ascObf = resultObf.charCodeAt(kaa);
        var codeObf = (ascObf < 127) ? (ascObf - 32) : (ascObf - 105);
        if (kaa == 0) checksumObf = codeObf;
        else checksumObf = (checksumObf + (codeObf * kaa)) % 103;
    }

    // Convert checksum to glyph
    var checksumGlyphObf = (checksumObf < 95) ? (checksumObf + 32) : (checksumObf + 105);
    resultObf += String.fromCharCode(checksumGlyphObf);

    // STOP = 211
    resultObf += String.fromCharCode(211);

    return resultObf;
}

// Helper: check if next n chars are digits
function isNumberRun(stringObf, positionObf, countObf) {
    if (positionObf + countObf > stringObf.length) return false;
    for (var zzz = 0; zzz < countObf; zzz++) {
        var digitCharObf = stringObf.charCodeAt(positionObf + zzz);
        if (digitCharObf < 48 || digitCharObf > 57) return false;
    }
    return true;
}