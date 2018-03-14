import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeLoanTypesComponent } from './home-loan-types/home-loan-types.component';
import { HomeComponent } from './home/home.component';
import { HomeElgCriComponent } from './home-elg-cri/home-elg-cri.component';
import { HomeLoanBanksComponent } from './home-loan-banks/home-loan-banks.component';
import { CompareHomeLoansComponent } from './compare-home-loans/compare-home-loans.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HomeLoanTypesComponent,
    
    HomeComponent,
    
    HomeElgCriComponent,
    
    HomeLoanBanksComponent,
    
    CompareHomeLoansComponent,
    
    PersonalLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
