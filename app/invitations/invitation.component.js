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
var invitation_1 = require("../_models/invitation");
var alert_service_1 = require("../_services/alert.service");
var invitation_service_1 = require("../_services/invitation.service");
var project_service_1 = require("../_services/project.service");
var user_service_1 = require("../_services/user.service");
var InvitationComponent = (function () {
    function InvitationComponent(projectService, alertService, invitationService, userService) {
        this.projectService = projectService;
        this.alertService = alertService;
        this.invitationService = invitationService;
        this.userService = userService;
        this.collaborators = [];
    }
    InvitationComponent.prototype.ngOnInit = function () {
        this.loadProject();
    };
    InvitationComponent.prototype.loadProject = function () {
        var _this = this;
        this.projectService.getProject(this.invitation.projectId).subscribe(function (project) {
            _this.project = project;
            _this.loadOwner();
        });
    };
    InvitationComponent.prototype.loadOwner = function () {
        var _this = this;
        this.userService.getById(this.project.owner).subscribe(function (user) {
            _this.owner = user;
            _this.loadCollaborators();
        });
    };
    InvitationComponent.prototype.loadCollaborators = function () {
        var _this = this;
        this.projectService.getParticipants(this.project.projectId).subscribe(function (users) {
            _this.collaborators = users;
        });
    };
    InvitationComponent.prototype.acceptInvitation = function () {
        var _this = this;
        this.invitationService.acceptRequest(this.invitation.joinId).subscribe(function (data) {
            _this.alertService.success('Request accepted!', true);
        }, function (error) {
            _this.alertService.error('Server error, try again later!');
        });
    };
    InvitationComponent.prototype.declineInvitation = function () {
        var _this = this;
        this.invitationService.declineRequest(this.invitation.joinId).subscribe(function (data) {
            _this.alertService.success('Request declined!', true);
        }, function (error) {
            _this.alertService.error('Server error, try again later!');
        });
    };
    return InvitationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", invitation_1.Invitation)
], InvitationComponent.prototype, "invitation", void 0);
InvitationComponent = __decorate([
    core_1.Component({
        selector: 'invitation',
        moduleId: module.id,
        templateUrl: 'invitation.component.html',
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService, alert_service_1.AlertService,
        invitation_service_1.InvitationService, user_service_1.UserService])
], InvitationComponent);
exports.InvitationComponent = InvitationComponent;
//# sourceMappingURL=invitation.component.js.map