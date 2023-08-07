let arr=[];
let length= Number(prompt("Nhập chiều dài của mảng muốn khởi tạo"))
for (let i = 0; i < length; i++) {
    arr.push(Number(prompt("Nhập giá trị số thứ "+(i+1))));        
}
console.log("Mảng nhập vào là: ", arr);


let num1= +prompt("Nhập giá trị số a");
let num2= +prompt("Nhập giá trị số b");
console.log("2 giá trị bạn nhập a&b là "+ num1 + "và" + num2);
let max= num1;
let min= num1;
max= num1>num2?num1:num2;
min= num1<num2?num1:num2;
console.log("Mảng lấy các giá trị nhỏ hơn" + max + "và lớn hơn" + min + "là: ");
let newArr=[];
for (let i = 0; i < 5; i++) {
    if(arr[i]<max&&arr[i]>min){
        newArr.push(arr[i])
    }
    
}console.log(newArr);