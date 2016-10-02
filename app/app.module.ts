import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}  from './app.component';
import {AboutComponent} from './about';
import {HomeComponent} from './home';
import {HelloComponent} from './hello';
import {LoginComponent} from './login';
import {QuizComponent} from './quiz';
import {QuizService} from './quiz-service';
import {Header_CompComponent} from './common/header_comp';
import {Navbar_CompComponent} from './common/navbar_comp';
import {Footer_CompComponent} from './common/footer_comp';
import {Http, Response, HTTP_PROVIDERS} from '@angular/http';
import {FakeWebServer} from './fake-webserver';
import {MockBackend} from '@angular/http/testing';


@NgModule({
    imports: [BrowserModule, FormsModule],
    providers: [QuizService, FakeWebServer, MockBackend],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent,
        QuizComponent,
        HelloComponent,
        Header_CompComponent,
        Navbar_CompComponent,
        Footer_CompComponent],
    bootstrap: [HomeComponent]
})
export class AppModule {
}
