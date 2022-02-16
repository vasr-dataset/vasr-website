import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Analogy} from '../../types/analogy';
import {getAnalogy} from '../../types/analogies-dictionary';
import {Candidate} from '../../types/candidate';
import {Router} from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;

  analogy: Analogy = getAnalogy('monkey-human-swing').analogy;
  candidates: Candidate[] = getAnalogy('monkey-human-swing').candidates;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    window.name = 'VASR'
  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    const slider = document.getElementById('sliderRegular');

    // noUiSlider?.create(slider, {
    //   start: 40,
    //   connect: false,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    const slider2 = document.getElementById('sliderDouble');

    // noUiSlider?.create(slider2, {
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
}
