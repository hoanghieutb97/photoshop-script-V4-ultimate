

function openFile(FileDesign, item, type) {
   
    if (type == "front") {
        try {

            app.open(File(FileDesign + "/" + item.sku + " front.png"));
        } catch (error) {

            try {
                app.open(File(FileDesign + "/" + item.sku + " front.jpg"));

            } catch (error1) {
                try {
                    app.open(File(FileDesign + "/" + item.sku + " front.jpeg"));
                } catch (error2) {
                    alert("ko mo duoc file stt; " + item.stt)
                }


            }
        }
    }
    else if (type == "back") {
        try {
            app.open(File(FileDesign + "/" + item.sku + " back.png"));
        } catch (error) {

            try {
                app.open(File(FileDesign + "/" + item.sku + " back.jpg"));

            } catch (error1) {
                try {
                    app.open(File(FileDesign + "/" + item.sku + " back.jpeg"));

                } catch (error2) {
                    try {
                        app.open(File(FileDesign + "/" + item.sku + " front.png"));
                    } catch (error3) {
                        alert("ko mo duoc file stt; " + item.stt)
                    }

                }


            }
        }
    }
    else {
        
        try {
            app.open(File(FileDesign + "/" + item.sku + ".png"));
        } catch (error) {

            try {
                app.open(File(FileDesign + "/" + item.sku + ".jpg"));

            } catch (error1) {
                try {
                    app.open(File(FileDesign + "/" + item.sku + ".jpeg"));
                } catch (error2) {
                    alert("ko mo duoc file stt; " + item.stt)
                }


            }
        }

    }


    if (app.activeDocument.mode != "DocumentMode.RGB") app.activeDocument.changeMode(ChangeMode.RGB);

}
