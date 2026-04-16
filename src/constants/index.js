
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
  projectmgt,
  spotifyimg,
  nasa,
  sectip,
  swayam,
  book,
  chat,
  bitlinks,
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
        name: "Node.js",
        color: "orange-text-gradient",
      },
    ],
    image: site,
    source_code_link: "https://github.com/gauravsinghcodes/Site-Builder",
    link:"https://site-builder-frontend-nine.vercel.app",
  },
  {
    name: "Real-Time Group Chat App",
    description:
      "A real-time group chat application built with React and Socket.io, featuring persistent message history and dynamic room management. It offers a fully responsive, WhatsApp-inspired UI with live presence tracking and seamless room switching for a state-of-the-art user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "purple-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/gauravsinghcodes/Group-Chatt",
    link:"https://group-chatt-eta.vercel.app",
  },
  {
    name: "Project Management",
    description:
      "Built with React, Redux, Node.js/Express,  & PostgreSQL (via Prisma + Neon). It supports multi-workspace collaboration with role-based access, project & task tracking (with priorities, statuses, and due dates), and team management powered by Clerk for auth and Inngest for real-time background sync. Users get email notifications on task assignments and deployed on vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "purple-text-gradient",
      },
      {
        name: "Clerk",
        color: "violet-text-gradient",
      },
    ],
    image: projectmgt,
    source_code_link: "https://github.com/gauravsinghcodes/Project-Management",
    link:"https://project-management-ten-neon.vercel.app",
  },
  {
    name: "Bookified",
    description:
      "Developed Bookified, an AI voice-powered platform that turns PDFs into interactive conversational companions. Users can upload books, ask questions via voice, and receive AI-generated insights and summaries.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Vapi AI",
        color: "brown-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
      {
        name: "Vervel Blob",
        color: "white-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/gauravsinghcodes/bookified",
    link:"https://www.linkedin.com/posts/gaurav-singh-b3b3b7324_ai-nextjs-webdevelopment-ugcPost-7438632160908980224-COCO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFHt1J8BDON6vpFvBoqNajg5Ks26GZrrGto",
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
    link:"https://gauravsinghcodes.pythonanywhere.com",
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
    link:"https://fizzi-fizz.vercel.app",
  },
  {
    name: "Bitlinks",
    description:
      "BitLinks is a high-performance URL management platform that enables teams to create custom-branded links, track analytics, and generate QR codes with ease. It offers a fast, secure, and privacy-focused experience with a streamlined workflow and no complex onboarding.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tialwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: bitlinks,
    source_code_link: "https://github.com/gauravsinghcodes/bitlinks",
    link:"https://bitlinks-rho-sooty.vercel.app",
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
    link:"https://spotify-clone-kappa-rouge.vercel.app",
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
    link:"https://ai-chatbott-indol.vercel.app",
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
    link:"https://weather-forecast-app-taupe.vercel.app",
  },
];

export { services, technologies, experiences, certifications, projects };
