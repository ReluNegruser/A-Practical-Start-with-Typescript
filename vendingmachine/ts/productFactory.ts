import * as products from "./product"

    export default function GetProduct(): products.Product {
        let random = Math.floor(Math.random() * 4);
        switch(random) {
            case 0: return new products.CocaCola();
            case 1: return new products.Snickers();
            case 2: return new products.Lays();
            case 3: return new products.Gummies();
        }
    }