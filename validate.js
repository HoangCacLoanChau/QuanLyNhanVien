function checkTK(idErr, value) {
  var reg = "^[0-9]{4,6}$";
  if (value.match(reg)) {
    document.getElementById(idErr).style.display = "none";
    return true;
  } else {
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerHTML = `vui lòng nhập 4 - 6 ký số`;
    return false;
  }
}
function checkHoTen(idErr, value) {
  var reg = /[a-z]/gi;
  if (value.match(reg) && value.length > 0) {
    document.getElementById(idErr).style.display = "none";
    return true;
  } else {
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerHTML = `vui lòng không để trống hay nhập số`;
    return false;
  }
}
function checkMK(idErr, value) {
  var reg = "^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$";
  if (value.match(reg)) {
    document.getElementById(idErr).style.display = "none";
    return true;
  } else {
    document.getElementById(idErr).style.display = "block";
    document.getElementById(
      idErr,
    ).innerHTML = `6-10 ký tự (1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)`;
    return false;
  }
}
function checkNgayLam(idErr, value) {
  var reg =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  if (value.match(reg)) {
    document.getElementById(idErr).style.display = "none";
    return true;
  } else {
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerHTML = `vui lòng nhập đúng định dạng ngày tháng`;
    return false;
  }
}
function checkLuongCB(idErr, value) {
  var reg = /[0-9]/gi;
  if (reg.test(value) && value.length > 0 && 1000000 <= value && value <= 20000000) {
    document.getElementById(idErr).style.display = "none";
    return true;
  } else {
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerHTML = `vui lòng nhập đúng số Lương 1.000.000 - 20.000.000`;
    return false;
  }
}
function checkGioLam(idErr, value) {
  var reg = /[0-9]/gi;
  if (reg.test(value) && value.length > 0 && 80 <= value && value <= 200) {
    document.getElementById(idErr).style.display = "none";
    return true;
  } else {
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerHTML = `vui lòng nhập đúng số giờ làm 80 - 200 giờ`;
    return false;
  }
}
function checkEmail(idErr, value) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (value.match(re)) {
    document.getElementById(idErr).style.display = "none";
    return true;
  } else {
    document.getElementById(idErr).style.display = "block";
    document.getElementById(idErr).innerHTML = `email không hợp lệ`;
    return false;
  }
}

function checkChucVu(idErr, value) {
  const SEP = "Sếp";
  const TP = "Trưởng Phòng";
  const NV = "Nhân Viên";
  switch (value) {
    case SEP:
      document.getElementById(idErr).style.display = "none";
      return true;
    case TP:
      document.getElementById(idErr).style.display = "none";
      return true;
    case NV:
      document.getElementById(idErr).style.display = "none";
      return true;
    default:
      document.getElementById(idErr).style.display = "block";
      document.getElementById(idErr).innerHTML = `vui lòng chọn 1 chức vụ`;
      return false;
  }
}
