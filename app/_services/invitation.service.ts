import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class InvitationService {
    constructor(private http: Http) { }

    getJoiningRequest(project_id: string) {
        return this.http.get('https://line-up-backend.herokuapp.com/projects/' + project_id + '/joins', this.jwt())
            .map((response: Response) => response.json());
    }

    acceptRequest(invitation_id: string) {
        return this.http.put('https://line-up-backend.herokuapp.com/joins/' + invitation_id + '/accept', {}, this.jwt())
            .map((response: Response) => response.json());
    }

    declineRequest(invitation_id: string) {
        return this.http.put('https://line-up-backend.herokuapp.com/joins/' + invitation_id + '/decline', {}, this.jwt())
            .map((response: Response) => response.json());
    }

    getInvitations() {
        return this.http.get('https://line-up-backend.herokuapp.com/joins', this.jwt())
            .map((response: Response) => response.json());
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