import { createAction, props } from '@ngrx/store';
import { Country } from '../models/country.model';

export const loadCountries = createAction(
  '[Country] Select Country',
  props<{ selectedRegion: string }>()
);

export const selectCountry = createAction(
  '[App PAGE] Select Country',
  props<{ selectedCountry: string }>()
);

export const loadCountriesSuccess = createAction(
  '[Country] Select Country Success',
  props<{ countries: Country[] }>()
);

export const loadCountriesFailure = createAction(
  '[Country] Select Country Failure',
  props<{ error: string }>()
);

export const CountryActions = {
  loadCountries,
  loadCountriesSuccess,
  loadCountriesFailure,
  selectCountry
};