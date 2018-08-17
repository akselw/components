Vue.component('ElmCounter', {
  template: `<div ref="node"></div>`,
  mounted () {
    Elm.Main.init({
      node: this.$refs.node
    })
  }
})
// Here is a repo that uses this example:
// https://github.com/ryannhg/elm-vue
