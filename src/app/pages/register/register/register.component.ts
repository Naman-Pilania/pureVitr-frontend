import { routes } from './../../../constants/routes';
import { UtilityService } from './../../../services/utility.service';
import { Component } from '@angular/core';
import { InputComponent } from '../../../components/utility/form/input/input.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../../constants/regex';
import { ApiService } from '../../../services/api.service';

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
    private apiService : ApiService,
  ) {}

  ngOnInit() {
    this.inilitializeRegisterForm();
  }

  inilitializeRegisterForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(EMAIL_REGEX)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(PASSWORD_REGEX)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  onSubmit() {
    this.apiService.registerUser(this.registerForm.value).subscribe({
      next: (response) => {
        console.log("🚀 ~ RegisterComponent ~ onSubmit ~ response:", response)
        this.registerForm.reset();
      },
      error: (error) => {
        console.error("🚀 ~ RegisterComponent ~ onSubmit ~ error:", error)
      }
    });
  }
}
