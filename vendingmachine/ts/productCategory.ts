abstract class ProductCategory {
    protected imgPath = "images/";

    name: string;
    abstract getImageUrl(): string;
}

class SodaCategoty extends ProductCategory{
    name = "Soda";
    getImageUrl(){
        return this.imgPath+ "/SodaCanResize.jpg";
    }
}

class PotatoChipsCategory extends ProductCategory{
    name = "Chips";
    getImageUrl(){
        return this.imgPath+ "/ChipsResize.jpg";
    }
}

class CandyCategory extends ProductCategory{
    name = "Candy";
    getImageUrl(){
        return this.imgPath+ "/CandyResize.jpg";
    }
}
class CandyBarCategory extends ProductCategory{
    name = "Candy Bar";
    getImageUrl(){
        return this.imgPath+ "/CandyBarResize.jpg";
    }
}