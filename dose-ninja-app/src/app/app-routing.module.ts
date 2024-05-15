import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationListComponent } from './medication-list/medication-list.component';
import { MedicationDetailsComponent } from './medication-details/medication-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'medications', pathMatch: 'full' },
  { path: 'medications', component: MedicationListComponent },
  { path: 'medications/:id', component: MedicationDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
