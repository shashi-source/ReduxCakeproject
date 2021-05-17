import React from 'react'

const Carousel =()=>{   
    // slider's images
  const  img="https://wallpaperaccess.com/full/986759.jpg";
  const img1="https://img.wallpapersafari.com/desktop/1680/1050/32/56/AqaRtF.jpg";
const  img2="https://przemekspider.com/wp-content/uploads/2020/03/6-69170_birthday-cake-wallpaper-cake-image-full-hd.jpg";

        return(
            <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{top:"50px"}}>
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={img} style={{width:"800px" ,height:"590px"}} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                <img src={img1} style={{width:"800px" ,height:"590px"}} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                <img src={img2} style={{width:"800px" ,height:"590px"}} className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
        )
    
}
export default Carousel