function nhanVien(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  chucVu,
  gioLam,
  luongCoban,
  chucVu,
  tongLuong,
  xepLoai,
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  this.luongCoban = luongCoban;
  this.chucVu = chucVu;
  this.tongLuong = function () {
    luong = 0;
    switch (chucVu) {
      case "Sếp":
        luong = luongCoban * 3;
        break;
      case "Trưởng Phòng":
        luong = luongCoban * 2;
        break;
      case "Nhân Viên":
        luong = luongCoban;
        break;
      default:
        luong = "chọn 1 chức vụ";
    }
    return luong;
  };
  this.xepLoai = function () {
    var loai = "";
    gio = this.gioLam * 1;
    gio >= 192
      ? (loai = "Xuất sắc")
      : gio >= 176
      ? (loai = "Giỏi")
      : gio >= 160
      ? (loai = "Khá")
      : (loai = "trung bình");
    return loai;
  };
}
