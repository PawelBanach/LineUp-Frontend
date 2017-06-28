import {Component, OnInit} from '@angular/core';
import { User, Project } from '../_models/index';
import { ProjectService } from '../_services/project.service';

@Component({
    moduleId: module.id,
    templateUrl: 'projects-index.component.html'
})

export class ProjectsIndexComponent implements OnInit {
    currentUser: any;
    activeProject: Project = null;
    projects: Project[] = [];

    ngOnInit() {
        this.loadAllProjects();
    }

    constructor (private projectService: ProjectService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    public showProject(project: Project) {
        this.activeProject = project;
    }

    public closeProject(event: any) {
        this.activeProject = null;
    }

    private loadAllProjects() {
        this.projectService.getAll().subscribe(projects => { this.projects = projects; });
    }
}