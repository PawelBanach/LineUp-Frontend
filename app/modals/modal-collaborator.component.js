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
var user_1 = require("../_models/user");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var project_service_1 = require("../_services/project.service");
var alert_service_1 = require("../_services/alert.service");
var ModalCollaboratorComponent = (function () {
    function ModalCollaboratorComponent(cdr, projectService, alertService, elementRef) {
        this.cdr = cdr;
        this.projectService = projectService;
        this.alertService = alertService;
        this.elementRef = elementRef;
        this.errors = "";
    }
    ModalCollaboratorComponent.prototype.inviteToProject = function (collaborator) {
        var _this = this;
        debugger;
        var projectId = this.el.nativeElement.value;
        if (!projectId) {
            this.errors = "Please, select project";
        }
        else {
            this.projectService.inviteToProject(collaborator.userId, projectId).subscribe(function (data) {
                _this.alertService.success('Invitation was sent!', true);
            }, function (error) {
                _this.alertService.error('Server error, try again later!');
            });
            this.collaboratorModal.hide();
            this.errors = "";
        }
    };
    ModalCollaboratorComponent.prototype.showModal = function () {
        this.cdr.markForCheck();
        this.collaboratorModal.show();
    };
    return ModalCollaboratorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ModalCollaboratorComponent.prototype, "myProjects", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], ModalCollaboratorComponent.prototype, "collaborator", void 0);
__decorate([
    core_1.ViewChild('collaboratorModal'),
    __metadata("design:type", ngx_bootstrap_1.ModalDirective)
], ModalCollaboratorComponent.prototype, "collaboratorModal", void 0);
__decorate([
    core_1.ViewChild('project'),
    __metadata("design:type", core_1.ElementRef)
], ModalCollaboratorComponent.prototype, "el", void 0);
ModalCollaboratorComponent = __decorate([
    core_1.Component({
        selector: 'modal-collaborator',
        moduleId: module.id,
        templateUrl: 'modal-collaborator.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, project_service_1.ProjectService,
        alert_service_1.AlertService, core_1.ElementRef])
], ModalCollaboratorComponent);
exports.ModalCollaboratorComponent = ModalCollaboratorComponent;
//# sourceMappingURL=modal-collaborator.component.js.map