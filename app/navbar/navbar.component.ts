import { Component, OnInit } from '@angular/core';
import { ROUTES } from '.././sidebar/sidebar-routes.config';
import { Location } from '@angular/common';
import {AuthenticationService} from '../_services/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    public isCustomerLogged = true;

    constructor(private authenticationService: AuthenticationService, location: Location) {
        this.location = location;
    }
    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.authenticationService.isLogged().subscribe(logged => { this.isCustomerLogged = logged; });
    }
    getTitle() {
        let titlee = this.location.path();
        if (titlee.charAt(0) === '/') {
            titlee = titlee.slice( 1 );
        }
        for (let item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
}
