import { Component } from '@angular/core';
import { InputComponent } from "../../../components/utility/form/input/input.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../../../services/utility.service';
import { RouterLink } from "@angular/router";
import { routes } from '../../../constants/routes';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly routes = routes;
  loginForm!: FormGroup;

  constructor(
    protected utilityService: UtilityService,
    private apiService : ApiService,
  ){}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    this.apiService.loginUser(this.loginForm.value).subscribe({
      next: (response) => { 
        console.log("🚀 ~ LoginComponent ~ onSubmit ~ response:", response)
        this.loginForm.reset();
      }
      ,error: (error) => {
        console.error("🚀 ~ LoginComponent ~ onSubmit ~ error:", error)
      }
    });
  }
}
