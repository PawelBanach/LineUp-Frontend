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
var invitation_service_1 = require("../_services/invitation.service");
var HomeComponent = (function () {
    function HomeComponent(projectService, invitationService) {
        this.projectService = projectService;
        this.invitationService = invitationService;
        this.projectsOwner = [];
        this.projectsOwnerHistory = [];
        this.projectsParticipationHistory = [];
        this.invitations = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadProjectsOwner();
    };
    HomeComponent.prototype.loadProjectsOwner = function () {
        var _this = this;
        this.projectService.getProjectsOwner().subscribe(function (projects) { _this.projectsOwner = projects; });
        this.invitationService.getInvitations().subscribe(function (invitations) { _this.invitations = invitations; });
        this.projectService.getHistory().subscribe(function (projects) {
            _this.projectsOwnerHistory = projects.owned;
            _this.projectsParticipationHistory = projects.participated;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService, invitation_service_1.InvitationService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map