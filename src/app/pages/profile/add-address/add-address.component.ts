import { Component, Inject, Optional } from '@angular/core';
import { InputComponent } from "../../../components/utility/form/input/input.component";
import { FormControl, FormGroup } from '@angular/forms';
import { UtilityService } from '../../../services/utility.service';
import { CheckboxInputComponent } from "../../../components/utility/form/checkbox-input/checkbox-input.component";
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-address',
  standalone: true,
  imports: [InputComponent, CheckboxInputComponent, MatDialogModule],
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.scss'
})
export class AddAddressComponent {
  addressForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private matDialog: MatDialog,
    @Optional() private matDialogRef: MatDialogRef<AddAddressComponent>,

    protected utilityService: UtilityService,
  ) {}

  ngOnInit() {
    this.matDialogRef.addPanelClass('add-address-dialog');
    this.initializeAddressForm();
  }

  initializeAddressForm() {
    this.addressForm = new FormGroup({
      address: new FormControl(''),
    })
  }


}
