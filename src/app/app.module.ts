import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbComponent } from './navb/navb.component';
import { LoginComponent } from './login/login.component';
import { TopNavComponent } from './Layout/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbComponent,
    LoginComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'login', component:LoginComponent },
      { path: 'layout', component:TopNavComponent },
      { path: '**', redirectTo: '/layout'}
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
