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
var ModalCollaboratorComponent = (function () {
    function ModalCollaboratorComponent(cdr) {
        this.cdr = cdr;
    }
    // constructor(private userService: UserService, private projectService: ProjectService,
    //             private alertService: AlertService) { }
    //
    // ngOnInit() {
    //     this.userService.getById(this.project.owner).subscribe(user => { this.owner = user });
    //     this.projectService.getCollaborators(this.project.id).subscribe((users:User[]) => { this.collaborators = users });
    // }
    //
    // public close() {
    //     this.closeProject.emit();
    // }
    //
    // public joinProject() {
    //     this.projectService.joinProject(this.currentUser.id, this.project.id).subscribe(
    //         data => {
    //             this.alertService.success('Request for joining to project was sent!', true);
    //         },
    //         error => {
    //             this.alertService.error('Server error, try again later!');
    //         });
    // }
    //
    ModalCollaboratorComponent.prototype.showModal = function () {
        this.cdr.markForCheck();
        this.collaboratorModal.show();
    };
    return ModalCollaboratorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], ModalCollaboratorComponent.prototype, "collaborator", void 0);
__decorate([
    core_1.ViewChild('collaboratorModal'),
    __metadata("design:type", ngx_bootstrap_1.ModalDirective)
], ModalCollaboratorComponent.prototype, "collaboratorModal", void 0);
ModalCollaboratorComponent = __decorate([
    core_1.Component({
        selector: 'modal-collaborator',
        moduleId: module.id,
        templateUrl: 'modal-collaborator.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], ModalCollaboratorComponent);
exports.ModalCollaboratorComponent = ModalCollaboratorComponent;
//# sourceMappingURL=modal-collaborator.component.js.map