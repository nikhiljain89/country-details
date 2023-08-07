import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { regionReducer, RegionState } from './region.reducer';
import { countryReducer, CountryState } from './countries.reducer';

export interface State {
  regionState: RegionState,
  countryState: CountryState
}

export const reducers: ActionReducerMap<State> = {
  regionState: regionReducer,
  countryState: countryReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export const selectRegionState = (state: State) => state.regionState;
export const selectRegionList = createSelector(selectRegionState, (state: RegionState) => state.regions);
export const selectRegion = createSelector(selectRegionState, (state: RegionState) => state.selectedRegion);

export const selectCountryState = (state: State) => state.countryState;
export const loadCountries = createSelector(selectCountryState, (state: CountryState) => state.countries);
export const selectCountry = createSelector(selectCountryState, (state: CountryState) => state.selectedCountry);