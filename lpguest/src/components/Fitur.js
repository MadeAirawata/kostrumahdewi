import { Col, Row, Button, Card } from 'react-bootstrap';
import form from '../asset/form.jpeg';
import whatsapp from '../asset/whatsapp.png';
import kamar from '../asset/kamar.jpg';

const Fitur = () => {
  return (
    <div>
      <div className="fitur-landingpage">
        <h6>-Fitur Website Rumah Dewi-</h6>
      </div>
      <div className="cards">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <img src={form} className="form" />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Pelaporan Masalah</Card.Title>
                <Card.Text>Pelaporan untuk penghuni kos jika ada kendala yang perlu disampaikan kepada pemilik rumah kos.</Card.Text>
                <Button variant="success" href="https://forms.gle/JEL88wRmr75YEt959">
                  Tekan
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <img src={whatsapp} className="whatsapp" style={{ height: '10rem' }} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Nomor CS</Card.Title>
                <Card.Text>Nomor CS Rumah Dewi untuk calon penyewa yang ingin menanyakan informasi lebih lanjut mengenai kos Rumah Dewi. </Card.Text>
                <Button variant="success" href="https://wa.me/+6287759744555">
                  Tekan
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <img src={kamar} className="kamar" style={{ height: '13rem' }} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>Pemesanan Kamar</Card.Title>
                <Card.Text>Fitur ini berisikan kumpulan kamar yang tersedia untuk dipesan.</Card.Text>
                <Button variant="success">Tekan</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Fitur;
