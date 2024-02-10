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
      <Html center zIndexRange={[100, 0]} position={[-3.2, 13.3, 0]}>
        <div
          style={{
            position: "absolute",
            width: `${700 * 1.8}px`, // Adjust the factor as needed
            height: `${700 * 1.8}px`, // Adjust the factor as needed

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
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 1,
              opacity: 0.08,
              pointerEvents: "none", // Cursor won't interact with the image
              userSelect: "none",
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
              pointerEvents: "none", // Cursor won't interact with the image
              userSelect: "none",
              zIndex: 2,
              opacity: 0.1,
            }}
          />

        </div>

      </Html>
    </Billboard>
  );
};

export default HomeComponent;