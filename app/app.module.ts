import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {AboutComponent} from './about';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {QuizComponent} from './quiz';
import {QuizService} from './quiz-service';
import {Http, Response, HTTP_PROVIDERS} from '@angular/http';
import {FakeWebServer} from './fake-webserver';
import {MockBackend} from '@angular/http/testing';

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [QuizService, FakeWebServer, MockBackend, HTTP_PROVIDERS],
  declarations: [AppComponent, AboutComponent, LoginComponent, QuizComponent],
  bootstrap: [HomeComponent]
})
export class AppModule {
}
