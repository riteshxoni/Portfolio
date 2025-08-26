import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
const Modal = ({ open, onClose }) => {
    if (!open) return;

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
        <div class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Download CV</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={onClose}></button>
                    </div>
                    <div class="modal-body">
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
  )
}

export default Modal