import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLoanTypesComponent } from './home-loan-types/home-loan-types.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeElgCriComponent } from './home-elg-cri/home-elg-cri.component';
import { HomeLoanBanksComponent } from './home-loan-banks/home-loan-banks.component';
import { CompareHomeLoansComponent } from './compare-home-loans/compare-home-loans.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home-loan-types',component:HomeLoanTypesComponent},
  {path:'home-elg-cri',component:HomeElgCriComponent},
  {path:'home-loan-banks',component:HomeLoanBanksComponent},
  {path:'compare-home-loans',component:CompareHomeLoansComponent},
  {path:'personal-loan',component:PersonalLoanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
