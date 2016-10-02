import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AboutComponent} from './about';
import {LoginComponent} from './login';
import {QuizComponent} from './quiz';
import {PlayerComponent} from './player';
import {InsertDirective} from './insert';
import {HelloComponent} from './hello';
import {Header_CompComponent} from './common/header_comp';

@RouteConfig([
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: QuizComponent,
    useAsDefault: true
  },
  {
    path: '/player/:id',
    name: 'Player',
    component: PlayerComponent
  }
])

@Component({
  selector: 'home',
  templateUrl: './templates/home.html',
  directives: [ROUTER_DIRECTIVES, InsertDirective],
  providers: [ROUTER_PROVIDERS],
  entryComponents: [HelloComponent]
})
export class HomeComponent {
}

