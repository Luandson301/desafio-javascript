let nomeHeroi = "Steven"
let xpHeroi = 1000
let nivelHeroi = ""

if (xpHeroi <= 1000){
    nivelHeroi = "ferro"
}
else if (xpHeroi <= 2000){
    nivelHeroi = "bronze"
}
else if (xpHeroi <= 5000){
    nivelHeroi = "prata"
}
else if (xpHeroi <= 7000){
    nivelHeroi = "ouro"
}
else if (xpHeroi <= 8000){
    nivelHeroi = "platina"
}
else if (xpHeroi <= 9000){
    nivelHeroi = "ascendente"
}
else if (xpHeroi <=10000){
    nivelHeroi = "imortal"
}
else{
    nivelHeroi = "radiante"
}


console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi)