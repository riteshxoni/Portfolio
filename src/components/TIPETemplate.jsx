import '../style.css'
const TIPETemplate = ({data}) => 
    {
  return (
    <div className="row g-4 justify-content-evenly align-items-center" >
            {data.map((item,index) => (
                <div key={index} className="col-12 col-md-4 col-lg-3" >
                    <div className='card text-center' style={{height:'400px'}} >
                        <img src={item.image} style={{height:'170px'}}/>
                        <div className="card-body">
                            <h5 className="card-title one-lines" >{item.title}</h5>
                            <p className="card-text three-lines" >{item.text}</p>
                            <div className="row justify-content-evenly" >
                                <div className="col-6">{item.from}</div>
                                <div className="col-6">{item.to}</div>
                            </div>
                            <a href={item.link} className='btn btn-primary my-3'>See More</a>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    
   
  )
}
export default TIPETemplate