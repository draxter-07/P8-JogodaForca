import ReactDOM from 'react-dom'
import App from './app.js'

function Site(){
  return(
    <div>
      <App/>
    </div>
  )
}

const site = Site();
ReactDOM.render(site, document.querySelector(".root"));

