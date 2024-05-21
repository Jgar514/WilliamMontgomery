import { Suspense, React, useState, useEffect } from "react";
import "./styles.css";
import PoppinsFont from "/fonts/Poppins-Black.ttf";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Billboard, Text, Stage, Html, Backdrop } from "@react-three/drei";
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
import MobileShows from "./pages/MobileShows.jsx";
import MobilePodcast from "./pages/MobilePodcast.jsx";
import { FaCode } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import linkText from './linkTextContent.js';

export default function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [showCatLink, setShowCatLink] = useState(false);
  const [iconColor, setIconColor] = useState('yellow');


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 901);
      setIsTablet(width >= 901 && width < 1200); // Check for tablet size
    }
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
    setIsMenuVisible(true);


  };

  // My Pages
  const renderMenuItemComponent = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? <MobileHome /> : <HomeComponent isTablet={isTablet} />
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
    setShowCatLink(false);
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
        return isMobile ? [1.5, 17.5, -6] : [4, 9.5, 0];
      case "PODCAST":
        return isMobile ? [1.5, 17.2, -6] : [4, 8.5, 0];
      default:
        return isMobile ? [1.5, 16, -6] : [4, 8, 0];
    }
  };

  const getTitleFontSize = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? 0.8 : .9;
      case "ABOUT":
        return isMobile ? 0.8 : .9;
      case "SHOWS":
        return isMobile ? 0.8 : .9;
      case "PODCAST":
        return isMobile ? 0.8 : .9;
      default:
        return isMobile ? 0.8 : 1.0;
    }
  };

  // Social Icons
  const getIconSize = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? 35 : 45;
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
        return isMobile ? [1, 16.4, -6] : [4, 8.5, 0];
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
        return isMobile ? { position: [1, 0, 15], fov: 60 } : (isTablet ? { position: [1, 0, 14], fov: 55 } : { position: [1, 0, 14], fov: 50 });
      case "ABOUT":
        return isMobile ? { position: [-8, -1, -8], fov: 65 } : (isTablet ? { position: [1, 0, 14], fov: 55 } : { position: [1, 0, 14], fov: 50 });
      case "SHOWS":
        return isMobile ? { position: [-8, -1, -7], fov: 65 } : (isTablet ? { position: [1, 0, 14], fov: 55 } : { position: [1, 0, 14], fov: 50 });
      case "PODCAST":
        return isMobile ? { position: [-8, -1, -8], fov: 67 } : (isTablet ? { position: [1, 0, 14], fov: 55 } : { position: [1, 0, 14], fov: 50 });
      default:
        return { position: [1, 0, 12], fov: 50 };
    }
  };


  const getOrbitControlsProps = () => {
    switch (selectedMenuItem) {
      case "HOME":
        return isMobile ? {
          // Adjust the speed (25% of default speed)
          autoRotate: false,
          enableZoom: false,
          enablePan: false,
          target: [1, -2, 0],
          minPolarAngle: Math.PI / 2,
          maxPolarAngle: Math.PI / 2
        } : {
          autoRotate: false,

          enableZoom: false,
          enablePan: false,
          target: [1, 0, 0],
          minPolarAngle: Math.PI / 2,
          maxPolarAngle: Math.PI / 2
        };
      case "ABOUT":
        return isMobile ? {
          autoRotate: false,
          enableZoom: false,
          enablePan: false,
          target: [1, .5, 0],
          minPolarAngle: Math.PI / 1.9,
          maxPolarAngle: Math.PI / 2
        } : {
          autoRotate: false,
          enableZoom: false,
          enablePan: false,
          target: [1, 0, 0],
          minPolarAngle: Math.PI / 2,
          maxPolarAngle: Math.PI / 2
        };
      case "SHOWS":
        return isMobile ? {
          autoRotate: false,
          enableZoom: false,
          enablePan: false,
          target: [1, .5, 0],
          minPolarAngle: Math.PI / 1.9,
          maxPolarAngle: Math.PI / 2,
          // minAzimuthAngle: -Math.PI / 1.5, // Restrict to rotate left
          // maxAzimuthAngle: Math.PI / 1
        } : {
          autoRotate: false,
          enableZoom: false,
          enablePan: false,
          target: [1, 0, 0],
          minPolarAngle: Math.PI / 2,
          maxPolarAngle: Math.PI / 2
        };
      case "PODCAST":
        return isMobile ? {
          autoRotate: false,
          enableZoom: false,
          enablePan: false,
          target: [1, 0, 0],
          minPolarAngle: Math.PI / 1.9,
          maxPolarAngle: Math.PI / 2
        } : {
          autoRotate: false,
          enableZoom: false,
          enablePan: false,
          target: [1, 0, 0],
          minPolarAngle: Math.PI / 2,
          maxPolarAngle: Math.PI / 2
        };
      default:
        return isMobile ? {
          autoRotate: false,
          enableZoom: false,
          enablePan: false,
          target: [1, -2, 0],
          minPolarAngle: Math.PI / 2,
          maxPolarAngle: Math.PI / 2
        } : {
          autoRotate: false,
          enableZoom: false,
          enablePan: false,
          target: [0, 0, 0],
          minPolarAngle: Math.PI / 2,
          maxPolarAngle: Math.PI / 2
        };
    }
  };


  const getLinkText = () => {
    const textContent = linkText[selectedMenuItem] || linkText.DEFAULT;
    return isMobile ? textContent.mobile : textContent.desktop;
  };


  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <div
        className="fixed bottom-0 right-0 z-50 w-10 h-10 flex items-end pb-2  justify-center cursor-pointer "
        onClick={() => {
          setShowLink(!showLink); // Toggle the visibility of the link div
          // Change the icon color
          setIconColor(showLink ? 'yellow' : 'red');
        }}
      >

        <FaCode
          className={`opacity-80 text-xl ${showLink ? "text-yellow-200" : "text-red-800"}`}

        />
      </div>

      {/* Link div */}
      {showLink && (
        <div
          className="fixed bottom-0 opacity-50 pb-2 right-10 p-1 bg-white rounded shadow cursor-pointer text-black underline z-50 text-base"
          onClick={() => {
            window.open("https://homie.mobi/", "_blank");
          }}
        >
          HOMIE.MOBI
        </div>
      )}
      {/* <div className="fixed bottom-0 left-0 z-50 w-10 h-10 flex items-end pb-2 justify-center cursor-pointer" onClick={() => { setShowCatLink(!showCatLink); }}>
        <FaCat className="opacity-70 text-yellow-200 text-xl" />
      </div>

      {showCatLink && (
        <div
          className="fixed bottom-0 left-10 opacity-100 pb-2 p-1 bg-white rounded shadow cursor-pointer   z-50 text-base"
        >
          {getLinkText().map((line, index) => (
            <div key={index} style={{ color: line.color }}>{line.text}</div>
          ))}
        </div>
      )} */}
      {/* <RedOverlay /> */}
      <Canvas style={{ width: '100%', height: '100%' }} resize={{ debounce: 50 }} gl={{ preserveDrawingBuffer: true }}>
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
