import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo
} from "react-icons/rx";

import { FaGithub } from "react-icons/fa";

export const SOCIALS = [

  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/josephmoustaid",
  },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 70, height: 70 },
  { skill_name: "SASS", image: "icons8-sass-24.png", width: 60, height: 60 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Java", image: "java.png", width: 70, height: 70 },
  { skill_name: "Spring Boot", image: "icons8-spring-boot-48.png", width: 70, height: 70 },
  { skill_name: "Python", image: "py.png", width: 70, height: 70 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "Oracle", image: "oracle.png", width: 70, height: 70 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "Hadoop", image: "hadoop.png", width: 70, height: 70 },
  { skill_name: "GraphQL", image: "graphql.png", width: 80, height: 80 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "Socket.IO", image: "socket-io.svg", width: 65, height: 65 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "Git", image: "git.png", width: 70, height: 70 },
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "Go", image: "go.png", width: 60, height: 60 },
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
  { skill_name: "Maven", image: "maven-svgrepo-com.svg", width: 90, height: 90 },
  { skill_name: "Gradle", image: "Gradle.png", width: 60, height: 60 },
] as const;

export const PROJECTS = [
  {
    title: "Yomo",
    description: "Yomo is an e-commerce website that showcases and sells my artwork including paintings, drawings, and prints. The platform provides a seamless shopping experience for art enthusiasts, allowing them to browse through various collections, view detailed images of the artwork, and make secure purchases.",
    image: "/projectPreviews/Yomo/yomo.png",
    link: "https://github.com/JosephMoustaid/ART-STORE",
    technologies: ["React", "Node.js & Express", "Postgres", "Sass"]
  },
  {
    title: "Recipidea",
    description: "Recipidea is a recipe management platform that allows users to search, save, and share their favorite recipes. The platform provides a user-friendly interface for browsing recipes, viewing detailed instructions, and managing personal recipe collections.",
    image: "/projectPreviews/Recipeidea/recipe.webp",
    link: "https://github.com/JosephMoustaid/Recipidea",
    technologies: ["Python", "Django", "Sass", "recipes open Database"]
  },
  {
    title: "goMacros",
    description: "goMacros is a meal planning and nutrition tracking application designed to help users achieve their dietary goals. The platform offers personalized meal plans, nutrition tracking, and progress monitoring to ensure users stay on track with their health objectives.",
    image: "/projectPreviews/goMacros/goMacros.png",
    link: "https://github.com/JosephMoustaid/goMacros",
    technologies: ["React", "Node.js & Express", "MongoDB", "Sass"]
  },
  {
    title: "ClubXtreme",
    description: "Sports Club Management Platform with real-time overview of club activities, including tournaments, events, and transactions. Features member management, event planning, training sessions organization, and detailed reporting.",
    image: "/projectPreviews/ClubXtreme/ClubXtreme.png",
    link: "",
    technologies: ["PHP", "Boostrap", "Sass", "mySQL"]
  },
  {
    title: "pharmaIQ",
    description: "pharmaIQ is an AI-powered platform designed for the pharmaceutical sector to prevent and predict drug shortages using predictive models. It also provides an AI medical assistant to enhance healthcare decision-making and streamline pharmaceutical operations.",
    image: "/projectPreviews/pharmaIQ/pharmaIQ.png",
    link: "",
    technologies: ["Django", "Llama 2.0", "Scikit-learn", "Python", "Sass", "Bootstrap"]
  },
  {
    title: "Immerse",
    description: "Immerse is a web-based immersive platform leveraging WebXR technology to create virtual environments for educational and collaborative purposes. It allows users to interact with 3D spaces, integrate multimedia elements, and collaborate in real time.",
    image: "/projectPreviews/Immerse/labCopy.png",
    link: "",
    technologies: ["A-frame", "WebXR", "React", "Node.js & Express", "Socket.IO", "Sass", "Postgres"]
  },
  {
    title: "Gericht",
    description: "Gericht is a premium restaurant website designed to provide an elegant online experience for customers. It offers a sophisticated and visually appealing interface, showcasing the restaurant's menu, reservations, and special events.",
    image: "/projectPreviews/Gericht/gericht.png",
    link: "",
    technologies: ["Sass", "JavaScript", "HTML"]
  },
  {
    title: "ByteBurst",
    description: "Built a dynamic website that provides articles, news, tutorials, and more. It provides a platform for users to share their knowledge and help others. The website was built to provide an authenticated source of information, propaganda-free.",
    image: "/projectPreviews/ByteBurts/ByteBurst.png",
    link: "https://github.com/JosephMoustaid/ByteBurst",
    technologies: ["PHP", "Symfony", "mySQL", "Scss"]
  },
  {
    title: "MyWeather",
    description: "MyWeather is a weather forecasting application that provides real-time weather updates and forecasts for various locations. The platform uses the Open Weather API to fetch accurate weather data and displays it in a user-friendly interface.",
    image: "/projectPreviews/myweather/myweather.png",
    link: "https://github.com/JosephMoustaid/MyWeather",
    technologies: ["Django", "Open weather API", "mySQL", "Scss"]
  },
  {
    title: "ChatBot",
    description: "ChatBot is an AI-powered chatbot application that provides automated responses to user queries. The platform is designed to assist users with common questions and tasks, offering a seamless conversational experience.",
    image: "/projectPreviews/ChatBot/chatbot.png",
    link: "https://github.com/JosephMoustaid/chatbotUI",
    technologies: ["Django", "Ollama 3.2", "Python", "Scss"]
  },
  {
    title: "Bricole",
    description: "A comprehensive platform connecting job seekers with employers, featuring AI-powered job matching, chat functionality, and application management for both employees and employers.",
    image: "/projectPreviews/Bricole/Banner.png",
    link: "https://github.com/JosephMoustaid/PFA",
    technologies: ["Spring boot", "Java for Android", "REST API", "React", "Python", "Flask", "Open-LLM-V6-2", "Scss"]
  },
  {
    title: "RisingHope",
    description: "A charity donation platform with secure payment processing, user authentication, and charity management features. Built with Spring Boot and integrated with Stripe for payment processing.",
    image: "/projectPreviews/RisingHope/home.png",
    link: "https://github.com/JosephMoustaid/chatbotUI",
    technologies: ["Spring Boot", "Thymleaf", "JWT tokens", "Oauth2", "Stripe", "JavaScript", "Scss"]
  }
] as const;export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
      {
        name: "Github",
        icon: FaGithub,
        link: "https://github.com/josephmoustaid",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Blog",
    link: "#blog",
  },
] as const;

