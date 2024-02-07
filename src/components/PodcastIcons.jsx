import React from "react";
import { Billboard, Html } from "@react-three/drei";
import { FaYoutube, FaSpotify, FaApple, FaGoogle, FaEnvelope } from "react-icons/fa";

const PodcastIcons = ({ position, fixedIconSize, isDesktop }) => {
  return (
    <Billboard position={position}>
      <Html center zIndexRange={[100, 0]}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px", // Set your desired gap property
            alignItems: "center", // Align items in the center
          }}
        >
          <a href="youtube_link" target="_blank">
            <FaYoutube size={fixedIconSize} style={{ color: "#ff0000" }} />
          </a>
          <a href="spotify_link" target="_blank">
            <FaSpotify size={fixedIconSize} style={{ color: "#1db954" }} />
          </a>
          <a href="apple_podcasts_link" target="_blank">
            <FaApple size={fixedIconSize} style={{ color: "#000000" }} />
          </a>
          <a href="google_podcasts_link" target="_blank">
            <FaGoogle size={fixedIconSize} style={{ color: "#4285f4" }} />
          </a>
          <a href="mailto:thewilliammontgomeryshow@gmail.com" target="_blank">
            <FaEnvelope size={fixedIconSize} style={{ color: "#ffffff" }} />
          </a>
        </div>
      </Html>
    </Billboard>
  );
};

export default PodcastIcons;


