// function play(){
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add("hidden");

//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove("hidden");
// };

function handleKeyBordButtonPress(){
    console.log('button press');
};

document.addEventListener('keyup', handleKeyBordButtonPress);

function continewGame(){
    const alphabet = getArandomeAlphabet();
    console.log('Your Randome Alphabet is', alphabet);

    const currentAlphabetElement = document.getElementById("change");
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColor(alphabet);
}

function play(){
    hiddenElementById('home-section');
    showElementById('play-ground');
    continewGame();
};