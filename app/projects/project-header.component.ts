import { Component, Input } from '@angular/core';
import { Project } from "../_models/project";

@Component({
    selector: 'project-header',
    moduleId: module.id,
    templateUrl: 'project-header.component.html'
})

export class ProjectHeaderComponent {
    @Input() project: Project;


    constructor() { }

}