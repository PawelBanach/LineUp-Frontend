import { NgModule } from "@angular/core";
import { ModalCollaboratorComponent } from "./modal-collaborator.component";
// import { ProjectsIndexComponent } from "./projects-index.component";
// import { ProjectService } from "../_services/project.service";
// import { ProjectsNewComponent } from "./projects-new.component";
// import { ProjectHeaderComponent } from "./project-header.component";
// import { ProjectShowComponent } from "./project-show.component";

@NgModule({
    imports: [
        // ProjectService
    ],
    declarations: [
        ModalCollaboratorComponent
        // ProjectsIndexComponent,
        // ProjectsNewComponent,
        // ProjectHeaderComponent,
        // ProjectShowComponent,

    ],
    exports: [
        ModalCollaboratorComponent
        // ProjectsNewComponent, ProjectHeaderComponent, ProjectShowComponent
    ],
})

export class ModalsModule {}
