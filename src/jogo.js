export default function Jogo(){
   var palavra_letras = [];
    return(
        <div class="jogo-div">
            <img id= "jogo_img" class="jogo-img" src="./assets/forca0.png"></img>
            <div class="jogo-letras-botao-div">
                <button class="jogo-button">Escolher palavra</button>
                <div id="palavra" class="palavra">
                    {palavra_letras.map((letter) =>
                    <div class='letra'>_</div>
                    )}
                </div>
            </div>
        </div>
    )
}