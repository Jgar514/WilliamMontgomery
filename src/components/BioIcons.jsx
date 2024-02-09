import React from "react";
import { Billboard, Html } from "@react-three/drei";
import { FaHome, FaMapMarkerAlt, FaMusic } from "react-icons/fa";
import PoppinsFont from "/fonts/Poppins-Black.ttf";

const BioIcons = ({ position, flexDirection, iconSize, isMobile, iconGap }) => {


  const textStyle = {
    color: "white",
    fontSize: "24px",
    fontFamily: "Poppins", // Set your font-family here
    marginLeft: "5px",
    whiteSpace: "nowrap",
  };

  return (
    <Billboard position={position}>
      <Html
        as="div"
        zIndexRange={[100, 0]}
        style={{
          display: "flex",
          flexDirection: flexDirection || "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: iconGap || "50px", // Use iconGap prop or default to "50px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaHome size={iconSize} style={{ color: "#ffd700" }} />
          <span style={textStyle}>Austin, Texas</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaMapMarkerAlt size={iconSize} style={{ color: "#ffd700" }} />
          <span style={textStyle}>Memphis, Tennessee</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaMusic size={iconSize} style={{ color: "#ffd700" }} />
          <span style={textStyle}>Aphex Twin</span>
        </div>
      </Html>
    </Billboard>
  );
};

export default BioIcons;


