"use strict";
class Kor {
    constructor(name) {
        this.name = name;
    }
    writeCode(requriment) {
        console.log(requriment);
        return requriment;
    }
    say(msg) {
        console.log(msg);
    }
}
const hi = new Kor('bw');
