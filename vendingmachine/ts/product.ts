/// <reference path="productCategory.ts" />

interface Product {
    name: string;
    price: number;
    category?: ProductCategory;
}

class Initial implements Product {
    name = "Please select product";
    price = 0;
}

class CocaCola implements Product{
    name = "Coca-Cola";
    price = 2.30;
    category = new SodaCategoty();
}

class Gummies implements Product{
    name = "Gummies";
    price = 1.90;
    category = new CandyCategory();
}

class Snickers implements Product{
    name = "Snickers";
    price = 1.80;
    category = new CandyBarCategory();
}

class Lays implements Product{
    name = "Lays";
    price = 3.20;
    category = new PotatoChipsCategory();
}