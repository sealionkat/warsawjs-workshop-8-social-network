$_mod.def("/util$0.10.3/support/isBufferBrowser", function(require, exports, module, __filename, __dirname) { module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
});