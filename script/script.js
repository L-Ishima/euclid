var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('.line-1').classList.toggle('line-active-1')
    document.querySelector('.line-2').classList.toggle('line-active-2')
    document.querySelector('.line-3').classList.toggle('line-active-3')
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelectorAll('.faq-item').forEach(function(el) {
    
    el.addEventListener('click', function() {
      
      el.querySelector('.faq-item-bg').classList.toggle('faq-active')
       
    
    })
    
  })
})