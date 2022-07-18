import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Country } from 'projects/ngx-international-number/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public fg = new FormGroup({
    phoneNumber: new FormControl(),
  });

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  countryChanged(country: Country) {
    console.log('Country Changed: ', country);
  }
}
