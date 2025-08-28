import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './radio-input.component.html',
  styleUrl: './radio-input.component.scss'
})
export class RadioInputComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) value!: string | boolean;
  @Input({ required: true }) inputId!: string;
  @Input() control!: FormControl;
}
