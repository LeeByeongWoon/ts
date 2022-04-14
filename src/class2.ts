interface Person {
    name: string;
    say(msg: string): void;
}

interface Programmer {
    writeCode(req: string): string;
}

class Kor implements Person, Programmer {
    constructor(public name: string) {}
    writeCode(requriment: string): string {
        console.log(requriment);
        return requriment;
    }
    say(msg: string): void {
        console.log(msg);
    }
}

const hi = new Kor('bw');
