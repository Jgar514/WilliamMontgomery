import React from "react";
import { Billboard, Text, Html } from "@react-three/drei";

import PoppinsFont from "/fonts/Poppins-Black.ttf";

const MobileShows = ({ isMobile, handleResetToHome }) => {

  return (
    <Billboard>

      <Text font={PoppinsFont} position={[.8, 10.6, 0]} fontSize={.4} color="red" >
        2/1 - IceHouse
      </Text>
      <Text font={PoppinsFont} position={[.9, 9.5, 0]} fontSize={.4} color="red" >
        2/24 - Comedy
      </Text>
      <Text font={PoppinsFont} position={[0, 6, 0]} fontSize={.6} color="yellow" onClick={handleResetToHome}>
        BACK
      </Text>

      {/* Tickets Button*/}
      <Html center zIndexRange={[100, 0]} position={[3, 10.9, 0]}>
        <div
          style={{
            position: "absolute",
            width: `${350 * .2}px`,
            height: "40px",
            pointerEvents: "none",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid white",
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <span style={{ fontSize: "16px", color: "white" }}>Tickets</span>
        </div>
      </Html>
      <Html center zIndexRange={[100, 0]} position={[3, 9.8, 0]}>
        <div
          style={{
            position: "absolute",
            width: `${350 * .2}px`,
            height: "40px",
            pointerEvents: "none",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid white",
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <span style={{ fontSize: "16px", color: "white" }}>Tickets</span>
        </div>
      </Html>
      <Html center zIndexRange={[100, 0]} position={[-4.5, 16, 0]}>
        <div
          style={{
            position: "absolute",
            width: `${700 * 1}px`,
            height: `${700 * 1}px`,
            pointerEvents: "none",
            overflow: "hidden",
          }}

        >
          <div
            style={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "radial-gradient(circle at center, white 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 2,
              opacity: 0.2,
            }}
          />
        </div>

      </Html>
    </Billboard >

  );
};

export default MobileShows;