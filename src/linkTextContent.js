const textColor1 = "#000000";
const textColor2 = "#ff0000";
const textColor3 = "#00ff00";
const textColor4 = "#0000ff";

// Link text object with color variables
const linkText = {
  HOME: {
    desktop: [
      { text: "Home Desktop Line 1", color: textColor1 },
      { text: "Home Desktop Line 2", color: textColor2 }
    ],
    mobile: [
      { text: "Home Mobile Line 1", color: textColor3 },
      { text: "Home Mobile Line 2", color: textColor4 }
    ],
  },
  ABOUT: {
    desktop: [
      { text: "About Desktop Line 1", color: textColor1 },
      { text: "About Desktop Line 2", color: textColor2 },
      { text: "About Desktop Line 3", color: textColor3 },
      { text: "About Desktop Line 4", color: textColor4 }
    ],
    mobile: [
      { text: "About Mobile Line 1", color: textColor1 },
      { text: "About Mobile Line 2", color: textColor2 }
    ],
  },
  SHOWS: {
    desktop: [
      { text: "Shows Desktop Line 1", color: textColor1 },
      { text: "Shows Desktop Line 2", color: textColor2 }
    ],
    mobile: [
      { text: "Shows Mobile Line 1", color: textColor1 },
      { text: "Shows Mobile Line 2", color: textColor2 }
    ],
  },
  PODCAST: {
    desktop: [
      { text: "Podcast Desktop Line 1", color: textColor1 },
      { text: "Podcast Desktop Line 2", color: textColor2 }
    ],
    mobile: [
      { text: "Podcast Mobile Line 1", color: textColor1 },
      { text: "Podcast Mobile Line 2", color: textColor2 }
    ],
  },
  DEFAULT: {
    desktop: [
      { text: "Default Desktop Line 1", color: textColor1 },
      { text: "Default Desktop Line 2", color: textColor2 }
    ],
    mobile: [
      { text: "Default Mobile Line 1", color: textColor1 },
      { text: "Default Mobile Line 2", color: textColor2 }
    ],
  },
};

export default linkText;
