// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if(window.scrollY>50){nav.style.background="#8b5e3c";nav.style.color="white";}
  else{nav.style.background="white";nav.style.color="black";}
});

// Animate cards saat scroll
const cards=document.querySelectorAll(".card");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("show");}});
},{threshold:0.2});
cards.forEach(card=>observer.observe(card));

// Button click animation
document.querySelectorAll(".btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    btn.style.transform="scale(0.95)";
    setTimeout(()=>{btn.style.transform="scale(1)";},150);
  });
});