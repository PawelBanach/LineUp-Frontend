"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var project_request_component_1 = require("./project-request.component");
var invitation_component_1 = require("./invitation.component");
var InvitationModule = (function () {
    function InvitationModule() {
    }
    return InvitationModule;
}());
InvitationModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [
            project_request_component_1.ProjectRequestComponent,
            invitation_component_1.InvitationComponent
        ],
        exports: [
            project_request_component_1.ProjectRequestComponent,
            invitation_component_1.InvitationComponent
        ],
    })
], InvitationModule);
exports.InvitationModule = InvitationModule;
//# sourceMappingURL=invitation.module.js.map