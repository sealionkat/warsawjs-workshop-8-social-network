$_mod.def("/marko-path-router$0.5.0/src/components/router-link/component", function(require, exports, module, __filename, __dirname) { const history = require('/marko-path-router$0.5.0/src/history/index-browser'/*'../../history'*/)

module.exports = {
  onInput: function (input) {
    if (!input.path) {
      throw new Error('Path must be provided to router-link')
    }
  },

  handleLinkClick: function (event) {
    event.preventDefault()
    history.push(this.input.path)
  }
}

});