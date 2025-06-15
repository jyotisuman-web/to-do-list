//  var storing the length of button with class button, which are 7
var numofButtons= document.querySelectorAll(".button").length;
for (var j=0; j<numofButtons; j++){
    document.querySelectorAll(".button")[j].addEventListener("click",function(){
        var buttonstyle = this.innerHTML;
        sound(buttonstyle);
        animation(buttonstyle);
    });
}

document.addEventListener("keypress", function(event){
    sound(event.key);
    animation(event.key);
});
function sound(key){
    switch (key) {
        case "w":
            var sound1 = new Audio("music/w.mp3");
            sound1.play();
            break;
        case "a":
            var sound1 = new Audio("music/a.mp3");
            sound1.play();
            break;
        case "d":
            var sound1 = new Audio("music/d.mp3");
            sound1.play();
            break;
        case "s":
            var sound1 = new Audio("music/s.mp3");
            sound1.play();
            break;
        case "l":
            var sound1 = new Audio("music/l.mp3");
            sound1.play();
            break;
        case "j":
            var sound1 = new Audio("music/j.mp3");
            sound1.play();
            break;
        case "k":
            var sound1 = new Audio("music/k.mp3");
            sound1.play();
            break;
        default: console.log(key);

    }
}
function animation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("animation");
    setTimeout(function() {
        activeButton.classList.remove("animation");
        
    }, 50);
}