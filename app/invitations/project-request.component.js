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
var user_service_1 = require("../_services/user.service");
var alert_service_1 = require("../_services/alert.service");
var invitation_service_1 = require("../_services/invitation.service");
var ProjectRequestComponent = (function () {
    function ProjectRequestComponent(userService, alertService, invitationService) {
        this.userService = userService;
        this.alertService = alertService;
        this.invitationService = invitationService;
    }
    ProjectRequestComponent.prototype.ngOnInit = function () {
        //load user
        this.loadUser();
    };
    ProjectRequestComponent.prototype.loadUser = function () {
        var _this = this;
        this.userService.getById(this.invitation.who).subscribe(function (user) { return _this.user = user; });
    };
    ProjectRequestComponent.prototype.acceptUser = function () {
        var _this = this;
        this.invitationService.acceptRequest(this.invitation.joinId).subscribe(function (data) {
            _this.alertService.success('Request accepted!', true);
            //    odświeżyć komponent
        }, function (error) {
            _this.alertService.error('Server error, try again later!');
        });
    };
    ProjectRequestComponent.prototype.declineUser = function () {
        var _this = this;
        this.invitationService.declineRequest(this.invitation.joinId).subscribe(function (data) {
            _this.alertService.success('Request declined!', true);
        }, function (error) {
            _this.alertService.error('Server error, try again later!');
        });
    };
    return ProjectRequestComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", invitation_1.Invitation)
], ProjectRequestComponent.prototype, "invitation", void 0);
ProjectRequestComponent = __decorate([
    core_1.Component({
        selector: "project-request",
        moduleId: module.id,
        templateUrl: "project-request.component.html",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, alert_service_1.AlertService,
        invitation_service_1.InvitationService])
], ProjectRequestComponent);
exports.ProjectRequestComponent = ProjectRequestComponent;
//# sourceMappingURL=project-request.component.js.map