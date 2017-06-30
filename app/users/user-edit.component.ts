import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';

@Component({
    moduleId: module.id,
    templateUrl: 'user-edit.component.html'
})

export class UserEditComponent implements OnInit {
    public departments: any;
    public fieldOfStudies: any;
    public techs: any;
    model: User;

    constructor(private userService: UserService, private router: Router, private alertService: AlertService) {}

    ngOnInit() {
        this.loadDepartments();
        this.loadFieldOfStudies();
        this.loadTechnologies();
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getById(currentUser.id).subscribe(user => {this.model = user; });
    }

    update() {
        this.userService.update(this.model).subscribe(
            data => {
                this.router.navigate(['/']);
                this.alertService.success('User updated successfully', true);
            },
            error => {
                this.alertService.error(error);
            });
    }
    loadDepartments() {
        this.userService.loadDepartments().subscribe((departments) => this.departments = departments);
    }

    loadFieldOfStudies() {
        this.userService.loadFieldOfStudies().subscribe((studies) => this.fieldOfStudies = studies);
    }

    loadTechnologies() {
        this.userService.loadTechnologies().subscribe((technologies) => this.techs = technologies);
    }
}
