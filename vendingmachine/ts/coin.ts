abstract class Coin {
    value: number;
    constructor(value: number){
        this.value = value;
    }
    abstract getImageUrl(): string;
}

class Quarter extends Coin{
    constructor(){
        super(.25);
    }
    getImageUrl() : string {
        return "images/Quarter.gif";
    }
}

class Dime extends Coin {
    constructor() {
        super(.1);
    }
    getImageUrl(): string {
        return "images/Dime.png"
    }
}

class Half extends Coin {
    constructor() {
        super(.5);
    }
    getImageUrl(): string {
        return "images/Half.jpg"
    }
}

class Dollar extends Coin {
    constructor() {
        super(1);
    }
    getImageUrl(): string {
        return "images/Dime.png"
    }
}
