import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepicker
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.scss'
})
export class DateInputComponent {
  @Input() placeholder: string = '';
  @Input() isRequired?: boolean;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  @Input() maxLength: number | null = null;
  @Input() inputId!: string;
  @Input() label!: string;
  @Input() required: boolean = false;
  @Input({ required: true }) control!: FormControl;

  @ViewChild('picker') datePicker!: MatDatepicker<Date>;

  openDatePicker() {
    this.datePicker.open();
  }
}

