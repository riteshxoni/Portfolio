import profile from '../../public/profile.png'
import { FaLinkedinIn, FaWhatsapp, FaTelegram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaDatabase, FaJava } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMysql, SiSpring } from "react-icons/si";
import { ReactTyped } from 'react-typed';
const Home = () => {
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
                            <div className=""><FaLinkedinIn size={20} color="#0A66C2" /></div>
                            <div className=""><FaWhatsapp size={20} color="#25D366" /></div>
                            <div className=""><SiGmail size={20} color="#EA4335" /></div>
                            <div className=""><FaTelegram size={20} color="#0088cc" /></div>
                            <div className=""><FaGithub size={20} color="#333" /></div>
                        </div>
                    </div>
                    <div>
                        <span className='fw-bold'>💻 My Technologies</span>
                        <div className="">
                            <div className='d-flex align-items-center justify-content-evenly my-2'>
                                <span className="">Frontend</span>
                                <div className=""><FaHtml5 size={20} color="#e34f26" /></div>
                                <div className=""><FaCss3Alt size={20} color="#1572b6" /></div>
                                <div className=""><FaJs size={20} color="#f7df1e" /></div>
                                <div className=""><FaReact size={20} color="#61DBFB" /></div>
                                <div className=""><FaBootstrap size={20} color="#7952B3" /></div>
                            </div>
                            <div className='d-flex align-items-center mb-1 justify-content-evenly mb-2'>
                                <span className="">Backend</span>
                                <div className=""><FaJava size={20} color="#f89820" /></div>
                                <div className=""><SiSpring size={20} color="#6DB33F" /></div>
                                <div className=""><SiSpringboot size={20} color="#6DB33F" /></div>
                                <div className=""><SiHibernate size={20} color="#59666C" /></div>
                                <div className=""><SiMysql size={20} color="#4479A1" /></div>
                            </div>
                        </div>
                    </div>
               </div>
               <div className='row justify-content-evenly mt-3'>
                <button className='btn btn-primary rounded-0 col-4 animate'>Download CV</button>
                <button className='btn btn-primary rounded-0 col-4 animate'>Contact Me</button>
               </div>
            </div>
        </div>
        <div className="col-12 col-lg-6">
            <div className="chat-bubble">
                HELLO
            </div>
            <div className='mt-2 border-bottom border-2 pb-3'>
                <p className='fs-1 m-0' >I'm <span className='fw-bold'>Ritesh Soni</span></p>
                <ReactTyped
                    className='display-3 fw-bold text-danger'
                    strings={["Programmer","Developer","Coder",]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                >  
                </ReactTyped>
            </div>  
            <p className='mt-2 text-justify-custom'>Seeking a position as a Java Full Stack Developer in a growth-oriented company where I can apply my knowledge of frontend (React.js, HTML, CSS, JavaScript) and backend (Java, Spring Boot, Hibernate, MySQL) to build scalable applications, while continuously learning and improving my technical and problem-solving skills.</p>
        </div>
    </div>
  )
}

export default Home