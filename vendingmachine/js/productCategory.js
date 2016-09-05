var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ProductCategory = (function () {
        function ProductCategory() {
            this.imgPath = "images/";
        }
        return ProductCategory;
    }());
    exports.ProductCategory = ProductCategory;
    var SodaCategoty = (function (_super) {
        __extends(SodaCategoty, _super);
        function SodaCategoty() {
            _super.apply(this, arguments);
            this.name = "Soda";
        }
        SodaCategoty.prototype.getImageUrl = function () {
            return this.imgPath + "/soda can.png";
        };
        return SodaCategoty;
    }(ProductCategory));
    exports.SodaCategoty = SodaCategoty;
    var PotatoChipsCategory = (function (_super) {
        __extends(PotatoChipsCategory, _super);
        function PotatoChipsCategory() {
            _super.apply(this, arguments);
            this.name = "Chips";
        }
        PotatoChipsCategory.prototype.getImageUrl = function () {
            return this.imgPath + "/chips.png";
        };
        return PotatoChipsCategory;
    }(ProductCategory));
    exports.PotatoChipsCategory = PotatoChipsCategory;
    var CandyCategory = (function (_super) {
        __extends(CandyCategory, _super);
        function CandyCategory() {
            _super.apply(this, arguments);
            this.name = "Candy";
        }
        CandyCategory.prototype.getImageUrl = function () {
            return this.imgPath + "/candy.png";
        };
        return CandyCategory;
    }(ProductCategory));
    exports.CandyCategory = CandyCategory;
    var CandyBarCategory = (function (_super) {
        __extends(CandyBarCategory, _super);
        function CandyBarCategory() {
            _super.apply(this, arguments);
            this.name = "Candy Bar";
        }
        CandyBarCategory.prototype.getImageUrl = function () {
            return this.imgPath + "/chocolate.png";
        };
        return CandyBarCategory;
    }(ProductCategory));
    exports.CandyBarCategory = CandyBarCategory;
});
//# sourceMappingURL=productCategory.js.map