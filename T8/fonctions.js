/*function calculerSurface(longueur , largeur){

     return longueur * largeur;
}

function estGrand(surface){

    return surface >=100;
}

let suefacePiece = calculerSurface(12,10);
let grandePiece = estGrand(suefacePiece);

console.log("suface calculée :" +suefacePiece +"m²");
console.log("grande piéce:"+grandePiece);*/


function trouverMaximum(a, b) {
    if (a > b) {
        return true;
    }
    return false;
}

let plusGrand = trouverMaximum(12, 18);
console.log("Le plus grand nombre est : " + plusGrand);
