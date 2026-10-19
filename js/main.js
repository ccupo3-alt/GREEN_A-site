// 상품 스와이퍼
const proSwiper = new Swiper(".productSwiper" , {
    // slidesPerView: 3;
    // spaceBetween: 24, // 슬라이드 사이의 여백, 브레이크 포인트 작업 하면서 주석 처리함
    loop: true,
    // 반응형
    breakpoints: {
        0:{
            slidesPerView: 1.3,
            spaceBetween: 15
        },
        390:{
            slidesPerView: 2.3,
            spaceBetween: 15
        },
        768:{
            slidesPerView: 3.3,
            spaceBetween: 15
        }
    }
})
// 모바일 메뉴
const hambar = document.querySelector("#hamburger")
const mbMenu = document.querySelector("#mobile-menu")
const overlay = document.querySelector(".overlay")
hambar.addEventListener("click",()=>{
    mbMenu.classList.add("active");
    overlay.classList.add("active");
    hambar.classList.add("active");
    // 오버레이 상태에서 스크롤 잠금
    document.body.style.overflow = "hidden";
});
overlay.addEventListener("click" , ()=>{
    mbMenu.classList.remove("active");
    overlay.classList.remove("active");
    hambar.classList.remove("active");
    // 다시 스크롤 생성
    document.body.style.overflow = "";
})