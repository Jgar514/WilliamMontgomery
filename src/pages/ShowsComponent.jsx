import React from "react";
import { Text, Html, Billboard } from "@react-three/drei";
import Background from "../assets/william.png";
import { FaMusic } from "react-icons/fa";

const ShowsComponent = ({ isMobile }) => {
  const fontSize = 0.4;

  const show1 = () => {
    // Define action for show 1
    console.log("Show 1 tickets clicked");
    window.open("https://detroit.houseofcomedy.net/attraction/william-montgomery/", "_blank");
  };

  const show2 = () => {
    // Define action for show 2
    console.log("Show 2 tickets clicked");
    window.open("https://www.spokanecomedyclub.com/events/86588", "_blank");
  };

  const show3 = () => {
    // Define action for show 3
    console.log("Show 3 tickets clicked");
    window.open("https://www.louisvillecomedy.com/events/86589", "_blank");
  };

  return (
    <>
      <Billboard>
        <Text color="white" position={[2.5, 5.0, 0]} fontSize={fontSize}>
          2/23-24 Detroit House of Comedy
        </Text>
        <Text color="white" position={[2.5, 3.5, 0]} fontSize={fontSize}>
          2/29-3/2 Spokane Comedy Club
        </Text>
        <Text color="white" position={[2.5, 2, 0]} fontSize={fontSize}>
          3/7-9 Louisville Comedy Club
        </Text>
        <Html
          center
          zIndexRange={[100, 0]}
          position={[6.5, 5.5, 0]}
          style={{ zIndex: 4 }} // Set the zIndex here
        >
          <div
            style={{
              position: "absolute",
              width: "90px",
              height: "40px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white",
              borderRadius: "5px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
            }}
            onClick={show1} // Attach onClick event listener to this div
          >
            {/* FaMusic Icon */}
            <span style={{ fontSize: "14px", color: "white" }}>Buy Tickets</span>
          </div>
        </Html>
        <Html center zIndexRange={[100, 0]} position={[6.5, 4, 0]} style={{ zIndex: 4 }}>
          <div
            style={{
              position: "absolute",
              width: "90px",
              height: "40px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white", // Add this line for the border
              borderRadius: "5px", // Optional: Add this line for rounded corners
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
            }}
            onClick={show2} // Attach onClick event listener to this div
          >
            {/* FaMusic Icon */}
            <span style={{ fontSize: "14px", color: "white" }}>Buy Tickets</span>
          </div>
        </Html>
        <Html center zIndexRange={[100, 0]} position={[6.5, 2.5, 0]} style={{ zIndex: 4 }}>
          <div
            style={{
              position: "absolute",
              width: "90px",
              height: "40px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white", // Add this line for the border
              borderRadius: "5px", // Optional: Add this line for rounded corners
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              cursor: "pointer",
            }}
            onClick={show3} // Attach onClick event listener to this div
          >
            {/* FaMusic Icon */}
            <span style={{ fontSize: "14px", color: "white" }}>Buy Tickets</span>
          </div>
        </Html>
      </Billboard>
    </>
  );
};

export default ShowsComponent;
