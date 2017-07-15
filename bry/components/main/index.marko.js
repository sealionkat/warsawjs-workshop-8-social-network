// Compiled using marko@4.4.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onMount: function() {
          const routes = [
                  {
                      path: "/",
                      component: require("../home")
                    },
                  {
                      path: "/click-count",
                      component: require("../click-count")
                    }
                ];

          const render = Router.renderSync({
                  routes: routes,
                  initialRoute: "/"
                });

          render.appendTo(this.getEl("router-container")).getComponent();
        }
      },
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/huncwot$0.0.1/components/main/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    markoPathRouter_module = require("marko-path-router"),
    Router = markoPathRouter_module.Router,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    router_link_template = marko_loadTemplate(require.resolve("marko-path-router/src/components/router-link/index.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    router_link_tag = marko_loadTag(router_link_template),
    marko_attr = marko_helpers.a,
    w_preserve_tag = marko_loadTag(require("marko/src/components/taglib/preserve-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<section class=\"hero is-medium is-dark\"" +
    marko_attr("id", __component.elId("_r0")) +
    "><div class=\"hero-body\"><div class=\"container has-text-centered\"><h1 class=\"title\">Hello, I'm Huncwot</h1><h2 class=\"subtitle\">A modern Node.js framework designed for programmer happiness.</h2></div></div><div class=\"hero-foot\"><nav class=\"tabs is-boxed is-fullwidth\"><div class=\"container\"><ul>");

  router_link_tag({
      path: "/",
      renderBody: function renderBody(out) {
        out.w("Home");
      }
    }, out);

  router_link_tag({
      path: "/click-count",
      renderBody: function renderBody(out) {
        out.w("Here be dragons!");
      }
    }, out);

  out.w("</ul></div></nav></div></section><section class=\"section\"" +
    marko_attr("id", __component.elId("_r1")) +
    "><div class=\"container\">");

  var __componentId0 = __component.elId("router-container");

  w_preserve_tag({
      id: __componentId0,
      renderBody: function renderBody(out) {
        out.w("<div" +
          marko_attr("id", __componentId0) +
          "></div>");
      }
    }, out);

  out.w("</div></section>");
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType,
    roots: [
      "_r0",
      "_r1"
    ]
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "marko-path-router/src/components/router-link/index.marko",
      "marko/src/components/taglib/preserve-tag"
    ]
  };
