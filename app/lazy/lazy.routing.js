"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var lazy_component_1 = require("./lazy.component");
var routes = [
    { path: '', component: lazy_component_1.LazyComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=lazy.routing.js.map