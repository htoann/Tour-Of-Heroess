import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/helpers/token.interceptor';
import { SharedModule } from './shared/shared.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HeroModule } from './hero/hero.module';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { AuthGuard } from './core/helpers/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    HeroModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
