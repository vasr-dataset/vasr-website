import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChildren} from '@angular/core';
import {Analogy} from '../../types/analogy';
import {getAnalogy} from '../../types/analogies-dictionary';
import {Candidate} from '../../types/candidate';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {TestModalComponent} from './test-modal/test-modal.component';
import {Subject} from 'rxjs';

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
    currentAnalogy = 1;
    answers: Map<number, Candidate> = new Map<number, Candidate>();
    submittedAnswers = false;
    restart$: Subject<any> = new Subject<any>();
    dialogRef;

    analogy: Analogy = getAnalogy('agent-2').analogy;
    candidates: Candidate[] = getAnalogy('agent-2').candidates;

    constructor(private router: Router,
                private changeDetectorRef: ChangeDetectorRef,
                private dialog: MatDialog
    ) {
        window.name = 'VASR'
    }

    ngOnInit() {
        this.changeDetectorRef.detectChanges();

        const body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');

        this.restart$.subscribe(() => {
            this.init();
            this.dialogRef && this.dialogRef.close();
        });

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    init() {
        this.answers = new Map<number, Candidate>();
        this.currentAnalogy = 1;
        this.analogy = getAnalogy('agent-2').analogy;
        this.candidates = getAnalogy('agent-2').candidates;
        this.submittedAnswers = false;
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }

    setAnalogyNumber(index): void {
        if (this.submittedAnswers) {
            this.setAnalogy(index)
            if (this.answers.has(index)) {
                this.analogy.answer = this.answers.get(index);
                this.analogy = {...this.analogy}
            }
        }
    }

    nextAnalogy(): void {
        if (!this.submittedAnswers && this.currentAnalogy < 6) {
            this.currentAnalogy = Number(this.currentAnalogy) + 1;

            this.setAnalogy(this.currentAnalogy);
        }

        if (this.currentAnalogy >= 6) {
            this.submitAnswers();
        }

        // if (this.answers.has(this.currentAnalogy)) {
        //     this.analogy = {...this.analogy, answer: this.answers.get(this.currentAnalogy)};
        // }
    }

    setAnalogy(analogyNumber): void {
        switch (analogyNumber) {
            case 1:
                this.analogy = getAnalogy('agent-2').analogy;
                this.candidates = getAnalogy('agent-2').candidates;
                break;
            case 2:
                this.analogy = getAnalogy('tool-2').analogy;
                this.candidates = getAnalogy('tool-2').candidates;
                break;
            case 3:
                this.analogy = getAnalogy('verb-2').analogy;
                this.candidates = getAnalogy('verb-2').candidates;
                break;
            case 4:
                this.analogy = getAnalogy('item-2').analogy;
                this.candidates = getAnalogy('item-2').candidates;
                break;
            case 5:
                this.analogy = getAnalogy('agent-3').analogy;
                this.candidates = getAnalogy('agent-3').candidates;
                break;
            default:
                break;
        }
    }

    selectedAnswer(answer: Candidate) {
        this.answers.set(this.currentAnalogy, answer);
    }

    submitAnswers(): void {
        this.submittedAnswers = true;
        this.dialogRef = this.dialog.open(TestModalComponent, {data: {answers: this.answers, restart$: this.restart$}})
    }

    restTest(): void {
        this.init()
    }
}
