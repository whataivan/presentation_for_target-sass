const slider = document.querySelector(".swiper");

const swiper = new Swiper(slider, {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "5",
    autoplay: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
        
      el: ".swiper-pagination",
      clickable: true,
    },
  });



// const swiper = new Swiper(slider, {
//   direction: "horizontal",
//   loop: true,
//   centeredSlides: true,
//   grabCursor: true,
//   initialSlide: 5,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     320: {
//       spaceBetween: 300,
//       speed: 500,
//       grabCursor: true,
//       loop: true,
//       slidesPerView: 1,
//       pagination: {
//         el: ".swiper-pagination",
//         type: "bullets",
//         clickable: true,
//       },
//     },

//     768: {
//       slidesPerView: 3,
//       spaceBetween: 0,
//       loop: true,
//       slideToClickedSlide: true,
//       centeredSlides: true,
//       grabCursor: true,
//     },

//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//       slideToClickedSlide: true,
//       grabCursor: true,
//       loop: true,
//     },
//   },
// });