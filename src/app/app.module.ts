import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeService } from './theme.service';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';

import { CountrycardComponent } from './countrycard/countrycard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartsWithPipePipe } from './card/starts-with-pipe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CountrycardComponent,
    StartsWithPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
