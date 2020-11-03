function typer() {
    window.addEventListener('keydown', function (e){
        let keyCode, keyASCII, key, keyLocation;

        if(e) {             
            keyCode         = e.keyCode;
            keyASCII        = e.charCode;
            key             =  e.key;
            keyLocation     = e.location;
            console.log(keyCode, keyASCII, key, keyLocation);

        } else if(e.which) {                   
            keynum          = e.which;
        };

    });
}

document.addEventListener("DOMContentLoaded", typer);