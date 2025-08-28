import { UtilityService } from './../../../../services/utility.service';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatOption, MatSelect } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-searchable-dropdown',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    MatInput
  ],
  templateUrl: './searchable-dropdown.component.html',
  styleUrl: './searchable-dropdown.component.scss'
})
export class SearchableDropdownComponent {
  @Input() label?: string;
  @Input() required = false; 
  @Input() tooltip?: string;
  @Input({required: true}) options: {label: string, value: string, search: string, name: string}[] = [];
  @Input() searchKey: string = 'label';
  @Input() displayField = 'name';
  @Input() placeholder = 'Select an option';
  @Input() multiple = false;
  @Input({required: true}) control!: FormControl;
  @Output() selectionChange = new EventEmitter<any>();
  
  @ViewChild('searchSelectInput') searchSelectInput!: ElementRef;
  @ViewChild('select') select!: MatSelect;

  searchControl = new FormControl<string>('');
  filteredCountry$!: Observable<{label: string, value: string, name: string}[]>;

  constructor(
    protected utilityService: UtilityService
  ) {
    this.filteredCountry$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((val) => {
        const filteredValue = val?.toLowerCase();
        if (!filteredValue) {
          return this.options.slice();
        }
        const filtered = this.options.filter((country) =>
          country?.search.toLowerCase().includes(filteredValue)
        );
        return filtered;
      })
    );
  }
}
