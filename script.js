const tabs=document.querySelectorAll('.tab-item');
const content=document.querySelectorAll('.section3');
   tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>
  {
    tabs.forEach(tab=>{tab.classList.remove('active')});
    tab.classList.add('active');
    content.forEach(content=>{content.classList.remove('active')});
  content[index].classList.add('active');
  })
   });

   let scrollTimeout;
   document.addEventListener('scroll', () => {
       clearTimeout(scrollTimeout);
       scrollTimeout = setTimeout(() => {
           const elements = document.querySelectorAll('.container2,.upper-slider,.slider,.paypal-part,.accordion,.upper-contact,.contact-part');
           elements.forEach(element => {
               const rect = element.getBoundingClientRect();
               if (rect.top <= window.innerHeight - 50) {
                   element.classList.add('visible');
               }
           });
       }, 100);
   });


   const swiper = new Swiper('.slider-wrapper', {
    loop:true,
    grabCursor:true,
    spaceBetween:50,

   pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
slidesPerView:1
    },
    620:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    },
  },
});
const form=document.getElementById('message-form')
form.addEventListener('submit',function(prevent){
  prevent.preventDefault();
});