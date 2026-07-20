
const toggle=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.menu');
if(toggle&&menu){toggle.addEventListener('click',()=>menu.classList.toggle('open'));}
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
