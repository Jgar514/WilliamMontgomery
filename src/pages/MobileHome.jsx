import React from "react";
import { Billboard, Text, Html } from "@react-three/drei";
import Background from "../assets/william.jpg";
import PoppinsFont from "/fonts/Poppins-Black.ttf";

const MobileHome = ({ isMobile }) => {

  return (
    <Billboard>


      {/* Add more Text elements as needed */}

      <Html center zIndexRange={[100, 0]} position={[-11, 18, 0]}>
        <div
          style={{
            position: "absolute",
            width: `${700 * 1.2}px`, // Adjust the factor as needed
            height: `${700 * 1.2}px`, // Adjust the factor as needed
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
              opacity: 0.1,
            }}
          />
          <div
            style={{
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundImage: "radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 1) 20%, rgba(153, 0, 0, 1) 30%, rgba(153, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 40%)",
              pointerEvents: "none",
              zIndex: 2,
              opacity: 0.1,
              transform: "translate(20px, -120px)",
            }}
          />




        </div>

      </Html>
    </Billboard >

  );
};

export default MobileHome;