var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}
document.addEventListener("keypress", function(event) {
    makeSound(event.key.toUpperCase());
    buttonAnimation(event.key.toUpperCase());
});

function makeSound(key){
    switch(key){
        case "D":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "R":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "U":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "M":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "K":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "I":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "T":
            var audio = new Audio("sounds/kick.mp3");
            audio.play();
            break;
        default:
            console.log(key);
    }
    
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

