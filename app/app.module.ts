import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent, NavbarComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/index';
import { ProjectsIndexComponent } from "./projects/projects-index.component";
import { ProjectService } from "./_services/project.service";
import { LazyComponent } from "./lazy/lazy.component";
import { ProjectsNewComponent } from "./projects/projects-new.component";
import { ProjectHeaderComponent } from "./projects/project-header.component";
import { CollaboratorsIndexComponent } from "./collaborators/collaborators-index.component";
import { ProjectShowComponent } from "./projects/project-show.component";
import { ModalModule, TabsModule} from "ngx-bootstrap";
import { ModalCollaboratorComponent} from "./modals/modal-collaborator.component";
import { ProjectOwnerComponent } from "./projects/project-owner.component";
import { ProjectParticipationComponent } from "./projects/project-participation.component";
import { InvitationService } from "./_services/invitation.service";
import { ProjectRequestComponent } from "./invitations/project-request.component";
import { InvitationComponent } from "./invitations/invitation.component";
import { RegisterComponent } from "./register/register.component";
import { ProjectOwnerHistoryComponent } from "./projects/project-owner-history.component";
import { ProjectParticipationHistoryComponent } from "./projects/project-participation-history.component";
import { UserEditComponent } from "./users/user-edit.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        NavbarComponent,
        HomeComponent,
        ProjectsIndexComponent,
        ProjectsNewComponent,
        ProjectHeaderComponent,
        ProjectShowComponent,
        ProjectOwnerComponent,
        ProjectParticipationComponent,
        ProjectOwnerHistoryComponent,
        ProjectParticipationHistoryComponent,
        CollaboratorsIndexComponent,
        ModalCollaboratorComponent,
        ProjectRequestComponent,
        InvitationComponent,
        LoginComponent,
        LazyComponent,
        UserEditComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ProjectService,
        InvitationService,

        // providers used to create fake backend
        // fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }