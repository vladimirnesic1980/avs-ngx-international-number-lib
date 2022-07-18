import { Component, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';
import { CountryCode } from 'libphonenumber-js';
import { countries, Country } from '../country-data';
import { InternationalNumberDirective } from '../ngx-international-number.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CountrySelectComponent {
  public selectedCountry?: Country;
  public showList = false;
  public customScrollbar = true;
  public countries = countries;
  public search = '';
  public searchPlaceHolder?: string;

  public directiveRef?: InternationalNumberDirective;

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent): void {
    // Outside Click
    if (!this.ref.nativeElement.contains(event.target)) {
      this.showList = false;
    }
  }

  constructor(private ref: ElementRef) {}

  setCountry(code: CountryCode, country?: Country) {
    if (!country) {
      country = this.countries.find((country) => country.code === code);
    }
    this.selectedCountry = country;
    this.countries = countries;
    this.showList = false;

    this.directiveRef?.countrySelected.emit(country);
    this.directiveRef?.control?.updateValueAndValidity();

    return country;
  }

  toggleDropdown(): void {
    this.showList = !this.showList;
    this.directiveRef?.dropdownOpened.emit(this.showList);
  }

  filterCountries(search: string): void {
    if (!search) {
      this.countries = countries;
    } else {
      search = search.toLowerCase();

      this.countries = countries.filter((country) =>
        country.name.toLowerCase().includes(search)
      );
    }
  }
}
