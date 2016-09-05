abstract class ProductCategory {
    protected imgPath = "images/";

    name: string;
    abstract getImageUrl(): string;
}

class SodaCategoty extends ProductCategory{
    name = "Soda";
    getImageUrl(){
        return this.imgPath+ "/soda can.png";
    }
}

class PotatoChipsCategory extends ProductCategory{
    name = "Chips";
    getImageUrl(){
        return this.imgPath+ "/chips.png";
    }
}

class CandyCategory extends ProductCategory{
    name = "Candy";
    getImageUrl(){
        return this.imgPath+ "/candy.png";
    }
}
class CandyBarCategory extends ProductCategory{
    name = "Candy Bar";
    getImageUrl(){
        return this.imgPath+ "/chocolate.png";
    }
}

export {ProductCategory, SodaCategoty, PotatoChipsCategory, CandyBarCategory, CandyCategory}