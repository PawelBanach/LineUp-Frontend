import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('https://line-up-backend.herokuapp.com/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: string) {
        return this.http.get('https://line-up-backend.herokuapp.com/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('https://line-up-backend.herokuapp.com/users', user)
            .map((response: Response) => response.json())
    }

    update(user: User) {
        return this.http.put('https://line-up-backend.herokuapp.com/users/' + user.userId, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: string) {
        return this.http.delete('https://line-up-backend.herokuapp.com/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    loadDepartments() {
        return this.http.get('https://line-up-backend.herokuapp.com/departments', this.jwt()).map((response: Response) => response.json());
    }

    loadFieldOfStudies() {
        return this.http.get('https://line-up-backend.herokuapp.com/fieldofstudies', this.jwt()).map((response: Response) => response.json());
    }

    loadTechnologies() {
        return this.http.get('https://line-up-backend.herokuapp.com/technologies', this.jwt()).map((response: Response) => response.json());
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