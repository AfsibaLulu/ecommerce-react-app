import React from 'react'
import offer1 from '../../assets/offer/offer1.avif'
import offer2 from '../../assets/offer/offer2.avif'
import offer3 from '../../assets/offer/offer3.avif'

function Offer() {
  return (
    <div className="container">
        <div className="row m-4 ">
            <div className="d-flex  flex-md-row col-12 col-md-6">
                <img className="m-2"src={offer1} alt=" " style={{height : "100vh"}}/>
                <div className='d-flex flex-column'>
                    <img className="m-2"src={offer2} alt=" " style={{height : "49vh"}}/>
                    <img className="m-2"src={offer3} alt=" " style={{height : "49vh"}}/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Offer
