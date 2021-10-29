"use strict";

var ShoppingCart = function(voucher) {
	this.voucher = voucher;
	this.basket = [];
	this._FOOTWEAR = "Dien thoai";
};

ShoppingCart.prototype.themSp = function(item) {
	this.basket.push(item);
};

ShoppingCart.prototype.xoaSp = function(item) {
	var index = this.basket.indexOf(item);
	this.basket.splice(index, 1);
};

ShoppingCart.prototype.tongSoGio = function() {
	var total = this.basket.map(function(number) {
			return number.price
		})
		.reduce(function(a, b) {
			return a + b
		});
	return total;
};

ShoppingCart.prototype.chonPMH = function(voucher) {
	var tongSoGio = this.tongSoGio();
	switch (voucher) {
		case 5:
			return this.voucher.five(tongSoGio);
			break;
		case 10:
			return this.voucher.ten(tongSoGio);
			break;
		case 15:
			return this.voucher.fifteen(tongSoGio, this._footwearCounter());
			break;
	}
};

ShoppingCart.prototype.nguoiXemGio = function() {
	return this.basket;
};

ShoppingCart.prototype._footwearCounter = function() {
	var shoeTotal = 0;
	for (var item in this.basket) {
		if (this.basket[item].category.includes(this._FOOTWEAR)) {
			shoeTotal++;
		}
	}
	return shoeTotal;
};
