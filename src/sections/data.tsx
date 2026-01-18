import {
  JavaScriptIcon,
  TypeScriptIcon,
  TailwindIcon,
  ReactIcon,
  NodeJSIcon,
  ExpressIcon,
  MongoDBIcon,
  NextJSIcon,
  GitIcon,
  DockerIcon,
  AWSIcon,
  PythonIcon,
  DjangoIcon,
  WebRTCIcon,
} from "../icons/Skillsicon";
import { Github,Linkedin, Mail, Twitter } from "lucide-react";

export const experianceData = [
  {
    role: "FullStack Developer",
    company: "ThirdAI Automation",
    duration: "Jun 2025 - Oct 2025",
    description:
      "Worked on document ingestion and OCR-based systems used for search and automation.",
    points: [
      "Built an end-to-end document ingestion to OCR preview pipeline using Azure Document Intelligence",
      "Used Amazon Neptune to store entities and relationships for graph-based search",
      "Created a self-serve API playground with clear documentation for ingestion APIs",
      "Developed APIs to create and manage workflow pipelines and nodes",
      "Worked with a multi-agent chat system for automation workflows",
      "Built automated Playwright tests in Python that reduced production bugs by 80%",
    ],
    skills: [
      "Next.js",
      "AWS CDK",
      "AWS Lambda",
      "FastAPI",
      "Amazon Neptune",
      "S3",
      "OCR",
      "Playwright",
    ],
  },
  {
    role: "FullStack Developer",
    company: "Kanmano Dental Care",
    duration: "May 2024 - Jul 2024",
    description:
      "Built a booking and consultation platform for dental appointments.",
    points: [
      "Developed a React and FastAPI web app for appointment booking and consultations",
      "Designed the full booking flow including doctor selection and scheduling",
      "Integrated WebRTC for video consultations",
      "Added Razorpay for payments, improving completed consultations by 20%",
      "Set up automated email notifications for booking and approvals",
    ],
    skills: ["React", "FastAPI", "MongoDB", "WebRTC", "Socket.io", "Razorpay"],
  },
  {
    role: "Frontend Developer ",
    company: "MakeMyBrain",
    duration: "Mar 2024 - Apr 2024",
    description:
      "Focused on frontend performance and user engagement features.",
    points: [
      "Built a responsive UI using React and Tailwind CSS",
      "Improved page load speed by 40% using component caching",
      "Implemented a mood-based music recommendation feature",
      "Increased user retention and session time by 30%",
      "Built a two-role blog management system for over 1,000 posts",
    ],
    skills: ["React", "Tailwind CSS"],
  },
];

export const mySkills = [
  { Icon: ExpressIcon, title: "Express" },
  { Icon: JavaScriptIcon, title: "JavaScript" },
  { Icon: MongoDBIcon, title: "MongoDB" },
  { Icon: NodeJSIcon, title: "Node" },
  { Icon: ReactIcon, title: "React" },
  { Icon: TailwindIcon, title: "Tailwind" },
  { Icon: TypeScriptIcon, title: "TypeScript" },
  { Icon: NextJSIcon, title: "Next" },
  { Icon: GitIcon, title: "github" },
  { Icon: DockerIcon, title: "Doker" },
  { Icon: PythonIcon, title: "Python" },
  { Icon: AWSIcon, title: "AWS" },
  { Icon: DjangoIcon, title: "Django" },
  { Icon: WebRTCIcon, title: "webRTC" },
];

export const ProjectData = [
  {
    title: "Revive — Your Second Brain",
    description:
      "A production ready full-stack RAG-based knowledge management platform that lets users save links, documents, and web content, then chat with all their data using AI-powered contextual search. Built with background workers, vector embeddings, and scalable async pipelines.",
    techStacks: [
      "React",
      "Express.js",
      "MongoDB",
      "AWS S3",
      "Pinecone",
      "Gemini API",
      "Apify",
      "BullMQ",
      "Redis",
    ],
    liveLink: "https://revive.kgpian.site/",
    githubLink: "https://github.com/ac8628026/revive_server",
  },
  {
    title: "ChessMeet — Play Chess with Video Chat",
    description:
      "A real-time multiplayer chess platform that allows two players to play chess while video chatting. Combines low-latency WebSocket-based gameplay with peer-to-peer WebRTC video communication.",
    techStacks: ["React", "Express.js", "WebRTC", "WebSocket"],
    liveLink: "https://chessmeet.kgpian.site/",
    githubLink: "https://github.com/ac8628026/Chess_Backend",
  },
  {
    title: "xProxy — AI Auto-Reply System for X",
    description:
      "An AI-powered automation tool that generates personalized replies to X (Twitter) mentions. Scrapes mention data, processes it asynchronously, and responds using intelligent backend workflows.",
    techStacks: [
      "FastAPI",
      "Python",
      "Redis",
      "Selenium",
      "BeautifulSoup",
      "PostgreSQL",
      "SQLAlchemy",
    ],
    liveLink: "",
    githubLink: "https://github.com/ac8628026/xProxy",
  },
  {
    title: "Nike Landing Page",
    description:
      "A modern and responsive Nike shoes landing page showcasing featured products, clean UI, and smooth user experience, built with a mobile-first approach.",
    techStacks: ["React", "Tailwind CSS"],
    liveLink: "https://nike-eta-woad.vercel.app/",
    githubLink: "https://github.com/ac8628026/Nike",
  },
];

 export  const socialLinks = [
    { title: "Github", link: "https://github.com/ac8628026", icon: <Github /> },
    { title: "LinkedIn", link: "https://www.linkedin.com/in/ac8628026/", icon: <Linkedin /> },
    { title: "Email", link: "mailto:ashokchoudhary.oc@gmail.com", icon: <Mail /> },
    { title: "Twitter", link: "https://x.com/ashok_ac8628026", icon: <Twitter /> },
  ];