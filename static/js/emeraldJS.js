/* 
    EMERALDJS is used to control the COFFEE TILT. 
    Thought there is more code here, all relevant 
    code is about the COFFEE TILT.
*/

function windowReady() {

    // Get several DOM elements: 
    var     webTitle        = document.getElementById("div-1-text-1")
    ,       webTimer        = document.getElementById("div-1-text-2")
    ,       navEnter        = document.getElementById('extra')
    ,       coffeeButton    = document.getElementById('coffee-button')
    ,       coffeeImage     = document.getElementById('coffee-image');

    // The Coffee Tilt Code:
    // Selects a random sipping sound to play
    // when the user clicks on "COFFEE" button:
    function coffeeTilt() {
        console.log('Tilting coffee cup...');
        var pourAudio1 = new Audio('/static/aud/3. Sip 1.ogg');
        var pourAudio2 = new Audio('/static/aud/4. Sip 2.ogg');
        var pourAudio3 = new Audio('/static/aud/5. Sip 3.ogg');
        var AudioArray = [pourAudio1, pourAudio2, pourAudio3];
        AudioArray[Math.floor(Math.random() * AudioArray.length)].play();
        coffeeImage.setAttribute('style', 'transform:rotate(5deg)');
        setTimeout(() => { coffeeImage.setAttribute('style', 'transform:rotate(0deg)');
        }, 3000);
    };
    
    // Instantiate Event Listeners:
    coffeeButton.addEventListener('click', coffeeTilt);
};

// Wait until window is ready:
window.requestAnimationFrame(windowReady);
