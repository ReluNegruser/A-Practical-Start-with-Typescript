/// <reference path="productCategory.ts" />
import * as categories from "./productCategory"

export interface Product {
    name: string;
    price: number;
    category?: categories.ProductCategory;
}

export class Initial implements Product {
    name = "Please select product";
    price = 0;
}

export class CocaCola implements Product{
    name = "Coca-Cola";
    price = 2.30;
    category = new categories.SodaCategoty();
}

export class Gummies implements Product{
    name = "Gummies";
    price = 1.90;
    category = new categories.CandyCategory();
}

export class Snickers implements Product{
    name = "Snickers";
    price = 1.80;
    category = new categories.CandyBarCategory();
}

export class Lays implements Product{
    name = "Lays";
    price = 3.20;
    category = new categories.PotatoChipsCategory();
}