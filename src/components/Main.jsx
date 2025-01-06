import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/image1.avif' 
import img2 from '../assets/image2.avif' 
import img3 from '../assets/image3.jpg' 
import img4 from '../assets/image4.avif' 
import img5 from '../assets/image5.avif' 


function Main() {
  return (
    <Carousel className="mt-[12rem] h-96"  autoPlay={true} infiniteLoop={true} showArrows={false} showThumbs={false} transitionTime="250ms" showStatus={false}>
    <div>
        <img src={img1} alt="" />
    </div>
    <div>
        <img src={img2} alt="" />
    </div>
    <div>
        <img src={img3} alt="" />
    </div>
    
    <div>
        <img src={img4} alt="" />
    </div>
    <div>
        <img src={img5} alt="" />
    </div>

    
    </Carousel>
  )
}

export default Main