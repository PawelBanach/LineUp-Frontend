import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../_services/authentication.service";

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    public isCustomerLogged: boolean = true;

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.isLogged().subscribe(logged => { this.isCustomerLogged = logged; debugger });
    }
}