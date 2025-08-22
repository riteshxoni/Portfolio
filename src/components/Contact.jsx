import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
const Contact = () => {
    const {
    register,
    handleSubmit,
  } = useForm()
    const onSubmit = async (data) => {
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
    <div name="Contact">
        <div className="display-6 fw-bold my-3 bg-primary text-white p-2">📞 Get in Touch</div>
        <div className="row">
            <div className="col-12 col-md-6 mb-3">
                {/* action="https://getform.io/f/bpjznrrb" method="POST" */}
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
            <div className="col-12 col-md-6">
                <h5 className="fs-2 fw-bold">Feel free To Contact</h5>
                <p className="mb-4">
                    I’m always open to discussing new projects, creative ideas or
                    opportunities to be part of your vision. Let’s connect!
                </p>
                <ul className="list-unstyled fs-6">
                    <li class="mb-5"><i class="bi bi-geo-alt-fill text-danger me-2"></i> <span className="rounded-circle p-3 bg-primary text-white me-2 "><FaMapMarkedAlt /></span> Patna, Bihar, India</li>
                    <li class="mb-5"><i class="bi bi-telephone-fill text-success me-2"></i> <span className="rounded-circle p-3 bg-primary text-white me-2 "><FaPhoneAlt /></span> +91 98765 43210</li>
                    <li class="mb-5"><i class="bi bi-envelope-fill text-primary me-2"></i> <span className="rounded-circle p-3 bg-primary text-white me-2 "><FaEnvelope /></span> ritesh@example.com</li>
                    <li class="mb-5"><i class="bi bi-globe text-warning me-2"></i> <span className="rounded-circle p-3 bg-primary text-white me-2 "><FaGlobe /></span> www.riteshportfolio.com</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact