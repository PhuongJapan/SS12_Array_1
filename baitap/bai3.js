let styles = ["Jazz", "Blues"];
console.log("Mảng ban đầu", styles);
styles.push("Rock-n-Roll");
console.log("Mảng sau khi thêm Rock-n-Roll ", styles);

console.log("Mảng sau khi thay đổi phần tử chính giữa: ");
for (let i = 0; i < styles.length; i++) {
    if (styles.length%2!=0) {
       styles[Math.floor(styles.length/2)]="Classics"
    }
    
}console.log(styles);


  styles.shift();
console.log("Mảng mới sau khi xóa 1 phần tử đầu là: ",styles);

styles.unshift("Rap", "Reggae");
console.log("Mảng sau khi thêm là: ", styles);
