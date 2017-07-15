// Compiled using marko@4.4.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    include_stylesheets_template = marko_loadTemplate(require.resolve("huncwot/components/include-stylesheets.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_stylesheets_tag = marko_loadTag(include_stylesheets_template),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    main_template = marko_loadTemplate(require.resolve("../components/main")),
    main_tag = marko_loadTag(main_template),
    include_javascripts_template = marko_loadTemplate(require.resolve("huncwot/components/include-javascripts.marko")),
    include_javascripts_tag = marko_loadTag(include_javascripts_template),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!doctype html><html><head><title>Basic Huncwot App Example</title><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.min.css\">");

  include_stylesheets_tag({}, out);

  out.w("</head><body>");

  component_globals_tag({}, out);

  main_tag({}, out);

  include_javascripts_tag({}, out);

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "huncwot/components/include-stylesheets.marko",
      "marko/src/components/taglib/component-globals-tag",
      "../components/main",
      "huncwot/components/include-javascripts.marko",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
