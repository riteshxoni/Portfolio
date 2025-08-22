const About = () => {
  return (
    <div name="About" className="my-3 text-justify-custom border-bottom border-1">
        <div className="display-6 fw-bold my-3 bg-primary text-white p-2">✨ About Me</div>
        <div className="text-secondary">
                <p>Hello, I'm <strong>Ritesh</strong>, an enthusiastic and dedicated <strong>Full Stack Java Developer</strong> with a strong foundation in Java, Spring Boot, Hibernate, and React.js. With a background in <strong>Computer Applications (BCA)</strong>, I am passionate about building scalable, user-friendly, and impactful software solutions.</p>
                <p>I enjoy working across both frontend and backend technologies, crafting seamless user experiences with <strong>React.js, HTML, CSS, and JavaScript, Bootstrap,</strong> while ensuring robust backend systems using <strong>Spring, Spring Boot, Hibernate, and MySQL</strong>.</p>
                <p>My goal is to contribute to innovative projects, continuously enhance my skills, and grow into a professional developer who delivers solutions that leave a lasting impact.</p>
        </div>
        <div className="container">
           <table className="table table-bordered">
                <tr className="row">
                    <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">First Name - </td>
                    <td className="col-8 col-md-3 p-1 col text-secondary">Ritesh</td>
                    <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">Phone - </td>
                    <td className="col-8 col-md-3 p-1 col text-secondary">7004270485</td>
                </tr>
                <tr className="row">
                    <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">Last Name - </td>
                    <td className="col-8 col-md-3 p-1 col text-secondary">Soni</td>
                    <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">Email - </td>
                    <td className="col-8 col-md-3 p-1 col text-secondary">riteshsony2@gmail.com</td>
                </tr>
                <tr className="row">
                    <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">Date of Birth - </td>
                    <td className="col-8 col-md-3 p-1 col text-secondary">15 Sep 2001</td>
                    <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">Address - </td>
                    <td className="col-8 col-md-3 p-1 col text-secondary">Kathitand Ratu Ranchi Jharkhand-835222</td>
                </tr>
                <tr className="row">
                    <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">Nationality - </td>
                    <td className="col-8 col-md-3 p-1 col text-secondary">Indian</td>
                    <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">Languages - </td>
                    <td className="col-8 col-md-3 p-1 col text-secondary">Hindi, English</td>
                </tr>
           </table>
        </div>
        <div className="display-6 fw-bold my-3 bg-primary text-white p-2">🎓 Education</div>
        <div className="container my-3 shadow-lg border">
            <div className="row py-3">
                <div className="col-12 col-md-6 fw-bold">Bachelor of Computer Application</div>
                <div className="col-6 col-md-4">Ranchi Univesity Ranchi - </div>
                <div className="col-6 col-md-2">2025</div>
                <div className="container">
                    <div className="progress" style={{height:15}}>
                        <div className="progress-bar text-bg-primary rounded" style={{width: '75%',height:15,fontSize:8,fontWeight:'bold'}}>75%</div>
                    </div>
                </div>
            </div>
             <div className="row py-3">
                <div className="col-12 col-md-6 fw-bold">Bachelor of Computer Arts</div>
                <div className="col-6 col-md-4">Ranchi Univesity Ranchi - </div>
                <div className="col-6 col-md-2">2022</div>
                <div className="container">
                    <div className="progress" style={{height:15}}>
                        <div className="progress-bar text-bg-primary rounded" style={{width: '75%',height:15,fontSize:8,fontWeight:'bold'}}>75%</div>
                    </div>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-12 col-md-6 fw-bold">Senior Secondary Education (Inter)</div>
                <div className="col-6 col-md-4">Jharkhand Academic Council - </div>
                <div className="col-6 col-md-2">2018</div>
                <div className="container">
                    <div className="progress" style={{height:15}}>
                        <div className="progress-bar text-bg-primary rounded" style={{width: '47.5%',height:15,fontSize:8,fontWeight:'bold'}}>47%</div>
                    </div>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-12 col-md-6 fw-bold">Secondary Education (Matic)</div>
                <div className="col-6 col-md-4">Jharkhand Academic Council - </div>
                <div className="col-6 col-md-2">2016</div>
                <div className="container">
                    <div className="progress" style={{height:15}}>
                        <div className="progress-bar text-bg-primary rounded" style={{width: '58.8%',height:15,fontSize:8,fontWeight:'bold'}}>58%</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About