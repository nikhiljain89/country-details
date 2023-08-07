import { createReducer, on } from '@ngrx/store';
import * as CountriesActions from '../actions/country.actions';
import { Country } from '../models/country.model';

export const countriesFeatureKey = 'countries';

export interface CountryState {
  countries: Array<Country>;
  selectedCountry: Country | null;
  error: string | null;
}

export const initialState: CountryState = {
  countries: [],
  selectedCountry: null,
  error: null,
};

export const countryReducer = createReducer<CountryState>(
  initialState,
  on(
    CountriesActions.selectCountry,
    (state, action): CountryState => {
      return {
        ...state,
        selectedCountry: state.countries.find(({ name }: Country) => name === action.selectedCountry) || null,
      }
    } 
  ),
  on(
    CountriesActions.loadCountriesSuccess,
    (state, action): CountryState => {
      return {
        ...state,
        countries: action.countries,
        selectedCountry: null,
        error: null,
      };
    }
  ),
  on(
    CountriesActions.loadCountriesFailure,
    (state, action): CountryState => {
      return {
        ...state,
        countries: [],
        selectedCountry: null,
        error: action.error
      };
    }
  )
);

