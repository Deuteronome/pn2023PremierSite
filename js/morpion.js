let gameZone = document.getElementById('gameZone')
gameZone.innerHTML=""

gameZone.innerHTML = '<div id="mainSquare"></div>'
gameZone.innerHTML += '<input type="button" id="initBut" value="réinitialiser">'
let initBut = document.getElementById('initBut')
let mainSquare = document.getElementById('mainSquare')

let joueur1;
let squares =[];
let activated = [];
let squareValue =[];

function squareClick(i){
    if(activated[i]) {
        if(joueur1) {
            squares[i].innerHTML='<img class="icon" src="../assets/rouge.png"/>'
            squareValue[i] = 1;
        } else {
            squares[i].innerHTML='<img class="icon" src="../assets/vert.png"/>'
            squareValue[i] = 4;
        }
        joueur1 = !joueur1;
        activated[i] = false
        checkVictory()
        if(!activated.includes(true)) {
            //fin de partie
        }
        console.log(squareValue)
    }
    
}

function checkVictory() {
    let scoreSum =[squareValue[0]+squareValue[1]+squareValue[2],
                squareValue[3]+squareValue[4]+squareValue[5],
                squareValue[6]+squareValue[7]+squareValue[8],
                squareValue[0]+squareValue[3]+squareValue[6],
                squareValue[1]+squareValue[4]+squareValue[7],
                squareValue[2]+squareValue[5]+squareValue[8],
                squareValue[0]+squareValue[4]+squareValue[8],
                squareValue[2]+squareValue[4]+squareValue[6]
    ]

    if(scoreSum.includes(3) || scoreSum.includes(12)) {
        for(let i=0; i<9; i++) {
            activated[i] = false;
        }
    }
}
function reinit() {
    mainSquare.innerHTML =""
    squares =[];
    activated = [];
    squareValue =[];
    joueur1 = true;
    for(let i = 0; i<9; i++) {
        let tempId = `square${i}`
        mainSquare.innerHTML += `<div class="square" id="${tempId}"></div>`
    }
    
    for (let i = 0; i<9; i++) {
        let tempId = `square${i}`
        squares.push(document.getElementById(tempId))
        activated.push(true);
        squareValue.push(0);
        squares[i].addEventListener('click', squareClick.bind(null, i))
        
    }
}

initBut.addEventListener('click', reinit)

reinit();

console.log(squares)


