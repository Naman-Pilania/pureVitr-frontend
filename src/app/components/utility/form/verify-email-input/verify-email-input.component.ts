import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { emailBlackSVG } from '../../../../constants/svg/emailBlackSvg';
import { SafeHtmlPipe } from '../../../../pipes/safe-html.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-verify-email-input',
  standalone: true,
  imports: [
    MatTooltipModule, 
    CommonModule, 
    ReactiveFormsModule, 
    SafeHtmlPipe,
    MatIconModule
  ],
  templateUrl: './verify-email-input.component.html',
  styleUrl: './verify-email-input.component.scss'
})
export class VerifyEmailInputComponent {
  readonly emailBlackSVG = emailBlackSVG;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string | number = '';
  @Input() disabled: boolean = false;
  @Input() required = false;
  @Input({required: true}) control!: FormControl;
  @Input({required: true}) isEmailVerified!: FormControl;
  @Input() maxLength!: number;

  @Output() valueChange = new EventEmitter<string >();
  @Output() onVerify = new EventEmitter<void>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }

  ngOnInit() {
    if (!this.control) {
      this.control = new FormControl(this.value, {
        updateOn: 'change',
        validators: this.required ? [Validators.required] : []
      });
    }
  }

}