console.log("The Tic Tac Toe Quest")
let music = new Audio("bgmusic.mp3")
let audioMove = new Audio("click.mp3")
let turn = "X"
let isgameover = false;


const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}


const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.result').innerText = boxtext[e[0]].innerText + " Won congratulations "
            isgameover = true
        }
    })

}

//game logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioMove.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("result")[0].innerText = " Turn for " + turn;

            }

        }
    })

})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    isgameover = false
    document.getElementsByClassName("result")[0].innerText = " Turn for " + turn;




})