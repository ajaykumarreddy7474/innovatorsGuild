let menuBtn=document.getElementById('menu-btn');
let menuClose=document.getElementById('menu-close');
let navitemsMobile=document.querySelector('.navitems-mobile');

menuBtn.addEventListener('click',()=>{
  navitemsMobile.style.display='block'
})
menuClose.addEventListener('click',()=>{
  navitemsMobile.style.display='none'
})
/* ------------------------------------ - ----------------------------------- */
let expertCards = document.querySelectorAll('.expert-card');

expertCards.forEach((expertCard) => {
  expertCard.addEventListener('mouseenter', () => {
    expertCard.classList.add('active');
  });

  expertCard.addEventListener('mouseleave', () => {
    expertCard.classList.remove('active');
  });
});
/* ------------------------------------ - ----------------------------------- */

