import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Analogy} from '../types/analogy';
import {Candidate} from '../types/candidate';
import ConfettiGenerator from 'confetti-js';

@Component({
  selector: 'app-analogy-board',
  templateUrl: './analogy-board.component.html',
  styleUrls: ['./analogy-board.component.scss']
})
export class AnalogyBoardComponent implements OnInit {

  _analogy: Analogy
  _candidates: Candidate[]
  hint = '';
  confettiSettings = { target: 'confetti' };
  confetti: ConfettiGenerator;
  confettiShown = false;
  noSelection = true;
  @Input() enableSelection = true;
  @Input() testMode = false;
  @Input() title = '';
  @Input() enablePointer = false;
  @Output() selected$: EventEmitter<Candidate> = new EventEmitter<Candidate>();

  constructor() { }

  ngOnInit(): void {
  }

  init() {
    this.hint = '';
    this.clearConfetti();
  }

  @Input()
  set analogy(analogy: Analogy) {
    this._analogy = analogy;
    this.init();
  }

  @Input()
  set candidates(candidates: Candidate[]) {
    this._candidates = candidates;
    this.init();
  }

  selectCandidate(candidate: Candidate): void {
    if (this.enableSelection) {
      this.noSelection = false;
      this.setConfetti();
      if (candidate.solver) {
        this._analogy.answer = candidate;
        this.selected$.emit(candidate);
        if (!this.testMode) {
          this.hint = candidate.hint
          this.renderConfetti()
        }
      } else {
        this.selected$.emit(candidate);
        if (!this.testMode) {
          this.hint = 'Hint: ' + candidate.hint;
          this.shakeCandidate(candidate);
          this.clearConfetti()
          this._analogy.answer = null
        } else {
          this._analogy.answer = candidate;
        }
      }
    }
  }

  shakeCandidate(candidate: Candidate) {
    candidate.shaken = true;
    setTimeout((arg) => {
          candidate.shaken = false;
        },
        200);
  }

  setConfetti(): void {
    if (!this.confetti) {
      this.confetti = new ConfettiGenerator(this.confettiSettings);
    }
  }

  renderConfetti(): void {
    if (!this.confettiShown) {
      this.confetti.render();
      this.confettiShown = true;
    }
  }

  clearConfetti(): void {
    if (this.confettiShown) {
      this.confetti.clear();
      this.confettiShown = false;
      this.confetti = new ConfettiGenerator(this.confettiSettings);
    }
  }

}
