"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var projects_index_component_1 = require("./projects-index.component");
var project_service_1 = require("../_services/project.service");
var projects_new_component_1 = require("./projects-new.component");
var project_header_component_1 = require("./project-header.component");
var project_show_component_1 = require("./project-show.component");
var modal_collaborator_component_1 = require("../modals/modal-collaborator.component");
var project_owner_component_1 = require("./project-owner.component");
var project_participation_component_1 = require("./project-participation.component");
var invitation_service_1 = require("../_services/invitation.service");
var project_owner_history_component_1 = require("./project-owner-history.component");
var project_participation_history_component_1 = require("./project-participation-history.component");
var ProjectsModule = (function () {
    function ProjectsModule() {
    }
    return ProjectsModule;
}());
ProjectsModule = __decorate([
    core_1.NgModule({
        imports: [
            project_service_1.ProjectService,
            invitation_service_1.InvitationService,
            modal_collaborator_component_1.ModalCollaboratorComponent
        ],
        declarations: [
            projects_index_component_1.ProjectsIndexComponent,
            projects_new_component_1.ProjectsNewComponent,
            project_header_component_1.ProjectHeaderComponent,
            project_show_component_1.ProjectShowComponent,
            project_owner_component_1.ProjectOwnerComponent,
            project_participation_component_1.ProjectParticipationComponent,
            project_owner_history_component_1.ProjectOwnerHistoryComponent,
            project_participation_history_component_1.ProjectParticipationHistoryComponent,
        ],
        exports: [projects_new_component_1.ProjectsNewComponent, project_header_component_1.ProjectHeaderComponent, project_show_component_1.ProjectShowComponent],
    })
], ProjectsModule);
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map