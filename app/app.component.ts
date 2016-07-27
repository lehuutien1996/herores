import { Component, OnInit } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
	selector: 'my-app',
	templateUrl: 'app/views/app.component.html',
	styleUrls: [ 'app/styles/app.component.css' ],
	directives: [ ROUTER_DIRECTIVES ],
})

export class AppComponent {

	title = "Tour of Heroes";

}
