import React from "react";
import { Billboard, Html } from "@react-three/drei";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaReddit,
} from "react-icons/fa";

const VerticalSocialIcons = ({ position, isMobile, iconSize }) => {
  // Function to handle opening links in a new window
  const openLinkInNewWindow = (url) => {
    window.open(url, "_blank");
  };

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
        <FaFacebook
          size={iconSize}
          style={{ color: "#3b5998", cursor: "pointer" }}
          onClick={() => openLinkInNewWindow("https://www.facebook.com/profile.php?id=100009745215532")}
        />

        {/* Twitter icon */}
        <FaTwitter
          size={iconSize}
          style={{ color: "#1da1f2", cursor: "pointer" }}
          onClick={() => openLinkInNewWindow("https://twitter.com/WMintgimery")}
        />

        {/* Instagram icon */}
        <FaInstagram
          size={iconSize}
          style={{ color: "#bc2a8d", cursor: "pointer" }}
          onClick={() => openLinkInNewWindow("https://www.instagram.com/william.f.montgomery1/?ref=williamfmontgomery.com")}
        />

        {/* Youtube icon */}
        <FaYoutube
          size={iconSize}
          style={{ color: "#ff0000", cursor: "pointer" }}
          onClick={() => openLinkInNewWindow("https://www.youtube.com/channel/UCQJ2SBnAMI8SSm5qpLXBRiw")}
        />

        {/* Reddit icon */}
        <FaReddit
          size={iconSize}
          style={{ color: "#ff4500", cursor: "pointer" }}
          onClick={() => openLinkInNewWindow("https://www.reddit.com/r/williammontgomeryshow/")}
        />
      </Html>
    </Billboard>
  );
};

export default VerticalSocialIcons;
