const textColor1 = "#000000"; //black
const textColor2 = "#ff0000"; //red
const textColor3 = "#006400"; // Dark Green
const textColor4 = "#0000ff"; //blue

// Link text object with color variables
const linkText = {
  HOME: {
    desktop: [
      { text: "The text on this page is just the text from his current website.", color: textColor1 },
      { text: "Make model able to be moved left and right but not up and down.", color: textColor3 }
    ],
    mobile: [
      { text: "Was going for the creepy blended background look.", color: textColor1 },
      { text: "Thought the red circle gradient in the middle gives that stage lighting spotlight feel.", color: textColor1 },
      { text: "Is the red circle to ugly?", color: textColor2 },
      { text: "Good with the layout?", color: textColor2 }
    ],
  },
  ABOUT: {
    desktop: [
      { text: "Underline the name of the show so users know they can click it.", color: textColor3 },
      { text: "Should the icon and font UNDER 'the big red machine' be smaller?", color: textColor2 },
      { text: "Is the layout good?", color: textColor2 },
      { text: "About Desktop Line 4", color: textColor4 }
    ],
    mobile: [
      { text: "Pretty happy with this but will take any suggestions.", color: textColor1 },
      { text: "Will underline and link the name of the show.", color: textColor3 }
    ],
  },
  SHOWS: {
    desktop: [
      { text: "Need to format text  for the shows better.", color: textColor1 },
      { text: "Should there be a background? Im thinking because its business it should stay pretty plain.", color: textColor2 },
      { text: "Should I add the white background gradient that Shows on mobile has?", color: textColor2 }
    ],
    mobile: [
      { text: "Need to format this better", color: textColor1 },
      { text: "Similiar to desktop, wondering if I should have a background image or keep it simple and plain since its business.", color: textColor2 },
      { text: "Should back button be red?", color: textColor2 }
    ],
  },
  PODCAST: {
    desktop: [
      { text: "Need to link to podcast on the title and image.", color: textColor3 },
      { text: "Cool with the background image positioning?", color: textColor2 },
      { text: "Should bg image be more transparent?", color: textColor2 },
    ],
    mobile: [
      { text: "Should underline and link name of show.", color: textColor3 },
      { text: "None of the elements are overlapping right?", color: textColor2 }
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
