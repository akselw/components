var Elm = require('./dist/elm/main.js');
var Vue = require('vue');

Vue.component('ElmComponent', {
  template: `<div ref="node"></div>`,
  mounted () {
    Elm.Main.init({
      node: this.$refs.node
    })
  }
})

// Check out https://github.com/ryannhg/elm-vue for a full example!
