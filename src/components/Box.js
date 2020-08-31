import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Box = (props) => {
  const slider = useRef(null);

  const sliderSettings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: false,
    infinite: false,
  };
  return (
    <div className="rounded-md bg-white p-2 shadow-md max-w-full w-3/6">
      this is the box
      <div className="overflow-hidden">
        <Slider ref={slider} {...sliderSettings}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </Slider>
      </div>
      <div onClick={(e) => slider.current.slickGoTo(2)}>
        click me to go to slide 3
      </div>
    </div>
  );
};

// class Box extends React.Component {
//   render() {
//     const sliderSettings = {
//       slidesToScroll: 1,
//       slidesToShow: 1,
//       draggable: false,
//       infinite: false,
//     };
//     return (
//       <div className="rounded-md bg-white p-2 shadow-md max-w-full w-3/6">
//         this is the box
//         <div className="overflow-hidden">
//           <Slider ref={(slider) => (this.slider = slider)} {...sliderSettings}>
//             <div>1</div>
//             <div>2</div>
//             <div>3</div>
//             <div>4</div>
//           </Slider>
//         </div>
//         <div onClick={(e) => this.slider.slickGoTo(2)}>
//           click me to go to slide 3
//         </div>
//       </div>
//     );
//   }
// }

export default Box;
