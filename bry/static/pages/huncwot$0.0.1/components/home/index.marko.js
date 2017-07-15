$_mod.def("/huncwot$0.0.1/components/home/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.4.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.4.18/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {},
    components_helpers = require('/marko$4.4.18/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/huncwot$0.0.1/components/home/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require('/marko$4.4.18/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("2b0fb4"),
    marko_node0 = marko_createElement("EM", null, 1, 0, {
        c: marko_const_nextId()
      })
      .t("Huncwot-ish");

function render(input, out, __component, component, state) {
  var data = input;

  out.e("H1", {
      "class": "title",
      id: __component.elId("_r0")
    }, 1, 4)
    .t("Home");

  out.e("H2", {
      "class": "subtitle",
      id: __component.elId("_r1")
    }, 3, 4)
    .t("A simple ")
    .n(marko_node0)
    .t(" page. We hope you like it.");
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType,
    roots: [
      "_r0",
      "_r1"
    ]
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});