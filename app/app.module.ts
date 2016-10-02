import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GithubService } from './services/github/github.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule],
  declarations: [ 
    AppComponent,
    ProfileComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    GithubService
  ]
})
export class AppModule { }
