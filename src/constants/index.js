const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

// Services you offer – ordered by resume emphasis
const services = [
    {
        title: "End-to-End Full Stack Developer",
        icon: "../assets/full-stack.png",
    },
    {
        title: "Cloud & DevOps Specialist",
        icon: "../assets/cloud.png",
    },
    {
        title: "Microservices & System Designs",
        icon: "../assets/microservices.png",
    },
    {
        title: "Team Leadership & Agile Delivery",
        icon: "../assets/team-lead.png",
    },
];

// Technologies you work with – prioritized by resume prominence
const technologies = [
    { name: "JavaScript", icon: "../assets/tech/javascript.png" },
    { name: "TypeScript", icon: "../assets/tech/typescript.png" },
    { name: "React JS", icon: "../assets/tech/reactjs.png" },
    { name: "Node JS", icon: "../assets/tech/nodejs.png" },
    { name: "AWS", icon: "../assets/tech/aws.png" },
    { name: "Azure", icon: "../assets/tech/azure.png" },
    { name: "GCP", icon: "../assets/tech/google-cloud.png" },
    { name: "AWS Lambda", icon: "../assets/tech/lambda.png" },
    { name: "Terraform", icon: "../assets/tech/terraform.png" },
    { name: "MongoDB", icon: "../assets/tech/mongodb.png" },
    { name: "Redis", icon: "../assets/tech/redis.png" },
    { name: "Redux", icon: "../assets/tech/redux.png" },
    { name: "HTML 5", icon: "../assets/tech/html.png" },
    { name: "CSS 3", icon: "../assets/tech/css.png" },
    { name: "Tailwind CSS", icon: "../assets/tech/tailwind.png" },
    { name: "MySQL", icon: "../assets/tech/mysql.png" },
    { name: "AWS DynamoDB", icon: "../assets/tech/dynamodb.png" },
    { name: "Docker", icon: "../assets/tech/docker.png" },
    { name: "Kubernetes", icon: "../assets/tech/kubernetes.png" },
    { name: "Git", icon: "../assets/tech/git.png" },
    { name: "React Native", icon: "../assets/tech/reactjs.png" },
    { name: "API Gateway", icon: "../assets/tech/aws.png" },
    { name: "REST API", icon: "../assets/tech/restapi.png" },
    { name: "GraphQL", icon: "../assets/tech/graphql.png" },
    { name: "C#", icon: "../assets/tech/csharp.png" },
    { name: "SQL", icon: "../assets/tech/mysql.png" },
    { name: "Next.js", icon: "../assets/tech/nextjs.png" },
    { name: "Material UI", icon: "../assets/tech/material-ui.png" },
    { name: "Kafka", icon: "../assets/tech/kafka.png" },
    { name: "PostgreSQL", icon: "../assets/tech/postgresql.png" },
    { name: "Firestore", icon: "../assets/tech/firestore.png" },
    { name: "AWS S3", icon: "../assets/tech/Amazon-S3.png" },
    { name: "Express JS", icon: "../assets/tech/expressjs.png" },
    { name: "ESLint", icon: "../assets/tech/eslint.png" },
];

// Tools & platforms you utilize – arranged by their practical impact
const tools = [
    { name: "Ubuntu", icon: "../assets/tools/ubuntu.png" },
    { name: "ChatGPT", icon: "../assets/tools/ChatGPT.png" },
    { name: "Swagger", icon: "../assets/tools/swagger.png" },
    { name: "Postman", icon: "../assets/tools/postman.png" },
    { name: "Git CI/CD", icon: "../assets/tools/cicd.png" },
    { name: "MongoDB Compass", icon: "../assets/tools/mongodbCompass.png" },
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "atQor",
        icon: "../assets/team-lead.png",
        iconBg: "#383E56",
        date: "Nov 2024 - Present",
        points: [
            "Developed a system for managing water distribution, billing, customer accounts, meter readings, service requests, and usage analytics.",
            "Implemented features such as notifications, payment gateways, and reporting dashboards for enhanced user experience and operational efficiency.",
            "Built using Node.js for backend services and React for the frontend interface.",
            "Achieved a 40% improvement in system performance and scalability through backend optimization and efficient resource management.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Brainvire infotech",
        icon: "../assets/microservices.png",
        iconBg: "#383E56",
        date: "June 2023 - Nov 2024",
        points: [
            "Enhanced Chat Application service backend performance by 50% via optimized APIs, queries using Node.js, and Redis-based caching for faster data access and improved scalability.",
            "Delivered AI Chat Assistance  by developing production-grade, serverless Lambda APIs with API Gateway, AWS CDN, and Firestore integration.",
            "Developed AI solutions using OpenAI LLM, integrating advanced language models into production systems for enhanced automation and intelligence.",
            "Designed and implemented scalable microservices architectures, enabling modular development, independent deployment, and improved system reliability.",
        ],
    },
    {
        title: "Trainee Software Engineer",
        company_name: "BASSETTI ITES PVT. LTD",
        icon: "../assets/full-stack.png",
        iconBg: "#383E56",
        date: "Dec 2022 - Feb 2023",
        points: [
            "Developed and deployed an MVP model for an Ed-Tech platform, showcasing expertise in full-stack development with React.js, Node.js, and MongoDB for efficient data storage and reliability.",
            "Actively contributed to the SaaS Developer community, demonstrating software development expertise through innovative solutions and collaborative problem-solving.",
        ],
    },
];

