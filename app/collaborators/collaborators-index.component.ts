import {Component, OnInit, ViewChild} from '@angular/core';

import { User, Project } from '../_models/index';
import { UserService } from '../_services/user.service';
import {ModalCollaboratorComponent} from "../modals/modal-collaborator.component";

@Component({
    moduleId: module.id,
    templateUrl: 'collaborators-index.component.html'
})

export class CollaboratorsIndexComponent implements OnInit{
    currentUser: User;
    collaborators: User[] = [];
    modalCollaborator: User = null;
    @ViewChild(ModalCollaboratorComponent) private modal:ModalCollaboratorComponent;
    ngOnInit() {
        this.loadAllCollaborators();
    }

    constructor (private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    // currentUser: User;
    // users: User[] = [];
    //
    // constructor(private userService: UserService) {
    //     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // }
    //
    // ngOnInit() {
    //     this.loadAllUsers();
    // }
    //
    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }
    //
    // private loadAllUsers() {
    //     this.userService.getAll().subscribe(users => { this.users = users; });
    //     debugger
    // }
    // private setIsNew() {
    //     this.isNew = true;
    // }
    public showModal(collaborator: User) {
        debugger
        this.modalCollaborator = collaborator;
        this.modal.showModal();
    }

    private loadAllCollaborators() {
        this.userService.getAll().subscribe(users => {
            this.collaborators = users.filter((user:User) => user.id !== this.currentUser.id);});
    }
}