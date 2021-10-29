describe("ShoppingCart", function() {
	var shoppingCart;
	var voucher;

	beforeEach(function() {
		voucher = jasmine.createSpyObj('voucher', ['five', 'ten', 'fifteen']);
		shoppingCart = new ShoppingCart(voucher);

		whiteiphone = jasmine.objectContaining({
			productName: "Dien thoai iPhone X 256GB Silver, Blue",
			category: "Dien thoai",
			price: 27.990,
			quantity: 10
		});
		pinkSamSung = jasmine.objectContaining({
			productName: "Dien thoai SamSung Galaxy J4+, Pink",
			category: "Dien thoai",
			price: 270,
			quantity: 10
		});
		blueHuawei = jasmine.objectContaining({
			productName: "Dien thoai Huawei Mate 20 Pro, Blue",
			category: "Dien thoai",
			price: 167,
			quantity: 6
		});
		blackXiaomi = jasmine.objectContaining({
			productName: "Dien thoai Xiaomi Mi 8 Lite, Black",
			category: "Dien thoai",
			price: 19,
			quantity: 6
		});
		orangeMobbi = jasmine.objectContaining({
			productName: "Dien thoai Mobiistar B310, Orange",
			category: "Dien thoai",
			price: 30,
			quantity: 5
		});

	});

	describe("Theo mac dinh", function() {
		it("San pham trong", function() {
			expect(shoppingCart.nguoiXemGio()).toEqual([]);
		});
	});
	describe("Them vao gio hang", function() {
		it("San pham co the duoc them vao gio", function() {
			shoppingCart.themSp(whiteiphone);
			expect(shoppingCart.basket).toEqual([whiteiphone]);
		});
	});
	describe("Xoa khoi gio hang", function() {
		it("San pham co the bi loai bo khoi gio", function() {
			shoppingCart.themSp(whiteiphone);
			shoppingCart.themSp(blackXiaomi );
			shoppingCart.xoaSp(whiteiphone);
			expect(shoppingCart.basket).toEqual([blackXiaomi]);
		});
	});
	describe("Tong so gio hang", function() {
		it("Tong so gio hang co mot mat hang", function() {
			shoppingCart.themSp(blackXiaomi.sample);
			expect(shoppingCart.tongSoGio()).toEqual(19);
		});

		it("Tong so gio hang co nhieu mat hang", function() {
			shoppingCart.themSp(blackXiaomi.sample);
			shoppingCart.themSp(blackXiaomi.sample);
			shoppingCart.themSp(blackXiaomi.sample);
			expect(shoppingCart.tongSoGio()).toEqual(57);
		});
	});

	describe("Shop dien thoai", function() {
		it("Dem so luong cac mat hang dien thoai Iphone chu khong phai dien thoai khac trong gio", function() {
			shoppingCart.themSp(blackXiaomi.sample);
			shoppingCart.themSp(blackXiaomi.sample);
			shoppingCart.themSp(pinkSamSung.sample);
			expect(shoppingCart._footwearCounter()).toEqual(3);
		});
		it("Dem tat ca cac mat hang trong gio", function() {
			shoppingCart.themSp(blackXiaomi.sample);
			shoppingCart.themSp(blackXiaomi.sample);
			shoppingCart.themSp(whiteiphone.sample);
			expect(shoppingCart._footwearCounter()).toEqual(3);
		});
	});
	describe("Chon phieu giam gia", function() {
		it("Cung cap cho khach hang tong chiet khau neu ho ap dung chiet khau \u00A35", function() {
			shoppingCart.themSp(blackXiaomi.sample);
			shoppingCart.themSp(blackXiaomi.sample);
			shoppingCart.chonPMH(5);
			expect(voucher.five).toHaveBeenCalledWith(38);
		});
		it("Cung cap cho khach hang tong chiet khau neu ho ap dung chiet khau \u00A310", function() {
			shoppingCart.themSp(blueHuawei.sample);
			shoppingCart.chonPMH(10);
			expect(voucher.ten).toHaveBeenCalledWith(167);
		});
		it("Cung cap cho khach hang tong chiet khau neu ho ap dung chiet khau \u00A315", function() {
			shoppingCart.themSp(pinkSamSung.sample);
			shoppingCart.chonPMH(15);
			expect(voucher.fifteen).toHaveBeenCalledWith(270, 1);
		});
	});
});
