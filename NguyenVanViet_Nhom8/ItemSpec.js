describe("San pham", function() {

	beforeEach(function() {
		item = new Item("Dien thoai iPhone X 256GB Silver, mau xanh", "Dien thoai", 27.990, 10);
	})

	it("tao san pham", function() {
		expect(item).toEqual(jasmine.objectContaining({
			productName: "Dien thoai iPhone X 256GB Silver, mau xanh",
			category: "Dien thoai",
			price: 27.990,
			quantityInStock: 10
		}));
	});

	describe("xoa khoi kho hang", function() {
		it("xoa mot san pham khoi kho hang", function() {
			item.removeStock();
			expect(item.quantityInStock).toEqual(9);
			expect(item.quantityInStock).not.toEqual(10);
		});
	});

	describe("kiem tra xem con hang khong", function() {
		it("tra ve false khi hang khong co trong kho", function() {
			for (stock = 0; stock < 10; stock++) {
				item.removeStock();
			}
			expect(item.inStock()).toBe(false);
		});
		it("tra ve true neu mat hang con trong kho", function() {
			expect(item.inStock()).toBe(true);
		});
	});
	describe("lay ten san pham", function() {
		it("tra ve ten cua san pham co trong mat hang", function() {
			expect(item.getProductName()).toEqual("Dien thoai iPhone X 256GB Silver, mau xanh")
		});
	});
});
