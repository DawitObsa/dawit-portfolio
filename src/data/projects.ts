import bhulinkCover from "@/assets/bhulink-cover.jpg";
import chatCover from "@/assets/chat-cover.jpg";
import iqubCover from "@/assets/iqub-cover.jpg";
import teacherCover from "@/assets/teacher-eval-cover.jpg";
import teleliteCover from "@/assets/telelite-cover.jpg";
import financeCover from "@/assets/finance-model-cover.jpg";
import mintCover from "@/assets/mint-cover.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  cover: string;
  coverAlt: string;
  stack: string[];
  highlights: string[];
  note?: string;
  github: string;
  live?: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  process: string[];
  challenges: string;
  learned: string[];
  takeaway: string;
  ctaTitle: string;
};

export const projects: Project[] = [
  {
    slug: "bhulink",
    title: "BHULink – University Social Network",
    category: "Full-Stack Web Platform",
    summary:
      "A university-focused platform connecting students, faculty, employees, HR, and administrators through one centralized system with role-based workflows.",
    cover: bhulinkCover,
    coverAlt: "Desktop interface representing the BHULink university platform",
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "REST APIs"],
    highlights: [
      "Role-based users",
      "Student and faculty interaction",
      "Administration tools",
      "Application workflows",
    ],
    note: "Multiple user roles, application workflows, APIs, and a database working together in one product.",
    github: "https://github.com/DawitObsa/UniversitySocialNetwork",
    overview:
      "BHULink is a full-stack web platform that gives a university one digital environment for its different users and day-to-day workflows.",
    problem:
      "University environments involve many users, roles, processes, and information needs. Without a central platform, interactions and workflows are scattered and hard to manage.",
    solution:
      "BHULink organizes the platform around user roles and application workflows, so each user interacts with the features relevant to them.",
    features: [
      "Role-based users",
      "Student and faculty interaction",
      "Administration tools",
      "Application workflows",
      "Candidate screening",
      "Database integration",
      "Modern responsive interface",
    ],
    process: [
      "Requirements",
      "UI Design",
      "Components",
      "API Development",
      "Database Integration",
      "Testing",
      "Refinement",
    ],
    challenges:
      "Supporting different users and workflows while keeping the interface simple and understandable for every role.",
    learned: [
      "Next.js & React",
      "TypeScript",
      "MongoDB",
      "API development",
      "Role-based design",
      "Full-stack debugging",
    ],
    takeaway:
      "BHULink shows my ability to deliver larger full-stack systems spanning interfaces, APIs, databases, users, and workflows.",
    ctaTitle: "Need a custom web platform? Let's build it.",
  },
  {
    slug: "social-media-chat",
    title: "Social Media Chat",
    category: "MERN Real-Time Application",
    summary:
      "A real-time chat application built on the MERN stack with authentication, group chats, instant messaging, and sound and visual notifications.",
    cover: chatCover,
    coverAlt: "Laptop showing a dark real-time chat application interface",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    highlights: [
      "User authentication",
      "One-to-one messaging",
      "Group chats",
      "Instant real-time delivery",
    ],
    note: "Real-time messaging with authentication and group conversations on a JavaScript stack end to end.",
    github: "https://github.com/DawitObsa/SocialMediaChat",
    overview:
      "Social Media Chat is a real-time messaging application built with MongoDB, Express, React, and Node.js, styled with Tailwind CSS.",
    problem:
      "People need a fast, simple way to message each other individually and in groups, and to be notified the moment a new message arrives.",
    solution:
      "A MERN application with secure sign-in, group and direct conversations, and instant delivery with sound and visual notifications.",
    features: [
      "User authentication",
      "One-to-one messaging",
      "Group chats",
      "Instant real-time delivery",
      "Sound and visual notifications",
      "MongoDB data storage",
    ],
    process: [
      "Planning",
      "Auth & API",
      "Data Models",
      "Chat Interface",
      "Real-Time Messaging",
      "Notifications",
      "Testing",
    ],
    challenges:
      "Keeping messages and notifications in sync across users in real time while keeping the interface responsive.",
    learned: [
      "MERN stack",
      "Real-time communication",
      "Authentication",
      "MongoDB modeling",
      "Tailwind CSS",
      "State management",
    ],
    takeaway:
      "This project shows I can build interactive, real-time applications from the database to the interface.",
    ctaTitle: "Need a real-time app? Let's talk.",
  },
  {
    slug: "iqub-management-system",
    title: "Iqub / Ekub Management System",
    category: "Android Application",
    summary:
      "A mobile app that digitizes rotating savings groups — participants, payments, winner selection, history, and notifications.",
    cover: iqubCover,
    coverAlt: "Dark mobile interface representing the Iqub management application",
    stack: ["Java", "Android Studio", "XML", "SQLite"],
    highlights: [
      "User registration and login",
      "Dashboard",
      "Create and join Iqub groups",
      "Member management",
    ],
    note: "A practical mobile app built around a real-world rotating savings workflow.",
    github: "https://github.com/DawitObsa/Ikub-project",
    overview:
      "The Iqub / Ekub Management System is an Android application that digitizes the management of rotating savings groups.",
    problem:
      "Running an Iqub group means tracking members, contributions, payments, rotation, winners, and notifications. Manual records are hard to organize and retrieve.",
    solution:
      "One mobile app where users manage groups, participants, payments, winners, and history in a structured way.",
    features: [
      "User registration and login",
      "Dashboard",
      "Create and join Iqub groups",
      "Member management",
      "Monthly rotation",
      "Payment records and history",
      "Winner selection",
      "Notifications",
      "Local SQLite database",
    ],
    process: ["Login", "Dashboard", "Groups", "Members", "Payments", "Winner", "History"],
    challenges:
      "Organizing several related types of data in a local database and keeping every screen consistent.",
    learned: [
      "Android development",
      "SQLite design",
      "CRUD operations",
      "RecyclerView",
      "Activity navigation",
      "Testing & debugging",
    ],
    takeaway:
      "This project turns a traditional savings-group workflow into a structured mobile application.",
    ctaTitle: "Have a similar app idea? Let's talk.",
  },
  {
    slug: "daily-teacher-evaluation-system",
    title: "Daily Teacher Evaluation System",
    category: "Education Management System",
    summary:
      "A system for recording and reviewing daily teacher evaluations, replacing paper-based feedback with organized digital records.",
    cover: teacherCover,
    coverAlt: "Tablet dashboard representing a teacher evaluation system",
    stack: ["Web Application", "Database", "Forms & Reports"],
    highlights: [
      "Daily evaluation records",
      "Structured evaluation forms",
      "Stored evaluation history",
      "Review of past evaluations",
    ],
    github: "https://github.com/DawitObsa/Daily-Teacher-Evaluation-System",
    overview:
      "The Daily Teacher Evaluation System helps schools capture teacher evaluations every day and keep them organized for review.",
    problem: "Paper-based evaluations are slow to collect, easy to lose, and hard to review over time.",
    solution:
      "A digital system where evaluations are entered through structured forms and stored so they can be reviewed later.",
    features: [
      "Daily evaluation records",
      "Structured evaluation forms",
      "Stored evaluation history",
      "Review of past evaluations",
    ],
    process: ["Requirements", "Form Design", "Data Model", "Development", "Testing"],
    challenges:
      "Designing evaluation forms that are quick to fill in daily while still capturing useful information.",
    learned: ["Requirements gathering", "Form and data design", "Record management", "Testing"],
    takeaway:
      "This project shows how a routine institutional process can become a simple, reliable digital workflow.",
    ctaTitle: "Need to digitize a paper process? Let's talk.",
  },
  {
    slug: "telelight",
    title: "TeleLight",
    category: "Android Application",
    summary:
      "An Android application project focused on mobile interface design, application logic, and practical problem solving.",
    cover: teleliteCover,
    coverAlt: "Dark software interface used as the TeleLight project cover",
    stack: ["Android", "Java", "Android Studio"],
    highlights: ["Native Android interface", "Application logic", "Screen navigation"],
    github: "https://github.com/DawitObsa/TeleLight-Project",
    overview: "TeleLight is an Android application developed as a hands-on mobile development project.",
    problem:
      "Building a usable mobile experience requires clean navigation, clear screens, and dependable application logic.",
    solution: "A native Android app built in Android Studio with structured screens and application logic.",
    features: ["Native Android interface", "Application logic", "Screen navigation"],
    process: ["Planning", "UI Layouts", "Development", "Testing"],
    challenges: "Keeping the interface simple and responsive across different Android screen sizes.",
    learned: ["Android development", "UI layouts", "Activity navigation", "Debugging"],
    takeaway: "TeleLight adds to my experience delivering native Android applications.",
    ctaTitle: "Have an Android app idea? Let's talk.",
  },
  {
    slug: "wells-fargo-software-engineering",
    title: "Wells Fargo Software Engineering Program",
    category: "Java · Forage Job Simulation",
    summary:
      "Task 2 of the Wells Fargo Software Development job simulation on Forage — a Java project working on an industry-style financial codebase.",
    cover: financeCover,
    coverAlt: "Connected data model diagram representing a Java financial project",
    stack: ["Java", "Object-Oriented Design", "Maven"],
    highlights: [
      "Industry-style project scaffold",
      "Java implementation",
      "Financial domain modeling",
      "Professional task requirements",
    ],
    github: "https://github.com/DawitObsa/wells-fargo-task-2",
    overview:
      "A Java project completed as part of Forage's Wells Fargo software engineering virtual program, built on the company's provided scaffold.",
    problem:
      "Enterprise teams expect developers to work inside an existing codebase and meet written technical requirements.",
    solution:
      "Implemented the task requirements in Java inside the provided project structure, following professional conventions.",
    features: [
      "Industry-style project scaffold",
      "Java implementation",
      "Financial domain modeling",
      "Professional task requirements",
    ],
    process: ["Read Requirements", "Explore Scaffold", "Implement", "Verify"],
    challenges:
      "Understanding an unfamiliar codebase and financial domain quickly enough to implement the task correctly.",
    learned: ["Java", "Working in existing codebases", "Domain modeling", "Enterprise practices"],
    takeaway:
      "This simulation reflects how I approach real company tasks: understand the requirement, then deliver clean code.",
    ctaTitle: "Need help on an existing codebase? Let's talk.",
  },
  {
    slug: "mint",
    title: "Mint",
    category: "React + TypeScript Frontend",
    summary:
      "A React and TypeScript frontend built with Vite — a lightweight, fast setup for modern component-based interfaces.",
    cover: mintCover,
    coverAlt: "Code editor next to a clean mint-green interface preview",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    highlights: [
      "Vite development setup",
      "Typed React components",
      "Fast hot reload",
      "Live online demo",
    ],
    github: "https://github.com/DawitObsa/mint",
    live: "https://stackblitz.com/edit/vitejs-vite-snn8ppq1",
    overview:
      "Mint is a React + TypeScript frontend project built with Vite and shared as a live StackBlitz demo.",
    problem:
      "Modern frontends need a fast, typed development setup that scales from small experiments to real products.",
    solution: "A Vite-based React and TypeScript project with typed components and a live online demo.",
    features: [
      "Vite development setup",
      "Typed React components",
      "Fast hot reload",
      "Live online demo",
    ],
    process: ["Setup", "Components", "Styling", "Demo"],
    challenges: "Keeping the setup minimal while following good TypeScript and linting practices.",
    learned: ["React", "TypeScript", "Vite tooling", "Frontend workflow"],
    takeaway: "Mint reflects my comfort with today's frontend tooling.",
    ctaTitle: "Need a modern frontend? Let's build it.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export type PlannedStatus = "Planned" | "In Development";

export type PlannedProject = {
  title: string;
  status: PlannedStatus;
  summary: string;
  scope: string[];
  stack: string[];
};

// Upcoming work. Keep these marked Planned or In Development until they are actually built.
export const plannedProjects: PlannedProject[] = [
  {
    title: "Inventory & Point of Sale System",
    status: "Planned",
    summary:
      "A business system for tracking stock, recording sales at the counter, and reviewing daily reports.",
    scope: ["Product & stock management", "Sales checkout", "Low-stock alerts", "Sales reports"],
    stack: ["React", "Node.js", "SQL"],
  },
  {
    title: "School Management System",
    status: "Planned",
    summary:
      "One place for schools to manage students, classes, attendance, grades, and staff records.",
    scope: ["Student records", "Attendance", "Grades & report cards", "Role-based access"],
    stack: ["Next.js", "TypeScript", "MongoDB"],
  },
  {
    title: "Real Estate & Rental Platform",
    status: "Planned",
    summary: "Property listings with search, rental requests, and tools for owners to manage tenants.",
    scope: ["Property listings", "Search & filters", "Rental requests", "Owner dashboard"],
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Appointment & Service Booking",
    status: "Planned",
    summary: "Online booking for service businesses, with available time slots and booking management.",
    scope: ["Service catalog", "Time-slot booking", "Booking management", "Reminders"],
    stack: ["React", "Node.js", "SQL"],
  },
  {
    title: "Freelance Service Marketplace",
    status: "Planned",
    summary: "A marketplace where clients post jobs and freelancers offer services and send proposals.",
    scope: ["Job posts", "Freelancer profiles", "Proposals", "Messaging"],
    stack: ["Next.js", "TypeScript", "MongoDB"],
  },
];
