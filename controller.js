function layThongTinTuForm() {
  var tk = document.getElementById("tknv").value;
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCB = document.getElementById("luongCB").value;
  var chucVu = document.querySelector("#chucvu").value;
  var gioLam = document.getElementById("gioLam").value;

  return new nhanVien(tk, hoTen, email, matKhau, ngayLam, chucVu, gioLam, luongCB, chucVu);
}
function duaThongTinLenForm(nv) {
  document.getElementById("tknv").value = nv.taiKhoan;
  document.getElementById("tknv").disabled = true;
  document.getElementById("name").value = nv.hoTen;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matKhau;
  document.getElementById("datepicker").value = nv.ngayLam;
  document.getElementById("luongCB").value = nv.luongCoban;
  document.querySelector("#chucvu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.gioLam;
}
function findById(id, list) {
  return list.findIndex((a) => {
    return a.taiKhoan == id;
  });
}
function renderList(list) {
  var result = document.getElementById("tableDanhSach");
  contentHTML = "";
  list.forEach((item) => {
    contentHTML += `
    <tr>
    <td>${item.taiKhoan}</td>
    <td>${item.hoTen}</td>
    <td>${item.email}</td>
    <td>${item.ngayLam}</td>
    <td>${item.chucVu}</td>
    <td>${item.tongLuong()}</td>
    <td>${item.xepLoai()}</td>
    <td>
    <button class="btn btn-warning" onClick="showThongTin(${item.taiKhoan})">sửa</button>
    <button class="btn btn-danger" onClick="xoaNV(${item.taiKhoan})">xoá</button>
    </td>
    </tr>`;
  });
  result.innerHTML = contentHTML;
}
function getFromLS(itemName) {
  var list = [];
  var listFromLS = localStorage.getItem(itemName);
  if (listFromLS != null) {
    listFromLS = JSON.parse(listFromLS);
    return listFromLS.map((item) => {
      return new nhanVien(
        item.taiKhoan,
        item.hoTen,
        item.email,
        item.matKhau,
        item.ngayLam,
        item.chucVu,
        item.gioLam,
        item.luongCoban,
        item.chucVu,
      );
    });
  } else {
    return list;
  }
}
function saveToLS(itemName, list) {
  var jsonData = JSON.stringify(list);
  localStorage.setItem(itemName, jsonData);
}
