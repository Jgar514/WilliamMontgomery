import React from "react";
import { Billboard, Text, Html } from "@react-three/drei";
import Background from "../assets/william.png";
import PoppinsFont from "/fonts/Poppins-Black.ttf";


const MobileHome = ({ isMobile }) => {

  return (
    <Billboard>


      {/* Add more Text elements as needed */}

      <Html center zIndexRange={[100, 0]} position={[-7, 16.6, 0]}>
        <div
          style={{
            position: "absolute",
            width: `${window.innerWidth * 1.6}px`, // Multiply by 1.2
            height: `${window.innerHeight * 1.3}px`, // Multiply by 1.2
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {/* Apply the gradient overlay using ::before pseudo-element */}
          <img
            src={Background}
            alt="Background"
            style={{
              width: "120%", // Increase the width to zoom in
              height: "100%", // Increase the height to zoom in
              position: "relative",
              zIndex: 1,
              opacity: 0.13,
              top: "-10%", // Shift the image up by 10%
            }}
          />
          <div
            style={{
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "112%",
              backgroundImage: "radial-gradient(circle, rgba(255, 0, 0, .5) 0%, rgba(255, 0, 0, .5) 20%, rgba(153, 0, 0, 0.5) 30%, rgba(153, 0, 0, 0.5) 30%, rgba(0, 0, 0, .5) 40%, rgba(23, 23, 32, .7) 90%)"
              ,


              pointerEvents: "none",
              zIndex: 1,
              opacity: .3,
              transform: "translate(20px, -210px)",
            }}
          />




        </div>

      </Html>


    </Billboard >

  );
};

export default MobileHome;