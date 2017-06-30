import { NgModule } from '@angular/core';
import { ProjectRequestComponent } from './project-request.component';
import {InvitationComponent} from './invitation.component';

@NgModule({
    imports: [],
    declarations: [
        ProjectRequestComponent,
        InvitationComponent
    ],
    exports: [
        ProjectRequestComponent,
        InvitationComponent
    ],
})

export class InvitationModule {}
