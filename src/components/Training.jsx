import TIPETemplate from "./TIPETemplate"
const Training = () => {

const trainings = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    title: "Full Stack Java Training (8 Months)",
    company: "Smart Programming Technology",
    text: "Completed comprehensive Java Full Stack Development covering Core Java, Advanced Java (JSP, Servlets, JDBC), Data Structures & Algorithms, Spring, Spring Boot, REST APIs, and frontend technologies including HTML, XML, CSS, JavaScript, jQuery, Bootstrap, and React JS. Built real-world full stack applications using Java backend and React frontend.",
    from: "Sep 2024",
    to: "May 2025",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    title: "React JS Training",
    company: "Knowledge Gate – Full Stack Program",
    text: "Completed React training covering components, hooks, routing, state management, API integration, custom hooks, and UI optimization techniques.",
    from: "2024",
    to: "2024",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    title: "Data Structures & Algorithms (DSA) in Java",
    company: "Udemy",
    text: "Learned core DSA concepts including arrays, linked lists, stacks, queues, recursion, trees, graphs, sorting, searching, and time complexity with hands-on Java problem solving.",
    from: "2024",
    to: "2024",
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