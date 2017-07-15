$_mod.def("/marko$4.4.18/src/components/loadComponent-dynamic", function(require, exports, module, __filename, __dirname) { 'use strict';

module.exports = function load(typeName) {
    // We make the assumption that the component type name is a path to a
    // fully resolved module path and that the module exists
    // as a CommonJS module
    return require(typeName);
};
});