const projects = [
    {
        name: "AI image generator",
        description:
            "AI image generation platform with secure authentication, subscription and payment system. Users can generate images, manage galleries, and purchase credits through a seamless.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "OpenAI",
                color: "green-text-gradient",
            }
        ],
        image: "../assets/picnix.png",
        alt: "Smart Therapist",
        source_code_link: "https://github.com/amirsohail66/Picnix",
        live_link: "https://picnix.vercel.app/",
    },
    {
        name: "Chat application",
        description:
            "A robust real-time chat application featuring live chat support, audio and video calling, and functionalities such as secure messaging, file sharing, group and private chats, and seamless media communication for a modern, scalable chat experience.",
        tags: [
            {
                name: "MERN",
                color: "green-text-gradient",
            },
            {
                name: "Socket.IO",
                color: "yellow-text-gradient",
            },
            {
                name: "AWS S3",
                color: "orange-text-gradient",
            },
            {
                name: "Redis",
                color: "purple-text-gradient",
            },
        ],
        image: "../assets/lucy.png",
        alt: "Portfolio",
        source_code_link: "https://github.com/amirsohail66/Chat-app",
        live_link: "",
    },
    {
        name: "FoodieCart",
        description: "FoodieCart is a fully authenticated eCommerce website for selling food online. Built using the MERN stack, it provides a seamless experience for customers to browse, order, and pay for their favorite dishes.",
        tags: [
            {
                name: "MERN Stack",
                color: "blue-text-gradient",
            },
            {
                name: "Rest API",
                color: "pink-text-gradient",
            },
        ],
        image: "../assets/foodiecart.png",
        alt: "LetsChat",
        source_code_link: "https://github.com/amirsohail66/FoodieCart",
        live_link: "",
    },
    {
        name: "Video-Chat-Socketio-WebRTC",
        description:"This project is a video chat application built using Node.js, Express, Socket.io, and PeerJS. It allows users to create and join video chat rooms for real-time communication.",
        tags: [
            {
                name: "MERN Stack",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "AWS",
                color: "pink-text-gradient",
            },
            {
                name: "Python",
                color: "orange-text-gradient",
            },
        ],
        image: "../assets/webrtcChat.png",
        alt: "FoodPort",
        source_code_link: "https://github.com/amirsohail66/video-chat-socketio-peerjs",
        live_link: "https://audio-video-chat.onrender.com/",
    },
    {
        name: "GNOME-Extension",
        description:"This GNOME extension displays the system uptime and network speed (inbound and outbound) in the top bar. It's useful for monitoring system uptime and real-time network speed directly from the GNOME shell.",
        tags: [
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
        ],
        image: "../assets/extension.png",
        alt: "My Recipes in Django",
        source_code_link: "https://github.com/amirsohail66/GNOME-Extension-For-System-Performance",
        live_link: "",
    },
    {
        name: "Terraform-GCP",
        description:"Terraform configurations and scripts for deploying and managing serverless functions on Google Cloud Platform (GCP). Includes setup for Cloud Functions, API Gateway, Secret Manager, and IAM roles.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "orange-text-gradient",
            },
        ],
        image: "../assets/teraform.png",
        alt: "Snake Game",
        source_code_link: "https://github.com/imunreal7/snake-game-react",
        live_link: "https://snake-game-a008f.web.app/",
    },
];

export { navLinks, services, technologies, tools, projects, experiences };

