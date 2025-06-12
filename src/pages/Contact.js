import React from 'react'
import contactImage from '../assets/contact.jpg'
import phoneImage from '../assets/phone.png'
import emailImage from '../assets/email.jpeg'
function Contact() {
  return (
    <div className="d-flex ">
            <div className="col-lg-6 col-md-12  text-center d-flex align-items-center">
                
                <div className=" d-flex  m-4">
                    <div className="col-12 col-md-6 mb-4 ">
                        <div className="card  d-flex flex-column align-items-center m-4 p-4">
                            <img src={phoneImage } alt='img' style={{height:"50px" ,width : "50px"}}></img>
                            <h5>Talk to Sales</h5>
                            <div className="card-body">
                                <p>Just pick up the phone to chat with a member of our Sales Team.</p>
                                <p>(+12) 0123456789</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4 ">
                        <div className="card  d-flex flex-column align-items-center m-4 p-4">
                            <img src={ emailImage } alt='img' style={{height:"50px" ,width : "50px"}}></img>
                            <h5>Contact Customer Support</h5>
                            <div className="card-body">
                                <p>Sometimes you need some little help.Don't worry we are here.</p>
                                <button className='btn btn-secondary'>Contact Support</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div >
    </div>
    <div className="col-lg-6 col-md-12 "  >
        <img src={contactImage} alt="img" style={{objectFit:"fill" ,height:"50vh",width:"50vw" }}></img>
    </div>
</div>
  )
}

export default Contact
