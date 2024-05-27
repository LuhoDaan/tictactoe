
//Console Game in javascript for tictactoe


let gameboard = [['','',''],['','',''],['','','']]
console.table(gameboard)
console.log(gameboard.length)

function getRandomInt(min, max) {
    min = Math.ceil(min);  // Ensure the minimum number is rounded up to the nearest integer
    max = Math.floor(max); // Ensure the maximum number is rounded down to the nearest integer
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive 
}

function makeaplay(){
    const prompt = require("prompt-sync")();
    function usermove(){
    const x = parseInt(prompt("Insert x coordinate for your selection"),10);
    const y = parseInt(prompt("Insert y coordinate for your selection"),10);
    return {x,y}}
   let {x,y} = usermove();
   while (  x<0 || x>2 || y<0 ||y>2 || gameboard[x][y]!== ''){
    console.log("wrong pick bro, try again");
    ( {x,y} = usermove());    
   }
    gameboard[x][y] = "X";
    console.table(gameboard)
    function machinemove(){
        let x_indexes = [];
        let y_indexes = [];
        for(let i = 0; i<gameboard.length;i++){
            for(let j=0;j<gameboard[i].length;j++){
                if(gameboard[i][j] === ''){
                    x_indexes.push(i);
                    y_indexes.push(j);

                }
            }

        }
        const randomIndex = getRandomInt(0, x_indexes.length - 1);
        const x = x_indexes[randomIndex];
        const y = y_indexes[randomIndex];        
    return{x,y}}
    let {x: z, y: w} = machinemove();
    gameboard[z][w] = "0";
    console.table(gameboard);
}

function gamelogic(){
    let count = 0;
    let prev;
    //check 3 in a row
    for(let i = 0; i< gameboard.length; i++){
        prev = gameboard[i][0]
        for(let j=1; j<gameboard[i].length; j++){
            if(prev!==gameboard[i][j]){
                break;}
            count ++
            if(count===2){
                if(prev==='X'){
                    console.log("you won");
                    return 1;
                }
                else if(prev==='0'){
                    console.log('you lost your ass');
                    return 1;
                }

            }
            }
            count=0
        }
        //check 3 vertical
        for(let i = 0; i<gameboard.length; i++){
            prev = gameboard[0][i]
            for(let j=1;j< gameboard[i].length -1; j++){
                if(prev!==gameboard[j][i]){
                    break;}
                count ++
                if(count===2){
                    if(prev==='X'){
                        console.log("you won");
                        return 1;
                    }
                    else{
                        console.log('you lost your ass');
                        return 1;
                    }
    
                }
                }
                count=0
            } 
            //check diagonal
            if(gameboard[0][0]===gameboard[1][1]===gameboard[2][2] ||
                 gameboard[2][0]===gameboard[1][1]===gameboard[0][2] ){
                    if(gameboard[1][1]==='X'){
                    console.log("you won");
                        return 1;}
                        else{
                            console.log("you lost");
                        return 1;

                        }
                 }
                 makeaplay();
                 return 0;

    }

function play(){
    for(let k = 0;k<8;k++){

        won = gamelogic();
        if(won===1){
            break;
        }

    }
    console.log('endgame');
}

play()