let div=document.createElement("div");
//div.style.backgroundColor="yellow";
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);
//for active case
let Active=document.createElement("div");
Active.setAttribute("id","Active");
let Recovered=document.createElement("div");
Recovered.setAttribute("id","Recovered");
let Deaths=document.createElement("div");
Deaths.setAttribute("id","Death");
div.append(input,button,Active,Recovered,Deaths);
document.body.append(div);
 async function foo(){
    let countryname=document.getElementById("country").value;
    console.log(countryname);
    let url=`https://api.covid19api.com/dayone/country/${countryname}`;
    let res=await fetch(url);
    let res1=await res.json();
    console.log(res1);
    let index=res1.length-1;
    console.log(res1[index].Active);
    console.log(res1[index].Recovered);
    console.log(res1[index].Deaths);
    Active.innerHTML=`Total Active Cases:${res1[index].Active}`;
    Recovered.innerHTML=`Total Active Cases:${res1[index].Recovered}`;
    Deaths.innerHTML=`Total Active Cases:${res1[index].Deaths}`;
}