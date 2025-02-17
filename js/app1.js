for(let i=1;i<=15;i=i+2){
    console.log(i);
}
for ( let j=2;j<=20;j=j+2){
    console.log(j);
}
for (let k=5;k<=50;k=k+5){
    console.log(k);
}
/*
let n= prompt("enetr a number");
// prompt is a type of string..
n = parseInt(n);
for(let t=n; t<=n*10; t=t+n){
    console.log(t);
}
let film =[["kanhu","kausik","chinu"],["rout","roul","majhi"]];
for(let i=0;i<film.length;i++){
    console.log(i,film[i]);
}
for(int of 'apnacollege'){
    console.log(int);
}
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);
// count a number =287192.
let number=4634;
let count=0;
let copy=number;
while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}
console.log(count);
// 287152, and sum=25.
let number1 = 423464;
let sum = 0;
let copy1 = number1;
while(copy1>0){
    digit = copy1 % 10;
    sum = sum + digit;
    copy1 = Math.floor(copy1/10);
}
console.log(sum);
// guessing game:
const max = prompt("Enter a number");

const random = Math.floor(Math.random()*max + 1);

let guess = prompt("guess number");

while(true){
    if(guess=="quit"){
        console.log("quit");
        break;
    }
    if(guess==random){
        console.log("congrats u are right!",random);
        break;
    }
    else if(guess<random){
       guess = prompt("hint: u choose small type of number");
    }
    else{
        guess = prompt("hint:u choose large typeof number");
    }
}
    */

// larger than a number..
let string1 ="abcdabcdefgggh";
function getunique(string1){
    let ans = new Set(string1);
    console.log(ans);
    return ans;
}
getunique(string1);
// javascript--->7.
// important question..
let ar=[1,2,3,4,5,6];
const arrayAverage = (ar)=>{
let total=0;
for(let number of ar){
    total= total+number;
}
return total;
}
console.log(arrayAverage(ar));
// output is:
const object1 = {
    message:"hello , world",
    logmessage(){
        console.log(this.message);
    }
};
setTimeout(object1.logmessage,1000);
// output is:
let length1=4;
function callback(){
    console.log(this.length1);
}
const object3={
    length1:5,
    method4(callback){
        callback();
    },


};
object3.method4(callback);
// javascript 8 .. (find maximum an aray using reduce function):
let number=[2,3,4,5,3,4,7,8,1,2];
let result = nums.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log(el);
