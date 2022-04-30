import { useEffect } from "react";

const Slider=(props)=>{
    let slideIndex = 1;
    useEffect(()=>{
        showSlides(slideIndex);
        // setInterval(()=>{next()},10000);
    },[])

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slides")[0].children;
        let dots = document.getElementsByClassName("dots")[0].children;
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = "inline-block w-2 h-2 mx-1 opacity-30 rounded-full bg-white";
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className = " inline-block w-4 h-2 mx-1 rounded-full bg-white transition-all duration-500";
    }

    const next=()=>{
        slideIndex++;
        showSlides(slideIndex);
    }
    
    const back=()=>{
        slideIndex--;
        showSlides(slideIndex);
    }

    return(
        <div className="relative">

            <div className="absolute top-3/4 right-7 w-16 h-16 md:flex justify-center hidden items-center pointer-cursor rounded-full bg-white" onClick={back}>
                <img src="./icons/arrow-forward.svg" className="w-10 h-10"/>
            </div>

            <div className="flex slides overflow-hidden">
                {props.items.map(e=><img src={e}/>)}
            </div>

            <div className="absolute transform top-3/4 right-28  rotate-180 hidden w-16 h-16 md:flex justify-center items-center pointer-cursor rounded-full  bg-white" onClick={next}>
                <img src="./icons/arrow-forward.svg" className="w-10 h-10"/>
            </div>

            <div className="absolute bottom-0 transform right-16 dots ">
                {props.items.map((e,i)=><span></span>)}
            </div>
        </div>
    )
}
export default Slider;