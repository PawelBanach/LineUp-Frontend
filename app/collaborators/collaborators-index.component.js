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
var CollaboratorsIndexComponent = (function () {
    function CollaboratorsIndexComponent(userService) {
        this.userService = userService;
        this.collaborators = [];
        this.modalCollaborator = null;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    CollaboratorsIndexComponent.prototype.ngOnInit = function () {
        this.loadAllCollaborators();
    };
    // currentUser: User;
    // users: User[] = [];
    //
    // constructor(private userService: UserService) {
    //     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // }
    //
    // ngOnInit() {
    //     this.loadAllUsers();
    // }
    //
    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }
    //
    // private loadAllUsers() {
    //     this.userService.getAll().subscribe(users => { this.users = users; });
    //     debugger
    // }
    // private setIsNew() {
    //     this.isNew = true;
    // }
    CollaboratorsIndexComponent.prototype.showModal = function (collaborator) {
        debugger;
        this.modalCollaborator = collaborator;
        this.modal.showModal();
    };
    CollaboratorsIndexComponent.prototype.loadAllCollaborators = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.collaborators = users.filter(function (user) { return user.id !== _this.currentUser.id; });
        });
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
    __metadata("design:paramtypes", [user_service_1.UserService])
], CollaboratorsIndexComponent);
exports.CollaboratorsIndexComponent = CollaboratorsIndexComponent;
//# sourceMappingURL=collaborators-index.component.js.map