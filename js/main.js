
// funzione chiede se elemento è presente in vettore
function is_array(vettore, elemento){
    var flag = false;
    for (i = 0; i < vettore.length; i++){
        if (vettore[i] == elemento){
            flag = true;
        }

    }
    return flag;
}


// genera un vettore di numeri casuali non ripetuti

function rdm_noripetizione(max) {
    var i = 0;
    var num_bombe = 16;
    var pericolo = [];
    var controllo = [];
    while (i < num_bombe ){
        nuova_bomba = Math.floor(Math.random() * max) + 1;
        controllo = is_array(pericolo, nuova_bomba);
        if (controllo == false){
            i= i + 1;
            pericolo.push(nuova_bomba);
        }

    }
return pericolo;
}

var pericolo1 = rdm_noripetizione(100);
console.log(pericolo1);
var difficolta = parseInt(prompt('scegli difficoltà da 0 a 2'));
switch (difficolta) {
    case 0: 
        var difficolta_b = 50;
        break;
    case 1:
        var difficolta_b = 80;
        break;
    default:
        var difficolta_b = 100;
}
console.log(difficolta_b);

var i = 0;
var controllo1 = 0;
var numeri_buoni = [] ;

while ( i < difficolta_b) {
    colpo = parseInt(prompt('inserisci numero da uno a 100'));
    controllo1 = is_array(pericolo1, colpo );
    controllo2 = is_array(numeri_buoni, colpo );
    
    if (controllo1 == false && controllo2 == false){
        
        numeri_buoni.push(colpo);
        i= i + 1;
    }
    else if (controllo1 == false && controllo2 == true){
        alert('numero già inserito');
    }
    else {
        alert('boom! hai totalizzato '+ numeri_buoni.length );
        i= difficolta_b;
    }

    
}