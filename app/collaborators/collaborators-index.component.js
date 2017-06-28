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
var user_service_1 = require("../_services/user.service");
var modal_collaborator_component_1 = require("../modals/modal-collaborator.component");
var project_service_1 = require("../_services/project.service");
var CollaboratorsIndexComponent = (function () {
    function CollaboratorsIndexComponent(userService, projectService) {
        this.userService = userService;
        this.projectService = projectService;
        this.collaborators = [];
        this.modalCollaborator = null;
        this.myProjects = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    CollaboratorsIndexComponent.prototype.ngOnInit = function () {
        this.loadAllCollaborators();
        this.loadMyProjects();
    };
    CollaboratorsIndexComponent.prototype.showModal = function (collaborator) {
        this.modalCollaborator = collaborator;
        this.modal.showModal();
    };
    CollaboratorsIndexComponent.prototype.loadAllCollaborators = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.collaborators = users.filter(function (user) { return user.userId !== _this.currentUser.userId; });
        });
    };
    CollaboratorsIndexComponent.prototype.loadMyProjects = function () {
        var _this = this;
        this.projectService.getProjectsOwner().subscribe(function (projects) { return _this.myProjects = projects; });
    };
    return CollaboratorsIndexComponent;
}());
__decorate([
    core_1.ViewChild(modal_collaborator_component_1.ModalCollaboratorComponent),
    __metadata("design:type", modal_collaborator_component_1.ModalCollaboratorComponent)
], CollaboratorsIndexComponent.prototype, "modal", void 0);
CollaboratorsIndexComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'collaborators-index.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, project_service_1.ProjectService])
], CollaboratorsIndexComponent);
exports.CollaboratorsIndexComponent = CollaboratorsIndexComponent;
//# sourceMappingURL=collaborators-index.component.js.map