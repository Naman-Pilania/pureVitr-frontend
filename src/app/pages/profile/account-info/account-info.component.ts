import { UtilityService } from './../../../services/utility.service';
import { Component } from '@angular/core';
import { InputComponent } from "../../../components/utility/form/input/input.component";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss'
})
export class AccountInfoComponent {
  profileForm!: FormGroup;

  constructor(
    protected utilityService: UtilityService,
  ) {}

  ngOnInit() {
    this.initializeProfileForm();
  }

  initializeProfileForm()  {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
    })
  }
}
