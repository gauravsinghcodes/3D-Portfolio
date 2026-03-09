
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  civora,
  cplusplus,
  c,
  express,
  flask,
  githubtech,
  mysql,
  nextjs,
  postman,
  vercel,
  site,
  aichatbot,
  feedbackImg,
  fizzi,
  weather,
  spotifyimg,
  nasa,
  sectip,
  swayam,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "GitHub",
    icon: githubtech,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Civora Nexus",
    icon: civora,
    iconBg: "#383E56",
    date: "July 2025 - August 2025",
    points: [
      "Built a production-ready Feedback App.",
      "Implemented secure authentication and user management.",
      "Designed and integrated databases for seamless data flow.",
      "Created interactive dashboards for data visualization and analysis.",
    ],
  },
];

const certifications = [
  {
    name: "Full Stack Web Development",
    issuer: "Civora Nexus",
    date: "July 2025 - August 2025",
    image: sectip,
    link: "https://c.vialoops.com/CL0/https:%2F%2Fdrive.google.com%2Ffile%2Fd%2F1rFJDVtjnU-qQcOGpwTny5gEJmsYUYdX8%2Fview%3Fusp=drive_link/1/01000198901c1c10-06722156-f748-4421-9d3c-e0130d4ab491-000000/CXTe_pCeIseWAfiyia4E4jTckSvGWdrrS6ivMs5GCJM=417",
  },
  {
    name: "Corporate Social Responsibility",
    issuer: "Indian Institute of Technology, Kharagpur",
    date: "Sept 2025",
    image: swayam,
    link: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM2/Ecertificates/110/noc25-mg139/Course/NPTEL25MG139S64360115909315531.pdf",
  },
  {
    name: "NASA International Space Apps Challenge 2025",
    issuer: "NASA",
    date: "October 2025",
    image: nasa,
    link: "https://www.linkedin.com/posts/gaurav-singh-b3b3b7324_nasa-spaceapps-hackathon-activity-7400606972057747456-2n2Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFHt1J8BDON6vpFvBoqNajg5Ks26GZrrGto",
  },
];

const projects = [
  {
    name: "AI Site Builder",
    description:
      "An AI-powered Website Builder that generates and updates complete websites from simple prompts with real-time preview, version control, and responsive Tailwind-based layouts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Express and Node.js",
        color: "orange-text-gradient",
      },
    ],
    image: site,
    source_code_link: "https://github.com/gauravsinghcodes/Site-Builder",
  },
  {
    name: "Feedback App",
    description:
      "A user-friendly web application built with Flask, HTML/CSS, and SQLite that allows users to submit feedback and enables admin to review and update feedback status via a secure dashboard. Automated email notifications are also sent during submission and resolution.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: feedbackImg,
    source_code_link: "https://github.com/gauravsinghcodes/websiite_feedback_collector",
  },
  {
    name: "Fizzi-Fizz",
    description:
      "An E-commerce landing page built using HTML, CSS, and JavaScript. It features a modern design, responsive layout, and interactive elements to enhance user experience.",
    tags: [
      {
        name: "Next.js and React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
      {
        name: "GSAP",
        color: "orange-text-gradient",
      },
      {
        name: "Prismic CMS",
        color: "green-text-gradient",
      },
    ],
    image: fizzi,
    source_code_link: "https://github.com/gauravsinghcodes/Fizzi-Fizz",
  },
  {
    name: "Spotify Clone",
    description:
      "A responsive web application replicating Spotify's core features using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: spotifyimg,
    source_code_link: "https://github.com/gauravsinghcodes/spotify_clone",
  },
  {
    name: "AI Chatbot",
    description:
      "A modern AI-powered chatbot web application built using HTML, CSS, JavaScript, and a serverless backend deployed on Vercel using Google Gemini API. This project is created as a practice project to understand full-stack deployment, API integration, and serverless architecture.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Google Gemini API",
        color: "orange-text-gradient",
      },
    ],
    image: aichatbot,
    source_code_link: "https://github.com/gauravsinghcodes/ai-chatbott",
  },
  {
    name: "Weather Forecast App",
    description:
      "A modern and responsive Weather Forecast Web App that shows real-time weather information and hourly forecasts for any city using the WeatherAPI. The app also supports current location weather and dynamic background gradients based on weather conditions.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "WeatherAPI",
        color: "orange-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/gauravsinghcodes/weather-forecast-app",
  },
];

export { services, technologies, experiences, certifications, projects };
