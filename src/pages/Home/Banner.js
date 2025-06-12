import React from 'react'
import carousel1 from '../../assets/carosal/carousel1.webp'
import carousel2 from '../../assets/carosal/carousel2.webp'
import carousel3 from '../../assets/carosal/carousel3.webp'
function Banner() {
  return (
    <div>
      <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={ carousel1} className="d-block w-100"  alt="Banner Summer Collection"/>
                    </div>
                    <div className="carousel-item">
                    <img src={carousel2} className="d-block w-100" alt="Banner Casual Collection"/>
                    </div>
                    <div className="carousel-item">
                    <img src={carousel3} className="d-block w-100" alt="Banner Summer Collection"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    </div>
  )
}

export default Banner
