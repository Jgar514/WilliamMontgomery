import { Suspense, React, useState, useEffect } from "react";
import "./styles.css";
import PoppinsFont from "/fonts/Poppins-Black.ttf";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Billboard, Text, Stage, Html } from "@react-three/drei";
//models
import { Model } from "./models/Model.jsx";
import { MobileModelMic } from "./models/MobileModelMic.jsx";
import { Stool } from "./models/Stool.jsx";
//icons
import SocialIcons from "./components/SocialIcons";
import VerticalSocialIcons from "./components/VerticalSocialIcons.jsx"
//menu
import MenuItems from "./components/MenuItems";
// pages
import HomeComponent from "./pages/HomeComponent.jsx";
import AboutComponent from "./pages/AboutComponent.jsx";
import ShowsComponent from "./pages/ShowsComponent.jsx";
import PodcastComponent from "./pages/PodcastComponent.jsx";
import MobileHome from "./pages/MobileHome.jsx";
import MobileAbout from "./pages/MobileAbout.jsx";
import MobileShows from "./pages/MobileShows.jsx"
import MobilePodcast from "./pages/MobilePodcast.jsx"

export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Check on component mount
    setSelectedMenuItem("HOME");
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResetToHome = () => {
    console.log("Resetting to HOME");
    setSelectedMenuItem('HOME');
    setIsMenuVisible(false);
  };

  // My Pages
  const renderMenuItemComponent = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? <MobileHome /> : <HomeComponent />;
      case "ABOUT":
        return isMobile ? <MobileAbout handleResetToHome={handleResetToHome} /> : <AboutComponent />;
      case "SHOWS":
        return isMobile ? < MobileShows handleResetToHome={handleResetToHome} /> : <ShowsComponent />;
      case "PODCAST":
        return isMobile ? < MobilePodcast handleResetToHome={handleResetToHome} /> : <PodcastComponent />;
      default:
        return null;
    }
  };

  // Menu 
  const getMenuPosition = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? [0, -6, 0] : [-8, 7, 0];
      case "ABOUT":
        return isMobile ? null : [-8, 7, 0];
      case "SHOWS":
        return isMobile ? null : [-8, 7, 0];
      case "PODCAST":
        return isMobile ? null : [-8, 7, 0];
      default:
        return isMobile ? null : [-8, 7, 0];
    }
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setIsMenuVisible(true);
  };

  const getMenuTextStyle = (menuItem) => {
    const baseStyle = {
      font: PoppinsFont,
      fontSize: isMobile ? 0.6 : 0.6,
      color: "#b30000",
      cursor: "pointer",
    };

    if (menuItem === selectedMenuItem) {
      // Apply different style for the current selection
      return { ...baseStyle, color: "yellow", fontSize: isMobile ? 0.8 : 0.8 };
    }

    return baseStyle;
  };

  // Mobile Model Position
  const getMobileModelMicConfig = () => {
    return {
      position: [-2, 3, 3],
      scale: [1.5, 1.5, 1.5],
    };
  };

  const getStoolConfig = () => {
    return {
      position: [0, 1.5, 0],
      scale: [1.5, 1.5, 1.5],
    };
  };

  //Desktop Model
  const getModelPosition = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? [-1, 3, 0] : [-3, 3, 0];
      case "ABOUT":
        return isMobile ? [-1, 3, 0] : [-3, 3, 0];
      case "SHOWS":
        return isMobile ? [-1, 3, 0] : [-3, 3, 0];
      case "PODCAST":
        return isMobile ? [1, 0, 21] : [-3, 3, 0];
      default:
        return isMobile ? [1, 0, 12] : [1, 0, 12];
    }
  };

  const getModelScale = () => {
    const desktopScale = [1.5, 1.5, 1.5];

    return desktopScale;
  };

  //Title
  const getTitlePosition = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? [0, 14.5, 0] : [4, 8, 0];
      case "ABOUT":
        return isMobile ? [1.5, 17, -6] : [4, 8.75, 0];
      case "SHOWS":
        return isMobile ? [1.5, 16.5, -6] : [4, 8, 0];
      case "PODCAST":
        return isMobile ? [1.5, 17.2, -6] : [4, 8.5, 0];
      default:
        return isMobile ? [1.5, 16, -6] : [4, 8, 0];
    }
  };

  const getTitleFontSize = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? 0.8 : 1.0;
      case "ABOUT":
        return isMobile ? 0.8 : .9;
      case "SHOWS":
        return isMobile ? 0.8 : 1.0;
      case "PODCAST":
        return isMobile ? 0.8 : 1.0;
      default:
        return isMobile ? 0.8 : 1.0;
    }
  };

  // Social Icons
  const getIconSize = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? 25 : 45;
      case "ABOUT":
        return isMobile ? 25 : 50;
      case "SHOWS":
        return isMobile ? 32 : 45;
      case "PODCAST":
        return isMobile ? 25 : 45;
      default:
        return isMobile ? 25 : 35;
    }
  };

  const getSocialIconsPosition = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? [0, 13.5, 0] : [4, 7, 0];
      case "ABOUT":
        return isMobile ? [1, 15.5, -6] : [4, 1.7, 0];
      case "SHOWS":
        return isMobile ? [1, 15.4, -6] : [4, 7, 0];
      case "PODCAST":
        return isMobile ? [1, 16.2, -6] : [4, 7.5, 0];
      default:
        return isMobile ? [1, 15, -6] : [4, 7, 0];
    }
  };

  const verticalSocialIconsPosition = [3.5, 6.3, 0];

  // Camera and Orbit Controls
  const getCameraProperties = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? { position: [1, 0, 15], fov: 60 } : { position: [1, 0, 12], fov: 50 };
      case "ABOUT":
        return isMobile ? { position: [-8, -1, -8], fov: 65 } : { position: [1, 0, 12], fov: 50 };
      case "SHOWS":
        return isMobile ? { position: [-8, -1, -7], fov: 65 } : { position: [1, 0, 12], fov: 50 };
      case "PODCAST":
        return isMobile ? { position: [-8, -1, -8], fov: 67 } : { position: [1, 0, 12], fov: 50 };
      default:
        return { position: [1, 0, 12], fov: 50 };
    }
  };

  const getOrbitControlsProps = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? { autoRotate: false, enableZoom: true, enablePan: true, target: [1, -2, 0] } : { autoRotate: false, enableZoom: false, enablePan: false, target: [1, 0, 0] };
      case "ABOUT":
        return isMobile ? { autoRotate: false, enableZoom: true, enablePan: true, target: [1, .5, 0] } : { autoRotate: false, enableZoom: false, enablePan: false, target: [1, 0, 0] };
      case "SHOWS":
        return isMobile ? { autoRotate: false, enableZoom: true, enablePan: true, target: [2, 1, 1] } : { autoRotate: false, enableZoom: false, enablePan: false, target: [1, 0, 0] };
      case "PODCAST":
        return isMobile ? { autoRotate: false, enableZoom: true, enablePan: true, target: [1, 0, 0] } : { autoRotate: false, enableZoom: false, enablePan: false, target: [1, 0, 0] };
      default:
        return isMobile ? { autoRotate: false, enableZoom: true, enablePan: true, target: [1, -2, 0] } : { autoRotate: false, enableZoom: false, enablePan: false, target: [0, 0, 0] };
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* <RedOverlay /> */}
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <PerspectiveCamera makeDefault {...getCameraProperties()} />
        <OrbitControls {...getOrbitControlsProps()} />
        <Suspense fallback={null}>
          <Stage
            intensity={0.5}
            preset="rembrandt"
            adjustCamera={0}
            environment="city"
            shadow={{ bias: -0.001, far: 40, near: 0 }}
            lights={[
              { type: "ambient", intensity: 0.2 },
              { type: "point", intensity: 0.2 },
            ]}
          >
            {/* Title */}
            <Billboard>
              <Text
                font={PoppinsFont}
                position={getTitlePosition()}
                fontSize={getTitleFontSize()}
                color="yellow"
              >
                William Montgomery
              </Text>
              {isMobile && selectedMenuItem === "ABOUT" ? (
                <VerticalSocialIcons position={verticalSocialIconsPosition} isMobile={isMobile} iconSize={30} />
              ) : (
                <SocialIcons
                  position={getSocialIconsPosition()}
                  isMobile={isMobile}
                  iconSize={getIconSize()}

                />
              )}
            </Billboard>

            {/* Menu items */}
            {getMenuPosition() !== null && (
              <MenuItems
                isMobile={isMobile}
                selectedMenuItem={selectedMenuItem}
                handleMenuItemClick={handleMenuItemClick}
                position={getMenuPosition()}
              />
            )}
            {isMobile ? (
              <>
                <group position={getMobileModelMicConfig().position} rotation={[0, 0, 0]}>
                  <MobileModelMic scale={getMobileModelMicConfig().scale} />
                </group>
                <Stool scale={getStoolConfig().scale} position={getStoolConfig().position} />
              </>
            ) : (
              <Model scale={getModelScale()} position={getModelPosition()} />
            )}

            {renderMenuItemComponent({ isMobile, handleResetToHome })}
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
}
