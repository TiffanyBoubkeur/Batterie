console.log("Let's goooooo !")

// Principal Code 
/**
 * Création de variables contenants les objets du DOM dont on a besoin à savoir les div.key
 */




// FUNCTIONS 

/* Functions Key event (keydown et keyup): si on touche CETTE touche.data-key alors CE son est joué audio.data-key (function play audio)
*/

// Key event général donc document.addEventlistener
document.addEventListener('keydown',(e)=>{
    
    let letter     = document.querySelector(`div[data-key="${e.keyCode}"]`);
    let audio      = document.querySelector(`audio[data-key="${e.keyCode}"]`);


    // CSS Animation 
    letter.classList.add('playing');
        
    // alors on lance l'audio correspondant CONCATENATION
    let audioSound = new Audio(audio.src);
    audioSound.play();
    

    console.log(letter,audio);
});



/*** USEFUL LINKS ***
 *  key event : https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent
 * 
 * Audio()    : https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
 * 
 * play()     : https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
 */
