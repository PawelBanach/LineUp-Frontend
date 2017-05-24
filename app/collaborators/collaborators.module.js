"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var collaborators_index_component_1 = require("./collaborators-index.component");
var modal_collaborator_component_1 = require("../modals/modal-collaborator.component");
var CollaboratorsModule = (function () {
    function CollaboratorsModule() {
    }
    return CollaboratorsModule;
}());
CollaboratorsModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [
            collaborators_index_component_1.CollaboratorsIndexComponent,
            modal_collaborator_component_1.ModalCollaboratorComponent
        ],
        exports: [],
    })
], CollaboratorsModule);
exports.CollaboratorsModule = CollaboratorsModule;
//# sourceMappingURL=collaborators.module.js.map