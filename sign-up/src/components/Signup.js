import React, { useState } from 'react';
import rumahbaru from '../assets/rumahbaru.jpg';
import logoblack from '../assets/logoblack.png';
import buka from '../assets/buka.png';
import tutup from '../assets/tutup.png';
import { Dropdown } from 'react-bootstrap';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatchError(false);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
    setPasswordMatchError(false);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setPasswordMatchError(true);
    } else {
      // Logic for handling successful form submission (e.g., sending data to backend)
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div className="container">
      <div className="gambar-registrasi">
        <img src={rumahbaru} className="rumah" />
        <div className="logo-login">
          <img src={logoblack} className="logo" alt="Logo" />
        </div>
      </div>
      <div className="form-registrasi-container">
        <div className="form-registrasi">
          <h1>SIGN-UP</h1>
          <h3>Selamat Datang Di Rumah Dewi!</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName" style={{ fontWeight: 700 }}>
                Nama Panjang:
              </label>
              <input type="text" id="fullName" name="fullName" value={fullName} onChange={handleFullNameChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="gender" style={{ fontWeight: 700 }}>
                Jenis Kelamin:
              </label>
              <select id="gender" name="gender" value={gender} onChange={handleGenderChange} required style={{ width: '50%', padding: '8px', borderRadius: '10px' }}>
                <option value="">Pilih Jenis Kelamin</option>
                <option value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{ fontWeight: 700 }}>
                E-mail:
              </label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ fontWeight: 700 }}>
                Password:
              </label>
              <div className="password-input">
                <input type={passwordVisible ? 'text' : 'password'} id="password" name="password" value={password} onChange={handlePasswordChange} required />
                <img src={passwordVisible ? buka : tutup} alt={passwordVisible ? 'Sembunyikan' : 'Tampilkan'} className="icon-password" onClick={togglePasswordVisibility} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirm" style={{ fontWeight: 700 }}>
                Verifikasi Password:
              </label>
              <div className="password-input">
                <input type={passwordVisible ? 'text' : 'password'} id="passwordConfirm" name="passwordConfirm" value={passwordConfirm} onChange={handlePasswordConfirmChange} required />
                <img src={passwordVisible ? buka : tutup} alt={passwordVisible ? 'Sembunyikan' : 'Tampilkan'} className="icon-password" onClick={togglePasswordVisibility} />
              </div>
              {passwordMatchError && <p style={{ color: 'red', fontSize: '0.8em' }}>Password tidak cocok. Harap periksa kembali.</p>}
            </div>
            <button type="submit">Daftar</button>
          </form>
          <p>
            <a href="/login" style={{ color: 'rgb(68, 105, 89)', textDecoration: 'underline', fontWeight: 800 }}>
              Sudah Punya Akun?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
