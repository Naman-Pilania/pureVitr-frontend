import { Component } from '@angular/core';
import { InputComponent } from "../../../components/utility/form/input/input.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    protected utilityService: UtilityService
  ){}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }
}
