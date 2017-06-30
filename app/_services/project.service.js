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
    ProjectService.prototype.getAll = function () {
        return this.http.get('https://line-up-backend.herokuapp.com/projects', this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.getProject = function (project_id) {
        return this.http.get('https://line-up-backend.herokuapp.com/projects/' + project_id, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.getMyProjects = function () {
        return this.http.get('https://line-up-backend.herokuapp.com/projects/collaborated', this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.getProjectsOwner = function () {
        return this.http.get('https://line-up-backend.herokuapp.com/projects/me', this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.addParticipantToProject = function (project_id, participant_id) {
        return this.http.post('https://line-up-backend.herokuapp.com/projects/' + project_id + '/participants', { 'userId': participant_id }, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.removeParticipantFromProject = function (project_id, participant_id) {
        return this.http.delete('https://line-up-backend.herokuapp.com/projects/' + project_id + '/participants/' + participant_id, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.getParticipants = function (project_id) {
        return this.http.get('https://line-up-backend.herokuapp.com/projects/' + project_id + '/participants', this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.joinProject = function (user_id, project_id) {
        return this.http.post('https://line-up-backend.herokuapp.com/projects/' + project_id + '/join', { 'who': user_id }, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.inviteToProject = function (user_id, project_id) {
        return this.http.post('https://line-up-backend.herokuapp.com/projects/' + project_id + '/invite', { 'who': user_id }, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.create = function (project) {
        return this.http.post('https://line-up-backend.herokuapp.com/projects', project, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.update = function (project) {
        return this.http.put('https://line-up-backend.herokuapp.com/projects/' + project.projectId, project, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.startProject = function (project_id) {
        return this.http.put('https://line-up-backend.herokuapp.com/projects/' + project_id + '/activate', {}, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.endProject = function (project_id) {
        return this.http.put('https://line-up-backend.herokuapp.com/projects/' + project_id + '/end', {}, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.inactiveProject = function (project_id) {
        return this.http.put('https://line-up-backend.herokuapp.com/projects/' + project_id + '/inactivate', {}, this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.getHistory = function () {
        return this.http.get('https://line-up-backend.herokuapp.com/projects/history', this.jwt())
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': currentUser.token });
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