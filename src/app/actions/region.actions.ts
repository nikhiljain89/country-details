import { createAction, props } from '@ngrx/store';
import { Region } from '../models/region.model';

const selectRegion = createAction(
  '[Region] Select Region',
  props<{ selectedRegion: Region }>()
);

const selectRegionSuccess = createAction(
  '[Region] Select Region Success',
  props<{ data: Region[] }>()
);

const selectRegionFailure = createAction(
  '[Region] Select Region Failure',
  props<{ error: string }>()
);

export const RegionActions = {
  selectRegion,
  selectRegionSuccess,
  selectRegionFailure
};