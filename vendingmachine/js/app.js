var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Coins;
(function (Coins) {
    var imgPath = "images/";
    var Coin = (function () {
        function Coin(value) {
            this.value = value;
        }
        return Coin;
    }());
    Coins.Coin = Coin;
    var Quarter = (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            _super.call(this, .25);
        }
        Quarter.prototype.getImageUrl = function () {
            return imgPath + "Quarter.gif";
        };
        return Quarter;
    }(Coin));
    Coins.Quarter = Quarter;
    var Dime = (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            _super.call(this, .1);
        }
        Dime.prototype.getImageUrl = function () {
            return imgPath + "Dime.png";
        };
        return Dime;
    }(Coin));
    Coins.Dime = Dime;
    var Half = (function (_super) {
        __extends(Half, _super);
        function Half() {
            _super.call(this, .5);
        }
        Half.prototype.getImageUrl = function () {
            return imgPath + "Half.jpg";
        };
        return Half;
    }(Coin));
    Coins.Half = Half;
    var Dollar = (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            _super.call(this, 1);
        }
        Dollar.prototype.getImageUrl = function () {
            return imgPath + "Dime.png";
        };
        return Dollar;
    }(Coin));
    Coins.Dollar = Dollar;
})(Coins || (Coins = {}));
var ProductCategory = (function () {
    function ProductCategory() {
        this.imgPath = "images/";
    }
    return ProductCategory;
}());
var SodaCategoty = (function (_super) {
    __extends(SodaCategoty, _super);
    function SodaCategoty() {
        _super.apply(this, arguments);
        this.name = "Soda";
    }
    SodaCategoty.prototype.getImageUrl = function () {
        return this.imgPath + "/SodaCanResize.jpg";
    };
    return SodaCategoty;
}(ProductCategory));
var PotatoChipsCategory = (function (_super) {
    __extends(PotatoChipsCategory, _super);
    function PotatoChipsCategory() {
        _super.apply(this, arguments);
        this.name = "Chips";
    }
    PotatoChipsCategory.prototype.getImageUrl = function () {
        return this.imgPath + "/ChipsResize.jpg";
    };
    return PotatoChipsCategory;
}(ProductCategory));
var CandyCategory = (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        _super.apply(this, arguments);
        this.name = "Candy";
    }
    CandyCategory.prototype.getImageUrl = function () {
        return this.imgPath + "/CandyResize.jpg";
    };
    return CandyCategory;
}(ProductCategory));
var CandyBarCategory = (function (_super) {
    __extends(CandyBarCategory, _super);
    function CandyBarCategory() {
        _super.apply(this, arguments);
        this.name = "Candy Bar";
    }
    CandyBarCategory.prototype.getImageUrl = function () {
        return this.imgPath + "/CandyBarResize.jpg";
    };
    return CandyBarCategory;
}(ProductCategory));
/// <reference path="productCategory.ts" />
console.log((new Coins.Dime().value));
var Initial = (function () {
    function Initial() {
        this.name = "Please select product";
        this.price = 0;
    }
    return Initial;
}());
var CocaCola = (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategoty();
    }
    return CocaCola;
}());
var Gummies = (function () {
    function Gummies() {
        this.name = "Gummies";
        this.price = 1.90;
        this.category = new CandyCategory();
    }
    return Gummies;
}());
var Snickers = (function () {
    function Snickers() {
        this.name = "Snickers";
        this.price = 1.80;
        this.category = new CandyBarCategory();
    }
    return Snickers;
}());
var Lays = (function () {
    function Lays() {
        this.name = "Lays";
        this.price = 3.20;
        this.category = new PotatoChipsCategory();
    }
    return Lays;
}());
/// <reference path="product.ts" />
var productFactory = (function () {
    function productFactory() {
    }
    productFactory.GetProduct = function () {
        var random = Math.floor(Math.random() * 4);
        switch (random) {
            case 0: return new CocaCola();
            case 1: return new Snickers();
            case 2: return new Lays();
            case 3: return new Gummies();
        }
    };
    return productFactory;
}());
/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
var Cell = (function () {
    function Cell(product) {
        this.product = product;
        this.stock = ko.observable(3);
        this.sold = ko.observable(false);
    }
    return Cell;
}());
var VendingMachine = (function () {
    function VendingMachine() {
        var _this = this;
        this.paid = ko.observable(0);
        this.selectedCell = ko.observable(new Cell(new Initial()));
        this.cells = ko.observableArray([]);
        this.acceptedCoins = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
        this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
        this.select = function (cell) {
            cell.sold(false);
            _this.selectedCell(cell);
        };
        this.acceptCoin = function (coin) {
            var oldTotal = _this.paid();
            _this.paid(oldTotal + coin.value);
        };
        this.pay = function () {
            if (_this.selectedCell().stock() < 1) {
                alert("We are out of that one!");
                return;
            }
            var currentPaid = _this.paid();
            _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
            var currentStock = _this.selectedCell().stock();
            _this.selectedCell().stock(currentStock - 1);
            _this.selectedCell().sold(true);
        };
    }
    Object.defineProperty(VendingMachine.prototype, "size", {
        set: function (givenSize) {
            this.cells([]);
            for (var index = 0; index < givenSize; index++) {
                var product = productFactory.GetProduct();
                this.cells.push(new Cell(product));
            }
        },
        enumerable: true,
        configurable: true
    });
    return VendingMachine;
}());
var machine = new VendingMachine();
/// <reference path="VendingMachine.ts" />
var machine = new VendingMachine();
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
//# sourceMappingURL=app.js.map