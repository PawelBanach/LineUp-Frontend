import { Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Project } from '../_models/project';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { ProjectService } from '../_services/project.service';
import { AlertService } from '../_services/alert.service';
import { ModalCollaboratorComponent } from '../modals/modal-collaborator.component';

@Component({
    selector: 'project-show',
    moduleId: module.id,
    templateUrl: 'project-show.component.html'
})

export class ProjectShowComponent implements OnInit {
    owner: User;
    collaborators: User[] = [];
    myProjects: Project[] = [];
    modalCollaborator: User = null;
    @Input() currentUser: any;
    @Input() project: Project;
    @Output() closeProject: EventEmitter<any> = new EventEmitter();
    @ViewChild(ModalCollaboratorComponent) private modal: ModalCollaboratorComponent;

    constructor(private userService: UserService, private projectService: ProjectService,
                private alertService: AlertService) { }

    ngOnInit() {
        this.loadOwner();
        this.loadCollaborators();
        this.loadMyProjects();
    }

    public close() {
        this.closeProject.emit();
    }

    public joinProject() {
        this.projectService.joinProject(this.currentUser.id, this.project.projectId).subscribe(
            data => {
                this.alertService.success('Request for joining to project was sent!', true);
            },
            error => {
                this.alertService.error('Server error, try again later!');
            });
    }

    private loadMyProjects() {
        this.projectService.getProjectsOwner().subscribe(projects => this.myProjects = projects);
    }

    private loadCollaborators() {
        this.projectService.getParticipants(this.project.projectId).subscribe((users: User[]) => {
            this.collaborators = users
        });
    }

    private loadOwner() {
        this.userService.getById(this.project.owner).subscribe(user => { this.owner = user });
    }

    public showModal(collaborator: User) {
        this.modalCollaborator = collaborator;
        this.modal.showModal();
    }
}
