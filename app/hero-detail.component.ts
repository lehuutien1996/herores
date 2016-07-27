import { Component, Input, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
	selector: 'hero-detail',
	templateUrl: 'app/views/hero-detail.component.html',
	styleUrls: [ 'app/styles/hero-detail.component.css' ],
	providers: [ HeroService ]
})

export class HeroDetailComponent implements OnInit, OnDestroy {

	@Input() hero: Hero;
	sub: any;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute) { }

	// @Override
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			// + sign is parse to number
			let id = +params['id'];
			this.heroService.getHero(id)
				.then(hero => this.hero = hero);
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	goBack() {
		window.history.back();
	}

}