﻿import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Subject } from "rxjs/Subject";


@Injectable()
export class AuthenticationService {
    public logged = new Subject();

    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.logged.next(true);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        this.logged.next(false);
        localStorage.removeItem('currentUser');
    }

    isLogged(): Observable<any>  {
        return this.logged.asObservable();
    }
}