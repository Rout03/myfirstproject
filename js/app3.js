console.log("Hello world!")
console.log("kausik rout")
let a = 10;
let b = 5;
console.log("sum is :",a+b);
//Template literals
let c = 5;
let d = 4;
console.log(`price is :${c+d}`)
// Aritmetic operator
let t = 10;
let h =5;
console.log(t+h);
//unary operator
console.log(++t)
console.log(h++)
//comparison operator
let age = 18;
console.log(age>18);
// conditional statement
let kausik =19;
if(kausik>=18){
    console.log("odia toka");
}
if(kausik<18){
    console.log("child");
}
// create a traffic light system..(if-statement practise)
let color ="yellow";

if(color==="red"){
    console.log("stop!");
}
if(color==="yellow"){
    console.log("slow down");
}
if(color==="green"){
    console.log("Go")
}
// if-else if -else if
let marks =86;
if(marks>=90){
    console.log(" A grade");
}
else if(marks>=80){
    console.log("B grade");
}
else if(marks>=70){
    console.log("c grade");
}
//if-else statement
let n = 2;
if(n>4){
    console.log("TRUE");
}
else{
    console.log("FALSE");
}
// practise question..
let size ='S';
if(size=='XL'){
    console.log("price is rs.250");
}
else if(size=='L'){
    console.log("price is rs.200");
}
else if(size=='M'){
    console.log("price is rs.100");
}
else if(size=='S'){
    console.log("price is rs.50");
}
else{
    console.get("NOT FOUND");
}
//nested if-else
let result = 49;
if(result>30){
    console.log("pass");
    if(result>80){
        console.log("o grade");
    }
    else{
        console.log("A grade");
    }
}
else{
    console.log("better luck next time");
}
//logical operator(logical AND ):(AND = multiplication)
let mark = 89;
if(mark>=30 && mark>=80){ // true and true
    console.log("outstanding");
    console.log("E grade");
}
// logical OR :(OR = addition)
if(mark>=30 || mark>=99){ // true or false
    console.log("Excellent");
    console.log("A grade");

}
// logical !not(Always opposite)
let miss = 82;
if((miss>=30 && miss>=80)||!false){// true and true or always true
    console.log("miss u");
    console.log("F grade");
}
// practise question of logical operators..
let str = "apple"; // check good string or not..
if((str[0]==='a') && (str.length>3)){
    console.log("right answer");
}
else{
   console.log("wrong answer");
}
// switch statement
let value="red";
switch(value){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case  "green":
        console.log("go");
        break;
    default:
        console.log("broken light");          
}
// practise question (switch)
let day = 6;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;   
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("not availabel");                         
}
// console per show karega error and warning.

console.error("this is an error msg");
console.warn("this is a warning msg");
//prompt..(web page per show karega)
//let name1 = prompt("Enter first name");
//let name2 = prompt("Enter second name");
//console.log(`welcome : ${name1 +" "+name2}`);
//alert..(web page per show karega)
//let msg ="welcome"+name1+name2+" !";
//alert(msg);


// practise question of javascript(part 2)..
// .1
let num = 20;
if(num%10==0){
    console.log("print good");
}
else{
    console.log("print bad")
}
// .2
//let name3 = prompt("Enter user's name");
//let name4 = prompt("Enter age");
//alert(`${name3} is ${name4} years old`);
// .3
let month = 3;
switch(month){
    case 1:
        console.log("january,february,march");
        break;
    case 2:
        console.log("April,may,june");
        break;
    case 3:
        console.log("july,August,september");
        break;
    case 4:
        console.log("october,November,december");
        break;
    default:
        console.log("npt a valid month");                
}

// .4
let strig = "amirkhan";
if((strig[0]==='a')&& (strig.length>5)){
    console.log("print golden string");
}
else{
    console.log("not a golden string");
}

// .5
let k = 20;
let e = 18;
let f = 11;
if(k>e){
    if(k>f){
        console.log(k," is largest");
    }
    else{
        console.log(f," is  largest")
    }
}
    else{
        if(e>f){
            console.log(e,"is largest");
        }
        else{
            console.log(f,"is largest");
        }
    }
// .6 (solve a problem where remainder are same..)
let remain1 = 32;
let remain2 = 47852;
if(remain1%10 == remain2%10){
    console.log("both are remainder same");

}
else{
    console.log("not same");
}

