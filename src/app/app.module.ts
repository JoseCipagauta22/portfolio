import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './componets/header/header.component';
import { InfoComponent } from './componets/info/info.component';
import { DetailsComponent } from './componets/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
