import ReactDOM from 'react-dom'
import App from './App.js'

function Site(){
  return(
    <div>
      <App/>
    </div>
  )
}

const site = Site();
ReactDOM.render(site, document.querySelector(".root"));

