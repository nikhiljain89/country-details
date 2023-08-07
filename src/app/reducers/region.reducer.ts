import { createReducer, on } from '@ngrx/store';
import { RegionActions } from '../actions/region.actions';
import { Region } from '../models/region.model';

export const regionsFeatureKey = 'regions';

export interface RegionState {
  regions: Array<Region>;
  selectedRegion: Region | null;
  error: string | null;
}

export const initialState: RegionState = {
  regions: [{ name: "Asia" }, { name: "Europe" }],
  selectedRegion: null,
  error: null,
};

export const regionReducer = createReducer<RegionState>(
  initialState,
  on(
    RegionActions.selectRegion,
    (state, action): RegionState => {
      return {
        ...state,
        selectedRegion: state.regions.find(({ name }: Region) => name === action.selectedRegion.name) || null,
      }
    } 
  )
);

