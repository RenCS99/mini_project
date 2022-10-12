let imgArr = [];

imgArr[0] = new Image();
imgArr[0].src = '../img/yes-ball.png';

function askAnything() {
    let response = document.getElementById("response");

    while (answers.firstChild) {
        response.removeChild(response.lastChild);
    }
    response.appendChild(imgArr[Math.floor(Math.random()*15)+1]);

    

}