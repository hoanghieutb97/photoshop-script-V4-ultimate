function getSelectionActiveLayer(params) {
    var idsetd = charIDToTypeID( "setd" );
    var desc16 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idfsel = charIDToTypeID( "fsel" );
        ref5.putProperty( idChnl, idfsel );
    desc16.putReference( idnull, ref5 );
    var idT = charIDToTypeID( "T   " );
        var ref6 = new ActionReference();
        var idChnl = charIDToTypeID( "Chnl" );
        var idChnl = charIDToTypeID( "Chnl" );
        var idTrsp = charIDToTypeID( "Trsp" );
        ref6.putEnumerated( idChnl, idChnl, idTrsp );
    desc16.putReference( idT, ref6 );
executeAction( idsetd, desc16, DialogModes.NO );


}