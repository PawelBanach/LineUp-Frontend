import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';


// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent, NavbarComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { ProjectsIndexComponent } from "./projects/projects-index.component";
import { ProjectService } from "./_services/project.service";
import { LazyComponent } from "./lazy/lazy.component";
import { ProjectsNewComponent } from "./projects/projects-new.component";
import { ProjectHeaderComponent } from "./projects/project-header.component";
import { CollaboratorsIndexComponent } from "./collaborators/collaborators-index.component";
import { ProjectShowComponent } from "./projects/project-show.component";
import { ModalModule, TabsModule } from "ngx-bootstrap";
import { ModalCollaboratorComponent } from "./modals/modal-collaborator.component";

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
        CollaboratorsIndexComponent,
        ModalCollaboratorComponent,
        LoginComponent,
        LazyComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ProjectService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }