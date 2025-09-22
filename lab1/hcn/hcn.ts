function tinhChuVi(dai: number, rong: number): number {
    return 2 * (dai + rong);
}

function tinhDienTich(dai: number, rong: number): number {
    return dai * rong;
}

let dai: number = 6;
let rong: number = 4;

console.log(`Chiều dài: ${dai}, Chiều rộng: ${rong}`);
console.log(`Chu vi = ${tinhChuVi(dai, rong)}`);
console.log(`Diện tích = ${tinhDienTich(dai, rong)}`);
