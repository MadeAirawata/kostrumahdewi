import rumah from '../asset/rumah.jpg';
import { Col, Row, NavLink, Button } from 'react-bootstrap';

const Herosection = () => {
  return (
    <div>
      <div className="herosection-landingpage">
        <Row>
          <Col>
            <div className="gambar-herosection">
              <img src={rumah} className="rumah" />
            </div>
          </Col>
          <Col>
            <div className="text-herosection">
              <h1>Kost Rumah Dewi</h1>
              <h6>Jl. Bukit Dharma Raya No.3, Jimbaran, Bali.</h6>
            </div>
            <div className="line-herosection"></div>
            <div className="alamat-herosection">
              <Button variant="success" href="https://maps.app.goo.gl/Q7YDRtT4c6BWRwGc9">
                Alamat Google Maps
              </Button>
            </div>
            <div className="line-herosection"></div>
            <div className="deskripsi-herosection">
              <h6>
                Kost Rumah Dewi merupakan sebuah rumah kos campur (untuk laki-laki dan perempuan) dengan total sebanyak 11 kamar. Kost Rumah Dewi memiliki fasilitas WI-FI, tempat tidur, lemari, kamar mandi dalam, serta tempat parkir untuk
                kendaraan anda. Kost Rumah Dewi berlokasi di Jimbaran, Bali, berdekatan dengan:
              </h6>
            </div>

            <div className="lokasi-herosection">
              <h6>1 menit menuju Rektorat Universitas Udayana. </h6>
              <h6>5 menit menuju Bandara Internasional I Gusti Ngurah Rai. </h6>
              <h6>15 menit menuju Kuta Beach. </h6>
              <h6>30 menit menuju kota Denpasar. </h6>
            </div>

            <div className="button-herosection">
              <NavLink>Ayo Pesan Kamar!</NavLink>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Herosection;
