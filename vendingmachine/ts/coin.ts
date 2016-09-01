namespace Coins {

    let imgPath = "images/";

    export abstract class Coin {
        value: number;
        constructor(value: number){
            this.value = value;
        }
        abstract getImageUrl(): string;
    }

    export class Quarter extends Coin{
        constructor(){
            super(.25);
        }
        getImageUrl() : string {
            return imgPath + "Quarter.gif";
        }
    }

    export class Dime extends Coin {
        constructor() {
            super(.1);
        }
        getImageUrl(): string {
            return imgPath + "Dime.png"
        }
    }

    export class Half extends Coin {
        constructor() {
            super(.5);
        }
        getImageUrl(): string {
            return imgPath + "Half.jpg"
        }
    }

    export class Dollar extends Coin {
        constructor() {
            super(1);
        }
        getImageUrl(): string {
            return imgPath + "Dime.png"
        }
    }
}
