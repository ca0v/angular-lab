import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
  ) { }

  getHero(id: number) {
    this.heroService.getHeroes().subscribe(v => {
      this.hero = v.find(hero => hero.id === id);
    });
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getHero(id);
  }

}
