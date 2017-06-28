import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Project } from "../_models/project";
import {ProjectService} from "../_services/project.service";
import {Invitation} from "../_models/invitation";
import {InvitationService} from "../_services/invitation.service";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    projectsOwner: Project[] = [];
    projectsOwnerHistory: Project[] = [];
    projectsParticipationHistory: Project[] = [];
    invitations: Invitation[] = [];

    constructor(private projectService: ProjectService, private invitationService: InvitationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadProjectsOwner();
    }

    private loadProjectsOwner() {
        this.projectService.getProjectsOwner().subscribe(projects => { this.projectsOwner = projects;});
        this.invitationService.getInvitations().subscribe(invitations => { this.invitations = invitations; });
        this.projectService.getHistory().subscribe(projects => {
            this.projectsOwnerHistory = projects.owned;
            this.projectsParticipationHistory = projects.participated;
        })
    }
}