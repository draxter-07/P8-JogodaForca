import ReactDOM from 'react-dom'
import App from './app'
import palavras from "./palavras"

function Site(){
  return(
    <div>
      <App/>
    </div>
  )
}

const site = Site();
ReactDOM.render(site, document.querySelector(".root"));

