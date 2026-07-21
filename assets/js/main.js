
const toggle=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.menu');
if(toggle&&menu){toggle.addEventListener('click',()=>menu.classList.toggle('open'));}
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());

const revealObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
