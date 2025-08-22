const TIPETemplate = ({data}) => 
    {
  return (
    <div className="row justify-content-evenly align-items-center" >
            {data.map((item,index) => (
                <div key={index} className="col-12 col-md-4 col-lg-3 mt-2" >
                    <div className='card p-2 text-center' style={{fontSize:'.8rem',minHeight:450,maxHeight:450}}>
                        <img src={item.image} className='img-fluid'/>
                        <div className="card-body">
                            <h5 className="card-title" style={{minHeight:70}}>{item.title}</h5>
                            <p className="card-text text-justify-custom " >{item.text}</p>
                            <div className="row justify-content-evenly" style={{minHeight:30}}>
                                <div className="col-6">{item.from}</div>
                                <div className="col-6">{item.to}</div>
                            </div>
                            <a href={item.link} className='btn btn-primary m-2'>See More</a>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    
   
  )
}
export default TIPETemplate