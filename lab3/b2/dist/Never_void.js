var something = undefined;
var nothing;
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
console.log("Ví dụ về void:", something);
try {
    throwError("Có lỗi xảy ra!");
}
catch (err) {
    console.error("Bắt lỗi:", err);
}
