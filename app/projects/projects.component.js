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
var index_1 = require("../_models/index");
var project_service_1 = require("../_services/project.service");
var ProjectsComponent = (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
        this.projects = [];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        // this.loadAllProjects();
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
    ProjectsComponent.prototype.loadAllProjects = function () {
        var _this = this;
        this.projectService.getAll(this.user).subscribe(function (projects) { _this.projects = projects; });
        debugger;
    };
    return ProjectsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", index_1.User)
], ProjectsComponent.prototype, "user", void 0);
ProjectsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'projects.component.html'
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectsComponent);
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map