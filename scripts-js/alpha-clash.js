/*function play(){
    // step-1: hide the home screen. to hide the screen add the class hidden to the home section

    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // console.log(homeSection)

    // show the playground
    const playgroundSection = document.getElementById('play-ground')
    playgroundSection.classList.remove('hidden')
    // console.log(playgroundSection.classList);
}*/

// function play(){
//     hideElementById('home-screen');
//     showElementById('play-ground');
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // get the expected to press
   const currentAlphabetElement = document.getElementById('current-alphabet')
   const currentAlphabet = currentAlphabetElement.innerText
   const expectedAlphabet = currentAlphabet.toLowerCase(); 
   console.log(playerPressed, expectedAlphabet);

   // check matched or not 
   if(playerPressed === expectedAlphabet){
    console.log('you get a point');
    const currentScore = getTextelementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextelementValueById('current-score', updatedScore);
   // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
   }
   else{
        console.log('you missed. you lost a life');

         const currentLife = getTextelementValueById('current-life');
         const updatedLife = currentLife -1;
         setTextelementValueById('current-life', updatedLife);
   }

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

    function continueGame(){
        // step -1: generate a random alphabet
        const alphabet = getARandomAlphabet();
        // console.log('your random alphabet', alphabet);

        // set randomly generated alphabet to the screen (show it)
        const currentAlphabetElement = document.getElementById('current-alphabet');
        currentAlphabetElement.innerText = alphabet;

        // set background color
        setBackgroundColorById(alphabet)
    }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}