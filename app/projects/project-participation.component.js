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
var ProjectParticipationComponent = (function () {
    function ProjectParticipationComponent(projectService) {
        this.projectService = projectService;
        this.participationProjects = [];
    }
    ProjectParticipationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (projects) { _this.participationProjects = projects; });
    };
    return ProjectParticipationComponent;
}());
ProjectParticipationComponent = __decorate([
    core_1.Component({
        selector: 'project-participation',
        moduleId: module.id,
        templateUrl: 'project-participation.component.html'
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectParticipationComponent);
exports.ProjectParticipationComponent = ProjectParticipationComponent;
//# sourceMappingURL=project-participation.component.js.map