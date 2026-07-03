// Frontend
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaJava,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJquery,
  SiTailwindcss,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostman,
  SiEclipseide,
  SiIntellijidea,
  SiApache,
  SiComposer,
  SiFilezilla,
  SiXampp,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
//Soft Skills
import { FaBrain, FaUsers, FaClock, FaComments } from "react-icons/fa";

import Accordion from "./Accordion";

const Skills = () => {
      const frontend = [
  { icon: <FaHtml5 size={40} color="#E34F26" />, label: "HTML5", percent: 90, color: "danger" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, label: "CSS3", percent: 85, color: "primary" },
  { icon: <FaJs size={40} color="#F7DF1E" />, label: "JavaScript", percent: 85, color: "warning" },
  { icon: <FaBootstrap size={40} color="#7952B3" />, label: "Bootstrap", percent: 90, color: "secondary" },
  { icon: <SiTailwindcss size={40} color="#06B6D4" />, label: "Tailwind CSS", percent: 70, color: "info" },
  { icon: <SiJquery size={40} color="#0769AD" />, label: "AJAX / jQuery", percent: 75, color: "primary" },
  { icon: <FaReact size={40} color="#61DAFB" />, label: "React JS", percent: 80, color: "info" },
];

    const skills = [
        { label: "HTML5", value: 85,  color: "#e34f26" },
        { label: "CSS3", value: 70, color: "#1572b6" },
        { label: "JavaScript", value: 75, color: "#f7df1e" },
        { label: "React", value: 80, color: "#61DBFB" },
        { label: "Bootstrap", value: 65, color: "#7952B3" },
        { label: "jQuery", value: 60, color: "#0769ad" },
    ];

    const backend = [
  { icon: <FaPhp size={40} color="#777BB4" />, label: "PHP", percent: 90, color: "primary" },
  { icon: <FaJava size={40} color="#F89820" />, label: "Java", percent: 85, color: "warning" },
  { icon: <SiSpringboot size={40} color="#6DB33F" />, label: "Spring Boot", percent: 80, color: "success" },
  { icon: <SiHibernate size={40} color="#59666C" />, label: "Hibernate", percent: 75, color: "secondary" },
  { icon: <FaDatabase size={40} color="#E74C3C" />, label: "REST API", percent: 85, color: "danger" },
  { icon: <FaDatabase size={40} color="#2980B9" />, label: "Servlet & JSP", percent: 75, color: "primary" },
];

    const backendSkills = [
        { label: "Core Java", value: 85, color: "#007396" },
        { label: "Advanced Java", value: 75, color: "#e76f00" },
        { label: "Spring", value: 70, color: "#6DB33F" },
        { label: "Spring Boot", value: 80, color: "#4CAF50" },
        { label: "Hibernate", value: 65, color: "#59666C" },
    ];
  
    const persistence = [
  { icon: <SiMysql size={40} color="#00758F" />, label: "MySQL", percent: 90, color: "info" },
  { icon: <FaDatabase size={40} color="#444" />, label: "JDBC", percent: 80, color: "secondary" },
  { icon: <SiHibernate size={40} color="#59666C" />, label: "Hibernate", percent: 75, color: "warning" },
  { icon: <FaDatabase size={40} color="#F39C12" />, label: "JPA", percent: 75, color: "primary" },
  { icon: <FaDatabase size={40} color="#16A085" />, label: "SQL", percent: 90, color: "success" },
  { icon: <FaDatabase size={40} color="#3498DB" />, label: "Database Design", percent: 80, color: "info" },
];
    const persistenceSkills = [
    { label: "MySQL", value: 80, color: "#00758F" },
    { label: "JDBC", value: 70, color: "#444" },
    { label: "Spring JDBC", value: 65, color: "#28a745" },
    { label: "Hibernate", value: 75, color: "#59666C" },
    { label: "JPA", value: 70, color: "#f39c12" },
    { label: "Spring Data JPA", value: 80, color: "#6DB33F" },
  ];

  const tools = [
  { icon: <FaGitAlt size={40} color="#F1502F" />, label: "Git", percent: 85, color: "danger" },
  { icon: <FaGithub size={40} />, label: "GitHub", percent: 85, color: "dark" },
  { icon: <SiPostman size={40} color="#FF6C37" />, label: "Postman", percent: 90, color: "warning" },
  { icon: <VscVscode size={40} color="#007ACC" />, label: "VS Code", percent: 95, color: "primary" },
  { icon: <SiEclipseide size={40} color="#2C2255" />, label: "Eclipse", percent: 80, color: "secondary" },
  { icon: <SiIntellijidea size={40} />, label: "IntelliJ IDEA", percent: 80, color: "dark" },
  { icon: <SiXampp size={40} color="#FB7A24" />, label: "XAMPP", percent: 90, color: "warning" },
  { icon: <SiApache size={40} color="#D22128" />, label: "Apache", percent: 80, color: "danger" },
  { icon: <SiComposer size={40} color="#885630" />, label: "Composer", percent: 75, color: "secondary" },
  { icon: <SiFilezilla size={40} color="#BF0000" />, label: "FileZilla", percent: 85, color: "danger" },
];

const toolsSkills = [
  { label: "Git", value: 85, color: "#F1502F" },
  { label: "GitHub", value: 80, color: "#000000" },
  { label: "VS Code", value: 90, color: "#007ACC" },
  { label: "Eclipse IDE", value: 70, color: "#2C2255" },
  { label: "IntelliJ IDEA", value: 75, color: "#000000" },
];

// Soft Skills (with icons for UI cards/grid)
const softSkills = [
  { icon: <FaBrain size={40} color="#FF6B6B" />, label: "Problem-solving & Debugging", percent: 85, color: "danger" },
  { icon: <FaComments size={40} color="#4ECDC4" />, label: "Communication & Teamwork", percent: 80, color: "info" },
  { icon: <FaClock size={40} color="#FFD93D" />, label: "Time Management", percent: 75, color: "warning" },
  { icon: <FaUsers size={40} color="#6C63FF" />, label: "Adaptability", percent: 70, color: "primary" },
];

// Soft Skills (for charts / progress bars)
const softSkillsData = [
  { label: "Problem-solving & Debugging", value: 85, color: "#FF6B6B" },
  { label: "Communication & Teamwork", value: 80, color: "#4ECDC4" },
  { label: "Time Management", value: 75, color: "#FFD93D" },
  { label: "Adaptability", value: 70, color: "#6C63FF" },
];

  return (
    <div name="Skills">
        <div className="display-6 fw-bold my-3 bg-primary text-white p-2">🔥 Professional Skills</div>
        <Accordion
    id={1}
    item={"Frontend Development (HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, AJAX, React JS)"}
    skills1={frontend}
    skills2={skills}
/>

<Accordion
    id={2}
    item={"Backend Development (PHP, Java, Spring Boot, Hibernate, REST API, Servlet, JSP)"}
    skills1={backend}
    skills2={backendSkills}
/>

<Accordion
    id={3}
    item={"Database & Persistence (MySQL, SQL, JDBC, Hibernate, JPA, Database Design)"}
    skills1={persistence}
    skills2={persistenceSkills}
/>

<Accordion
    id={4}
    item={"Development Tools (Git, GitHub, Postman, VS Code, Eclipse, IntelliJ, XAMPP, Apache, Composer, FileZilla)"}
    skills1={tools}
    skills2={toolsSkills}
/>

<Accordion
    id={5}
    item={"Soft Skills (Problem Solving, Debugging, Communication, Teamwork, Time Management, Adaptability)"}
    skills1={softSkills}
    skills2={softSkillsData}
/>
    </div>
  )
}

export default Skills
