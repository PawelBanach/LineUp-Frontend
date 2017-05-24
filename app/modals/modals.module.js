"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_collaborator_component_1 = require("./modal-collaborator.component");
// import { ProjectsIndexComponent } from "./projects-index.component";
// import { ProjectService } from "../_services/project.service";
// import { ProjectsNewComponent } from "./projects-new.component";
// import { ProjectHeaderComponent } from "./project-header.component";
// import { ProjectShowComponent } from "./project-show.component";
var ModalsModule = (function () {
    function ModalsModule() {
    }
    return ModalsModule;
}());
ModalsModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [
            modal_collaborator_component_1.ModalCollaboratorComponent
            // ProjectsIndexComponent,
            // ProjectsNewComponent,
            // ProjectHeaderComponent,
            // ProjectShowComponent,
        ],
        exports: [
            modal_collaborator_component_1.ModalCollaboratorComponent
            // ProjectsNewComponent, ProjectHeaderComponent, ProjectShowComponent
        ],
    })
], ModalsModule);
exports.ModalsModule = ModalsModule;
//# sourceMappingURL=modals.module.js.map