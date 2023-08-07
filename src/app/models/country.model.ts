export interface Country {
  name: string;
  capital: string;
  population: number;
  currencies: Currency[];
  currency: string;
  flag: string;
}

export interface Currency {
  code: string,
  name: string,
  symbol: string
}