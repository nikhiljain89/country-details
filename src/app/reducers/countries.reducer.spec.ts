import { Action } from '@ngrx/store';
import { countryReducer, initialState } from './countries.reducer';

describe('Countries Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = countryReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