export const LINKS = {
  github: "https://github.com/josephmoustaid",
};


export const BLOGS = [
  {
    title: "Mastering React Server Components in 2025",
    summary:
        "React Server Components (RSC) are reshaping how we think about rendering. In this post, we break down the fundamentals of RSC, compare them to traditional SSR and CSR techniques, and show you how to integrate them into your Next.js 14 projects. Includes code examples and performance benchmarks.",
    image: "/blogImages/ai.webp",
    link: "https://dev.to/yourusername/mastering-react-server-components-in-2025-abc",
    date: "May 20, 2025",
  },
  {
    title: "Spring Boot vs. Quarkus: Which Java Framework Should You Choose?",
    summary:
        "Java developers are increasingly torn between Spring Boot and Quarkus. This in-depth comparison looks at performance, startup time, developer experience, ecosystem maturity, and deployment options for both frameworks—helping you pick the right tool for modern microservices.",
    image: "/blogImages/Spring.webp",
    link: "https://medium.com/@yourname/spring-boot-vs-quarkus-which-java-framework-should-you-choose-xyz",
    date: "May 16, 2025",
  },
  {
    title: "From Zero to Backend Hero: How I Built My First REST API with Spring Boot",
    summary:
        "Starting from scratch, I built a complete CRUD REST API using Spring Boot, PostgreSQL, and JWT authentication. I cover project setup, architecture decisions, and how to secure endpoints with Spring Security. This is a great guide for beginners diving into Java backend development.",
    image: "/blogImages/Spring.webp",
    link: "https://yourblog.com/from-zero-to-backend-hero-spring-boot",
    date: "May 12, 2025",
  },
  {
    title: "The Complete Guide to Tailwind CSS Dark Mode",
    summary:
        "Struggling with dark mode in Tailwind CSS? This comprehensive guide walks you through the pros and cons of using class-based vs media-based dark mode. Learn how to switch themes dynamically, persist settings, and design beautiful dark interfaces that feel premium.",
    image: "/blogImages/frustration.jpg",
    link: "https://yourblog.com/complete-guide-tailwind-css-dark-mode",
    date: "April 30, 2025",
  },
  {
    title: "AI-Powered Recipe Apps: How I Used Machine Learning to Detect Ingredients from Images",
    summary:
        "In this blog post, I walk you through the architecture of a mobile app I built that uses computer vision to detect ingredients and suggest recipes. We used a Flask ML model, Spring Boot backend, MongoDB for logs, and a React dashboard. Full-stack AI integration, simplified.",
    image: "/blogImages/minimalism.jpg",
    link: "https://yourblog.com/ai-powered-recipe-app",
    date: "April 25, 2025",
  },
];

