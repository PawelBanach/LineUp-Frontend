import { Component, OnInit } from "@angular/core";
import { ProjectService } from '../_services/project.service';
import { Router } from "@angular/router";
import { AlertService } from "../_services/alert.service";
import { UserService } from "../_services/user.service";

@Component({
    selector: 'projects-new',
    moduleId: module.id,
    templateUrl: 'projects-new.component.html'
})

export class ProjectsNewComponent implements OnInit{
    public techs: any;
    currentUser: any;
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private projectService: ProjectService,
        private alertService: AlertService,
        private userService: UserService) { }

    ngOnInit() {
        this.loadTechnologies();
    }

    saveProject() {
        this.loading = true;
        this.projectService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['/projects']);
                    this.alertService.success('Projects added successfully', true);
                    this.loading = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    loadTechnologies() {
        this.userService.loadTechnologies().subscribe((technologies) => this.techs = technologies)
    }
}