describe("Shop", function() {


	beforeEach(function() {
		whiteiphone = jasmine.createSpyObj('whiteiphone', ['inStock', 'removeStock', 'getProductName']);
		shoppingCart = jasmine.createSpyObj('shoppingCart', ['themSp', 'xoaSp', 'total', 'tongSoGio',
			'nguoiXemGio', 'chonPMH'
		]);
		shop = new Shop(shoppingCart);
	});

	describe("them san pham vao cua hang", function() {
		it("them san pham vao cua hang de nguoi tieu dung mua", function() {
			shop.addProduct(whiteiphone);
			expect(shop.products).toEqual([whiteiphone]);
		});
	});
	describe("them cac mat hang tu cua hang vao gio hang", function() {
		it("them cac mat hang tu cua hang vao gio hang", function() {
			whiteiphone.inStock.and.callFake(function() {
				return true;
			});
			shop.addToCart(whiteiphone);
			expect(whiteiphone.removeStock).toHaveBeenCalled();
			expect(shoppingCart.themSp).toHaveBeenCalledWith(whiteiphone);

		});
		it("tra lai loi khi hang khong co trong kho", function() {
			whiteiphone.getProductName.and.callFake(function() {
				return "Dien thoai mau xanh";
			});
			whiteiphone.inStock.and.callFake(function() {
				return false;
			});
			expect(shop.addToCart(whiteiphone)).toEqual("Dien thoai mau xanh het hang!");
		});

	});
	describe("xoa cac ma hang tu gio hang ", function() {
		it("xoa cac ma hang tu gio hang", function() {
			shop.removeFromCart(whiteiphone);
			expect(shoppingCart.xoaSp).toHaveBeenCalledWith(whiteiphone);
		});
	});

	describe("tong so san pham trong gio", function() {
		it("hien thi cho nguoi dung tong so san pham trong gio hang", function() {
			shop.totalCart();
			expect(shoppingCart.tongSoGio).toHaveBeenCalled();
		});
	});

	describe("xem gio hang", function() {
		it("hien thi cho nguoi chi tiet cua gio hang", function() {
			shop.viewBasket();
			expect(shoppingCart.nguoiXemGio).toHaveBeenCalled();
		});
	});

	describe("tong so san pham trong gio co phieu giam gia", function() {
		it("hien thi cho nguoi dung tong so san pham trong gio co phieu giam gia", function() {
			shop.totalCartVoucher(1);
			expect(shoppingCart.chonPMH).toHaveBeenCalledWith(1);
		});
	});
});
