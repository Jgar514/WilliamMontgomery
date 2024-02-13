import React from "react";
import { Billboard, Text, Html } from "@react-three/drei";
import PodcastIcons from "../components/PodcastIcons";
import Background from "../assets/williampodcast2.jpg";
import PodcastBackground from "../assets/williampodcast.jpg";
import { FaYoutube, FaSpotify, FaApple, FaGoogle, FaEnvelope } from "react-icons/fa";
import PoppinsFont from "/fonts/Poppins-Black.ttf";

const MobilePodcast = ({ isMobile, handleResetToHome }) => {
  const fixedIconSize = 35; // Set the desired icon size

  return (
    <Billboard>

      <Html center zIndexRange={[100, 0]} position={[.15, 11.1, 0]}>
        <div
          style={{
            position: "absolute",
            width: `${700 * .22}px`,
            height: `${700 * .22}px`,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >

          <img
            src={PodcastBackground}
            alt="PodcastBackground"
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 3, // Increase the z-index to be above the other elements
              opacity: 0.6,
              pointerEvents: "auto", // Enable click events on the image
            }}
            onClick={() => {
              window.open("https://www.youtube.com/channel/UCQJ2SBnAMI8SSm5qpLXBRiw", "_blank");
            }}
          />

          <div
            style={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: isMobile
                ? "linear-gradient(to bottom, rgba(255, 0, 0, 0) 10%, rgba(255, 0, 0, 1) 25%, rgba(255, 0, 0, 0) 80%)"
                : "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)",
              pointerEvents: "none",
              zIndex: 2,
              opacity: 0.1,
            }}
          />
        </div>
      </Html>
      <Html center zIndexRange={[100, 0]} position={[-6, 16, 0]}>
        <div
          style={{
            position: "absolute",
            width: `${700 * 1.3}px`,
            height: `${700 * 1.7}px`,
            pointerEvents: "none",
            overflow: "hidden",
          }}

        >

          <img
            src={Background}
            alt="Background"
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 1,
              opacity: 0.06,
            }}
          />
          <div
            style={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage:

                "linear-gradient(to bottom, #171720 0%, rgba(255, 255, 255, 1) 10%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 100%) ",

              pointerEvents: "none",
              zIndex: 2,
              opacity: 0.1,
            }}
          />
        </div>

      </Html>
      <PodcastIcons position={[1.25, 8.0, 0]} fixedIconSize={fixedIconSize} />


      <Text font={PoppinsFont} position={[1.5, 12.6, 0]} fontSize={.27} color="white">
        You know him. You love him.
      </Text>
      <Text font={PoppinsFont} position={[1.5, 12.3, 0]} fontSize={.27} color="white">
        The star of his very own podcast
      </Text>
      <Text font={PoppinsFont} position={[1.5, 11.5, 0]} fontSize={.35} color="yellow">
        The William Montgomery Show!
      </Text>
      <Text font={PoppinsFont} position={[1.5, 7.2, 0]} fontSize={.24} color="white">
        Every Wednesday at 8:30 CT.
      </Text>
      <Text font={PoppinsFont} position={[1.4, 6.9, 0]} fontSize={.24} color="white">
        @williamfmontgomery
      </Text>
      <Text font={PoppinsFont} position={[0, 5.8, 0]} fontSize={.6} color="red" onClick={handleResetToHome}>
        BACK
      </Text>
    </Billboard>
  );
};

export default MobilePodcast;
;