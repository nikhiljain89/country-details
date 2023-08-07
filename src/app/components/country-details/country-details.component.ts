import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.model';
import { State, selectCountry } from 'src/app/reducers';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailsComponent {  
  selectedCountry$: Observable<Country | null> = this.store.select(selectCountry);

  constructor(private readonly store: Store<State>) { }
}
