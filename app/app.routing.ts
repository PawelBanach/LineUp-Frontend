import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/index';
import { ProjectsIndexComponent } from './projects/projects-index.component';
import { CollaboratorsIndexComponent} from './collaborators/collaborators-index.component';
import { RegisterComponent } from './register/register.component';
import { UserEditComponent } from './users/user-edit.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'projects', component: ProjectsIndexComponent, canActivate: [AuthGuard] },
    { path: 'collaborators', component: CollaboratorsIndexComponent, canActivate: [AuthGuard] },
    { path: 'settings', component: UserEditComponent, canActivate: [AuthGuard]},

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
