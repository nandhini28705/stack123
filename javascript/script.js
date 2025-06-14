function sum(a,b){
    console.log(a+b)
}
sum(10,20)

var sum = ()=>{
    var a=10;
    var b=20;
    console.log(a+b)
}
sum(10,20)

for(var i=1;i<10;i++){
    console.log(i)
}
while(i<=10){
    console.log(i)
    i++;
}

let arr = [10,20,30,40];
let arr2 = [...arr,50,60,70,80];
console.log(arr)
console.log(arr2)

var marks =[90,91,92,93,94,95,96];
var [m1,m2,m3,m4,m5,m6,m7] = marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)
console.log(m6)
console.log(m7)