import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RentalModule } from './rental/rental.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

const routes: Routes = [{ path: '', redirectTo: 'rentals', pathMatch: 'full' }];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule,
    BrowserAnimationsModule,
    AuthModule,
    NgbModule.forRoot(),
    ToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
