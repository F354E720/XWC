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
};

// Wait until DOM Loads:
document.addEventListener('DOMContentLoaded', runningJS);