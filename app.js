// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// targeting the required html classes

const btn =document.querySelector(".switch-btn");
const video=document.querySelector(".video-container");
const preLoader =document.querySelector(".preloader");



// adding eventlistner to window to show preLoader Image

window.addEventListener("load",function(){
preLoader.classList.add("hide-preloader");
})



// pause and play on clicking the button

btn.addEventListener("click",function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide")
        video.pause();
    }else{
        btn.classList.remove("slide");
        video.play();
    }
})