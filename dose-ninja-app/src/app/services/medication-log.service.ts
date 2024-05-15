import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MedicationListComponent } from './components/medication-list/medication-list.component';
import { MedicationLogService } from './services/medication-log.service';

@NgModule({
  declarations: [AppComponent, MedicationListComponent],
  imports: [BrowserModule],
  providers: [MedicationLogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
