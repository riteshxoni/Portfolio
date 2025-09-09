import pic from '../../public/profile.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="navbar bg-light navbar-expand-lg shadow-lg position-fixed top-0 start-0 end-0 z-3">
        <div className="container-fluid">
            <a href="" className='navbar-brand'>
                 <div className="d-flex align-items-center">
                    <img height={50} src={pic} className='me-2 rounded-circle' />
                    <div>
                        <h5 className='fs-4 my-0'>Ritesh</h5>
                        <p className="small my-0 fw-fw-medium">Full Stack Developer</p>
                    </div>
                </div>
            </a>

            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbar">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbar'>
                <div className='navbar-nav fs-5 ms-auto'>
                    <Link className='nav-link animate px-3' to="Home" smooth={true} duration={100} offset={-70} activeClass='active'>Home      </Link>
                    <Link className='nav-link animate px-3' to="About" smooth={true} duration={100} offset={-70} activeClass='active'>About     </Link>
                    <Link className='nav-link animate px-3' to="Portfolio" smooth={true} duration={100} offset={-70} activeClass='active'>Portfolio </Link>
                    <Link className='nav-link animate px-3' to="Skills" smooth={true} duration={100} offset={-70} activeClass='active'>Skills    </Link>
                    <Link className='nav-link animate px-3' to="Projects" smooth={true} duration={100} offset={-70} activeClass='active'>Projects  </Link>
                    <Link className='nav-link animate px-3' to="Experiance" smooth={true} duration={100} offset={-70} activeClass='active'>Experiance</Link>
                    <Link className='nav-link animate px-3' to="Contact" smooth={true} duration={100} offset={-70} activeClass='active'>Contact   </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar