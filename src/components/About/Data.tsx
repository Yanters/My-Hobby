import image from "../../images/1.svg";
import image2 from "../../images/2.svg";
import image3 from "../../images/5.svg";

export const data = {
  id: "about",
  isLight: false,
  lightText: true,
  ligthTextDescription: true,
  topLine: "What is Programming?",
  headLine: "Let's find out!",
  description:
    "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result or to perform a specific task.",
  buttonLabel: "Learn More!",
  imgStart: true,
  img: image,
  alt: "Programming",
  dark: true,
  primary: true,
  darkText: false,
  buttonLink: false,
};

export const data2 = {
  id: "projects",
  isLight: true,
  lightText: false,
  ligthTextDescription: false,
  topLine: "Pojects",
  headLine: "Let's have a look!",
  description: "Click the button below to see many WEB projects",
  buttonLabel: "Go to Projects!",
  imgStart: false,
  img: image2,
  alt: "Projects",
  dark: false,
  primary: false,
  darkText: true,
  buttonLink: true,
};

export const data3 = {
  id: "contact",
  isLight: true,
  lightText: false,
  ligthTextDescription: false,
  topLine: "Contact",
  headLine: "Let's connect!",
  description: "Write to me and let's code something together!",
  buttonLabel: "Contact me",
  imgStart: false,
  img: image3,
  alt: "Projects",
  dark: false,
  primary: false,
  darkText: true,
  buttonLink: true,
};
