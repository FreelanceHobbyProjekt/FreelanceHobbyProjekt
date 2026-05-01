const elements=document.querySelectorAll(".reveal");

function show(){
const trigger=window.innerHeight*0.85;
elements.forEach(el=>{
if(el.getBoundingClientRect().top<trigger){
el.classList.add("show");
}});
}

window.addEventListener("scroll",show);
window.addEventListener("load",show);

// loader
window.addEventListener("load",()=>{
const loader=document.getElementById("loader");
setTimeout(()=>{
loader.style.opacity="0";
setTimeout(()=>loader.style.display="none",500);
},800);
});

// burger
const burger=document.getElementById("burger");
const navLinks=document.getElementById("navLinks");

burger?.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});

// typing
const text="FHP – Freelance Hobby Projekt";
let i=0;

function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text[i++];
setTimeout(typing,80);
}}
window.addEventListener("load",typing);

// cursor
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});
