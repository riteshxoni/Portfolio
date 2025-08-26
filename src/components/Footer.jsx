import { FaLinkedinIn, FaWhatsapp, FaTelegram, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
     <div className="fw-bold my-3 bg-primary py-3 p-2">
        <div className="row justify-content-evenly">
             <div className="col-6 d-flex">
                <a href="https://www.linkedin.com/in/riteshxoni/" target="_blank" rel="noopener noreferrer">
                  <div className="mx-3 px-1  bg-white animate"><FaLinkedinIn size={15} color="#0A66C2" /></div>
               </a>
               <a href="https://wa.me/7004270485" target="_blank">
                  <div className="mx-3 px-1  bg-white animate"><FaWhatsapp size={15} color="#25D366" /></div>
               </a>
               <a href="mailto:riteshsony2@gmail.com">
                  <div className="mx-3 px-1  bg-white animate"><SiGmail size={15} color="#E43315" /></div>
               </a>
               <a href="https://t.me/riteshxoni" target="_blank">
                  <div className="mx-3 px-1  bg-white animate"><FaTelegram size={15} color="#0088cc" /></div>
               </a>
               <a href="https://github.com/riteshxoni/" target="_blank" rel="noopener noreferrer">
                  <div className="mx-3 px-1  bg-white animate"><FaGithub size={20} color="#333" /></div>
               </a>
      
                
                
                
            </div>
            <div className="col-6 text-end text-white">Created By Ritesh</div>
        </div>
     </div>
  )
}

export default Footer