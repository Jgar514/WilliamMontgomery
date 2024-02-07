import React from "react";
import { Billboard, Text, Html } from "@react-three/drei";
import Background from "../assets/william.png";
import PoppinsFont from "/fonts/Poppins-Black.ttf";

const HomeComponent = ({ isMobile }) => {
  if (isMobile) {
    // If it's mobile, don't render the component
    return null;
  }



  return (
    <Billboard>
      <Text color="white" position={[4.2, 5, 0]} fontSize={isMobile ? 0.6 : 0.7} anchorX="center" anchorY="middle">
        Hi y’all, so nice that you take the

      </Text>
      <Text color="white" position={[4.2, 4.2, 0]} fontSize={isMobile ? 0.6 : 0.7} anchorX="center" anchorY="middle">
        time and visit my website.

      </Text>
      <Text color="white" position={[4.2, 2.2, 0]} fontSize={isMobile ? 0.6 : 0.4} anchorX="center" anchorY="middle">
        'This is probably my best website'
      </Text>
      <Text color="white" position={[4.2, 1.6, 0]} fontSize={isMobile ? 0.6 : 0.3} anchorX="center" anchorY="middle">
        -William Montgomery
      </Text>
      <Html center zIndexRange={[100, 0]} position={[-5, 13.5, 0]}>
        <div
          style={{
            position: "absolute",
            width: isMobile ? `${370 * 1.5}px` : `${700 * 1.5}px`, // Adjust the factor as needed
            height: isMobile ? `${370 * 1.5}px` : `${700 * 1.5}px`, // Adjust the factor as needed
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
              opacity: 0.06,
            }}
          />
          <div
            style={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "linear-gradient(to right, rgba(255, 0, 0, 0) 0%, rgba(255, 0, 0, 1) 48%, rgba(0, 0, 0, 1) 100%)",
              // Adjust the color stops accordingly
              pointerEvents: "none",
              zIndex: 2,
              opacity: 0.07,
            }}
          />

        </div>

      </Html>
    </Billboard>
  );
};

export default HomeComponent;