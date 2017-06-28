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
var router_1 = require("@angular/router");
var alert_service_1 = require("../_services/alert.service");
var user_service_1 = require("../_services/user.service");
var ProjectsNewComponent = (function () {
    function ProjectsNewComponent(router, projectService, alertService, userService) {
        this.router = router;
        this.projectService = projectService;
        this.alertService = alertService;
        this.userService = userService;
        this.model = {};
        this.loading = false;
    }
    ProjectsNewComponent.prototype.ngOnInit = function () {
        this.loadTechnologies();
    };
    ProjectsNewComponent.prototype.saveProject = function () {
        var _this = this;
        this.loading = true;
        this.projectService.create(this.model)
            .subscribe(function (data) {
            _this.router.navigate(['/projects']);
            _this.alertService.success('Projects added successfully', true);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ProjectsNewComponent.prototype.loadTechnologies = function () {
        var _this = this;
        this.userService.loadTechnologies().subscribe(function (technologies) { return _this.techs = technologies; });
    };
    return ProjectsNewComponent;
}());
ProjectsNewComponent = __decorate([
    core_1.Component({
        selector: 'projects-new',
        moduleId: module.id,
        templateUrl: 'projects-new.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        project_service_1.ProjectService,
        alert_service_1.AlertService,
        user_service_1.UserService])
], ProjectsNewComponent);
exports.ProjectsNewComponent = ProjectsNewComponent;
//# sourceMappingURL=projects-new.component.js.map