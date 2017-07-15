$_mod.def("/marko-path-router$0.5.0/src/components/router-link/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.4.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.4.18/src/vdom'/*"marko/src/vdom"*/).t(),
    components_helpers = require('/marko$4.4.18/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-path-router$0.5.0/src/components/router-link/index.marko", function() {
      return module.exports;
    }),
    marko_component = require('/marko-path-router$0.5.0/src/components/router-link/component'/*"./component"*/),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require('/marko$4.4.18/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require('/marko$4.4.18/src/taglibs/core/include-tag'/*"marko/src/taglibs/core/include-tag"*/)),
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  out.be("A", {
      "class": marko_classAttr(input.class),
      href: input.path,
      id: __component.id
    }, null, 0, {
      onclick: __component.d("handleLinkClick")
    });

  if (input.renderBody) {
    include_tag({
        _target: input.renderBody
      }, out);
  }

  out.ee();
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});