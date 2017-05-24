import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { User } from "../_models/user";
import { ModalDirective } from "ngx-bootstrap";

@Component({
    selector: 'modal-collaborator',
    moduleId: module.id,
    templateUrl: 'modal-collaborator.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ModalCollaboratorComponent {
    @Input() collaborator: User;
    @ViewChild('collaboratorModal') public collaboratorModal:ModalDirective;

    constructor(private cdr: ChangeDetectorRef) {}

    // constructor(private userService: UserService, private projectService: ProjectService,
    //             private alertService: AlertService) { }
    //
    // ngOnInit() {
    //     this.userService.getById(this.project.owner).subscribe(user => { this.owner = user });
    //     this.projectService.getCollaborators(this.project.id).subscribe((users:User[]) => { this.collaborators = users });
    // }
    //
    // public close() {
    //     this.closeProject.emit();
    // }
    //
    // public joinProject() {
    //     this.projectService.joinProject(this.currentUser.id, this.project.id).subscribe(
    //         data => {
    //             this.alertService.success('Request for joining to project was sent!', true);
    //         },
    //         error => {
    //             this.alertService.error('Server error, try again later!');
    //         });
    // }
    //
    public showModal() {
        this.cdr.markForCheck();
        this.collaboratorModal.show();
    }

}