export class Model {
    user;
    mess;

    constructor() {
        this.user = "Demo";
        this.mess = [new Mess("hey","me"),
                     new Mess("hello", "you")];
    }
}

export class Mess {
    text;
    sender;

    constructor(text:string, sender:string) {
        this.text = text;
        this.sender = sender;

    }

}
    