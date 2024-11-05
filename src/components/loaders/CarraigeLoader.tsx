// import React from "react";
// import "./CarraigeLoader.scss";
// import Image from "next/image";

// const CarraigeLoader = () => {

//   function addAnimation() {}

//   return (
//     <div className="carraige-loader-wrapper">
//       <Image
//         src="/images/carousel.png"
//         alt="carousel"
//         width={256.5}
//         height={132.354}
//       />

//       <div className="carraige-text-wrapper">
//         <div className="carraige-text-wrapper-item">
//           Clip, clop, clip, clop...
//         </div>
//         <div className="carraige-text-wrapper-item">
//           By-job hold your horses
//         </div>
//         <div className="carraige-text-wrapper-item">
//           Patience, good fellow. Patience.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarraigeLoader;

/* -------------------------------------------------------------------------- */

import React, { useEffect } from "react";
import "./CarraigeLoader.scss";
import Image from "next/image";

const CarraigeLoader = () => {
  // useEffect(() => {
  //   addAnimation();
  // }, []);

  // const addAnimation = () => {
  //   const scroller = document.querySelector(".carraige-text-wrapper");

  //   if (scroller && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //     const scrollerContent = Array.from(scroller.children);

  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true);
  //       duplicatedItem.setAttribute("aria-hidden", "true");
  //       scroller.appendChild(duplicatedItem);
  //     });
  //   }
  // };

  return (
    <div className="carraige-loader-wrapper">
      <Image
        src="/images/carousel.png"
        alt="carousel"
        width={256.5}
        height={132.354}
      />

      <div className="carraige-text-wrapper">
        <div className="carraige-text-wrapper-item">
          Clip, clop, clip, clop...
        </div>
        <div className="carraige-text-wrapper-item">
          By-job hold your horses
        </div>
        <div className="carraige-text-wrapper-item">
          Patience, good fellow. Patience.
        </div>
        <div className="carraige-text-wrapper-item">
          Clip, clop, clip, clop...
        </div>
        <div className="carraige-text-wrapper-item">
          By-job hold your horses
        </div>
        <div className="carraige-text-wrapper-item">
          Patience, good fellow. Patience.
        </div>
      </div>
    </div>
  );
};

export default CarraigeLoader;
