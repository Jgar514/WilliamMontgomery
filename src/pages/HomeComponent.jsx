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
      <Text color="white" position={[4.2, 1.6, 0]} fontSize={.3} anchorX="center" anchorY="middle">
        -William Montgomery
      </Text>
      <Html center zIndexRange={[100, 0]} position={[-9, 15, -3]}>
        <div
          style={{
            position: "absolute",
            width: `${window.innerWidth * .8}px`, // Multiply by 1.2
            height: `${window.innerHeight * 1}px`,
            overflow: "hidden",
            pointerEvents: "none", // Cursor won't interact with the image
            userSelect: "none",
          }}
        >
          <div
            style={{
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              width: "120%",
              height: "120%",
              backgroundImage: "radial-gradient(circle, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.5) 20%, rgba(153, 0, 0, 0.4) 30%, rgba(153, 0, 0, 0.5) 30%, rgba(23, 23, 32, 1) 40%)",




              pointerEvents: "none",
              zIndex: 3,
              opacity: .2,

            }}
          />

        </div>
      </Html>
      <Html center zIndexRange={[100, 0]} position={[-6.4, 10.3, 2]}>
        <div
          style={{
            position: "absolute",
            width: `${window.innerWidth * 1}px`, // Multiply by 1.2
            height: `${window.innerHeight * 1.1}px`,
            overflow: "hidden",
            pointerEvents: "none", // Cursor won't interact with the image
            userSelect: "none",
          }}
        >
          {/* Apply the gradient overlay using ::before pseudo-element */}
          <img
            src={Background}
            alt="Background"
            style={{
              width: "130%",
              height: "130%",
              position: "relative",
              zIndex: 1,
              opacity: 0.05,
              pointerEvents: "none", // Cursor won't interact with the image
              userSelect: "none",
            }}
          />

          <div
            style={{
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              width: "10%",
              height: "20%",
              backgroundImage: "radial-gradient(circle, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.5) 20%, rgba(153, 0, 0, 0.4) 30%, rgba(153, 0, 0, 0.5) 30%, rgba(23, 23, 32, 1) 40%)",




              pointerEvents: "none",
              zIndex: 2,
              opacity: .2,

            }}
          />

        </div>

      </Html>
    </Billboard>
  );
};

export default HomeComponent;