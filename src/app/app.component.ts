import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";
import { Country } from './models/country.model';
import { State, selectCountry } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI-test';
}
