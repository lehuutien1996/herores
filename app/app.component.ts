import { Component, OnInit } from '@angular/core'
import { HeroesComponent } from './heroes.component'

@Component({
	selector: 'my-app',
	template: `
		<h1>{{ title }}</h1>
		<heroes-list></heroes-list>
	`,
	directives: [ HeroesComponent ]
})
export class AppComponent {

	title = "Tour of Heroes";

}
