// let b= document.getElementById('show');
// function fun(){
//     let a = Math.floor(Math.random()*10)+1;
//     b.innerHTML+=a+" ";
// }
   
    let answer=document.getElementById('ans');
    let refa=document.getElementById('cards');
    let c;
    let results={
        winnner:"congratulation",
        loser:"lose",
        try:"add more"
    }
function fun1(){
    let a = Math.floor(Math.random()*100);
    let be = Math.floor(Math.random()*100);
    let c=a+be;
    refa.innerHTML+=a+" ";
    refa.innerHTML+=be+" ";
    if(c>200){
        c=0;
    }
    if(c>=50 && c<=120){
        answer.innerHTML=results.winnner;
    }
    else if(c>=120 && c<=200){
        answer.innerHTML=results.loser;
    }
    else{
        answer.innerHTML=results.try
    }
}
function fun2(){
    let d=Math.floor(Math.random()*100);
    c+=d
    if(c>200){
       c=0;
    }
    if(c>=50 && c<=120){
        answer.innerHTML=results.winnner
    }
    else if(c>=120 && c<=200){
        answer.innerHTML=results.loser
    }
    else{
        answer.innerHTML=result.try
    }
    refa.innerHTML+=d+" ";
}
let airbnbcastle={
    name:"rain castle",
    booking:"true",
    contact:32893274,
    facilities:["wifi","breakfast","view"],
    garden:"park type",
    price:3000
}

answer.innerHTML=airbnbcastle.name
refa.innerHTML=airbnbcastle.booking