import { Component, Input } from '@angular/core';
import {Project} from "../_models/project";
import {ProjectService} from "../_services/project.service";

@Component({
    selector: 'project-participation',
    moduleId: module.id,
    templateUrl: 'project-participation.component.html'
})

export class ProjectParticipationComponent {
    participationProjects: Project[] = [];
    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projectService.getMyProjects().subscribe(projects => { this.participationProjects = projects; });
    }
}