import { Carousel } from 'react-bootstrap';
import rumah from '../asset/rumah.jpg';
import rumah1 from '../asset/rumah1.jpg';
import rumah2 from '../asset/rumah2.jpg';
import rumah3 from '../asset/rumah3.jpg';
import rumah4 from '../asset/rumah4.jpg';
import parkiran from '../asset/parkiran.jpg';

const CarouselDewi = () => {
  return (
    <div>
      <div className="carousel-landing">
        <div className="judul-carousel">
          <h6>-Gallery Kost Rumah Dewi-</h6>
        </div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={rumah} height={'750px'} alt="First slide" />
            <Carousel.Caption>
              <h3> Rumah Kost Bagian Luar</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={rumah2} height={'750px'} alt="Second slide" />
            <Carousel.Caption>
              <h3>Halaman Rumah Kost</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={rumah1} height={'750px'} alt="Third slide" />
            <Carousel.Caption>
              <h3>Kamar Bagian Luar</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={rumah4} height={'750px'} alt="Third slide" />
            <Carousel.Caption>
              <h3>Kamar Bagian Dalam</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={rumah3} height={'750px'} alt="Third slide" />
            <Carousel.Caption>
              <h3>Kamar Mandi Dalam</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={parkiran} height={'750px'} alt="Third slide" />
            <Carousel.Caption>
              <h3>Parkiran</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
export default CarouselDewi;
