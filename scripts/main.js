function navbtn() {
    const mobileNavMenu = document.getElementById("mobile-nav-menu");
    mobileNavMenu.classList.remove("hidden");
}

function closeNav(){
    const mobileNavMenu = document.getElementById("mobile-nav-menu");
    mobileNavMenu.classList.add("hidden");
}


// owl carousel
$(document).ready(function(){
  $("#carousel").owlCarousel({
    loop: true,
    margin: 48,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 700,
    responsive:{
      0:{ items: 1 },
      640:{ items: 3 },
      768:{ items: 4 },
      1024:{ items: 5 }
    }
  });
});





// const carousel = document.querySelector("#carousel")

// window.addEventListener("load", () =>{
//   setInterval(() => {
//     const firstItem = carousel.firstElementChild;

//     const itemWidth = firstItem.getBoundingClientRect().width;
//     const gap = parseFloat(getComputedStyle(carousel).columnGap || 0);
//     const totalMove = itemWidth + gap

//     carousel.style.transition = "transform 0.7s linear";
//     carousel.style.transform = `translateX(-${totalMove}px)`;

//     setTimeout(()=>{
//       carousel.style.transition = "none";
//       carousel.appendChild(firstItem);
//       carousel.style.transform = "translateX(0)";
//       carousel.offsetHeight;
//     },700)



//     console.log(itemWidth);  
//     console.log(gap);
//     console.log(totalMove);
//   }, 2000)
// })




// document.getElementById("btnn").addEventListener("click", function(){
//   // console.log(itemWidth);
// })





// const carousel = document.getElementById("carousel");

// window.addEventListener("load", () => {
//   setInterval(() => {
//     const firstItem = carousel.firstElementChild;

//     // Get exact width including gap automatically
//     const itemWidth = firstItem.getBoundingClientRect().width;
//     const gap = parseFloat(getComputedStyle(carousel).columnGap || 0);
//     const totalMove = itemWidth + gap;

//     // Animate left
//     carousel.style.transition = "transform 150s linear";
//     carousel.style.transform = `translateX(-${totalMove}px)`;

//     setTimeout(() => {
//       // Reset instantly
//       carousel.style.transition = "none";
//       carousel.style.transform = "translateX(0)";
//       carousel.appendChild(firstItem);

//       // Force reflow to apply reset cleanly
//       carousel.offsetHeight;
//     }, );

//   }, );
// });





// const carousel = document.getElementById("carousel");
// const firstItem = carousel.firstElementChild;
// const width = firstItem.getBoundingClientRect().width;

// const style = getComputedStyle(carousel);

// // function ckck(){
// //   if(style.display === "flex"){
// //     carousel.classList.remove("flex");
// //     carousel.classList.add("grid");

// //     // const convertedStyle = 
// //   }
// // }

// function dblClick(){
//   if(style.display === "flex"){
//     carousel.classList.remove("flex");
//     carousel.classList.add("hidden");
//   }
// }


// // const grid = getComputedStyle(carousel)
// // console.log(style.backgroundColor);
// // console.log(style.display)

// // console.log(width);