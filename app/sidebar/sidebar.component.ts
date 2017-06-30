import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import {AuthenticationService} from '../_services/authentication.service';

declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public isCustomerLogged = true;

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {
        $.getScript('app/assets/js/sidebar-moving-tab.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.authenticationService.isLogged().subscribe(logged => { this.isCustomerLogged = logged; });
    }

}
