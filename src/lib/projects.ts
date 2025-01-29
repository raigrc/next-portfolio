import ECommerce from "@/assets/projects/e-commerce.jpg";
import OLBooking from "@/assets//projects/online-booking.jpg";
import Workout from "@/assets/projects/workout-tracker.jpg";
import FTracker from "@/assets/projects/Finance_Tracker.png";

// import JSFCB from "/projects/2048-game.jpg";
import E4EJ from "@/assets/projects/e4ej.jpg";
import { ProjectProps } from "@/types";

const projects: ProjectProps[] = [
  {
    title: "Finance Tracker",
    description:
      "A personal budgeting and expense management web application built using the MERN stack. It allows users to track income, allocate budgets across categories, manage transactions.",
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Zod",
      "ShadCN",
      "Zustand",
    ],
    image: FTracker,
    date: new Date("2025-01"),
    url: "https://github.com/raigrc/FT-MERN",
  },
  {
    title: "E-Commerce Website",
    description:
      "This is my 3rd year college e-commerce website project! This platform is designed to deliver a smooth and enjoyable online shopping experience. Built with HTML, CSS, JavaScript, and native PHP, it caters to both shoppers and administrators, providing a secure and user-friendly environment.",
    techStack: ["HTML", "CSS", "Javascript", "PHP"],
    image: ECommerce,
    date: new Date("2023-02"),
    url: "https://github.com/raigrc/E-Commerce",
  },
  {
    title: "Online Booking Resort",
    description:
      "The Online Resort Booking System is a web application project from my 3rd year college, also built using HTML, CSS, JavaScript, and Native PHP, providing users with a platform to discover, explore, and book resort accommodations online. The system offers a seamless booking experience, allowing users to search for available resorts, view details and amenities, select dates, make reservations, and manage bookings. ",
    techStack: ["HTML", "CSS", "JavaScript", "SCSS", "PHP"],
    image: OLBooking,
    date: new Date("2023-02"),
    url: "https://github.com/raigrc/Online-Booking-Resorts",
  },
  {
    title: "Workout Tracker",
    description:
      "Introducing our Workout Tracker – a simple web application designed to help fitness enthusiasts track their workouts, monitor progress, and achieve their fitness goals. Built with HTML, CSS, JavaScript, and native PHP, this platform offers a user-friendly interface and robust features to keep you motivated and on track.",
    techStack: ["Mongo DB", "Express", "React", "Node JS"],
    image: Workout,

    date: new Date("2024-03"),
    url: "https://github.com/raigrc/MERN-Workout-Tracker",
  },
  // {
  //   title: "2048",
  //   description:
  //     "This project is a browser-based implementation of the popular 2048 puzzle game, created as part of an online workshop of Zuitt - Coding Bootcamp. Using HTML, CSS, and JavaScript, this game provides an engaging and interactive experience for players. The goal of the game is to combine tiles with the same numbers to reach the elusive 2048 tile.",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   image: JSFCB,
  //   date: new Date("2024-03"),
  //url: ""
  // },
  {
    title: "Eskwela4EveryJuan",
    description:
      "Eskwela4EveryJuan is a Learning Management System (LMS) with integration of AI (GPT-3.5) developed using the Laravel framework. This capstone project is designed specifically for Micro, Small, and Medium Enterprises (MSMEs) to facilitate an inclusive and efficient online learning environment. The primary aim of this project is to equip MSMEs with the knowledge and skills they need to become successful entrepreneurs.",
    techStack: ["HTML", "CSS", "JavaScript", "Laravel", "Tailwind CSS"],
    image: E4EJ,

    date: new Date("2024-04"),
    url: "https://github.com/raigrc/Eskwela4EveryJuan",
  },
];

export default projects;
