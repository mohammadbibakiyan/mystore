import { useEffect } from "react";

const ProductSlider = () => {
  let pressed = false;
  let startX;
  let x;
  let prevs = 0;
  let slider;
  let innerSlider; 
  useEffect(()=>{
    slider = document.getElementsByClassName("slider")[0];
    innerSlider = document.getElementsByClassName("inner-slider")[0];
  },[])

  const mouseDown = (e) => {
    pressed = true;
    startX = e.clientX;
  };
  const mouseMove = (e) => {
    e.preventDefault();
    if (!pressed) return;
    x = e.clientX;
    const right = +getComputedStyle(innerSlider).right.slice(0, -2);
    const widthInner = +getComputedStyle(innerSlider).width.slice(0, -2);
    const widthContainer = +getComputedStyle(slider).width.slice(0, -2);
    if (startX - x > prevs) {
      if (right >= 0) return;
      innerSlider.style.right = `${right + 5}px`;
    }
    if (startX - x < prevs) {
      if (right <= widthContainer - widthInner) return;
      innerSlider.style.right = `${right - 5}px`;
    }
    prevs = startX - x;
  };
  const mouseUp = () => {
    pressed = false;
  };
  const mouseLeave = () => {
    pressed = false;
  };

  return (
    <div
      className="slider h-80 w-full relative overflow-hidden overflow-x-scroll scrollbar-hide mt-10"
      onMouseDown={mouseDown}
      onMouseLeave={mouseLeave}
      onMouseUp={mouseUp}
    >
      <div className="inner-slider overflow-hidden h-80 flex absolute gap-1 bg-primary-700 p-1 rounded-xl px-3" onMouseMove={mouseMove}>
        <div className="min-w-80">
          <img src="/images/home/amazing-typo.svg" className="w-28" />
          <img src="/images/home/general.png" className="w-52" />
        </div>
        <div className="min-w-80 flex flex-col items-center justify-center bg-white">
          <img src="/images/home/1.jpg" className="w-52" />
          <div>
            <span>9199000 تومان</span>
          </div>
        </div>
        <div className="min-w-80 flex flex-col items-center justify-center bg-white">
        <img src="/images/home/1.jpg" className="w-52" />
        <div>
          <span>9199000 تومان</span>
        </div>
        </div>
        <div className="min-w-80 flex flex-col items-center justify-center bg-white">
            <img src="/images/home/1.jpg" className="w-52" />
            <div>
            <span>9199000 تومان</span>
            </div>
        </div>
        <div className="min-w-80 flex flex-col items-center justify-center bg-white">
            <img src="/images/home/1.jpg" className="w-52" />
            <div>
            <span>9199000 تومان</span>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ProductSlider;
