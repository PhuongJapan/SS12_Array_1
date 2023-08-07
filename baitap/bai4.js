let arrNumber = [];
let check = true;
// a. Cho phép người dùng nhập các giá trị của mảng bằng hàm prompt và
// lưu trữ giá trị trong mảng cho đến khi người dùng nhập một giá trị
// không phải là số, một chuỗi trống hoặc nhấn “Cancel

do {
  number = Number(prompt("Nhập 1 số"));
  if (isNaN(number) || number == ""||number==null) {
    check = false;
    //null là khi ko nhập mà bấm cancel
  } else {
    arrNumber.push(number);
  }
} while (check);
console.log(arrNumber);

// b. Tính tổng các giá trị của mảng, in ra phần tử có giá trị max - min (không
// và có sử dụng hàm Math.max và Math.min)

console.log("tổng các giá trị của mảng");
let sum = 0;
for (let i = 0; i < arrNumber.length; i++) {
      sum += arrNumber[i];
    } 
console.log(sum);

// có sử dụng hàm Math.max và Math.min
console.log("có sử dụng hàm Math.max và Math.min");

let yesMax = Math.max(...arrNumber);
let yesMin = Math.min(...arrNumber);
console.log("Max : " + yesMax + " --- Min : " + yesMin);

// không sử dụng hàm Math.max và Math.min

console.log("không sử dụng hàm Math.max và Math.min");
let noMax = arrNumber[0];
let noMin = arrNumber[0];
debugger;
for (let i = 0; i < arrNumber.length; i++) {
  if (noMax < arrNumber[i]) {
    noMax = arrNumber[i];
  }
  if (noMin > arrNumber[i]) {
    noMin = arrNumber[i];
  }
}
console.log("Max : " + noMax + " --- Min : " + noMin);