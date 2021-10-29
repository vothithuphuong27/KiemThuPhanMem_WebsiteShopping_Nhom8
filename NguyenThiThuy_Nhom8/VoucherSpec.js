describe("Voucher", function() {

	beforeEach(function() {
		voucher = new Voucher();
	});

	describe("Xoa \u00A35 khoi don hang", function() {
		it("Xoa khoi gio neu tong so hon \u00A35", function() {
			expect(voucher.five(16)).toEqual(11);
		});
	});

	describe("Xoa \u00A310 khoi gio neu tong so hon \u00A350", function() {
		it("Xoa \u00A310 khoi gio doi voi cac don dat hang tren \u00A350", function() {
			expect(voucher.ten(51)).toEqual(41);
		});
		it("dua ra thong bao loi nguoi dung khong the ap dung Voucher", function() {
			expect(voucher.ten(49)).toEqual("Can nhieu hon \u00A350 de doi");
		});
	});

	describe("Xoa \u00A315 cho cac don hang tren \u00A375", function() {
		it("Xoa \u00A315 cho cac don hang tren \u00A375 khi co dien thoai", function() {
			expect(voucher.fifteen(76, 1)).toEqual(61);
		});
		it("Dua ra thong bao loi neu mat hang tren \u00A375 nhung khong co dien thoai  ", function() {
			expect(voucher.fifteen(76, 0)).toEqual("Can nhieu hon \u00A375 va co the doi lai mot mat hang tuong duong");
		});
		it("Dua ra thong bao loi neu mat hang tren \u00A375 nhung co dien thoai ", function() {
			expect(voucher.fifteen(74, 1)).toEqual("Can nhieu hon \u00A375 va co the doi lai mot mat hang tuong duong");

		});
	});
});
