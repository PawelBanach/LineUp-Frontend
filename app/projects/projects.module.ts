import { NgModule } from "@angular/core";
import { ProjectsIndexComponent } from "./projects-index.component";
import { ProjectService } from "../_services/project.service";
import { ProjectsNewComponent } from "./projects-new.component";
import { ProjectHeaderComponent } from "./project-header.component";
import { ProjectShowComponent } from "./project-show.component";
import { ModalCollaboratorComponent } from "../modals/modal-collaborator.component";
import { ProjectOwnerComponent } from "./project-owner.component";
import { ProjectParticipationComponent } from "./project-participation.component";
import { InvitationService } from "../_services/invitation.service";
import { ProjectOwnerHistoryComponent } from "./project-owner-history.component";
import { ProjectParticipationHistoryComponent } from "./project-participation-history.component";

@NgModule({
    imports: [
        ProjectService,
        InvitationService,
        ModalCollaboratorComponent
    ],
    declarations: [
        ProjectsIndexComponent,
        ProjectsNewComponent,
        ProjectHeaderComponent,
        ProjectShowComponent,
        ProjectOwnerComponent,
        ProjectParticipationComponent,
        ProjectOwnerHistoryComponent,
        ProjectParticipationHistoryComponent,

    ],
    exports: [ProjectsNewComponent, ProjectHeaderComponent, ProjectShowComponent],
})

export class ProjectsModule {}
