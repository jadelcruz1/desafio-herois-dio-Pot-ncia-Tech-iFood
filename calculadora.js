
let calculator = fight(100, 20);

function fight(winer, loser) {
     let final = winer -loser;    

     if (final <= 10){
        console.log("O Héroi" + " está no nível Ferro.");
    } else if (final <= 20){
        console.log("O Héroi " + " está no nível Bronze.");
    } else if (final <= 50){
        console.log("O Héroi " + " está no nível Prata.");
    }else if (final <= 80){
        console.log("O Héroi " +  " está no nívelo Ouro.");
    }else if (final <= 90){
        console.log("O Héroi " + " está no nível Diamante.");
    }else if (final <= 100){
        console.log("O Héroi " + " está no nível lendário.");
    }else if (final > 101){
        console.log("O Héroi " + " está no nível Imortal.");
    }

    return final;
    
    
}

