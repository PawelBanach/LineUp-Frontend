"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var project_1 = require("../_models/project");
var user_1 = require("../_models/user");
var user_service_1 = require("../_services/user.service");
var project_service_1 = require("../_services/project.service");
var alert_service_1 = require("../_services/alert.service");
var modal_collaborator_component_1 = require("../modals/modal-collaborator.component");
var ProjectShowComponent = (function () {
    function ProjectShowComponent(userService, projectService, alertService) {
        this.userService = userService;
        this.projectService = projectService;
        this.alertService = alertService;
        this.collaborators = [];
        this.modalCollaborator = null;
        this.closeProject = new core_1.EventEmitter();
    }
    ProjectShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getById(this.project.owner).subscribe(function (user) { _this.owner = user; });
        this.projectService.getCollaborators(this.project.id).subscribe(function (users) { _this.collaborators = users; });
    };
    ProjectShowComponent.prototype.close = function () {
        this.closeProject.emit();
    };
    ProjectShowComponent.prototype.joinProject = function () {
        var _this = this;
        this.projectService.joinProject(this.currentUser.id, this.project.id).subscribe(function (data) {
            _this.alertService.success('Request for joining to project was sent!', true);
        }, function (error) {
            _this.alertService.error('Server error, try again later!');
        });
    };
    ProjectShowComponent.prototype.showModal = function (collaborator) {
        this.modalCollaborator = collaborator;
        this.modal.showModal();
    };
    return ProjectShowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], ProjectShowComponent.prototype, "currentUser", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", project_1.Project)
], ProjectShowComponent.prototype, "project", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProjectShowComponent.prototype, "closeProject", void 0);
__decorate([
    core_1.ViewChild(modal_collaborator_component_1.ModalCollaboratorComponent),
    __metadata("design:type", modal_collaborator_component_1.ModalCollaboratorComponent)
], ProjectShowComponent.prototype, "modal", void 0);
ProjectShowComponent = __decorate([
    core_1.Component({
        selector: 'project-show',
        moduleId: module.id,
        templateUrl: 'project-show.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, project_service_1.ProjectService,
        alert_service_1.AlertService])
], ProjectShowComponent);
exports.ProjectShowComponent = ProjectShowComponent;
//# sourceMappingURL=project-show.component.js.map