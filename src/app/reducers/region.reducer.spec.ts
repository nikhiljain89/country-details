import { Action } from '@ngrx/store';
import { regionReducer, initialState } from './region.reducer';

describe('Regions Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = regionReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
