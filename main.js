var dsnv = getFromLS("LIST");
renderList(dsnv);
//add new employee
function themNV() {
  var newNV = layThongTinTuForm();
  console.log("🚀 ~ themNV ~ newNV:", newNV);
  //validate
  var isValid =
    checkTK("tbTKNV", newNV.taiKhoan) &
    checkHoTen("tbTen", newNV.hoTen) &
    checkEmail("tbEmail", newNV.email) &
    checkMK("tbMatKhau", newNV.matKhau) &
    checkNgayLam("tbNgay", newNV.ngayLam) &
    checkGioLam("tbGiolam", newNV.gioLam) &
    checkLuongCB("tbLuongCB", newNV.luongCoban) &
    checkChucVu("tbChucVu", newNV.chucVu);
  if (!isValid) return;
  //end - validate
  dsnv.push(newNV);
  saveToLS("LIST", dsnv);
  renderList(dsnv);
  $("#myModal").modal("hide");
}
//show inform to form
function showThongTin(id) {
  var index = findById(id, dsnv);
  duaThongTinLenForm(dsnv[index]);
  $("#myModal").modal("show");
}
//edit employee
function capNhat() {
  resetmodalOnHide();
  var updateNV = layThongTinTuForm();
  var index = findById(updateNV.taiKhoan, dsnv);
  //validate
  var isValid =
    checkTK("tbTKNV", updateNV.taiKhoan) &
    checkHoTen("tbTen", updateNV.hoTen) &
    checkEmail("tbEmail", updateNV.email) &
    checkMK("tbMatKhau", updateNV.matKhau) &
    checkNgayLam("tbNgay", updateNV.ngayLam) &
    checkGioLam("tbGiolam", updateNV.gioLam) &
    checkLuongCB("tbLuongCB", updateNV.luongCoban) &
    checkChucVu("tbChucVu", updateNV.chucVu);
  if (!isValid) return;
  //end - validate
  dsnv[index] = updateNV;
  saveToLS("LIST", dsnv);
  renderList(dsnv);

  $("#myModal").modal("hide");
}
//delete employee
function xoaNV(id) {
  var index = findById(id, dsnv);
  dsnv.splice(index, 1);
  saveToLS("LIST", dsnv);
  renderList(dsnv);
}

//filter
function timTheoChucVu() {
  var cv = document.getElementById("searchName").value;
  var result = document.getElementById("tableDanhSach");
  contentHTML = "";
  dsnv.forEach((item) => {
    if (item.chucVu == cv) {
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
    }
  });
  result.innerHTML = contentHTML;
}

function resetmodalOnHide() {
  $("#myModal").on("hidden.bs.modal", function () {
    $(this).find("form").trigger("reset");
  });
  document.getElementById("tknv").disabled = false;
}
