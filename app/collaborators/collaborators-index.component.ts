import {Component, OnInit, ViewChild} from '@angular/core';

import { User, Project } from '../_models/index';
import { UserService } from '../_services/user.service';
import { ModalCollaboratorComponent } from "../modals/modal-collaborator.component";
import { ProjectService } from "../_services/project.service";
import {AlertService} from "../_services/alert.service";

@Component({
    moduleId: module.id,
    templateUrl: 'collaborators-index.component.html'
})

export class CollaboratorsIndexComponent implements OnInit{
    currentUser: User;
    collaborators: User[] = [];
    modalCollaborator: User = null;
    myProjects: Project[] = [];
    @ViewChild(ModalCollaboratorComponent) private modal:ModalCollaboratorComponent;
    ngOnInit() {
        this.loadAllCollaborators();
        this.loadMyProjects();
    }

    constructor (private userService: UserService, private projectService: ProjectService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    public showModal(collaborator: User) {
        this.modalCollaborator = collaborator;
        this.modal.showModal();
    }

    private loadAllCollaborators() {
        this.userService.getAll().subscribe(users => {
            this.collaborators = users.filter((user:User) => user.userId !== this.currentUser.userId);});
    }

    private loadMyProjects() {
        this.projectService.getProjectsOwner().subscribe(projects => this.myProjects = projects);
    }
}