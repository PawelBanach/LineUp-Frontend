import { Component, Input } from '@angular/core';

import { ProjectService } from '../_services/project.service';
import { Router } from "@angular/router";
import { AlertService } from "../_services/alert.service";
import {User} from "../_models/user";

@Component({
    moduleId: module.id,
    templateUrl: 'projects-new.component.html'
})

export class ProjectsNewComponent {
    currentUser: User;
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private projectService: ProjectService,
        private alertService: AlertService) { }

    saveProject() {
        debugger
        this.loading = true;
        this.projectService.create(this.currentUser, this.model)
            .subscribe(
                data => {
                    this.router.navigate(['projects']);
                    this.alertService.success('Projects added successfully', true);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    // implements OnInit {
    // currentUser: User;
    // projects: Project[] = [];
    //
    // ngOnInit() {
    //     this.loadAllProjects();
    // }
    //
    // constructor (private projectService: ProjectService) {
    //     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // }

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
    // private loadAllProjects() {
    //     this.projectService.getAll(this.currentUser).subscribe(projects => { this.projects = projects; });
    //     debugger
    // }
}