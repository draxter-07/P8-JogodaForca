import React from 'react'

export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    localStorage.setItem('foundtotal', 0);
    let foundtotal = localStorage.getItem('foundtotal');
    function clique_letra(e){
        let id = e.target.id;
        document.getElementById(id).setAttribute('class', 'letra-button-disabled');
        document.getElementById(id).disabled = true;
        let palavra = localStorage.getItem('palavra-driven');
        let found = 0;
        for (let a = 0; a < palavra.length; a++){
            if (id == palavra[a]){
                document.getElementById('letra' + a).innerHTML = id.toUpperCase();
                found = 1;
                foundtotal = localStorage.getItem('foundtotal');
                localStorage.setItem('foundtotal', foundtotal + 1);
            }
        }
        if (found == 0){
            let erros = Number(localStorage.getItem('erros-driven')) + 1;
            localStorage.setItem('erros-driven', erros);
            document.getElementById('jogo_img').src = "./assets/forca" + erros + '.png';
            if (erros == 6 || foundtotal == palavra.length){
                for (let b = 0; b < alfabeto.length; b++){
                    document.getElementById(alfabeto[b]).setAttribute('class', 'letra-button-disabled');
                    document.getElementById(alfabeto[b]).disabled = true;
                }
                for (let a = 0; a < palavra.length; a++){
                    document.getElementById('letra' + a).innerHTML = palavra[a].toUpperCase();
                }
                if (erros == 6){
                    document.getElementById('palavra').style.color = 'rgb(255, 0, 0)';
                }
                else if (foundtotal == palavra.length){
                    document.getElementById('palavra').style.color = 'rgb(0, 255, 0)';
                }
            }
        }
    }
    return(
        <div id="letras" class='letras'>
            {alfabeto.map((letra) =>
            <button class="letra-button-disabled" onClick={(e) => clique_letra(e)} id={letra} data-test="letter">{letra.toUpperCase()}</button>
            )}
        </div>
    )
}