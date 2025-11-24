import TIPETemplate from "./TIPETemplate";
const Projects = () => {
const projects = [
  // ---------- Major & Internship Projects ----------
  {
    image: "https://picsum.photos/seed/crm/600/400",
    title: "Education CRM System",
    text: "CRM for managing student enquiries, leads, follow-ups, counsellor workflows, and dashboards using Spring Boot, Thymeleaf, JPA, MySQL, and Spring Security.",
    from: "Jan 2024",
    to: "Apr 2024",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/jobportal/600/400",
    title: "Job Portal",
    text: "Multi-role job portal with job posting, job search, applications, authentication (JSP + Servlets + JDBC + MySQL).",
    from: "Sep 2023",
    to: "Dec 2023",
    link: "#"
  },

  // ---------- E-Commerce Project (Full Stack) ----------
  {
    image: "https://picsum.photos/seed/ecom/600/400",
    title: "E-Commerce Application",
    text: "Full-stack e-commerce platform using Spring Boot REST APIs, React.js, MySQL, JWT, cart system, checkout flow, and admin dashboard.",
    from: "Feb 2024",
    to: "Mar 2024",
    link: "#"
  },

  // ---------- NEW: Portfolio Website (React) ----------
  {
    image: "https://picsum.photos/seed/portfolio/600/400",
    title: "Personal Portfolio Website",
    text: "Modern portfolio website built using React, reusable components, smooth scroll, responsive UI, and dynamic project sections.",
    from: "Apr 2024",
    to: "May 2024",
    link: "#"
  },

  // ---------- Core Java & Desktop Projects ----------
  {
    image: "https://picsum.photos/seed/billing/600/400",
    title: "Billing Software",
    text: "Java Swing billing system with JDBC, CRUD operations, validation, JTable, BLOB handling, and printable invoices.",
    from: "Jun 2023",
    to: "Aug 2023",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/chat/600/400",
    title: "Chatting Application",
    text: "Real-time Java networking chat app using Sockets, multi-threading, and server-client model.",
    from: "Apr 2023",
    to: "May 2023",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/tictac/600/400",
    title: "TicTacToe Game",
    text: "2-player TicTacToe game using Core Java OOP, Swing GUI, file handling, and simple login/register logic.",
    from: "Jan 2023",
    to: "Feb 2023",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/notepad/600/400",
    title: "Notepad Editor",
    text: "Java Swing-based Notepad clone with open/save, formatting, event handling, and custom shortcuts.",
    from: "Feb 2023",
    to: "Mar 2023",
    link: "#"
  },

  // ---------- Extra Projects ----------
  {
    image: "https://picsum.photos/seed/template/600/400",
    title: "Responsive Website Template",
    text: "Responsive landing page template using HTML5, CSS3, Flexbox, Grid, and mobile-first design.",
    from: "Mar 2023",
    to: "Apr 2023",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/dclock/600/400",
    title: "Digital Clock",
    text: "Java Applet-based digital clock using AWT, Threads, and custom graphics.",
    from: "May 2023",
    to: "Jun 2023",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/car/600/400",
    title: "Car Crash Game",
    text: "2D car crash game using Java Swing, event handling, custom graphics, and game-loop logic.",
    from: "Jul 2023",
    to: "Aug 2023",
    link: "#"
  },

  // ---------- YOUR NEW PROJECTS ----------
  {
    image: "https://picsum.photos/seed/travel/600/400",
    title: "Travel Website",
    text: "Tour booking platform with packages, search filters, reviews, and secure bookings using Spring Boot & MySQL.",
    from: "2024",
    to: "2024",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/hotel/600/400",
    title: "Hotel Booking System",
    text: "Room booking system with availability check, payments, admin panel, and customer dashboard.",
    from: "2024",
    to: "2024",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/restaurant/600/400",
    title: "Restaurant Website",
    text: "Menu, table reservation, order management, and admin analytics with Spring Boot and Thymeleaf.",
    from: "2024",
    to: "2024",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/foodstore/600/400",
    title: "Food Store",
    text: "Grocery & food delivery system with cart, payments, order tracking, and admin inventory.",
    from: "2024",
    to: "2024",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/land/600/400",
    title: "Home Land Sale Portal",
    text: "Real-estate listing platform for property posting, buyer enquiries, and admin management.",
    from: "2024",
    to: "2024",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/roadsign/600/400",
    title: "Road Signage Service Website",
    text: "Service showcase platform for road signage companies with pricing, galleries, and enquiry forms.",
    from: "2024",
    to: "2024",
    link: "#"
  }
];


  return (
    <div name="Projects">
        <div className="display-6 fw-bold my-3 bg-warning text-dark p-2">🚀 Projects</div>
        <TIPETemplate data={projects}></TIPETemplate>
    </div>
  )
}

export default Projects