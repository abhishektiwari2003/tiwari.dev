import { Github, XIcon, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoSocket from "/public/images/logos/icon-socket.svg";
import LogoSocketLight from "/public/images/logos/icon-socket-light.svg";
import LogoAngular from "/public/images/logos/icon-angular.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoSql from "/public/images/logos/icon-sql.svg";
import LogoFireBase from "/public/images/logos/icon-firebase.svg";
import LogoDocker from "public/images/logos/icon-docker.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoHealthipeople from "/public/images/logos/logo-healthipeople.png";
import LogoEcell from "/public/images/logos/icon-ecell.png";
import LogoHappyday from "/public/images/logos/icon-happyday.png";

import ProjectVideoReach from "/public/images/project-videoreach.png";
import ProjectCrossstone from "/public/images/project-crossstone.png";
import ProjectRadhey from "/public/images/project-radhey.jpeg";
import ProjectRestro from "/public/images/project-restro.jpg";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/abhishektiwari2003",
  GITHUB_REPO: "https://github.com/shahsagarm/sagarshah.dev",
  X: "https://x.com/abhi_shekT",
  FIGMA: "https://www.figma.com/@shahsagarm",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/abhishektiwari2003",
  },
  {
    icon: XIcon,
    url: "https://x.com/abhi_shekT",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/abhishek-tiwari-a74453229/",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "React Native",
    logo: LogoReact,
    url: "https://reactnative.dev/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "Angular",
    logo: LogoAngular,
    url: "https://angularjs.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "MySql",
    logo: LogoSql,
    url: "https://www.mysql.com/",
  },
  {
    label: "Firebase",
    logo: LogoFireBase,
    url: "https://firebase.google.com/",
  },
  {
    label: "Docker",
    logo: LogoDocker,
    url: "https://www.docker.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoHealthipeople,
    logoAlt: "Healthipeople's logo",
    position: "Frontend Developer",
    startDate: new Date(2023, 8),
    currentlyWorkHere: true,
    summary: [
      "Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.",
      "Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.",
    ],
  },
  {
    logo: LogoEcell,
    logoAlt: "Ecell logo",
    position: "Full Stack Developer",
    startDate: new Date(2022, 2),
    endDate: new Date(2022, 5),
    summary: [
      "Spearheaded the development of the Restro Delight App, a mobile platform for ordering food from a Mumbai-based restaurant.",
      "Architected both frontend and backend solutions using React Native, Typescript, and Express.js, ensuring a seamless user experience.",
      "Handled the integration of Firebase and MongoDB for real-time data management and storage.",
      "Led a team in the design and implementation of the app, overseeing project planning, task allocation, and quality assurance.",
    ],
  },
  {
    logo: LogoHappyday,
    logoAlt: "HappyDay logo",
    position: "IIT JEE Maths Tutor",
    startDate: new Date(2021, 11),
    endDate: new Date(2022, 4),
    summary: [
      "Provided tutoring in IIT JEE Maths, designing custom lesson plans to meet individual student needs.",
      "Worked closely with students to track their progress and adjust teaching strategies accordingly.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Healthipeople's Videoreach Landing Page",
    description:
      "Videoreach is an interactive online video tool that allows Health Systems or Service Providers to create interactive, engaging and asynchronous conversations with their Patients/Members.  It is a web based platform that allows you to create video based education, video surveys, follow ups, and video based screenings to engage Patients, improve health outcomes, improve adherence and reduce time and costs for your staff.",
    url: "https://www.videoreach.run",
    previewImage: ProjectVideoReach,
    technologies: [
      "React",
      "Typescript",
      "Material UI",
      "Styled Components",
      "Redux",
      "Git",
    ],
  },
  {
    name: "Restro Delight App",
    description:
      "A platform for ordering food and snacks from Restro Delight restaurant based in Mumbai.",
    url: "https://drive.google.com/file/d/1KSG9Ie4jIWkxoStadw3Nj7m5fHOT8X1z/view?usp=sharing",
    previewImage: ProjectRestro,
    technologies: [
      "React Native",
      "Typescript",
      "Material UI",
      "Redux Toolkit",
      "Express.js",
      "Firebase",
      "Node Js",
      "MongoDB",
    ],
  },
  {
    name: "Radhey Ayurvedic Ecommerce Website",
    description:
      "An ecommerce platform for ordering Ayurvedic products online in Pan India.",
    url: "https://radheyayurvedic.shop",
    previewImage: ProjectRadhey,
    technologies: [
      "React",
      "Node Js",
      "Typescript",
      "Material UI",
      "Redux Toolkit",
      "MongoDB",
      "Express Js",
      "Socket IO",
    ],
  },
  {
    name: "Crossstone Website and App",
    description:
      "Crossstone, A home construction company, provides a complete start-to-finish service, also known as design-to-build, that enables real-time tracking, communication, quality checks, and updates on projects from day one until the final project delivery. Crossstone aims to bring transparency and trust into the construction space by leveraging technology. The quality and progress of projects are mapped using artificial intelligence and computer vision, allowing for streamlined management architecture and enabling the predictability of the entire house construction process.",
    url: "https://cheery-pudding-98e2f2.netlify.app/",
    previewImage: ProjectCrossstone,
    technologies: [
      "React",
      "Node Js",
      "Typescript",
      "Material UI",
      "Redux Toolkit",
      "MongoDB",
      "Express Js",
      "Socket IO",
      "React Native",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
