"use strict";

var Voucher = function() {
	this._ONE = 1;
	this._FIVE = 5;
	this._TEN = 10;
	this._FIFTEEN = 15;
	this._FIFTY = 50;
	this._SEVENTYFIVE = 75;
	this.FIFTY_ERROR = "Can nhieu hon \u00A350 de doi";
	this.SEVENTYFIVE_ERROR = "Can nhieu hon \u00A375 va co the doi lai mot mat hang tuong duong";
};

Voucher.prototype.five = function(basket) {
	return this._fiveDiscounter(basket)
};
Voucher.prototype.ten = function(basket) {
	return this._isOverFifty(basket) ? this._fifteenDiscounter(basket) : this.FIFTY_ERROR;
};
Voucher.prototype.fifteen = function(basket, counter) {
	if (this._isOverSeventyFive(basket) && counter >= this._ONE) {
		return this._fiftyDiscounter(basket)
	}
	return this.SEVENTYFIVE_ERROR;
};

Voucher.prototype._isOverFifteen = function(basket) {
	return basket > this._FIFTEEN;
};
Voucher.prototype._isOverFifty = function(basket) {
	return basket > this._FIFTY;
};
Voucher.prototype._isOverSeventyFive = function(basket) {
	return basket > this._SEVENTYFIVE;
};

Voucher.prototype._fiveDiscounter = function(basket) {
	return basket - this._FIVE;
};

Voucher.prototype._fifteenDiscounter = function(basket) {
	return basket - this._TEN;
};

Voucher.prototype._fiftyDiscounter = function(basket) {
	return basket - this._FIFTEEN;
};
