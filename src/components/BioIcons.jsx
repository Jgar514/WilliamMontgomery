import React from "react";
import { Billboard, Html } from "@react-three/drei";
import { FaHome, FaMapMarkerAlt, FaMusic } from "react-icons/fa";
import PoppinsFont from "/fonts/Poppins-Black.ttf";

const BioIcons = ({ position, flexDirection, iconSize, isMobile, iconGap, textStyle }) => {
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
          gap: iconGap || "50px",
          pointerEvents: "none", // Cursor won't interact with the BioIcons component
        }}
      >
        <div style={{ display: "flex", alignItems: "center", pointerEvents: "none" }}>
          <FaHome size={iconSize} style={{ color: "#ffd700", pointerEvents: "none" }} />
          <span style={{ ...textStyle, pointerEvents: "none", userSelect: "none" }}>Austin, Texas</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", pointerEvents: "none" }}>
          <FaMapMarkerAlt size={iconSize} style={{ color: "#ffd700", pointerEvents: "none" }} />
          <span style={{ ...textStyle, pointerEvents: "none", userSelect: "none" }}>Memphis, Tennessee</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", pointerEvents: "none" }}>
          <FaMusic size={iconSize} style={{ color: "#ffd700", pointerEvents: "none" }} />
          <span style={{ ...textStyle, pointerEvents: "none", userSelect: "none" }}>Aphex Twin</span>
        </div>
      </Html>
    </Billboard>
  );
};

export default BioIcons;
