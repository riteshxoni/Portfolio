const Experience = () => {

  const experiences = [
  {
    title: "Full Stack Java Development Intern",
    company: "Smart Programming, Mohali, Punjab",
    from: "June 2025",
    to: "December 2025",
    text: "Developed three full stack applications (Job Portal, CRM System, Billing Software). Worked on frontend UI, backend integration, REST APIs, and collaborated with clients for requirements.",
    link: "#"
  },
  {
    title: "Full Stack Web Development Intern",
    company: "Ardent Computech Pvt Ltd",
    from: "20 May 2024",
    to: "05 July 2024",
    text: "Built a full stack E-Commerce web application. Improved skills in frontend development, backend integration, API handling, and real-world client communication.",
    link: "#"
  },
  {
    title: "Java Development Intern",
    company: "TechnoHacks EduTech",
    from: "23 May 2024",
    to: "23 June 2024",
    text: "Worked on Java applications while strengthening OOP concepts and solving real-world coding challenges to improve problem-solving skills.",
    link: "#"
  },
  {
    title: "Graphic Designer",
    company: "ShaktiPolyGlass, Ranchi, Jharkhand",
    from: "2018",
    to: "2022",
    text: "Designed high-quality road and traffic signages used across India. Collaborated with printing & installation teams, delivered precise vector graphics, and managed multiple client projects with consistent quality.",
    link: "#"
  }
];


  return (
    <div name="Experiance">
        <div className="display-6 fw-bold my-3 bg-danger text-white p-2">🧑‍💻 Experience</div>
        <div className="row">
            {
              experiences.map((data,index)=>(
                <div key={index} className="col-6 mb-2" style={{minHeight:350}}>
                    <div className="card border-primary" style={{minHeight:350}}>
                      <h6 className="card-header bg-primary text-white">{data.from} - {data.to}</h6>
                      <div className="card-body">
                        <h4 className="card-title" style={{minHeight:50}}>{data.company}</h4>
                        <h5 className="card-subtitle mb-2 text-body-secondary" style={{minHeight:50}}>{data.title}</h5>
                        <p className="card-text" style={{minHeight:100}}>{data.text}</p>
                        <a href={data.link} className="btn btn-outline-primary btn-sm">Know More..</a>
                      </div>
                    </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Experience