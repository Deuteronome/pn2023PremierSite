let gameMenu = document.getElementById('gameMenu');
let gameZone = document.getElementById('gameZone');
console.log(gameMenu)
function home() {
    gameZone.innerHTML = "";
}

function nombreMystere () {
    console.log('nombre mystère')
    gameZone.innerHTML = `<div id="userController" class="sticker">
            <input type="text" id="userGuess" placeholder="Devinez un nombre entre 1 et 100"/>
                <input type="button" id="validate" value="Valider"/>
        </div>
            <div id="playGround" class="sticker"></div>`
            let targetNumber = Math.floor(Math.random()*100 + 1);
            console.log(targetNumber);
            
            let userGuess = document.getElementById('userGuess');
            let validate = document.getElementById('validate');
            
            let playground = document.getElementById('playGround');
            
            function reinit() {
                targetNumber = Math.floor(Math.random()*100 + 1);
                console.log(targetNumber);
                userGuess.style.display='inline';
                userGuess.value = null;
                validate.value="Valider";
                playground.innerHTML="";
            }
            
            function comparer() {
                console.log('déclenché');
            
                //Si le jeu est fini, possibilité de recommencer
                if(validate.value=='Recommencer') {
                    reinit();
                    return;
                }
            
                if (targetNumber < userGuess.value) 
                {
                    playground.innerHTML += `<p class="gameLine">Non, le nombre à deviner est plus petit que ${userGuess.value}</p>`;
                } else if(targetNumber > userGuess.value)
                {
                    playground.innerHTML += `<p class="gameLine">Non, le nombre à deviner est plus grand que ${userGuess.value}</p>`;
                } else if (targetNumber == userGuess.value) {
                    //si on gagne
                    playground.innerHTML += `<p class="winLine">Bravo, vous avez trouvé le nombre mystère ${userGuess.value}</p>`;
                    userGuess.style.display='none';
                    validate.value = 'Recommencer'
            
                }else{
                    //si l'utilisateur a mis un texte
                    alert("on vous a dit un nombre!!!");
                }
            }
            
            validate.addEventListener('click', comparer);
            
            
            
            
            /*let userGuess = prompt(`Devinez le nombre mystère!! il est compris entre 1 et 100 :`);
            
            while(targetNumber != userGuess) {
            
                
            
                userGuess = prompt(`Devinez le nombre mystère!! il est compris entre 1 et 100 :`);
            }
            
            alert("Bravo, vous avez deviné");*/
            
            
    
}

function gameChoice () {
    console.log("change")
    switch(gameMenu.value) {
        case "1" : 
            nombreMystere();
            break;
        case "0" : 
            home();
            break;
    }

}

gameMenu.addEventListener("change", gameChoice);
