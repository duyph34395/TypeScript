function tinhChuVi(dai, rong) {
    return 2 * (dai + rong);
}
function tinhDienTich(dai, rong) {
    return dai * rong;
}
var dai = 6;
var rong = 4;
console.log("Chi\u1EC1u d\u00E0i: ".concat(dai, ", Chi\u1EC1u r\u1ED9ng: ").concat(rong));
console.log("Chu vi = ".concat(tinhChuVi(dai, rong)));
console.log("Di\u1EC7n t\u00EDch = ".concat(tinhDienTich(dai, rong)));
