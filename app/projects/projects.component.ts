import {Component, Input, OnInit} from '@angular/core';

import { User, Project } from '../_models/index';
import { ProjectService } from '../_services/project.service';

@Component({
    moduleId: module.id,
    templateUrl: 'projects.component.html'
})

export class ProjectsComponent implements OnInit {
    @Input() user: User;
    projects: Project[] = [];

    ngOnInit() {
        // this.loadAllProjects();
    }

    constructor (private projectService: ProjectService) {}

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
    private loadAllProjects() {
        this.projectService.getAll(this.user).subscribe(projects => { this.projects = projects; });
        debugger
    }
}