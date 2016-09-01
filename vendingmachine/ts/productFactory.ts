/// <reference path="product.ts" />


class productFactory {
    static GetProduct(): Product {
        let random = Math.floor(Math.random() * 4);
        switch(random) {
            case 0: return new CocaCola();
            case 1: return new Snickers();
            case 2: return new Lays();
            case 3: return new Gummies();
        }
    }
}