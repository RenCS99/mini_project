let imgArr = [];
let imgOptions = ["yes-ball.png", "no-ball.png", "itwillpass-ball.png", "askagain-ball.png", "absolutely-ball.png", "cannottell-ball.png", "countonit-ball.png", "itisok-ball.png", "maybe-ball.png", "nodoubt-ball.png", "verylikely-ball.png", "waitforit-ball.png", "yourehot-ball.png", "notnow-ball.png"];

for (let i = 0; i < imgOptions.length; i++) {
    imgArr[i] = new Image();
    imgArr[i].src = 'img/' + imgOptions[i];
    console.log(imgArr[i]);
}

function askAnything() {
    let response = document.getElementById("response");

    while (answers.firstChild) {
        response.removeChild(response.lastChild);
    }
    response.appendChild(imgArr[Math.floor(Math.random()*15)+1]);

    

}