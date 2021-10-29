var Item = function(productName, category, price, quantityInStock) {
	this.productName = productName;
	this.category = category;
	this.price = price;
	this.quantityInStock = quantityInStock;
	this._ONE = 1;
	this._ZERO = 0;
};

Item.prototype.removeStock = function() {
	this.quantityInStock -= this._ONE;
};

Item.prototype.inStock = function() {
	return this.quantityInStock > this._ZERO;
};

Item.prototype.getProductName = function() {
	return this.productName;
}
