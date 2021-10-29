describe("Cac tinh nang test", function() {
	var dtSamSung, dtIphone, dtHuawei, dtOppo, dtMobile, blueHuawei, blackXiaomi;
	var orangeMobbi, greyMobell, blackNokia, darkGrayViVo, pinkSamSung, dressPink;

	var shop;
	var shoppingCart;
	var voucher;

	beforeEach(function() {
		dtSamSung = new Item("Dien thoai SamSung Galaxy J4+, mau hong", "Dien thoai", 99, 5);
		dtIphone = new Item("Dien thoai iPhone X 256GB Silver, mau xanh", "Dien thoai|", 27.990, 10);
		dtHuawei = new Item("Dien thoai Huawei Mate 20 Pro, mau trang", "Dien thoai", 34, 12);
		dtOppo = new Item("Dien thoai Oppo F9, mau do", "Dien thoai", 19, 6);
		dtMobile = new Item("Dien thoai Mobiistar X, mau den", "Dien thoai", 19, 0);
		blueHuawei = new Item("Dien thoai Huawei Mate 20 Pro, Blue", "Dien thoai", 167, 6);
		blackXiaomi = new Item("Dien thoai Xiaomi Mi 8 Lite, Black", "Dien thoai", 30, 5);
		orangeMobbi = new Item("Dien thoai Mobiistar B310, Orange", "Dien thoai", 49.99, 9);
		greyMobell = new Item("Dien thoai Mobell M789, Grey", "Dien thoai", 39.99, 3);
		blackNokia = new Item("Dien thoai Nokia 5.1 Plus, Black", "Dien thoai", 75, 2);
		darkGrayViVo = new Item("Dien thoai Vivo V11, dark gray", "Dien thoai", 175.50, 1);
		pinkSamSung = new Item("Dien thoai SamSung Galaxy J4+, Pink", "Dien thoai", 270, 10);
		dressPink = new Item("Mid Twist Cut-Out Dress, Pink", "Dien thoai", 540, 5);

		voucher = new Voucher();
		shoppingCart = new ShoppingCart(voucher);
		shop = new Shop(shoppingCart);

		shop.addProduct(dtSamSung);
		shop.addProduct(dtIphone);
		shop.addProduct(dtHuawei);
		shop.addProduct(dtOppo);
		shop.addProduct(blueHuawei);
		shop.addProduct(orangeMobbi);
		shop.addProduct(greyMobell);
		shop.addProduct(blackNokia);
		shop.addProduct(darkGrayViVo);
		shop.addProduct(pinkSamSung);
		shop.addProduct(dressPink);
		shop.addProduct(blackXiaomi);
	});
	it("1. Voi tu cach la nguoi dung toi co the them san pham vao gio hang cua minh", function() {
		shop.addToCart(dtSamSung);
		expect(shop.viewBasket()).toContain(dtSamSung);
	});

	it("2. Voi tu cach la nguoi dung toi co the xoa san pham khoi gio hang cua minh.", function() {
		shop.addToCart(dtSamSung);
		shop.addToCart(blackNokia);
		shop.removeFromCart(dtSamSung);
		expect(shop.viewBasket()).not.toContain(dtSamSung);
		expect(shop.viewBasket()).toContain(blackNokia);
	});

	it("3. Voi tu cach la nguoi dung toi co the xem tong gia cho cac san pham trong gio hang cua minh.", function() {
		shop.addToCart(orangeMobbi);
		shop.addToCart(greyMobell);
		expect(shop.totalCart()).toEqual(89.98);
	});

	it("4. Voi tu cach la nguoi dung toi co the ap dung mot phieu giam gia cho gio hang cua minh.", function() {
		shop.addToCart(orangeMobbi);
		shop.addToCart(greyMobell);
		expect(shop.totalCartVoucher(5)).toEqual(84.98);
	});

	it("5. Voi tu cach la nguoi dung toi co the xem tong gia cua cac san pham.", function() {
		shop.addToCart(orangeMobbi);
		shop.addToCart(greyMobell);
		expect(shop.totalCartVoucher(10)).toEqual(79.98);
	});

	it("6. Voi tu cach la nguoi dung toi duoc canh bao khi ap dung mot phieu mua hang khong hop le vao gio hang cua minh.", function() {
		shop.addToCart(dtOppo);
		expect(shop.totalCartVoucher(15)).toEqual("Can nhieu hon \u00A375 va co the doi lai mot mat hang tuong duong");
	});

	it("7. Voi tu cach la nguoi dung toi khong the su dung cac san pham het hang vao gio.", function() {
		expect(shop.addToCart(dtMobile)).toEqual("Dien thoai Mobiistar X, mau den het hang!");
	});
});
