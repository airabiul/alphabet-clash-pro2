
function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
};

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
};

function setBackgroundColor (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');    
}

function removeBackgrounColor (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getArandomeAlphabet(){
    const stringAlphabent = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = stringAlphabent.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(alphabet);
    return alphabet;
}