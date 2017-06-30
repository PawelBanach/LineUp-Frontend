import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../_models/project';

@Component({
    selector: 'project-owner-history',
    moduleId: module.id,
    templateUrl: 'project-owner-history.component.html'
})

export class ProjectOwnerHistoryComponent {
    @Input () project: Project;

}
