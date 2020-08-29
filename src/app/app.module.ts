import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { CommonModule } from '@angular/common';
import { LoginComponent} from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSnackBarModule } from '@angular/material/snack-bar'
// import {HomeModule} from './home/home.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JwtInterceptor, ErrorInterceptor } from './backend';
import { fakeBackendProvider } from './backend/fake-backend';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AdminPanelModule,
  ],
  providers: [ /* { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, */
    fakeBackendProvider],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

