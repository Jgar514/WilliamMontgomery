import React from "react";
import { Billboard, Text, Html } from "@react-three/drei";
import Background from "../assets/williamgold.jpg";
import PoppinsFont from "/fonts/Poppins-Black.ttf";
import BioIcons from "../components/BioIcons";

const AboutComponent = ({ isMobile }) => {
  const position = [4.2, 5.0, 0];
  const fontSize = isMobile ? 0.8 : 0.8;

  const fixedIconSize = 35;
  return (
    <Billboard>

      <BioIcons
        position={[-.5, 7.4, 0]}  // Adjust the position based on your layout
        isMobile={isMobile}
        iconSize={fixedIconSize}  // Adjust the size based on your layout
      />




      <Text color="red" position={[4.0, 7.8, 0]} fontSize={isMobile ? 0.6 : 0.65} anchorX="center" anchorY="middle">
        “The Big Red Machine”
      </Text>
      <Text color="white" position={[4.2, 5.9, 0]} fontSize={0.4} anchorX="center" anchorY="middle">
        Longest Running Regular on #1 Live Podcast
      </Text>
      <Text font={PoppinsFont} color="red" position={[3.8, 5.4, 0]} fontSize={isMobile ? 0.6 : 0.5} anchorX="center" anchorY="middle">
        KILL TONY
      </Text>

      <Text color="white" position={[4.2, 4.4, 0]} fontSize={isMobile ? 0.6 : 0.4} anchorX="center" anchorY="middle">
        The Star of His Very Own Podcast
      </Text>
      <Text font={PoppinsFont} color="yellow" position={[4.2, 3.8, 0]} fontSize={isMobile ? 0.6 : 0.5} anchorX="center" anchorY="middle">
        The William Montgomery Show!
      </Text>
      <Html center zIndexRange={[100, 0]} position={[-17, 13.5, 0]}>
        <div
          style={{
            position: "absolute",
            width: `${700 * 1.5}px`, // Adjust the factor as needed
            height: `${700 * 1.5}px`, // Adjust the factor as needed
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
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: isMobile
                ? "linear-gradient(to bottom, rgba(255, 0, 0, 0) 10%, rgba(255, 0, 0, 1) 25%, rgba(255, 0, 0, 0) 80%)"
                : "linear-gradient(to right, rgba(0, 0, 0, 0) 20%, rgba(255, 0, 0, 1) 48%, rgba(0, 0, 0, 0) 100%)",
              // Adjust the color stops accordingly
              pointerEvents: "none",
              zIndex: 2,
              opacity: 0.1,
            }}
          />
        </div>

      </Html>
    </Billboard >

  );
};

export default AboutComponent;
