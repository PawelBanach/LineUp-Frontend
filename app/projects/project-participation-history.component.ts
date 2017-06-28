import { Component, Input, OnInit } from "@angular/core";
import { Project } from "../_models/project";

@Component({
    selector: 'project-participation-history',
    moduleId: module.id,
    templateUrl: 'project-participation-history.component.html'
})

export class ProjectParticipationHistoryComponent {
    @Input () project: Project;

}