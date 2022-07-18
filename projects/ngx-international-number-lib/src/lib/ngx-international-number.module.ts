import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CountrySelectComponent } from './country-select/country-select.component';
import { InternationalNumberDirective } from './ngx-international-number.directive';

@NgModule({
  declarations: [CountrySelectComponent, InternationalNumberDirective],
  imports: [CommonModule, FormsModule, TranslateModule.forChild()],
  providers: [TranslateService],
  exports: [InternationalNumberDirective],
})
export class NgxInternationalNumberModule {}
