import profile from '../../public/profile.png'
import cv from '..//../public/Ritesh CV.pdf'
import { FaLinkedinIn, FaWhatsapp, FaTelegram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaDatabase, FaJava } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMysql, SiSpring } from "react-icons/si";
import { ReactTyped } from 'react-typed';
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
const Home = () => {
     const {
        register,
        handleSubmit,
      } = useForm()
        const onSubmit = async () => {
            const userInfo = {
                name:data.name,
                email:data.email,
                message:data.message
            }
            try {
                await axios.post("https://getform.io/f/bpjznrrb",userInfo);
                toast.success("Message Sent Successfully.");
            } catch (error) {
                console.log(error)
                toast.error("Message Sent Unsuccessfully.");
            }
        }
  return (
    <div name="Home" className='row align-items-center my-4 border-bottom border-1 mt-5 pt-3' style={{minHeight:400}}>
        <div className="col-12 col-lg-6 mb-3 mt-5">
            <div className="row align-items-end">
                <div className="col-5 text-end">
                    <img src={profile} alt="" height={200} />
                </div>
               <div className="col-7">
                    <div>
                        <span className='fw-bold'>🌐 Connect with Me</span>
                        <div className="d-flex mb-3 justify-content-evenly mt-2">
                            <a href="https://www.linkedin.com/in/riteshxoni/" target="_blank" rel="noopener noreferrer">
                                <div className=""><FaLinkedinIn size={20} color="#0A66C2" /></div>
                            </a>
                            <a href="https://wa.me/7004270485" target="_blank">
                                <div className=""><FaWhatsapp size={20} color="#25D366" /></div>
                            </a>
                            <a href="mailto:riteshsony2@gmail.com">
                                <div className=""><SiGmail size={20} color="#EA4335" /></div>
                            </a>
                            <a href="https://t.me/riteshxoni" target="_blank">
                                <div className=""><FaTelegram size={20} color="#0088cc" /></div>
                            </a>
                            <a href="https://github.com/riteshxoni/" target="_blank" rel="noopener noreferrer">
                                <div className=""><FaGithub size={20} color="#333" /></div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <span className='fw-bold'>💻 My Technologies</span>
                        <div>
                             {/* Frontend */}
                             <div className='d-flex align-items-center justify-content-evenly my-2 flex-wrap gap-2'>
                                 <span className='fw-semibold'>Frontend</span>
                         
                                 <FaHtml5 title="HTML5" size={20} color="#E34F26" />
                                 <FaCss3Alt title="CSS3" size={20} color="#1572B6" />
                                 <FaJs title="JavaScript" size={20} color="#F7DF1E" />
                                 <FaReact title="React JS" size={20} color="#61DAFB" />
                                 <FaBootstrap title="Bootstrap" size={20} color="#7952B3" />
                         
                                 <span className="badge bg-info text-dark">Tailwind</span>
                                 <span className="badge bg-primary">AJAX</span>
                             </div>
                         
                             {/* Backend */}
                             <div className='d-flex align-items-center justify-content-evenly my-2 flex-wrap gap-2'>
                                 <span className='fw-semibold'>Backend</span>
                         
                                 <span className="badge bg-primary">PHP</span>
                                 <FaJava title="Java" size={20} color="#F89820" />
                                 <SiSpringboot title="Spring Boot" size={20} color="#6DB33F" />
                                 <SiSpring title="Spring" size={20} color="#6DB33F" />
                                 <SiHibernate title="Hibernate" size={20} color="#59666C" />
                                 <SiMysql title="MySQL" size={20} color="#4479A1" />
                         
                                 <span className="badge bg-success">JPA</span>
                                 <span className="badge bg-dark">JSP</span>
                                 <span className="badge bg-secondary">Servlet</span>
                                 <span className="badge bg-danger">REST API</span>
                             </div>
                         
                             {/* Tools */}
                             <div className='d-flex align-items-center justify-content-evenly my-2 flex-wrap gap-2'>
                                 <span className='fw-semibold'>Tools</span>
                         
                                 <span className="badge bg-dark">Git</span>
                                 <span className="badge bg-secondary">GitHub</span>
                                 <span className="badge bg-success">Postman</span>
                                 <span className="badge bg-primary">VS Code</span>
                                 <span className="badge bg-warning text-dark">IntelliJ</span>
                                 <span className="badge bg-info text-dark">Eclipse</span>
                                 <span className="badge bg-danger">XAMPP</span>
                                 <span className="badge bg-secondary">cPanel</span>
                             </div>
                         </div>
                    </div>
               </div>
               <div className='row justify-content-evenly mt-3'>
                <a href={cv} className='btn btn-primary rounded-0 col-4 animate' target='_blank'>Download CV</a>
                
                <button className='btn btn-primary rounded-0 col-4 animate' data-bs-toggle="modal" data-bs-target="#showContact">Contact Me</button>
               </div>
            </div>
        </div>
        <div className="col-12 col-lg-6">
            <div className="chat-bubble">
                👋 Welcome
            </div>
            <div className='mt-2 border-bottom border-2 pb-3'>
                <p className='fs-1 m-0'>
                 I'm <span className='fw-bold'>Ritesh Kumar Soni</span>
               </p>
                <ReactTyped
                    className='display-6 fw-bold text-danger'
                    strings={[
                      "Full Stack Developer",
                      "PHP Developer",
                      "Java Developer",
                      "Backend Developer",
                      "Open to Any IT Role"
                    ]}
                    loop
                    typeSpeed={50}
                    backSpeed={60}
                    // loop
                >  
                </ReactTyped>
            </div>  
            <p className='mt-2 text-justify-custom'>
               Recent BCA graduate with a strong foundation in PHP, Java, SQL, and Web Development. Experienced through multiple internships in developing backend applications, REST APIs, authentication systems, Spring Boot applications, PHP projects, and MySQL databases. Seeking a Full Stack Developer position or any related role in the IT sector where I can contribute to innovative software solutions while continuously enhancing my technical skills.
            </p> 
             <div className="mt-3">
              <span className="badge bg-primary me-2">3 Internships</span>
              <span className="badge bg-success me-2">PHP</span>
              <span className="badge bg-danger me-2">Java</span>
              <span className="badge bg-warning text-dark me-2">Spring Boot</span>
              <span className="badge bg-info text-dark me-2">React JS</span>
              <span className="badge bg-dark">MySQL</span>
          </div>
        </div>
        <div className="modal mt-5 fade" id='showContact'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Send A Message</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className='form-label'>Name*</label>
                            <input type="text"  name='name' required className='form-control mb-2 myInput' {...register("name", { required: true })}/>
                            <label className='form-label'>Email*</label>
                            <input type="email" name='email'  required className='form-control mb-2 myInput' {...register("email", { required: true })}/>
                            <label className='form-label'>Subject*</label>
                            <input type="text"  name='subject' required className='form-control mb-2 myInput' {...register("subject", { required: true })}/>
                            <label className='form-label'>Message*</label>
                            <textarea name="message" required className='form-control mb-2 myInput' {...register("message", { required: true })}></textarea>
                            <button type="submit" className='btn btn-primary rounded-0 px-4 w-100'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
