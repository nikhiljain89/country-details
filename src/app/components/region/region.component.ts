import { Component, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppActions } from 'src/app/actions';
import { DropdownValue } from 'src/app/models/drop-down.model';
import { Region } from 'src/app/models/region.model';
import { State, selectRegionList, selectRegion } from 'src/app/reducers';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {
  regions$: Observable<Array<Region>> = this.store.select(selectRegionList);
  selectedRegion$: Observable<Region | null> = this.store.select(selectRegion);

  @HostBinding('class.col-md-6') someField = true;

  constructor(private readonly store: Store<State>) { }

  handleOptionChange(selectedRegion: DropdownValue) {
    this.store.dispatch(AppActions.RegionActions.selectRegion({ selectedRegion: { name: selectedRegion.value } }));
    this.store.dispatch(AppActions.CountryActions.loadCountries({ selectedRegion: selectedRegion.value }));
  }
}
