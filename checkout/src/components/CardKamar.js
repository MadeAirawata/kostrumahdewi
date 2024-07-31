import React, { useState } from 'react';
import { Col, Row, Button, Card, Form, Modal } from 'react-bootstrap';
import rumah4 from '../asset/rumah4.jpg';

const CardKamar = () => {
  const [show, setShow] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    gender: '',
    ktp: null,
    paymentMethod: '',
    paymentStatus: '',
    paymentProof: null,
  });
  const [amount, setAmount] = useState(500000);
  const [showDPMessage, setShowDPMessage] = useState(false);
  const [showTotal, setShowTotal] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowPayment = () => setShowPayment(true);
  const handleClosePayment = () => setShowPayment(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'paymentStatus') {
      setAmount(value === 'DP' ? 500000 : 1200000);
      setShowDPMessage(value === 'DP');
      setShowTotal(true);
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    handleShowPayment();
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`Pembayaran sukses! Total bayar: Rp${amount.toLocaleString()}`);
    handleClosePayment();
  };

  return (
    <div>
      <div className="cardkamar-container">
        <div className="card-kamar">
          <h2>-PEMESANAN KAMAR-</h2>
          <h6>Fitur ini berisikan kumpulan kamar yang tersedia untuk dipesan.</h6>
          <Row className="g-0">
            {[...Array(11)].map((_, index) => (
              <Col key={index}>
                <Card style={{ width: '16rem', marginTop: '30px' }}>
                  <img src={rumah4} className="kamar" style={{ height: '13rem' }} />
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>Kamar No.{index + 1}</Card.Title>
                    <Button variant="success" onClick={handleShow}>
                      Pesan!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Form Pemesanan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <p>
                <strong>Fasilitas:</strong>
                <br />
                -Kasur
                <br />
                -Lemari
                <br />
                -Kamar Mandi Dalam
                <br />
                -AC (AIR-CONDITIONER)
                <br />
                -Dapur Dalam
                <br />
                -WI-FI
              </p>
              <Form.Group className="mb-3">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="text" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Control as="select" name="gender" value={formData.gender} onChange={handleInputChange} required>
                  <option value="" disabled>
                    Pilih...
                  </option>
                  <option value="Pria">Pria</option>
                  <option value="Wanita">Wanita</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Upload KTP</Form.Label>
                <Form.Control type="file" name="ktp" onChange={handleFileChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Metode Pembayaran</Form.Label>
                <Form.Control as="select" name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange} required>
                  <option value="" disabled>
                    Pilih...
                  </option>
                  <option value="QRIS">QRIS</option>
                </Form.Control>
              </Form.Group>
              {formData.paymentMethod === 'QRIS' && (
                <Form.Group className="mb-3">
                  <Form.Label>Status Pembayaran</Form.Label>
                  <Form.Control as="select" name="paymentStatus" value={formData.paymentStatus} onChange={handleInputChange} required>
                    <option value="" disabled>
                      Pilih...
                    </option>
                    <option value="DP">DP</option>
                    <option value="Lunas">Lunas</option>
                  </Form.Control>
                </Form.Group>
              )}
              {showDPMessage && (
                <p className="text-muted">
                  *DP berlaku selama 30 hari setelah melakukan pembayaran untuk pemesanan kamar. Jika tidak ada kepastian lebih lanjut, DP akan hangus dan tidak dapat dikembalikan kepada calon penyewa. *Pelunasan dapat dilakukan dengan
                  membayar secara langsung.
                </p>
              )}
              <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handleClose}>
                  Batal
                </Button>
                <Button variant="success" type="submit">
                  Checkout
                </Button>
              </div>
              {showTotal && (
                <div className="mt-3">
                  <h5>Total Bayar: Rp{amount.toLocaleString()}</h5>
                </div>
              )}
            </Form>
          </Modal.Body>
        </Modal>

        <Modal show={showPayment} onHide={handleClosePayment}>
          <Modal.Header closeButton>
            <Modal.Title>Pembayaran</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={rumah4} alt="QRIS Code" className="img-fluid mb-3" />
            <Form onSubmit={handlePaymentSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Upload Bukti Pembayaran</Form.Label>
                <Form.Control type="file" name="paymentProof" onChange={handleFileChange} required />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handleClosePayment}>
                  Tutup
                </Button>
                <Button variant="success" type="submit">
                  Bayar Sekarang
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default CardKamar;
