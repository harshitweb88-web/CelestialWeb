/* LOADER */

window.addEventListener("load",()=>{
  setTimeout(()=>{
    document.getElementById("loader").classList.add("hide");
  },2400);
});


/* STAR FIELD */

const stars=document.getElementById("stars");

for(let i=0;i<220;i++){

  const s=document.createElement("i");

  s.className="star";

  s.style.left=Math.random()*100+"%";
  s.style.top=Math.random()*100+"%";

  const size=Math.random()*2+0.4;

  s.style.width=size+"px";
  s.style.height=size+"px";

  s.style.animationDelay=Math.random()*5+"s";
  s.style.animationDuration=(2+Math.random()*5)+"s";

  stars.appendChild(s);
}


/* CURSOR */

const cursor=document.querySelector(".cursor");
const ring=document.querySelector(".cursor-ring");

let mx=0;
let my=0;
let rx=0;
let ry=0;

document.addEventListener("mousemove",(e)=>{

  mx=e.clientX;
  my=e.clientY;

  cursor.style.left=mx+"px";
  cursor.style.top=my+"px";

});

function cursorLoop(){

  rx+=(mx-rx)*0.12;
  ry+=(my-ry)*0.12;

  ring.style.left=rx+"px";
  ring.style.top=ry+"px";

  requestAnimationFrame(cursorLoop);
}

cursorLoop();


/* MOBILE MENU */

const menu=document.getElementById("menu");
const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

  nav.classList.toggle("open");

  menu.textContent=
    nav.classList.contains("open")
    ?"×"
    :"☰";

});

document.querySelectorAll(".nav-links a")
.forEach(link=>{

  link.addEventListener("click",()=>{

    nav.classList.remove("open");
    menu.textContent="☰";

  });

});


/* CINEMATIC REVEAL */

const reveals=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver(
(entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    }

  });

},
{
  threshold:0.12
});

reveals.forEach(el=>observer.observe(el));


/* HERO PARALLAX */

const hero=document.querySelector(".hero");
const earth=document.querySelector(".earth-system");
const orbitBig=document.querySelector(".orbit-big");

document.addEventListener("mousemove",(e)=>{

  if(!hero)return;

  const x=(e.clientX/window.innerWidth-.5);
  const y=(e.clientY/window.innerHeight-.5);

  earth.style.transform=
    `translateY(-50%) translate(${x*16}px,${y*12}px)`;

  orbitBig.style.transform=
    `translate(${x*-20}px,${y*-12}px) rotate(25deg)`;

});


/* BUTTON MAGNET */

document.querySelectorAll(
".btn,.contact-btn,.brand"
).forEach(btn=>{

  btn.addEventListener("mousemove",(e)=>{

    const r=btn.getBoundingClientRect();

    const x=e.clientX-r.left-r.width/2;
    const y=e.clientY-r.top-r.height/2;

    btn.style.transform=
      `translate(${x*.08}px,${y*.08}px)`;

  });

  btn.addEventListener("mouseleave",()=>{

    btn.style.transform="";

  });

});


/* PROJECT CLICK FEEDBACK */

document.querySelectorAll(".project")
.forEach(project=>{

  project.addEventListener("click",()=>{

    project.animate(
      [
        {transform:"scale(1)"},
        {transform:"scale(.985)"},
        {transform:"scale(1)"}
      ],
      {
        duration:420,
        easing:"cubic-bezier(.2,.8,.2,1)"
      }
    );

  });

});


/* YEAR */

document.getElementById("year").textContent=
new Date().getFullYear();


/* SMOOTH ANCHOR */

document.querySelectorAll('a[href^="#"]')
.forEach(a=>{

  a.addEventListener("click",(e)=>{

    const target=document.querySelector(
      a.getAttribute("href")
    );

    if(target){

      e.preventDefault();

      target.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

    }

  });

});
