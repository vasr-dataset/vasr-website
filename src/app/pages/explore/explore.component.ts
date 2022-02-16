import {Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import noUiSlider from 'nouislider';
import {Router} from '@angular/router';
import {Analogy} from '../../types/analogy';
import {Candidate} from '../../types/candidate';
import {getAnalogy} from '../../types/analogies-dictionary';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.component.html',
  styleUrls: ['./explore.component.scss']
})

export class ExploreComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  selectedAnalogy = 'agent';

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

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }

  setAnalogy(analogyName: string): void {
    analogyName = analogyName?.toLowerCase()
    this.selectedAnalogy = analogyName;
    this.analogy = getAnalogy(analogyName).analogy;
    this.candidates = getAnalogy(analogyName).candidates;
  }
}
