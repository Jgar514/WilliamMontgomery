import React from "react";
import { Billboard, Text, Html } from "@react-three/drei";
import PodcastIcons from "../components/PodcastIcons";
import Background from "../assets/williampodcast2.jpg";
import PodcastBackground from "../assets/williampodcast.jpg";
import { FaYoutube, FaSpotify, FaApple, FaGoogle, FaEnvelope } from "react-icons/fa";
import PoppinsFont from "/fonts/Poppins-Black.ttf";

const PodcastComponent = ({ isMobile }) => {
  const position = isMobile ? [0, 0, 0] : [4.2, 5.0, 0];
  const fontSize = isMobile ? 0.8 : 0.8;
  const iconSize = 40;

  const isDesktop = !isMobile; // Determine if it's desktop based on isMobile

  return (
    <Billboard>
      <PodcastIcons position={[5.8, 2.0, 0]} fixedIconSize={iconSize} isDesktop={isDesktop} />
      {/* Add podcast description and other details */}
      {/* Add more Text elements as needed */}

      <Text font={PoppinsFont} position={[4.2, 6.3, 0]} fontSize={.35} color="white">
        You know him. You love him.
      </Text>
      <Text font={PoppinsFont} position={[4.2, 5.8, 0]} fontSize={.35} color="white">
        The star of his very own podcast
      </Text>
      <Text font={PoppinsFont} position={[4.4, 5.0, 0]} fontSize={.6} color="yellow">
        The William Montgomery Show!
      </Text>
      <Text font={PoppinsFont} position={[6.0, 3.4, 0]} fontSize={.35} color="red">
        Every Wednesday at 8:30 CT.
      </Text>
      <Text font={PoppinsFont} position={[5.8, 2.9, 0]} fontSize={.28} color="yellow">
        @williamfmontgomery
      </Text>
      <Html center zIndexRange={[100, 0]} position={[.6, 2.6, 0]}>
        <div
          style={{
            position: "absolute",
            width: "140px", // Adjust the factor as needed
            height: "140px", // Adjust the factor as needed
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {/* Apply the gradient overlay using ::before pseudo-element */}
          <img
            src={PodcastBackground}
            alt="PodcastBackground"
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 1,
              opacity: 0.8,
            }}
          />

        </div>
      </Html>
      <Html center zIndexRange={[100, 0]} position={[-14.5, 11.2, 0]}>
        <div
          style={{
            position: "absolute",
            width: "950px", // Adjust the factor as needed
            height: "950px", // Adjust the factor as needed
            pointerEvents: "none",
            overflow: "hidden",
          }}

        >
          {/* Apply the gradient overlay using ::before pseudo-element */}
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
              backgroundImage: isMobile
                ? "linear-gradient(to bottom, rgba(255, 0, 0, 0) 10%, rgba(255, 0, 0, 1) 25%, rgba(255, 0, 0, 0) 80%)"
                : "linear-gradient(to right, rgba(0, 0, 0, 0.2) 20%, rgba(255, 0, 0, 1) 48%, rgba(0, 0, 0, 0.0) 80%)",

              // Adjust the color stops accordingly
              pointerEvents: "none",
              zIndex: 2,
              opacity: 0.1,
            }}
          />
        </div>

      </Html>
    </Billboard>
  );
};

export default PodcastComponent;
