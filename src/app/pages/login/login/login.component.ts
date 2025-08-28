import { Component } from '@angular/core';
import { InputComponent } from "../../../components/utility/form/input/input.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from '../../../services/utility.service';
import { RouterLink } from "@angular/router";
import { routes } from '../../../constants/routes';

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
