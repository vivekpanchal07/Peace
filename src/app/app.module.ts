import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbComponent } from './navb/navb.component';
import { LoginComponent } from './login/login.component';
import { TopNavComponent } from './Layout/top-nav/top-nav.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbComponent,
    LoginComponent,
    TopNavComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component:LoginComponent },
      { path: 'layout', component:TopNavComponent },
      { path: 'dashboard', component:DashboardComponent },
      { path: '**', redirectTo: '/dashboard'}
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
