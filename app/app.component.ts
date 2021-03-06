import { Component } from '@angular/core';
import { GithubComponent } from './components/github.component';
import { GithubService } from './services/github.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [GithubComponent],
    providers: [GithubService, HTTP_PROVIDERS]
})
export class AppComponent { }
