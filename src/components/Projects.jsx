import TIPETemplate from "./TIPETemplate";
const Projects = () => {
const projects = [
  {
    image: "https://picsum.photos/seed/showtime/600/400",
    title: "Entertainment Booking Platform",
    text: "Full Stack PHP application for movie, event, and food booking with Admin Panel, Vendor Panel, Customer Dashboard, Google Login, Advanced Search, Booking Management, Notification Module, City Management, and Food Store Management using PHP, MySQL, AJAX, Bootstrap, and JavaScript.",
    from: "2026",
    to: "Present",
    link: "#"
  },

  {
  image: "https://picsum.photos/seed/community/600/400",
  title: "Community Platform Application",
  text: "Full Stack PHP community platform developed using PHP, MySQL, Bootstrap, AJAX, and JavaScript. Features include secure authentication, user profiles, posts, comments, likes, notifications, search functionality, role-based access, admin dashboard, content management, and responsive design.",
  from: "2026",
  to: "2026",
  link: "#"
},

  {
    image: "https://picsum.photos/seed/foodstore/600/400",
    title: "Food Store Management System",
    text: "Core PHP & MySQL based food ordering platform featuring Product Management, Shopping Cart, Order Management, Customer Management, Authentication, and Admin Panel.",
    from: "2025",
    to: "2025",
    link: "#"
  },

  {
    image: "https://picsum.photos/seed/crm/600/400",
    title: "Education CRM System",
    text: "Spring Boot application with Spring Security, Hibernate, JPA, and MySQL for Authentication, Student Management, Course Management, Dashboard, and REST APIs.",
    from: "2025",
    to: "2025",
    link: "#"
  },

  {
    image: "https://picsum.photos/seed/shop/600/400",
    title: "Shopping System",
    text: "Java Spring Boot shopping application with Product Management, Inventory, Orders, Customer Management, MySQL integration, Hibernate, and REST APIs.",
    from: "2025",
    to: "2025",
    link: "#"
  },

  {
    image: "https://picsum.photos/seed/jobportal/600/400",
    title: "Job Portal",
    text: "Java JSP & Servlet based Job Portal featuring Authentication, Job Posting, Resume Upload, Candidate Management, Employer Dashboard, and MySQL database.",
    from: "2025",
    to: "2025",
    link: "#"
  },

  {
    image: "https://picsum.photos/seed/portfolio/600/400",
    title: "Portfolio Website",
    text: "Modern responsive portfolio built using React JS, HTML5, CSS3, Bootstrap, React Router, reusable components, state management, project showcase, and contact form.",
    from: "2026",
    to: "2026",
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
