$_mod.def("/huncwot$0.0.1/components/click-count/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.4.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.4.18/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onCreate: function() {
          this.state = {
              count: 0
            };
        },
        increment: function() {
          this.state.count++;
        }
      },
    components_helpers = require('/marko$4.4.18/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/huncwot$0.0.1/components/click-count/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_attrs0 = {
        "class": "title count"
      };

function render(input, out, __component, component, state) {
  var data = input;

  out.e("H1", {
      "class": "title",
      id: __component.elId("_r0")
    }, 1, 4)
    .t("Here be dragons!");

  out.e("H2", {
      "class": "subtitle",
      id: __component.elId("_r1")
    }, 1, 4)
    .t("Experience Huncwot magic and carefully follow the instruction.");

  out.e("DIV", {
      "class": "count",
      id: __component.elId("_r2")
    }, 1, 4)
    .e("P", marko_attrs0, 1)
      .t(state.count);

  out.e("BUTTON", {
      "class": "is-danger button is-outlined",
      id: __component.elId("_r3")
    }, 1, 4, {
      onclick: __component.d("increment")
    })
    .t("Click me!");
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType,
    roots: [
      "_r0",
      "_r1",
      "_r2",
      "_r3"
    ]
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

});