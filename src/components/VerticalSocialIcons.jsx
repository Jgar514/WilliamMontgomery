// Import necessary components and libraries
import React from "react";
import { Billboard, Html } from "@react-three/drei";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaReddit,
} from "react-icons/fa";

// VerticalSocialIcons component
const VerticalSocialIcons = ({ position, isMobile, iconSize }) => {
  return (
    <Billboard position={position}>
      <Html
        as="div"
        center
        zIndexRange={[100, 0]}
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "center",
          gap: isMobile ? "8px" : "16px",
        }}
      >
        {/* Facebook icon */}
        <a href="link_to_facebook" target="_blank">
          <FaFacebook size={iconSize} style={{ color: "#3b5998" }} />
        </a>

        {/* Twitter icon */}
        <a href="link_to_twitter" target="_blank">
          <FaTwitter size={iconSize} style={{ color: "#1da1f2" }} />
        </a>

        {/* Instagram icon */}
        <a href="link_to_instagram" target="_blank">
          <FaInstagram size={iconSize} style={{ color: "#bc2a8d" }} />
        </a>

        {/* Youtube icon */}
        <a href="link_to_youtube" target="_blank">
          <FaYoutube size={iconSize} style={{ color: "#ff0000" }} />
        </a>

        {/* Reddit icon */}
        <a href="link_to_reddit" target="_blank">
          <FaReddit size={iconSize} style={{ color: "#ff4500" }} />
        </a>
      </Html>
    </Billboard>
  );
};

export default VerticalSocialIcons;


