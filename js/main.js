
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


// generatore di campo
 
function creacampo(num){
    for (let i= 1; i <= num; i++){
        let cella = `
            <div data-cella= "${i}" class='cella' ></div>
        `
        let templatecella= document.createElement('div');
        templatecella.classList.add('quadrato');
        templatecella.innerHTML= cella;
        document.getElementById('campo').appendChild(templatecella);


    }
}
function is_array2(vettore, elemento){
    var flag = 0;
    for (i = 0; i < vettore.length; i++){
        if (vettore[i] == elemento){
            flag = 1;
        }

    }
    return flag;
}


function conta_bombe (posizione, coordinate){
    var controllo1 = is_array2(coordinate, (posizione + 10) )
    if ((posizione % 10) !== 0){
        var controllo1 = controllo1 + is_array2(coordinate, (posizione + 1) );
        var controllo1 = controllo1 + is_array2(coordinate, (posizione + 11) );
        var controllo1 = controllo1 + is_array2(coordinate, (posizione - 9) );
    }
   
    
    
    
    if (((posizione - 1) % 10) !== 0){
        var controllo1 = controllo1 + is_array2(coordinate, (posizione - 1) );
        var controllo1 = controllo1 + is_array2(coordinate, (posizione + 9) );
        var controllo1 = controllo1 + is_array2(coordinate, (posizione - 11) );
    }
   
    
    var controllo1 = controllo1 + is_array2(coordinate, (posizione - 10) );
    
    return controllo1;

}

var difficolt = document.getElementById('gioca');
gioca.addEventListener('click',
    function(){
        let prova= document.createElement('div');
        prova.id= 'campo';
         document.body.appendChild(prova);
        difficolta = document.getElementById('difficolta').value;
        var dif = 0;
        switch (difficolta){
            
            case 'difficile':
                dif = 50;
                break;
            case 'normale':
                dif = 80;
                break;
            default:
                dif = 100;
                break;
        }
        creacampo(dif);
        pericolo1 = rdm_noripetizione(dif);
        punteggio = 0;
        console.log(pericolo1);
       
        document.getElementById('campo').addEventListener('click',
            function(e){
                var sparo = parseInt(e.target.dataset.cella);
                var controllo1 = 0;
                let prov= document.createElement('div');
                console.log(sparo);
                let element = document.querySelectorAll("[data-cella='"+ e.target.dataset.cella +"']");
                console.log(element[0]);
                controllo1 = is_array(pericolo1, sparo );
                if (controllo1 == false){
                    var bombe_vicine = conta_bombe(sparo, pericolo1);
                    element[0].innerHTML= bombe_vicine;
                    punteggio = punteggio + 1;
                }
                else{
                    element[0].classList.add('rosso');
                    alert('hai perso il tup punteggio è' + punteggio);
                    campo.remove();

                }
        
            }
        )
    }
)