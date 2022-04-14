interface Person {
    name: string;
    say(msg: string): void;
}
interface Programmer {
    writeCode(req: string): string;
}
declare class Kor implements Person, Programmer {
    name: string;
    constructor(name: string);
    writeCode(requriment: string): string;
    say(msg: string): void;
}
declare const hi: Kor;
