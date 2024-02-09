import React from "react";
import { Billboard, Text, Html } from "@react-three/drei";
import PoppinsFont from "/fonts/Poppins-Black.ttf";

const MobileShows = ({ isMobile, handleResetToHome }) => {
  // Function to handle showing the first ticket link


  // Function to handle showing the second ticket link
  const show1 = () => {
    window.open(
      "https://detroit.houseofcomedy.net/attraction/william-montgomery",
      "_blank"
    );
  };

  const show2 = () => {
    // Define action for show 2
    console.log("Show 2 tickets clicked");
    window.open("https://www.spokanecomedyclub.com/events/86588", "_blank");
  };

  // Function to handle showing the third ticket link
  const show3 = () => {
    // Define action for show 3
    console.log("Show 3 tickets clicked");
    window.open("https://www.louisvillecomedy.com/events/86589", "_blank");
  };

  return (
    <Billboard>
      <Text font={PoppinsFont} position={[0, 11.6, 0]} fontSize={.3} color="red">
        2/23-24
      </Text>
      <Text font={PoppinsFont} position={[.9, 11.2, 0]} fontSize={.3} color="white">
        Detroit House of Comedy
      </Text>
      <Text font={PoppinsFont} position={[0, 10.5, 0]} fontSize={.3} color="red">
        2/29-3/2
      </Text>
      <Text font={PoppinsFont} position={[.8, 10.1, 0]} fontSize={.3} color="white">
        Spokane Comedy Club
      </Text>
      <Text font={PoppinsFont} position={[-.2, 9.4, 0]} fontSize={.3} color="red">
        3/7-9
      </Text>
      <Text font={PoppinsFont} position={[.9, 9, 0]} fontSize={.3} color="white">
        Louisville Comedy Club
      </Text>
      <Text font={PoppinsFont} position={[0, 6, 0]} fontSize={.6} color="yellow" onClick={handleResetToHome}>
        BACK
      </Text>

      {/* First Tickets Button*/}
      <Html center zIndexRange={[101, 0]} position={[3, 11.8, 0]} style={{ zIndex: 4 }}>
        <div
          style={{
            position: "absolute",
            width: `${350 * .2}px`,
            height: "40px",
            pointerEvents: "auto",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid white",
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
          onClick={show1} // Add onClick event directly to the div
        >
          <span style={{ fontSize: "16px", color: "white" }}>Tickets</span>
        </div>
      </Html>

      {/* Second Tickets Button*/}
      <Html center zIndexRange={[101, 0]} position={[3, 10.6, 0]} style={{ zIndex: 4 }}>
        <div
          style={{
            position: "absolute",
            width: `${350 * .2}px`,
            height: "40px",
            pointerEvents: "auto",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid white",
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
          onClick={show2} // Add onClick event directly to the div
        >
          <span style={{ fontSize: "16px", color: "white" }}>Tickets</span>
        </div>
      </Html>

      {/* Third Tickets Button*/}
      <Html center zIndexRange={[101, 0]} position={[3, 9.4, 0]} style={{ zIndex: 4 }}>
        <div
          style={{
            position: "absolute",
            width: `${350 * .2}px`,
            height: "40px",
            pointerEvents: "auto",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid white",
            borderRadius: "5px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
          onClick={show3} // Add onClick event directly to the div
        >
          <span style={{ fontSize: "16px", color: "white" }}>Tickets</span>
        </div>
      </Html>

      <Html center zIndexRange={[100, 0]} position={[-4.5, 16, 0]} style={{ zIndex: 4 }}>
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
