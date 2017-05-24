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
var http_1 = require("@angular/http");
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getAll = function (user) {
        return this.http.get('/api/' + user.id + '/projects', this.jwt()).map(function (response) { return response.json(); });
    };
    ProjectService.prototype.getCollaborators = function (project_id) {
        return this.http.get('/api/' + project_id + '/collaborators', this.jwt()).map(function (response) { return response.json(); });
    };
    ProjectService.prototype.joinProject = function (user_id, project_id) {
        return this.http.post('/api/' + user_id + '/projects/join', project_id, this.jwt()).map(function (response) { return response.json(); });
    };
    // getById(user: User, id: number) {
    //     return this.http.get('/api/'+ user.id +'/projects/' + id, this.jwt()).map((response: Response) => response.json());
    // }
    //
    ProjectService.prototype.create = function (user, project) {
        return this.http.post('/api/' + user.id + '/projects', project, this.jwt()).map(function (response) { return response.json(); });
    };
    //
    // update(user: User, project: Project) {
    //     return this.http.put('/api/'+ user.id +'/projects/' + project.id, user, this.jwt()).map((response: Response) => response.json());
    // }
    //
    // delete(user: User, id: number) {
    //     return this.http.delete('/api/'+ user.id +'/projects/' + id, this.jwt()).map((response: Response) => response.json());
    // }
    //
    // getAllLeadingProjects(user: User) {
    //     return this.http.delete('/api/'+ user.id +'/projects/leading', this.jwt()).map((response: Response) => response.json());
    // }
    //
    // getAllContributingProjects(user: User) {
    //     return this.http.delete('/api/'+ user.id +'/projects/contributing', this.jwt()).map((response: Response) => response.json());
    // }
    // private helper methods
    ProjectService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return ProjectService;
}());
ProjectService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map