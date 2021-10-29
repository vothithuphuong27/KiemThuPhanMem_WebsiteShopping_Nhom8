"use strict";

var Shop = function(shoppingCart) {
	this.shoppingCart = shoppingCart
	this.products = [];
	this.ERROR = " het hang!"
};

Shop.prototype.addProduct = function(item) {
	this.products.push(item);
};

Shop.prototype.addToCart = function(item) {
	if (item.inStock()) {
		item.removeStock();
		this.shoppingCart.themSp(item);
	}
	return item.getProductName() + this.ERROR;
};

Shop.prototype.removeFromCart = function(item) {
	this.shoppingCart.xoaSp(item);
};

Shop.prototype.totalCartVoucher = function(voucher) {
	return this.shoppingCart.chonPMH(voucher);
};

Shop.prototype.viewBasket = function() {
	return this.shoppingCart.nguoiXemGio();
};

Shop.prototype.totalCart = function() {
	return this.shoppingCart.tongSoGio();
};
