const progressCircles = document.querySelectorAll(".autoplay-progress svg");
const videoContainers = document.querySelectorAll('.video_container');
const themeVideoContainers = document.querySelectorAll('.theme_video_container');

const videos = document.querySelectorAll('.current_video_container video');



const recommendationSwiper = new Swiper('.recommendationsSwiper', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    on: {
        autoplayTimeLeft(swiper, time, progress) {
            progressCircles[swiper.activeIndex].style.setProperty("--progress", progress);
        }
    }
});

recommendationSwiper.on('slideChange',()=>{
    progressCircles[recommendationSwiper.previousIndex].style.setProperty("--progress", 0);
});

progressCircles.forEach((elem,index)=>{
    elem.addEventListener('click',()=>{
        recommendationSwiper.slideTo(index);
    });
});

const swiper = new Swiper('.videosSwiper',{
    slidesPerView: "auto",
    spaceBetween: 26,
});


videoContainers.forEach((elem,index)=>{
    elem.addEventListener('click',()=>{
        const current_video = videos[index];
        const theme = themeVideoContainers[index];
        if(current_video.paused) {
            current_video.play()
            theme.style.opacity = 0;
        }
        else {
            current_video.pause();
            theme.style.opacity = 1;
        }
    })
})