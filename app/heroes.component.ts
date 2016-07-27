import { Component, OnInit } from '@angular/core'

import { Hero } from './hero'
import { HeroService } from './hero.service'
import { HeroDetailComponent } from './hero-detail.component'

@Component({
	selector: 'heroes-list',
	templateUrl: 'app/views/heroes.component.html',
	styleUrls: [ 'app/styles/heroes.component.css' ],
	directives: [ HeroDetailComponent ],
	providers: [ HeroService ]
})

export class HeroesComponent implements OnInit {

	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) { }

	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}

}