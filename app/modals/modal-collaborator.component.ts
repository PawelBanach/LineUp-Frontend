import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit,
    ViewChild
} from "@angular/core";
import { User } from "../_models/user";
import { ModalDirective } from "ngx-bootstrap";
import {ProjectService} from "../_services/project.service";
import {AlertService} from "../_services/alert.service";
import {Project} from "../_models/project";

@Component({
    selector: 'modal-collaborator',
    moduleId: module.id,
    templateUrl: 'modal-collaborator.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ModalCollaboratorComponent {
    errors: string = "";
    @Input() myProjects: Project[];
    @Input() collaborator: User;
    @ViewChild('collaboratorModal') public collaboratorModal:ModalDirective;
    @ViewChild('project') el:ElementRef;


    constructor(private cdr: ChangeDetectorRef,private projectService: ProjectService,
                private alertService: AlertService, private elementRef: ElementRef) {}

    public inviteToProject(collaborator: User) {
        debugger
        let projectId = this.el.nativeElement.value;
        if (!projectId)
        {
            this.errors = "Please, select project";
        } else {
            this.projectService.inviteToProject(collaborator.userId, projectId).subscribe(
                data => {
                    this.alertService.success('Invitation was sent!', true);
                },
                error => {
                    this.alertService.error('Server error, try again later!');
                }
            );
            this.collaboratorModal.hide();
            this.errors = "";
        }
    }

    public showModal() {
        this.cdr.markForCheck();
        this.collaboratorModal.show();
    }
}