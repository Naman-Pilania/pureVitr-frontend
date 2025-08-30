import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatTooltipModule, 
    CommonModule, 
    ReactiveFormsModule,
    MatIcon
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string | number = '';
  @Input() disabled: boolean = false;
  @Input() required = false;
  @Input({required: true}) control!: FormControl;
  @Input() maxLength!: number;
  @Input() tooltip: string = '';
  @Input() controlName: string = '';
  @Input() readonly = false;
  @Input() isPasswordField = false;
  @Input() prefixText:string =  '';

  @Output() valueChange = new EventEmitter<string >();

  hidePassword: boolean = false;

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }

  tooglePasswordVisiblity() {
    this.hidePassword = !this.hidePassword;
    if(this.hidePassword) {
      this.type = 'text';
    } 
    else {
      this.type = 'password';
    }
  }
}
