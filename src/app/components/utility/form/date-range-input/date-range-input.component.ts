import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import {
  MatDatepickerModule,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SafeHtmlPipe } from '../../../../pipes/safe-html.pipe';
import { MatIcon } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-date-range-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatStartDate,
    MatEndDate,
    MatDateRangePicker,
    MatDateRangeInput,
    NgClass,
    SafeHtmlPipe,
    NgIf,
    MatIcon,
    MatDatepickerModule, 
    MatNativeDateModule,   
  ],
  templateUrl: './date-range-input.component.html',
  styleUrl: './date-range-input.component.scss'
})
export class DateRangeInputComponent {
  @Input() placeholder: string = '';
  @Input() isRequired?: boolean;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  @Input() maxLength: number | null = null;
  @Input() inputId!: string;
  @Input() required: boolean = false;
  @Input({ required: true }) control!: FormControl;
  @Input() label?: string;
  @Input({ required: true }) startDateControl!: FormControl;
  @Input({ required: true }) endDateControl!: FormControl;
  @ViewChild('rangePicker') private rangePicker!: MatDateRangePicker<any>;
  @Input() minStartDate: Date | null = null;
  
  dateFilter = (date: Date | null): boolean => {
    if (!date) return false;

    if (this.minStartDate) {
      return date >= this.minStartDate;
    }

    return true;
  };

  openRangePicker() {
    this.rangePicker.open();
  }

  closeRangePicker() {
    if(this.endDateControl.invalid) {
      this.endDateControl.setValue(this.startDateControl.value);
    }
  }

  resetInput() {
    this.startDateControl.reset();
    this.endDateControl.reset();
  }
}
