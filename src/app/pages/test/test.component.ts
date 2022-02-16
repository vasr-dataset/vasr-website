import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Analogy} from '../../types/analogy';
import {getAnalogy} from '../../types/analogies-dictionary';
import {Candidate} from '../../types/candidate';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  currentAnalogy = '1';
  answers: Map<string, Candidate> = new Map<string, Candidate>();
  submittedAnswers = false

  analogy: Analogy = getAnalogy('agent').analogy;
  candidates: Candidate[] = getAnalogy('agent').candidates;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    window.name = 'VASR'
  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    const slider = document.getElementById('sliderRegular');

    // noUiSlider.create(slider, {
    //   start: 40,
    //   connect: false,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    const slider2 = document.getElementById('sliderDouble');

    // noUiSlider.create(slider2, {
    //   start: [20, 60],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  init() {
    this.answers = new Map<string, Candidate>();
    this.currentAnalogy = '1';
    this.analogy = getAnalogy('agent').analogy;
    this.candidates = getAnalogy('agent').candidates;
    this.submittedAnswers = false;
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }

  setAnalogy(analogyName: string): void {
    analogyName = analogyName?.toLowerCase()
    this.currentAnalogy = analogyName;
    if (analogyName === '1') {
      this.analogy = getAnalogy('agent').analogy;
      this.candidates = getAnalogy('agent').candidates;
    } else {
      this.analogy = getAnalogy('tool').analogy;
      this.candidates = getAnalogy('tool').candidates;
    }

    if (this.answers.has(analogyName)) {
      this.analogy = {...this.analogy, answer: this.answers.get(analogyName)};
    }
  }


  selectedAnswer(answer: Candidate) {
    this.answers.set(this.currentAnalogy, answer);
  }

  submitAnswers(): void {
    this.submittedAnswers = true;
  }

  restTest(): void {
    this.init()
  }
}
