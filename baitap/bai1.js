let arrayInt=[];
for (let i = 0; i < 5; i++) {
    arrayInt[i]=Number(prompt("Nhập giá trị số nguyên thứ "+(i+1)))    
    //hoac arrInt.push(+prompt(""))
}
console.log("Các giá trị phần tử của mảng là: ", arrayInt);
console.log("Các phần tử có giá trị chẵn là: ");
let sum=0;
for (let i = 0; i < arrayInt.length; i++) {
    if(arrayInt[i]%2==0){
        console.log(arrayInt[i]);
        sum+=arrayInt[i];
    }
}
console.log("Tổng các phần tử có giá trị chẵn là:", sum);
console.log("Các phần tử là số nguyên tố là: ");
for (let i = 0; i < 5; i++) {
    let isPrime=true;
    if(arrayInt[i]<2){
        isPrime=false;
        break;
    }else{
        for (let j = 2; j <=Math.sqrt(arrayInt[i]); j++) {
        if (arrayInt[i]%j==0) {
            isPrime=false;
            break;            
        }
    }
    if(isPrime){
        console.log(arrayInt[i]);
    }       
}}

arrayInt.sort((a,b)=>a-b);
let min = arrayInt[0];
let max = arrayInt[4];
console.log("Mảng sắp xếp theo giá trị tăng dần:", arrayInt);
console.log("Số lớn nhất của mảng là",max);
console.log("Số nhỏ nhất của mảng là",min);

arrayInt.sort((a,b)=>b-a);
console.log("Mảng sắp xếp theo giá trị giảm dần", arrayInt);

//Cách sắp xếp bằng itersion sort
for (let i = 0; i < arrayInt.length-1; i++) {
    for (let j = i+1; j < arrayInt.length; j++) {
    //Sắp xếp tăng dần
        if (arrayInt[i]>arrayInt[j]) {
        let temp = arrayInt[i];
        arrayInt[i]=arrayInt[j];
        arrayInt[j]=temp;
    }  
    }
    
}

let newNumber = Number(prompt("Nhập thêm 1 số"));
let count = 0;
for (let i = 0; i < 5; i++) {
    if(arrayInt[i]===newNumber){
        count+=1;
    }   
}
console.log("Giá trị số bạn nhập để tìm số phần tử là:",newNumber);
console.log("Giá trị bạn nhâp có "+count+" phần tử");





