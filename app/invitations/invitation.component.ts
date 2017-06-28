/**
 * Created by Yoshimori on 03/06/2017.
 */
import { Component, Input, OnInit } from "@angular/core";
import { Invitation } from "../_models/invitation";
import { AlertService } from "../_services/alert.service";
import { InvitationService } from "../_services/invitation.service";
import { ProjectService } from "../_services/project.service";
import { Project } from "../_models/project";
import {UserService} from "../_services/user.service";
import {User} from "../_models/user";

@Component({
    selector: "invitation",
    moduleId: module.id,
    templateUrl: "invitation.component.html",
})

export class InvitationComponent implements OnInit {
    @Input() invitation: Invitation;
    project: Project;
    owner: User;
    collaborators: User[] = [];
    constructor(private projectService: ProjectService, private alertService: AlertService,
                private invitationService: InvitationService, private userService: UserService) {}

    ngOnInit(){
        //load project
        this.loadProject();
    }

    loadProject() {
        this.projectService.getProject(this.invitation.projectId).subscribe((project) => {
            this.project = project;
            this.loadOwner();
        });

    }

    loadOwner() {
        this.userService.getById(this.project.owner).subscribe(user => {
            this.owner = user;
            this.loadCollaborators();
        });
    }

    loadCollaborators() {
        this.projectService.getParticipants(this.project.projectId).subscribe((users:User[]) => {
            this.collaborators = users;
        });
    }

    public acceptInvitation() {
        this.invitationService.acceptRequest(this.invitation.joinId).subscribe(
            data => {
                this.alertService.success('Request accepted!', true);
                //    odświeżyć komponent
            },
            error => {
                this.alertService.error('Server error, try again later!');
            }
        )
    }

    public declineInvitation() {
        this.invitationService.declineRequest(this.invitation.joinId).subscribe(
            data => {
                this.alertService.success('Request declined!', true);
            },
            error => {
                this.alertService.error('Server error, try again later!');
            }
        )
    }
}
