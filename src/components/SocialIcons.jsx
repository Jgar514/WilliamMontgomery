// components/SocialIcons.js

import React from "react";
import { Billboard, Html } from "@react-three/drei";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaReddit } from "react-icons/fa";

const SocialIcons = ({ position, isMobile, iconSize, isAboutMobile }) => {
  return (
    <Billboard position={position}>
      <Html
        as="div"
        center
        zIndexRange={[100, 0]}
        style={{
          display: "flex",
          flexDirection: isAboutMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "center",
          gap: isMobile ? "8px" : "16px",
        }}
      >
        <a href="link_to_facebook" target="_blank"><FaFacebook size={iconSize} style={{ color: "#3b5998" }} /></a>
        <a href="link_to_twitter" target="_blank"><FaTwitter size={iconSize} style={{ color: "#1da1f2" }} /></a>
        <a href="link_to_instagram" target="_blank"><FaInstagram size={iconSize} style={{ color: "#bc2a8d" }} /></a>
        <a href="link_to_youtube" target="_blank"><FaYoutube size={iconSize} style={{ color: "#ff0000" }} /></a>
        <a href="link_to_reddit" target="_blank"><FaReddit size={iconSize} style={{ color: "#ff4500" }} /></a>
      </Html>
    </Billboard>
  );
};


export default SocialIcons;
