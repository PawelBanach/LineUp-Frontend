import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ModalCollaboratorComponent } from '../modals/modal-collaborator.component';
import { ProjectOwnerComponent } from '../projects/project-owner.component';
import { ProjectsNewComponent } from '../projects/projects-new.component';

@NgModule({
    imports: [
        ModalCollaboratorComponent,
        ProjectOwnerComponent,
        ProjectsNewComponent,
    ],
    declarations: [
        HomeComponent
    ],
})

export class HomeModule {}
