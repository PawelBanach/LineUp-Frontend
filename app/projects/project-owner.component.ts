import { Component, Input, OnInit } from "@angular/core";
import { ProjectService } from "../_services/project.service";
import { Project } from "../_models/project";
import { Invitation } from "../_models/invitation";
import { AlertService } from "../_services/alert.service";
import { InvitationService } from "../_services/invitation.service";

@Component({
    selector: 'project-owner',
    moduleId: module.id,
    templateUrl: 'project-owner.component.html'
})

export class ProjectOwnerComponent implements OnInit {
    @Input () project: Project;
    joiningRequests: Invitation[] = [];

    constructor(private invitationService: InvitationService, private projectService: ProjectService,
                private alertService: AlertService) {}

    ngOnInit() {
        this.invitationService.getJoiningRequest(this.project.projectId).subscribe((invitations) => this.joiningRequests = invitations);
    }

    endProject(){
        this.projectService.endProject(this.project.projectId).subscribe(
            data => {
                this.alertService.success('Project finnish!', true);
            },
            error => {
                this.alertService.error('Server error, try again later!');
            }
        );
    }

    startProject() {
        this.projectService.startProject(this.project.projectId).subscribe(
            data => {
                this.alertService.success('Project started!', true);
            },
            error => {
                this.alertService.error('Server error, try again later!');
            }
        );
    }

    inactiveProject() {
        this.projectService.inactiveProject(this.project.projectId).subscribe(
            data => {
                this.alertService.success('Project paused!', true);
            },
            error => {
                this.alertService.error('Server error, try again later!');
            }
        );
    }

    editProject() {
        // TODO
        console.log("Will edit project");
    }
}