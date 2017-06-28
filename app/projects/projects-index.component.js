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
var ProjectsIndexComponent = (function () {
    function ProjectsIndexComponent(projectService) {
        this.projectService = projectService;
        this.activeProject = null;
        this.projects = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ProjectsIndexComponent.prototype.ngOnInit = function () {
        this.loadAllProjects();
    };
    ProjectsIndexComponent.prototype.showProject = function (project) {
        this.activeProject = project;
    };
    ProjectsIndexComponent.prototype.closeProject = function (event) {
        this.activeProject = null;
    };
    ProjectsIndexComponent.prototype.loadAllProjects = function () {
        var _this = this;
        this.projectService.getAll().subscribe(function (projects) { _this.projects = projects; });
    };
    return ProjectsIndexComponent;
}());
ProjectsIndexComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'projects-index.component.html'
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectsIndexComponent);
exports.ProjectsIndexComponent = ProjectsIndexComponent;
//# sourceMappingURL=projects-index.component.js.map