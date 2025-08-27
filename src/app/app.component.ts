import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from "./components/utility/progress-bar/progress-bar.component";
import { QuestionnaireComponent } from "./pages/questionnaire/questionnaire/questionnaire.component";
import { TopNavbarComponent } from './components/layout/navbar/top-navbar/top-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressBarComponent, QuestionnaireComponent, TopNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pureVitr-frontend';
}
