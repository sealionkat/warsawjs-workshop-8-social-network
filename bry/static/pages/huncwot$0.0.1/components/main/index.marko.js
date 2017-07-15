$_mod.def("/huncwot$0.0.1/components/main/index.marko", function(require, exports, module, __filename, __dirname) { // Compiled using marko@4.4.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require('/marko$4.4.18/src/vdom'/*"marko/src/vdom"*/).t(),
    marko_component = {
        onMount: function() {
          const routes = [
                  {
                      path: "/",
                      component: require('/huncwot$0.0.1/components/home/index.marko'/*"../home"*/)
                    },
                  {
                      path: "/click-count",
                      component: require('/huncwot$0.0.1/components/click-count/index.marko'/*"../click-count"*/)
                    }
                ];

          const render = Router.renderSync({
                  routes: routes,
                  initialRoute: "/"
                });

          render.appendTo(this.getEl("router-container")).getComponent();
        }
      },
    components_helpers = require('/marko$4.4.18/src/components/helpers-browser'/*"marko/src/components/helpers"*/),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/huncwot$0.0.1/components/main/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    markoPathRouter_module = require('/marko-path-router$0.5.0/index'/*"marko-path-router"*/),
    Router = markoPathRouter_module.Router,
    router_link_template = require('/marko-path-router$0.5.0/src/components/router-link/index.marko'/*"marko-path-router/src/components/router-link/index.marko"*/),
    marko_helpers = require('/marko$4.4.18/src/runtime/vdom/helpers'/*"marko/src/runtime/vdom/helpers"*/),
    marko_loadTag = marko_helpers.t,
    router_link_tag = marko_loadTag(router_link_template),
    w_preserve_tag = marko_loadTag(require('/marko$4.4.18/src/components/taglib/preserve-tag-browser'/*"marko/src/components/taglib/preserve-tag"*/)),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("db0ece"),
    marko_node0 = marko_createElement("DIV", {
        "class": "hero-body"
      }, 1, 0, {
        c: marko_const_nextId()
      })
      .e("DIV", {
          "class": "container has-text-centered"
        }, 2)
        .e("H1", {
            "class": "title"
          }, 1)
          .t("Hello, I'm Huncwot")
        .e("H2", {
            "class": "subtitle"
          }, 1)
          .t("A modern Node.js framework designed for programmer happiness."),
    marko_attrs0 = {
        "class": "hero-foot"
      },
    marko_attrs1 = {
        "class": "tabs is-boxed is-fullwidth"
      },
    marko_attrs2 = {
        "class": "container"
      },
    marko_attrs3 = {
        "class": "container"
      };

function render(input, out, __component, component, state) {
  var data = input;

  out.be("SECTION", {
      "class": "hero is-medium is-dark",
      id: __component.elId("_r0")
    }, null, 4);

  out.n(marko_node0);

  out.be("DIV", marko_attrs0);

  out.be("NAV", marko_attrs1);

  out.be("DIV", marko_attrs2);

  out.be("UL");

  router_link_tag({
      path: "/",
      renderBody: function renderBody(out) {
        out.t("Home");
      }
    }, out);

  router_link_tag({
      path: "/click-count",
      renderBody: function renderBody(out) {
        out.t("Here be dragons!");
      }
    }, out);

  out.ee();

  out.ee();

  out.ee();

  out.ee();

  out.ee();

  out.be("SECTION", {
      "class": "section",
      id: __component.elId("_r1")
    }, null, 4);

  out.be("DIV", marko_attrs3);

  var __componentId0 = __component.elId("router-container");

  w_preserve_tag({
      id: __componentId0,
      renderBody: function renderBody(out) {
        out.e("DIV", {
            id: __componentId0
          }, 0, 4);
      }
    }, out);

  out.ee();

  out.ee();
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