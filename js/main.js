
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



// var difficolta = parseInt(prompt('scegli difficoltà da 0 a 2'));
// switch (difficolta) {
//     case 2: 
//         var difficolta_b = 50;
//         for (i=0 ; i<50; i++){
//             let btn = document.createElement("button");
//             btn.innerHTML = i;
//             btn.id = i;
//             document.body.appendChild(btn);
//         }

//         break;
//     case 1:
//         var difficolta_b = 80;
//         for (i=0 ; i<80; i++){
//             let btn = document.createElement("button");
//             btn.innerHTML = i;
//             btn.id = i;
//             document.body.appendChild(btn);
//         }
//         break;
//     default:
//         var difficolta_b = 100;
//         for (i=0 ; i<100; i++){
//             let btn = document.createElement("button");
//             btn.innerHTML = i;
//             btn.id = i;
//             document.body.appendChild(btn);
//         }
// }
var difficolt = document.getElementById('gioca');
gioca.addEventListener('click',
    function(){
        



        difficolta = document.getElementById('difficolta').value;
        switch (difficolta) {
            case 'difficile': 
                var prova = document.createElement("contenitore");
                prova.id= 'contenitore';
                document.body.appendChild(prova);
                var difficolta_b = 50;
                var pericolo1 = rdm_noripetizione(difficolta_b);
                console.log(pericolo1);
                var controllo1 = 0;
                var punteggio = 0;
                for (var i=1 ; i< 51; i++){
                    let btn = document.createElement("button");
                    btn.innerHTML = i;
                    btn.id = i;
                    document.getElementById('contenitore').appendChild(btn);
                    btn.addEventListener('click',
                    function(){
                        controllo1 = is_array(pericolo1, btn.id );
                        if (controllo1 == false){
                            alert('bravo');
                            document.getElementById(btn.id).style.display = "none";
                            punteggio= punteggio +1;

                        }
                        else{
                            alert('booooom! hai totalizzato' + punteggio);
                            prova.remove();
                        }



                    })
                }
                break;
            case 'normale':
                var prova = document.createElement("contenitore");
                prova.id= 'contenitore';
                document.body.appendChild(prova);
                var difficolta_b = 80;
                var pericolo1 = rdm_noripetizione(difficolta_b);
                console.log(pericolo1);
                var controllo1 = 0;
                var punteggio = 0;
                for (var i=1 ; i< 81; i++){
                    let btn = document.createElement("button");
                    btn.innerHTML = i;
                    btn.id = i;
                    document.getElementById('contenitore').appendChild(btn);
                    btn.addEventListener('click',
                    function(){
                        controllo1 = is_array(pericolo1, btn.id );
                        if (controllo1 == false){
                            alert('bravo');
                            document.getElementById(btn.id).style.display = "none";
                            punteggio= punteggio +1;

                        }
                        else{
                            alert('booooom! hai totalizzato' + punteggio);
                            prova.remove();
                        }



                    })
                }
                break;
            default:
                var prova = document.createElement("contenitore");
                prova.id= 'contenitore';
                document.body.appendChild(prova);
                var difficolta_b = 100;
                var pericolo1 = rdm_noripetizione(difficolta_b);
                console.log(pericolo1);
                var controllo1 = 0;
                var punteggio = 0;
                for (var i=1 ; i< 101; i++){
                    let btn = document.createElement("button");
                    btn.innerHTML = i;
                    btn.id = i;
                    document.getElementById('contenitore').appendChild(btn);
                    
                    btn.addEventListener('click',
                    function(){
                        controllo1 = is_array(pericolo1, btn.id );
                        if (controllo1 == false){
                            alert('bravo');
                            document.getElementById(btn.id).style.display = "none";
                            punteggio= punteggio +1;

                        }
                        else{
                            alert('booooom! hai totalizzato' + punteggio);
                            
                            prova.remove();
                        }



                    })
                }
                break;
                
        }
        console.log(difficolta_b);
        

    }
)
//  var difficolta_b = 19;
// console.log(difficolta_b);
// var pericolo1 = rdm_noripetizione(difficolta_b);
// console.log(pericolo1);
// var i = 0;
// var controllo1 = 0;
// var numeri_buoni = [] ;

// while ( i < difficolta_b) {
//     colpo = parseInt(prompt('inserisci numero da uno a 100'));
//     controllo1 = is_array(pericolo1, colpo );
//     controllo2 = is_array(numeri_buoni, colpo );
    
//     if (controllo1 == false && controllo2 == false){
        
//         numeri_buoni.push(colpo);
//         i= i + 1;
//     }
//     else if (controllo1 == false && controllo2 == true){
//         alert('numero già inserito');
//     }
//     else {
//         alert('boom! hai totalizzato '+ numeri_buoni.length );
//         i= difficolta_b;
//     }

    
// }





// for (i=0 ; i<10; i++){
//     let btn = document.createElement("button");
//     btn.innerHTML = i;
//     btn.id = i;
//     document.body.appendChild(btn);
// }
