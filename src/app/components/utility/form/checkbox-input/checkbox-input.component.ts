import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-checkbox-input',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, MatTooltipModule, NgIf  ],
  templateUrl: './checkbox-input.component.html',
  styleUrl: './checkbox-input.component.scss'
})
export class CheckboxInputComponent {
  @ViewChild('checkBoxLabelContainer', { static: true })
  labelContainer!: ElementRef;
  @Input({ required: true }) inputId!: string;
  @Input() label?: string;
  @Input({ required: false }) labelClass!: string;
  @Input({ required: true }) control!: FormControl;
  @Input() viewAsinnerHTML = false;
  @Input() tooltip = '';
  @Output() change = new EventEmitter<boolean>();

  constructor(
  ) {}

  onClick(event: Event) {
    const target = event.target as HTMLElement;

    if (target.tagName.toLowerCase() === 'span') {
      event.preventDefault();

      const action = target.getAttribute('title');
    }
  }

  onChange(event: Event) {
    event.stopPropagation();
    this.change.emit(this.control.value);
  }
}