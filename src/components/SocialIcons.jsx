import React from "react";
import { Billboard, Html } from "@react-three/drei";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaReddit } from "react-icons/fa";

const SocialIcons = ({ position, isMobile, iconSize, isAboutMobile }) => {
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
          flexDirection: isAboutMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "center",
          gap: isMobile ? "12px" : "16px",
        }}
      >
        {/* Update the URLs and add onClick event handlers */}
        <FaFacebook size={iconSize} style={{ color: "#3b5998", cursor: "pointer" }} onClick={() => openLinkInNewWindow("https://www.facebook.com/profile.php?id=100009745215532")} />
        <FaTwitter size={iconSize} style={{ color: "#1da1f2", cursor: "pointer" }} onClick={() => openLinkInNewWindow("https://twitter.com/WMintgimery")} />
        <FaInstagram size={iconSize} style={{ color: "#bc2a8d", cursor: "pointer" }} onClick={() => openLinkInNewWindow("https://www.instagram.com/william.f.montgomery1/?ref=williamfmontgomery.com")} />
        <FaYoutube size={iconSize} style={{ color: "#ff0000", cursor: "pointer" }} onClick={() => openLinkInNewWindow("https://www.youtube.com/channel/UCQJ2SBnAMI8SSm5qpLXBRiw")} />
        <FaReddit size={iconSize} style={{ color: "#ff4500", cursor: "pointer" }} onClick={() => openLinkInNewWindow("https://www.reddit.com/r/williammontgomeryshow/")} />
      </Html>
    </Billboard>
  );
};

export default SocialIcons;
