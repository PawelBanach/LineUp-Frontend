"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./_guards/index");
var projects_index_component_1 = require("./projects/projects-index.component");
// import { ProjectsNewComponent } from "./projects/projects-new.component"; TODO dorobić tą stronkę
var collaborators_index_component_1 = require("./collaborators/collaborators-index.component");
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_4.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'projects', component: projects_index_component_1.ProjectsIndexComponent, canActivate: [index_4.AuthGuard] },
    // { path: 'projects/new', component: ProjectsNewComponent, canActivate: [AuthGuard] },
    { path: 'collaborators', component: collaborators_index_component_1.CollaboratorsIndexComponent, canActivate: [index_4.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map