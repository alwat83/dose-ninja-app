import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicationComponent } from './components/medication/medication.component';
import { MedicationEditComponent } from './components/medication-edit/medication-edit.component';

const routes: Routes = [
  { path: 'medications', component: MedicationComponent },
  { path: 'medications/:id/edit', component: MedicationEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
