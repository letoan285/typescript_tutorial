var Products = /** @class */ (function () {
    function Products() {
    }
    Products.prototype.post = function () {
        console.log('hello product');
    };
    Products.prototype.getPrice = function (price, name, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    };
    return Products;
}());
//# sourceMappingURL=ProductController.js.map