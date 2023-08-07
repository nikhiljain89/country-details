import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './effects/country.effects';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountriesService } from './services/country-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { metaReducers, reducers } from './reducers';
import { CountryComponent } from './components/country/country.component';
import { RegionComponent } from './components/region/region.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    CountryComponent,
    RegionComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([CountryEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: isDevMode()}),
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
