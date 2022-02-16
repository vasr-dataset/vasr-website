export class Candidate {
    img: string;
    hint: string;
    label: string
    solver: boolean;
    shaken = false

    constructor(img: string, hint: string, label: string, solver: boolean = false) {
        this.img = img;
        this.hint = hint;
        this.label =label;
        this.solver = solver;
    }
}
