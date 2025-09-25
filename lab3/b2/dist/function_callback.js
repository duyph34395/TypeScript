function AddandHandle(x, y, cb) {
    var result = x + y;
    cb(result);
}
AddandHandle(10, 20, function (result) {
    console.log("Kết quả tính tổng:", result);
});
