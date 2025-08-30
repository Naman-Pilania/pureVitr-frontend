import { Component } from '@angular/core';
import { InputComponent } from "../../../components/utility/form/input/input.component";
import { FormControl, FormGroup } from '@angular/forms';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  passwordForm!: FormGroup;

  constructor(
    protected utilityService: UtilityService,
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.passwordForm = new FormGroup({
      password: new FormControl(''),
    })
  }
}
