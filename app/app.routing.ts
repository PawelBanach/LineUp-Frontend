import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { ProjectsIndexComponent } from "./projects/projects-index.component";
// import { ProjectsNewComponent } from "./projects/projects-new.component"; TODO dorobić tą stronkę
import {CollaboratorsIndexComponent} from "./collaborators/collaborators-index.component";
import {ProjectsNewComponent} from "./projects/projects-new.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'projects', component: ProjectsIndexComponent, canActivate: [AuthGuard] },
    // { path: 'projects/new', component: ProjectsNewComponent, canActivate: [AuthGuard] },
    { path: 'collaborators', component: CollaboratorsIndexComponent, canActivate: [AuthGuard] },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);