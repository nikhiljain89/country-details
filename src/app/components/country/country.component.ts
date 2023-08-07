import { Component, HostBinding, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppActions } from 'src/app/actions';
import { Country } from 'src/app/models/country.model';
import { DropdownValue } from 'src/app/models/drop-down.model';
import { State, loadCountries, selectCountry } from 'src/app/reducers';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  @Input() disabled!: boolean;
  countries$: Observable<Array<Country>> = this.store.select(loadCountries);
  selectedCountry$: Observable<Country | null> = this.store.select(selectCountry);

  @HostBinding('class.col-md-6') someField = true;

  constructor(private readonly store: Store<State>) { }

  handleOptionChange(selectedCountry: DropdownValue) {
    this.store.dispatch(AppActions.CountryActions.selectCountry({ selectedCountry: selectedCountry.value }));
  }
}
