import React from "react";
import { Billboard, Text, Html } from "@react-three/drei";
import Background from "../assets/williamgold.jpg";
import PoppinsFont from "/fonts/Poppins-Black.ttf";
import BioIcons from "../components/BioIcons";


const MobileAbout = ({ isMobile, handleResetToHome }) => {
  const textStyle = {
    color: "white",
    fontSize: "14px",
    fontFamily: "Poppins", // Set your font-family here
    marginLeft: "5px",
    whiteSpace: "nowrap",
  };
  const fixedIconSize = 17;
  const flexDirection = "row";
  const iconGap = "5px";
  return (
    <Billboard>

      <BioIcons
        position={[-1.3, 12.9, 0]}
        isMobile={isMobile}
        iconSize={fixedIconSize}
        flexDirection={flexDirection}
        iconGap={iconGap}
        textStyle={textStyle} // Pass the iconGap prop
      />
      <Text font={PoppinsFont} position={[1.5, 13.2, 0]} fontSize={.4} color="red" >
        'The Big Red Machine'
      </Text>
      <Text font={PoppinsFont} position={[1.5, 11.6, 0]} fontSize={.28} color="white" >
        Longest Running Regular on the
      </Text>
      <Text font={PoppinsFont} position={[1.5, 11.2, 0]} fontSize={.28} color="white" >
        #1 Live Podcast
      </Text>
      <Text font={PoppinsFont} position={[1.5, 10.7, 0]} fontSize={.35} color="red" >
        KILL TONY
      </Text>
      <Text font={PoppinsFont} position={[1.5, 9.9, 0]} fontSize={.28} color="white" >
        The Star of his Very Own Podcast
      </Text>

      <Text font={PoppinsFont} position={[1.5, 9.4, 0]} fontSize={.35} color="yellow" >
        The William Montgomery Show!
      </Text>
     

      <Text font={PoppinsFont} position={[.1, 5.9, 0]} fontSize={.6} color="red" onClick={handleResetToHome}>
        BACK
      </Text>

      {/* Add more Text elements as needed */}


      <Html center zIndexRange={[100, 0]} position={[-7.8, 15.5, 0]}>
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
              opacity: 0.09,
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
              backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(255, 0, 0, .7) 30%, rgba(0, 0, 0, 1) 90%)",
              // Adjust the color stops accordingly
              pointerEvents: "none",
              zIndex: 2,
              opacity: 0.09,
            }}
          />
        </div>

      </Html>
    </Billboard >

  );
};

export default MobileAbout;