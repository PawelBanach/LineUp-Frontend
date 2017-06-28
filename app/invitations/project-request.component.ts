import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild} from "@angular/core";
import { User } from "../_models/user";
import { ModalDirective } from "ngx-bootstrap";
import {Invitation} from "../_models/invitation";
import {UserService} from "../_services/user.service";
import {AlertService} from "../_services/alert.service";
import {InvitationService} from "../_services/invitation.service";

@Component({
    selector: "project-request",
    moduleId: module.id,
    templateUrl: "project-request.component.html",
})

export class ProjectRequestComponent implements OnInit {
    @Input() invitation: Invitation;
    user: User;
    constructor(private userService: UserService, private alertService: AlertService,
                private invitationService: InvitationService) {}

    ngOnInit(){
        //load user
        this.loadUser();
    }

    loadUser() {
        this.userService.getById(this.invitation.who).subscribe((user) => this.user = user);
    }

    public acceptUser() {
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

    public declineUser() {
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
