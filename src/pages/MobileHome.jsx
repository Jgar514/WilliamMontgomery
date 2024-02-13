import React from "react";
import { Billboard, Text, Html } from "@react-three/drei";
import Background from "../assets/william.jpg";
import PoppinsFont from "/fonts/Poppins-Black.ttf";


const MobileHome = ({ isMobile }) => {

  return (
    <Billboard>


      {/* Add more Text elements as needed */}

      <Html center zIndexRange={[100, 0]} position={[-6, 18.6, 0]}>
        <div
          style={{
            position: "absolute",
            width: `${window.innerWidth * 1.3}px`, // Multiply by 1.2
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
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 1,
              opacity: 0.08,
            }}
          />
          <div
            style={{
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              width: "90%",
              height: "122%",
              backgroundImage: "radial-gradient(circle, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.5) 20%, rgba(153, 0, 0, 0.4) 30%, rgba(153, 0, 0, 0.5) 30%, rgba(0, 0, 0, 1) 40%)",


              pointerEvents: "none",
              zIndex: 2,
              opacity: .2,
              transform: "translate(20px, -190px)",
            }}
          />




        </div>

      </Html>


    </Billboard >

  );
};

export default MobileHome;