"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var index_1 = require("./login/index");
var index_2 = require("./_guards/index");
var projects_index_component_1 = require("./projects/projects-index.component");
var collaborators_index_component_1 = require("./collaborators/collaborators-index.component");
var register_component_1 = require("./register/register.component");
var user_edit_component_1 = require("./users/user-edit.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [index_2.AuthGuard] },
    { path: 'login', component: index_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'projects', component: projects_index_component_1.ProjectsIndexComponent, canActivate: [index_2.AuthGuard] },
    { path: 'collaborators', component: collaborators_index_component_1.CollaboratorsIndexComponent, canActivate: [index_2.AuthGuard] },
    { path: 'settings', component: user_edit_component_1.UserEditComponent, canActivate: [index_2.AuthGuard] },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map