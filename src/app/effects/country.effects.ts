import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { AppActions } from '../actions';
import { CountriesService } from '../services/country-service';


@Injectable()
export class CountryEffects {
  constructor(
    private readonly actions$: Actions, 
    private readonly countriesService: CountriesService
  ) { }

  loadCountries$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AppActions.CountryActions.loadCountries),
        mergeMap((action) => this.countriesService.getCountries(action.selectedRegion)
          .pipe(
            map(countries => AppActions.CountryActions.loadCountriesSuccess({ countries })),
            catchError(error => of(AppActions.CountryActions.loadCountriesFailure({ error })))
          )
        )
      );
  });
}