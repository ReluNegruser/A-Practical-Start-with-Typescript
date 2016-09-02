define(["require", "exports", "./productCategory"], function (require, exports, categories) {
    "use strict";
    var Initial = (function () {
        function Initial() {
            this.name = "Please select product";
            this.price = 0;
        }
        return Initial;
    }());
    exports.Initial = Initial;
    var CocaCola = (function () {
        function CocaCola() {
            this.name = "Coca-Cola";
            this.price = 2.30;
            this.category = new categories.SodaCategoty();
        }
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Gummies = (function () {
        function Gummies() {
            this.name = "Gummies";
            this.price = 1.90;
            this.category = new categories.CandyCategory();
        }
        return Gummies;
    }());
    exports.Gummies = Gummies;
    var Snickers = (function () {
        function Snickers() {
            this.name = "Snickers";
            this.price = 1.80;
            this.category = new categories.CandyBarCategory();
        }
        return Snickers;
    }());
    exports.Snickers = Snickers;
    var Lays = (function () {
        function Lays() {
            this.name = "Lays";
            this.price = 3.20;
            this.category = new categories.PotatoChipsCategory();
        }
        return Lays;
    }());
    exports.Lays = Lays;
});
//# sourceMappingURL=product.js.map