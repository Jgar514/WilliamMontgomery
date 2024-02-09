import React from "react";
import { Billboard, Html } from "@react-three/drei";
import { FaYoutube, FaSpotify, FaApple, FaGoogle, FaEnvelope } from "react-icons/fa";

const PodcastIcons = ({ position, fixedIconSize, isDesktop }) => {
  // Function to handle opening links in a new window
  const openLinkInNewWindow = (url) => {
    window.open(url, "_blank");
  };

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
          {/* Update the URLs and add onClick event handlers */}
          <FaYoutube size={fixedIconSize} style={{ color: "#ff0000", cursor: "pointer" }} onClick={() => openLinkInNewWindow("https://www.youtube.com/channel/UCQJ2SBnAMI8SSm5qpLXBRiw")} />
          <FaSpotify size={fixedIconSize} style={{ color: "#1db954", cursor: "pointer" }} onClick={() => openLinkInNewWindow("https://open.spotify.com/show/6SJj2pPh4QJaP2u7U1UumP?utm_medium=share&utm_source=linktree")} />
          <FaApple size={fixedIconSize} style={{ color: "#000000", cursor: "pointer" }} onClick={() => openLinkInNewWindow("https://podcasts.apple.com/us/podcast/the-william-montgomery-show/id1596006008")} />
          <FaGoogle size={fixedIconSize} style={{ color: "#4285f4", cursor: "pointer" }} onClick={() => openLinkInNewWindow("https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9ZQVdXbnh1YQ")} />
          <FaEnvelope size={fixedIconSize} style={{ color: "#ffffff", cursor: "pointer" }} onClick={() => openLinkInNewWindow("mailto:thewilliammontgomeryshow@gmail.com")} />
        </div>
      </Html>
    </Billboard>
  );
};

export default PodcastIcons;
