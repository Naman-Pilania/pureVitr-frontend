import { Component } from '@angular/core';
import { ProgressBarComponent } from "../../../components/utility/progress-bar/progress-bar.component";
import { ChipsComponent } from "../../../components/utility/chips/chips.component";
import { MatIconModule } from '@angular/material/icon';
import { Questions } from '../../../constants/constant';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../../components/layout/footer/footer.component";
import { ProductCardComponent } from "../../../components/layout/cards/product-card/product-card.component";
import { ProductRecommendationComponent } from "../../../components/layout/product-recommendation/product-recommendation.component";

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [
    ProgressBarComponent,
    ChipsComponent,
    MatIconModule,
    CommonModule,
    FooterComponent,
    ProductCardComponent,
    ProductRecommendationComponent,
],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss'
})
export class QuestionnaireComponent {
  readonly Questions = Questions;
  sections = [Questions?.['section1'], Questions?.['section2'], Questions?.['section3']];
  sectionTitles = ["🌿 Physical Traits", "🧠 Mental & Emotional Traits", "🍽 Habits & Environment"];

  allQuestions = this.sections.flat();
  totalQuestions = this.allQuestions.length;
  currentQuestion!: { question: string, options: string[] };

  currentIndex = 0;
  answers: string[] = [];

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.currentQuestion = this.allQuestions[this.currentIndex];
  }

}
