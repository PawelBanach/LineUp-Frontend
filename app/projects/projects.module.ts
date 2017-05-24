import { NgModule } from "@angular/core";
import { ProjectsIndexComponent } from "./projects-index.component";
import { ProjectService } from "../_services/project.service";
import { ProjectsNewComponent } from "./projects-new.component";
import { ProjectHeaderComponent } from "./project-header.component";
import { ProjectShowComponent } from "./project-show.component";
import {ModalCollaboratorComponent} from "../modals/modal-collaborator.component";

@NgModule({
    imports: [
        ProjectService,
        ModalCollaboratorComponent
    ],
    declarations: [
        ProjectsIndexComponent,
        ProjectsNewComponent,
        ProjectHeaderComponent,
        ProjectShowComponent,

    ],
    exports: [ProjectsNewComponent, ProjectHeaderComponent, ProjectShowComponent],
})

export class ProjectsModule {}
