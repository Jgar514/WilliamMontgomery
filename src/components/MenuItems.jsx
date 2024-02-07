// components/MenuItems.js

import React from "react";
import { Text, Billboard } from "@react-three/drei";
import * as THREE from 'three';

const MenuItems = ({ isMobile, selectedMenuItem, handleMenuItemClick }) => {
  const getMenuTextStyle = (menuItem) => {
    const baseStyle = {
      font: '/fonts/Poppins-Black.ttf',
      fontSize: isMobile ? 0.6 : 0.6,
      color: "#b30000",
      cursor: "pointer",
    };

    if (menuItem === selectedMenuItem) {
      return { ...baseStyle, color: "yellow", fontSize: isMobile ? 0.8 : .8 };
    }

    return baseStyle;
  };

  return (
    <Billboard>
      {/* HOME */}
      <Text
        font='/fonts/Poppins-Black.ttf'
        position={isMobile ? [0, 12, 0] : [-8, 8, 0]}
        fontSize={getMenuTextStyle("HOME").fontSize}
        onClick={() => handleMenuItemClick("HOME")}
        onPointerOver={(e) => e.target.color = new THREE.Color("yellow")}
        onPointerOut={(e) => e.target.color = new THREE.Color("#b30000")}
        color={getMenuTextStyle("HOME").color}
        style={{ cursor: "pointer", pointerEvents: "auto" }}
      >
        HOME
      </Text>

      {/* ABOUT */}
      <Text
        font='/fonts/Poppins-Black.ttf'
        position={isMobile ? [0, 11, 0] : [-8, 6.8, 0]}
        fontSize={getMenuTextStyle("ABOUT").fontSize}
        onClick={() => handleMenuItemClick("ABOUT")}
        onPointerOver={(e) => e.target.color = new THREE.Color("yellow")}
        onPointerOut={(e) => e.target.color = new THREE.Color("#b30000")}
        color={getMenuTextStyle("ABOUT").color}
        style={{ cursor: "pointer", pointerEvents: "auto" }}
      >
        ABOUT
      </Text>

      {/* SHOWS */}
      <Text
        font='/fonts/Poppins-Black.ttf'
        position={isMobile ? [0, 10, 0] : [-8, 5.6, 0]}
        fontSize={getMenuTextStyle("SHOWS").fontSize}
        onClick={() => handleMenuItemClick("SHOWS")}
        onPointerOver={(e) => e.target.color = new THREE.Color("yellow")}
        onPointerOut={(e) => e.target.color = new THREE.Color("#b30000")}
        color={getMenuTextStyle("SHOWS").color}
        style={{ cursor: "pointer", pointerEvents: "auto" }}
      >
        SHOWS
      </Text>

      {/* Additional menu items with similar styles */}
      {/* PODCAST */}
      <Text
        font='/fonts/Poppins-Black.ttf'
        position={isMobile ? [0, 9, 0] : [-8, 4.4, 0]}
        fontSize={getMenuTextStyle("PODCAST").fontSize}
        onClick={() => handleMenuItemClick("PODCAST")}
        onPointerOver={(e) => e.target.color = new THREE.Color("yellow")}
        onPointerOut={(e) => e.target.color = new THREE.Color("#b30000")}
        color={getMenuTextStyle("PODCAST").color}
        style={{ cursor: "pointer", pointerEvents: "auto" }}
      >
        PODCAST
      </Text>

      {/* CAMEO */}
      <Text
        font='/fonts/Poppins-Black.ttf'
        position={isMobile ? [0, 8, 0] : [-8, 3.2, 0]}
        fontSize={getMenuTextStyle("CAMEO").fontSize}
        onClick={() => window.open("https://www.cameo.com/williammontgomery?qid=1646157016", "_blank")}
        onPointerOver={(e) => e.target.color = new THREE.Color("yellow")}
        onPointerOut={(e) => e.target.color = new THREE.Color("#b30000")}
        color={getMenuTextStyle("CAMEO").color}
        style={{ cursor: "pointer", pointerEvents: "auto" }}
      >
        CAMEO
      </Text>

      {/* MERCH */}
      <Text
        font='/fonts/Poppins-Black.ttf'
        position={isMobile ? [0, 7, 0] : [-8, 2, 0]}
        fontSize={getMenuTextStyle("MERCH").fontSize}
        onClick={() => window.open("https://william-montgomery-town.creator-spring.com/", "_blank")}
        onPointerOver={(e) => e.target.color = new THREE.Color("yellow")}
        onPointerOut={(e) => e.target.color = new THREE.Color("#b30000")}
        color={getMenuTextStyle("MERCH").color}
        style={{ cursor: "pointer", pointerEvents: "auto" }}
      >
        MERCH
      </Text>

      {/* LINKTREE */}
      <Text
        font='/fonts/Poppins-Black.ttf'
        position={isMobile ? [0, 6, 0] : [-8, .8, 0]}
        fontSize={getMenuTextStyle("LINKTREE").fontSize}
        onClick={() => window.open("https://linktr.ee/williamfmontgomery", "_blank")}
        onPointerOver={(e) => e.target.color = new THREE.Color("yellow")}
        onPointerOut={(e) => e.target.color = new THREE.Color("#b30000")}
        color={getMenuTextStyle("LINKTREE").color}
        style={{ cursor: "pointer", pointerEvents: "auto" }}
      >
        LINKTREE
      </Text>
    </Billboard>
  );
};

export default MenuItems;

