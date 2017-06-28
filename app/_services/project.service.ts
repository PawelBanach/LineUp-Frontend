import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User, Project } from '../_models/index';

@Injectable()
export class ProjectService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('https://line-up-backend.herokuapp.com/projects', this.jwt())
            .map((response: Response) => response.json())
    }

    getProject(project_id: string) {
        return this.http.get('https://line-up-backend.herokuapp.com/projects/' + project_id, this.jwt())
            .map((response: Response) => response.json())
    }

    getMyProjects() {
        return this.http.get('https://line-up-backend.herokuapp.com/projects/collaborated', this.jwt())
            .map((response: Response) => response.json())
    }

    getProjectsOwner() {
        return this.http.get('https://line-up-backend.herokuapp.com/projects/me', this.jwt())
            .map((response: Response) => response.json())
    }

    addParticipantToProject(project_id: string, participant_id: string) {
        return this.http.post('https://line-up-backend.herokuapp.com/projects/' + project_id + '/participants', { "userId": participant_id}, this.jwt())
            .map((response: Response) => response.json());
    }
    removeParticipantFromProject(project_id: string, participant_id: string) {
        // TODO powiedzieć Michałowi że DELETE nie ma body
        return this.http.delete('https://line-up-backend.herokuapp.com/projects/' + project_id + '/participants/' + participant_id, this.jwt())
            .map((response: Response) => response.json());
    }

    getParticipants(project_id: string) {
        return this.http.get('https://line-up-backend.herokuapp.com/projects/' + project_id + '/participants', this.jwt())
            .map((response: Response) => response.json());
    }

    joinProject(user_id: string, project_id: string) {
        return this.http.post('https://line-up-backend.herokuapp.com/projects/' + project_id + '/join', { "who": user_id }, this.jwt())
            .map((response: Response) => response.json());
    }

    inviteToProject(user_id: string, project_id: string) {
        return this.http.post('https://line-up-backend.herokuapp.com/projects/' + project_id + '/invite', { "who": user_id }, this.jwt())
            .map((response: Response) => response.json());
    }

    create(project: Project) {
        return  this.http.post('https://line-up-backend.herokuapp.com/projects', project, this.jwt())
            .map((response: Response) => response.json());
    }

    update(project: Project) {
        return this.http.put('https://line-up-backend.herokuapp.com/projects/' + project.projectId, project, this.jwt())
            .map((response: Response) => response.json());
    }

    startProject(project_id: string) {
        return this.http.put('https://line-up-backend.herokuapp.com/projects/' + project_id + '/activate', {}, this.jwt())
            .map((response: Response) => response.json());
    }

    endProject(project_id: string) {
        return this.http.put('https://line-up-backend.herokuapp.com/projects/' + project_id + '/end', {}, this.jwt())
            .map((response: Response) => response.json());
    }

    inactiveProject(project_id: string) {
        return this.http.put('https://line-up-backend.herokuapp.com/projects/' + project_id + '/inactivate', {}, this.jwt())
            .map((response: Response) => response.json());
    }

    getHistory() {
        return this.http.get('https://line-up-backend.herokuapp.com/projects/history', this.jwt())
            .map((response: Response) => response.json())
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}