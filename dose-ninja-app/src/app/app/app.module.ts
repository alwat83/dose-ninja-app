import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment.firebase';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { MedicationComponent } from './components/medication/medication.component';
import { MedicationService } from './services/medication.service';

@NgModule({
  declarations: [
    AppComponent,
    MedicationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR,
    })
  ],
  providers: [MedicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
