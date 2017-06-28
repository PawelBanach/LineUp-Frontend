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
var project_service_1 = require("../_services/project.service");
var project_1 = require("../_models/project");
var alert_service_1 = require("../_services/alert.service");
var invitation_service_1 = require("../_services/invitation.service");
var ProjectOwnerComponent = (function () {
    function ProjectOwnerComponent(invitationService, projectService, alertService) {
        this.invitationService = invitationService;
        this.projectService = projectService;
        this.alertService = alertService;
        this.joiningRequests = [];
    }
    ProjectOwnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.invitationService.getJoiningRequest(this.project.projectId).subscribe(function (invitations) { return _this.joiningRequests = invitations; });
    };
    ProjectOwnerComponent.prototype.endProject = function () {
        var _this = this;
        this.projectService.endProject(this.project.projectId).subscribe(function (data) {
            _this.alertService.success('Project finnish!', true);
        }, function (error) {
            _this.alertService.error('Server error, try again later!');
        });
    };
    ProjectOwnerComponent.prototype.startProject = function () {
        var _this = this;
        this.projectService.startProject(this.project.projectId).subscribe(function (data) {
            _this.alertService.success('Project started!', true);
        }, function (error) {
            _this.alertService.error('Server error, try again later!');
        });
    };
    ProjectOwnerComponent.prototype.inactiveProject = function () {
        var _this = this;
        this.projectService.inactiveProject(this.project.projectId).subscribe(function (data) {
            _this.alertService.success('Project paused!', true);
        }, function (error) {
            _this.alertService.error('Server error, try again later!');
        });
    };
    ProjectOwnerComponent.prototype.editProject = function () {
        // TODO
        console.log("Will edit project");
    };
    return ProjectOwnerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", project_1.Project)
], ProjectOwnerComponent.prototype, "project", void 0);
ProjectOwnerComponent = __decorate([
    core_1.Component({
        selector: 'project-owner',
        moduleId: module.id,
        templateUrl: 'project-owner.component.html'
    }),
    __metadata("design:paramtypes", [invitation_service_1.InvitationService, project_service_1.ProjectService,
        alert_service_1.AlertService])
], ProjectOwnerComponent);
exports.ProjectOwnerComponent = ProjectOwnerComponent;
//# sourceMappingURL=project-owner.component.js.map