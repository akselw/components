var Elm = require('./dist/elm/main.js');

/**
* learn how to install the custom elements polyfill for older browsers here:
* https://github.com/webcomponents/custom-elements
*/

customElements.define('elm-component', class extends HTMLElement {
  connectedCallback() {
    var node = document.createElement('div')
    this.appendChild(node)
    this.elmApp = Elm.Main.init({ node: node })
    // set up ports here
  }
})