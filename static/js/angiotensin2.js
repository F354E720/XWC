/* 
    ANGIOTENSIN2.JS is used to... you know what.
*/

// Function to Execute after DOM Loads:
function runningJS() {

    var geoLocOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    
    function successCallback(obtainedPosition) {
        var crd = obtainedPosition.coords;
    
        console.log('Connected client position is:');
        console.log(`Lat        : ${crd.latitude}`);
        console.log(`Long       : ${crd.longitude}`);
        console.log(`Accuracy   : ${crd.accuracy} meters.`);
    };
    
    function navError(err) {
        console.warn(`Error occurred: (${err.code}): ${err.message}`);
    };
    
    (function grabNavInfo() {
        window.navigator.geolocation.getCurrentPosition(successCallback, navError, geoLocOptions);
    })();

    window.addEventListener('keypress', function (e){
        let keyCode, keyASCII, key, keyLocation;

        if(event) {             
            keyCode         = e.keyCode;
            keyASCII        = e.charCode;
            key             =  e.key;
            keyLocation     = e.location;
            console.log(keyCode, keyASCII, key, keyLocation);

        } else if(e.which) {                   
            keynum          = e.which;
        };

    });

};

// Wait until DOM Loads:
document.addEventListener('DOMContentLoaded', runningJS);