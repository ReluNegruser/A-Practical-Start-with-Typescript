abstract class ProductCategory {
    protected imgPath = "img/";

    name: string;
    abstract getImageUrl(): string;
}

class SodaCategoty extends ProductCategory{
    name = "Soda";
    getImageUrl(){
        return this.imgPath+ "/SodaCanPS.png";
    }
}

class PotatoChipsCategory extends ProductCategory{
    name = "Chips";
    getImageUrl(){
        return this.imgPath+ "/Chips.jpg";
    }
}

class CandyCategory extends ProductCategory{
    name = "Candy";
    getImageUrl(){
        return this.imgPath+ "/Candy.png";
    }
}
class CandyBarCategory extends ProductCategory{
    name = "Candy Bar";
    getImageUrl(){
        return this.imgPath+ "/CandyBar.png";
    }
}