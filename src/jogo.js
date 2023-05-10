import palavras from "./palavras"

export default function Jogo(){
   const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   var palavra_letras = [];
   var palavra;
   function escolher_palavra(){
    document.getElementById('palavra').style.color = 'rgb(0, 0, 0)';
    document.getElementById('jogo_img').src = "./assets/forca0.png";
    localStorage.setItem('foundtotal', 0);
    let conj = palavras;
    function comparador() { 
        return Math.random() - 0.5;
    }
    conj.sort(comparador);
    palavra = conj[0];
    localStorage.setItem('palavra-driven', palavra);
    localStorage.setItem('erros-driven', 0);
    document.getElementById('palavra').innerHTML = "";
    for (let a = 0; a < palavra.length; a++){
        palavra_letras.push(palavra[a]);
        let div = document.createElement('div');
        div.classList.add('letra');
        div.innerHTML = '_';
        div.id = "letra" + a;
        document.getElementById('palavra').appendChild(div);
    }
    for (let b = 0; b < alfabeto.length; b++){
        document.getElementById(alfabeto[b]).setAttribute('class', 'letra-button-abled')
        document.getElementById(alfabeto[b]).disabled = false;
    }
   }
   return(
        <div class="jogo-div">
            <img id= "jogo_img" class="jogo-img" src="./assets/forca0.png"></img>
            <div class="jogo-letras-botao-div">
                <button id="jogo-button" class="jogo-button" onClick={escolher_palavra}>Escolher palavra</button>
                <div id="palavra" class="palavra">
                </div>
            </div>
        </div>
    )
}
