import TIPETemplate from "./TIPETemplate"
const Training = () => {

const trainings = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    title: "Full Stack Java Development",
    company: "Smart Programming",
    text: "Completed comprehensive Full Stack Java training covering Core Java, Advanced Java, JDBC, Servlet, JSP, Spring Boot, Hibernate, JPA, REST APIs, MySQL, Git, GitHub, and real-world backend application development.",
    from: "Jun 2025",
    to: "Nov 2025",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    title: "PHP Web Development",
    company: "Academy of Skill Development",
    text: "Learned PHP web development including authentication systems, reusable modules, MySQL integration, REST API development, deployment, maintenance, and API testing using Postman.",
    from: "Dec 2025",
    to: "May 2026",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    title: "React Web Development",
    company: "Self Learning & Projects",
    text: "Developed responsive React applications using components, hooks, routing, API integration, Bootstrap, Tailwind CSS, and JavaScript while building portfolio and web projects.",
    from: "2025",
    to: "Present",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    title: "REST API Development",
    company: "Hands-on Project Training",
    text: "Designed and developed RESTful APIs, implemented authentication, performed CRUD operations, integrated MySQL databases, and tested APIs using Postman.",
    from: "2025",
    to: "2026",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600",
    title: "SQL & Database Design",
    company: "Academic & Project Learning",
    text: "Gained practical experience in SQL, MySQL, database normalization, schema design, CRUD operations, joins, indexing, and relational database management through real-world projects.",
    from: "2024",
    to: "2026",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600",
    title: "Cyber Security Fundamentals",
    company: "Professional Certification",
    text: "Learned cybersecurity fundamentals including system security, network security, authentication, common vulnerabilities, and secure development practices.",
    from: "2025",
    to: "2025",
    link: "#"
  }
];

  return (
    <div>
        <div className="display-6 fw-bold my-3 bg-success text-white p-2">📚 Training</div>
        <TIPETemplate data={trainings}></TIPETemplate>
    </div>
        
  )
}

export default Training
