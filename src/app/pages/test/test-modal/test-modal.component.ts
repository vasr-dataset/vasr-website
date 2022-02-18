import {Component, Inject, Input, OnInit} from '@angular/core';
import {Candidate} from '../../../types/candidate';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Subject, timer} from 'rxjs';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent implements OnInit {
  answers: Map<number, Candidate> = new Map<number, Candidate>();
  score: number;
  restart$;
  numberOfQuestions = 5;
  questionIndexArray = Array.from({length: this.numberOfQuestions}, (_, i) => i + 1)

  constructor(public dialogRef: MatDialogRef<TestModalComponent>,
                  @Inject(MAT_DIALOG_DATA) public data) {
      this.answers = data.answers;
      this.score = this.calculateScore();
      this.restart$ = data.restart$;
  }

  calculateScore(): number {
    let correctAnswers = 0;
    this.answers.forEach((candidate: Candidate) => candidate.solver && correctAnswers++)
    return (correctAnswers/this.numberOfQuestions) * 100
  }

  restart(): void {
    this.restart$.next();
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
