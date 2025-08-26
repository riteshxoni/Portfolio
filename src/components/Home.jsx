import profile from '../../public/profile.png'
import cv from '..//../public/RiteshCV.pdf'
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
                <a href={cv} className='btn btn-primary rounded-0 col-4 animate' target='_blank'>Download CV</a>
                
                <button className='btn btn-primary rounded-0 col-4 animate' data-bs-toggle="modal" data-bs-target="#showContact">Contact Me</button>
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