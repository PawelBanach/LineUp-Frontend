import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User, Project } from '../_models/index';

@Injectable()
export class ProjectService {
    constructor(private http: Http) { }

    getAll(user: User) {
        return this.http.get('/api/'+ user.id +'/project', this.jwt()).map((response: Response) => response.json());
    }

    getById(user: User, id: number) {
        return this.http.get('/api/'+ user.id +'/project/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User, project: Project) {
        return this.http.post('/api/'+ user.id +'/project', project, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User, project: Project) {
        return this.http.put('/api/'+ user.id +'/project/' + project.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(user: User, id: number) {
        return this.http.delete('/api/'+ user.id +'/project/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getAllLeadingProjects(user: User) {
        return this.http.delete('/api/'+ user.id +'/project/leading', this.jwt()).map((response: Response) => response.json());
    }

    getAllContributingProjects(user: User) {
        return this.http.delete('/api/'+ user.id +'/project/contributing', this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}