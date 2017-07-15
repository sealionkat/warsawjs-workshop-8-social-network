$_mod.def("/marko$4.4.18/src/components/beginComponent-browser", function(require, exports, module, __filename, __dirname) { var ComponentDef = require('/marko$4.4.18/src/components/ComponentDef'/*'./ComponentDef'*/);

module.exports = function(component, isSplitComponent) {
    var componentStack = this.___componentStack;
    var origLength = componentStack.length;
    var parentComponentDef = componentStack[origLength - 1];

    var componentId = component.id;

    var componentDef = new ComponentDef(component, componentId, this.___globalContext, componentStack, origLength);
    parentComponentDef.___addChild(componentDef);
    this.___globalContext.___componentsById[componentId] = componentDef;

    componentStack.push(componentDef);

    return componentDef;
};

});