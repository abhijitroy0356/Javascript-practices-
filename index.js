// let f=0
// function fun(){
//     f++
//     document.querySelector('#ff').innerHTML=f
// }
// function fun1(){
//     f--
//     if(f<0){
//        f=0
//     }
//     document.querySelector('#ff').innerText=f
// }
// function fun2(){
//     document.querySelector('#fff').innerHTML=f
// }

// function fun4(){
//   let f=document.getElementById('name').value
//   document.getElementById('idk').innerHTML=f
//   if(f===document.getElementById('idk').innerHTML){
//     document.getElementById('idk').innerHTML=document.getElementById('idk').innerHTML+"9"
//   }
// }
// function fun5(){
//     let f=document.getElementById('num').value
//     document.getElementById('mod').innerHTML=f
// }
// function fun6(){
//     document.getElementById('prev').innerHTML+=f +" - "
//     f=0
//     document.getElementById('ff').innerHTML=0
// }
// function error(){
//     document.getElementById('uk').innerHTML="there is some problem"

// }
// let first=eval(document.getElementById('num1').value);
// let second=eval(document.getElementById('num2').value);
// function sum(){
//     document.getElementById('ans').innerHTML=first+second
// }
// function subtract(){
    
//     document.querySelector('#ans').innerHTML=first-second
// }
// function multiply(){
//     let 
// }
// let firstcard= Math.random()*10
// let secondcard=Math.random()*10
// function sum(){
//     document.getElementById('ans').innerHTML=firstcard+secondcard
// }
// function result(){
// let arr=[];
// let b= eval(document.getElementById('num1').value);
// let c= eval(document.getElementById('num2').value);
// arr.push(b)
// arr.push(c)
// let d=b+c;
// if(d>21){
//     document.querySelector('#ans').innerHTML="better luck next"
// }else if(d===21){
//     document.querySelector('#ans').innerHTML="congratulation"

// }
// else {
//     document.querySelector('#ans').innerHTML="wanna add more ?"
// }
// for(var i=0;i<arr.length;i++){
//     let a= arr[i].toString()
//     document.querySelector('#ans1').innerHTML+=a+" ";
// }
// }

// function kk(){
//     document.querySelector('#num1').value=""
//     document.querySelector('#num2').value=""
//     document.querySelector('#ans1').value=""
// }
// function esse(){
//     let a =document.querySelector("convo").value;
//     document.getElementById('ll').innerHTML+=a;
//     console.log(a)
// }
// let arr1=["hello","my","name","is","abhijit","roy"]
// let ref=document.getElementById("ans")
// for(let i=0;i<arr1.length;i++){
//         ref.textContent+=arr1[i]+" ";
//     }
let a=Math.floor(Math.random()*100);
let b=Math.floor(Math.random()*100);
let c=a+b;
console.log(c)
function start(){
if(c>=55 && c<= 110){
    document.querySelector('condition').innerHTML=" want more to add ?"
}
else if(c>=110 && c<=200){
    document.querySelector('condition').innerHTML=" better luck next time"
}
else{
    document.querySelector('condition').innerHTML=" you win"
}
}
function newcard(){
    c+=Math.floor(Math.random()*10);
    start();sss
}
