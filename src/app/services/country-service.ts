import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Country, Currency } from "../models/country.model";

@Injectable()
export class CountriesService {
  apiBase = "https://restcountries.com/v2/region/";

  constructor(private readonly http: HttpClient) {}

  getCountries(regionName: string): Observable<Country[]> {
    return this.http.get<Array<Country>>(`${this.apiBase}${regionName}`).pipe(
      map((countries: Country[]) =>
        countries.map(
          (data: Country) => ({
            name: data.name,
            capital: data.capital,
            population: data.population,
            flag: data.flag,
            currency: data.currencies.map(({ name }: Currency) => name).join(' ')
          } as Country)
        )
      )
    );
  }
}
