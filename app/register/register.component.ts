import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements  OnInit {
    public departments: any;
    public fieldOfStudies: any;
    public techs: any;
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.loadDepartments();
        this.loadFieldOfStudies();
        this.loadTechnologies();
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    loadDepartments() {
        this.userService.loadDepartments().subscribe((departments) => this.departments = departments)
    }

    loadFieldOfStudies() {
        this.userService.loadFieldOfStudies().subscribe((studies) => this.fieldOfStudies = studies)
    }

    loadTechnologies() {
        this.userService.loadTechnologies().subscribe((technologies) => this.techs = technologies)
    }
}
