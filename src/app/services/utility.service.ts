import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  
  $formControl(control: AbstractControl | null) {
    return <FormControl>control;
  }

  $formArray(control: AbstractControl) {
    return <FormArray>control;
  }

  $formGroup(control: AbstractControl | null) {
    return <FormGroup>control;
  }
}
