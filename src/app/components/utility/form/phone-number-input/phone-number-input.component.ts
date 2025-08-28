import { UtilityService } from './../../../../services/utility.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchableDropdownComponent } from '../searchable-dropdown/searchable-dropdown.component';
import { InputComponent } from '../../../layout/input/input.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-phone-number-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SearchableDropdownComponent,
    InputComponent,
    MatTooltipModule
  ],
  templateUrl: './phone-number-input.component.html',
  styleUrl: './phone-number-input.component.scss'
})
export class PhoneNumberInputComponent {
  @Input() label = '';
  @Input() required = true;
  phoneForm!: FormGroup;
  // @Input({required: true}) contact!: FormGroup;
  // @Input({required: true}) phoneNumberControl!: string;
  @Input() preSelectedCountryCode: string = '+91';
  @Input() searchKey: string = 'label';
  @Input() tooltip: string= '';
  @Input({required: true}) options!: {label: string, value: string, search: string, name: string}[];
  @Input({required: true}) control!: FormGroup;
  @Output() phoneChange = new EventEmitter<string | null>();
  @Output() countryChange = new EventEmitter<string | null>();

  constructor(
    protected utilityService: UtilityService
  ){}

  onCountryChange(event: any) {
    this.countryChange.emit(event?.name || null);
    this.control.get('countryCode')?.setValue(event?.value || null);
    this.control.get('phoneNumber')?.markAsTouched();
  }
}
