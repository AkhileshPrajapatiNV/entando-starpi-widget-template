import ReactDOM from "react-dom"
import React from "react"
import App from '../App'

const getKeycloakInstance = () =>
 (window && window.entando && window.entando.keycloak && {...window.entando.keycloak, initialized: true}) || {
 initialized: false,
 }

class StapiEntandoApp extends HTMLElement {
    connectedCallback() {
        this.mountPoint = document.createElement('span')
        setTimeout(() => {
            this.render()
        }, 1000);
       
    }

    
    render() {
        ReactDOM.render(<React.StrictMode>
                    <App/>
            </React.StrictMode>,
            this.appendChild(this.mountPoint))
    }
}

customElements.get('stapi-entando-app') || customElements.define("stapi-entando-app", StapiEntandoApp)
