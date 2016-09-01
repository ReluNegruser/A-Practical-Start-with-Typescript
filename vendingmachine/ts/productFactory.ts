/// <reference path="product.ts" />


class productFactory {
    static GetProduct(): Product {
        let random = Math.floor(Math.random() * 11);
        switch(random) {
            case 0: return new CocaCola();
        }
    }
}