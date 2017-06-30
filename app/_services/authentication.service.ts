import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthenticationService {
    public logged = new Subject();

    constructor(private http: Http) { }

    login(email: string, password: string) {
        return this.http.post('https://line-up-backend.herokuapp.com/users/auth', { email: email, password: password })
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    this.logged.next(true);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        this.logged.next(false);
        localStorage.removeItem('currentUser');
    }

    isLogged(): Observable<any>  {
        return this.logged.asObservable();
    }
}
