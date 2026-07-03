const About = () => {
  return (
    <div name="About" className="my-3 text-justify-custom border-bottom border-1">
      <div className="display-6 fw-bold my-3 bg-primary text-white p-2">
        ✨ About Me
      </div>

      <div className="text-secondary">
        <p>
          Hello, I'm <strong>Ritesh Kumar Soni</strong>, a recent{" "}
          <strong>Bachelor of Computer Applications (BCA)</strong> graduate
          with a strong foundation in <strong>Java, PHP, SQL, HTML, CSS, JavaScript, Bootstrap, React.js, and MySQL</strong>.
        </p>

        <p>
          During my internship, I developed backend applications using{" "}
          <strong>PHP and Java</strong>, built REST APIs, implemented
          authentication systems, worked with MySQL databases, and fixed bugs
          while collaborating with the development team.
        </p>

        <p>
          I am seeking a <strong>Full Stack Developer</strong> or{" "}
          <strong>any related work in the IT sector</strong> where I can apply
          my technical skills, contribute to real-world projects, and continue
          learning modern technologies.
        </p>
      </div>

      <div className="container">
        <table className="table table-bordered">
          <tbody>
            <tr className="row">
              <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">
                First Name -
              </td>
              <td className="col-8 col-md-3 p-1 text-secondary">Ritesh</td>

              <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">
                Last Name -
              </td>
              <td className="col-8 col-md-3 p-1 text-secondary">Soni</td>
            </tr>

            <tr className="row">
              <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">
                Phone -
              </td>
              <td className="col-8 col-md-3 p-1 text-secondary">
                +91 7004270485
              </td>

              <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">
                Email -
              </td>
              <td className="col-8 col-md-3 p-1 text-secondary">
                riteshsony2@gmail.com
              </td>
            </tr>

            <tr className="row">
              <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">
                Location -
              </td>
              <td className="col-8 col-md-3 p-1 text-secondary">
                Greater Noida, Uttar Pradesh
              </td>

              <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">
                LinkedIn -
              </td>
              <td className="col-8 col-md-3 p-1 text-secondary">
                linkedin.com/in/riteshxoni
              </td>
            </tr>

            <tr className="row">
              <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">
                Nationality -
              </td>
              <td className="col-8 col-md-3 p-1 text-secondary">Indian</td>

              <td className="col-4 col-md-3 p-1 fw-bold bg-body-secondary">
                Languages -
              </td>
              <td className="col-8 col-md-3 p-1 text-secondary">
                Hindi, English
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="display-6 fw-bold my-3 bg-primary text-white p-2">
        💼 Internship
      </div>

      <div className="container my-3 shadow-lg border p-3">
        <h5 className="fw-bold">Academy of Skill Development</h5>
        <p className="mb-1">
          <strong>Intern</strong> (Dec 2025 – May 2026)
        </p>

        <ul className="text-secondary">
          <li>Developed backend applications using PHP and Java.</li>
          <li>Built REST APIs and authentication systems.</li>
          <li>Worked with MySQL databases.</li>
          <li>Fixed bugs and improved application performance.</li>
          <li>Collaborated with the development team.</li>
        </ul>
      </div>

      <div className="display-6 fw-bold my-3 bg-primary text-white p-2">
        🎓 Education
      </div>

      <div className="container my-3 shadow-lg border">
        <div className="row py-3">
          <div className="col-12 col-md-6 fw-bold">
            Bachelor of Computer Applications (BCA)
          </div>
          <div className="col-6 col-md-4">Ranchi University</div>
          <div className="col-6 col-md-2">2025</div>
        </div>

        <div className="row py-3">
          <div className="col-12 col-md-6 fw-bold">
            Senior Secondary (12th)
          </div>
          <div className="col-6 col-md-4">
            Jharkhand Academic Council
          </div>
          <div className="col-6 col-md-2">2018</div>
        </div>

        <div className="row py-3">
          <div className="col-12 col-md-6 fw-bold">
            Secondary (10th)
          </div>
          <div className="col-6 col-md-4">
            Jharkhand Academic Council
          </div>
          <div className="col-6 col-md-2">2016</div>
        </div>
      </div>
    </div>
  );
};

export default About;
