
let something: void = undefined;
let nothing: never; 
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
console.log("Ví dụ về void:", something);
try {
  throwError("Có lỗi xảy ra!");
} catch (err) {
  console.error("Bắt lỗi:", err);
}
