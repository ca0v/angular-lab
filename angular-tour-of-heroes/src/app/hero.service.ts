import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { of } from 'rxjs/observable/of';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

// "service-in-service" scenario
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes() {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
