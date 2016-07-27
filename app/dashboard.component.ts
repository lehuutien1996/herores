import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
	selector: 'dashboard',
	templateUrl: 'app/views/dashboard.component.html',
	styleUrls: [ 'app/styles/dashboard.component.css' ],
	providers: [ HeroService ]
})

export class DashboardComponent implements OnInit {

	// Attributes
	heroes: Hero[] = [];

	constructor(
		private router: Router,
		private heroService: HeroService) {}

	ngOnInit() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	gotoDetail(hero: Hero) {
		let link = [ '/detail', hero.id ];
		this.router.navigate(link);
	}

}