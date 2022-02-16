import {AnalogyElement} from './analogy-element';
import {Candidate} from './candidate';

export class Analogy {
    a: AnalogyElement;
    aTag: AnalogyElement;
    b: AnalogyElement;
    bTag: AnalogyElement;
    answer: Candidate;


    constructor(a: AnalogyElement, aTage: AnalogyElement, b: AnalogyElement, bTag: AnalogyElement) {
        this.a = a;
        this.aTag = aTage;
        this.b = b;
        this.bTag = bTag;
    }
}
