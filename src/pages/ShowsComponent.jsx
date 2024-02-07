import React from "react";
import { Text, Html, Billboard } from "@react-three/drei";
import Background from "../assets/william.png";
import { FaMusic } from "react-icons/fa";

const ShowsComponent = ({ isMobile }) => {
  const fontSize = isMobile ? 0.8 : 0.6;

  return (
    <>
      <Billboard>
        <Text color="white" position={isMobile ? [0, 0, 0] : [1.7, 5.0, 0]} fontSize={fontSize}>
          2/1 - IceHouse
        </Text>
        <Text color="white" position={isMobile ? [0, 0, 0] : [1.7, 3.5, 0]} fontSize={fontSize}>
          2/24 - Comedy
        </Text>
        <Html center zIndexRange={[100, 0]} position={[6.5, 5.5, 0]}>
          <div
            style={{
              position: "absolute",
              width: `${700 * .2}px`,
              height: "50px",
              pointerEvents: "none",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white", // Add this line for the border
              borderRadius: "5px", // Optional: Add this line for rounded corners
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* FaMusic Icon */}

            <span style={{ fontSize: "16px", color: "white" }}>Buy Tickets</span>
          </div>

        </Html>
        <Html center zIndexRange={[100, 0]} position={[6.5, 4, 0]}>
          <div
            style={{
              position: "absolute",
              width: `${700 * .2}px`,
              height: "50px",
              pointerEvents: "none",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white", // Add this line for the border
              borderRadius: "5px", // Optional: Add this line for rounded corners
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* FaMusic Icon */}

            <span style={{ fontSize: "16px", color: "white" }}>Buy Tickets</span>
          </div>

        </Html>
      </Billboard>
    </>
  );
};

export default ShowsComponent;
