"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./_directives/index");
var index_2 = require("./_guards/index");
var index_3 = require("./_services/index");
var home_component_1 = require("./home/home.component");
var index_4 = require("./login/index");
var projects_index_component_1 = require("./projects/projects-index.component");
var project_service_1 = require("./_services/project.service");
var lazy_component_1 = require("./lazy/lazy.component");
var projects_new_component_1 = require("./projects/projects-new.component");
var project_header_component_1 = require("./projects/project-header.component");
var collaborators_index_component_1 = require("./collaborators/collaborators-index.component");
var project_show_component_1 = require("./projects/project-show.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var modal_collaborator_component_1 = require("./modals/modal-collaborator.component");
var project_owner_component_1 = require("./projects/project-owner.component");
var project_participation_component_1 = require("./projects/project-participation.component");
var invitation_service_1 = require("./_services/invitation.service");
var project_request_component_1 = require("./invitations/project-request.component");
var invitation_component_1 = require("./invitations/invitation.component");
var register_component_1 = require("./register/register.component");
var project_owner_history_component_1 = require("./projects/project-owner-history.component");
var project_participation_history_component_1 = require("./projects/project-participation-history.component");
var user_edit_component_1 = require("./users/user-edit.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ngx_bootstrap_1.ModalModule.forRoot(),
            ngx_bootstrap_1.TabsModule.forRoot(),
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.AlertComponent,
            index_1.NavbarComponent,
            home_component_1.HomeComponent,
            projects_index_component_1.ProjectsIndexComponent,
            projects_new_component_1.ProjectsNewComponent,
            project_header_component_1.ProjectHeaderComponent,
            project_show_component_1.ProjectShowComponent,
            project_owner_component_1.ProjectOwnerComponent,
            project_participation_component_1.ProjectParticipationComponent,
            project_owner_history_component_1.ProjectOwnerHistoryComponent,
            project_participation_history_component_1.ProjectParticipationHistoryComponent,
            collaborators_index_component_1.CollaboratorsIndexComponent,
            modal_collaborator_component_1.ModalCollaboratorComponent,
            project_request_component_1.ProjectRequestComponent,
            invitation_component_1.InvitationComponent,
            index_4.LoginComponent,
            lazy_component_1.LazyComponent,
            user_edit_component_1.UserEditComponent,
            register_component_1.RegisterComponent
        ],
        providers: [
            index_2.AuthGuard,
            index_3.AlertService,
            index_3.AuthenticationService,
            index_3.UserService,
            project_service_1.ProjectService,
            invitation_service_1.InvitationService,
            // providers used to create fake backend
            // fakeBackendProvider,
            testing_1.MockBackend,
            http_2.BaseRequestOptions
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map