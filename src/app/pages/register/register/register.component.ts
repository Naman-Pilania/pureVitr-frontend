import { routes } from './../../../constants/routes';
import { UtilityService } from './../../../services/utility.service';
import { Component } from '@angular/core';
import { InputComponent } from '../../../components/utility/form/input/input.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    InputComponent,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  readonly routes = routes;
  registerForm!: FormGroup;

  constructor(
    protected utilityService: UtilityService,
  ) {}

  ngOnInit() {
    this.inilitializeRegisterForm();
  }

  inilitializeRegisterForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      fullName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      
    });
  }
}
