import React, { useState } from 'react';
import rumahbaru from '../assets/rumahbaru.jpg';
import logoblack from '../assets/logoblack.png';
import buka from '../assets/buka.png';
import tutup from '../assets/tutup.png';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <div className="gambar-registrasi">
        <img src={rumahbaru} className="rumah" />
        <div className="logo-login">
          <img src={logoblack} className="logo" />
        </div>
      </div>
      <div className="form-registrasi-container">
        <div className="form-registrasi">
          <h1>LOGIN</h1>
          <h3>Masukkan E-mail Dan Password!</h3>
          <form>
            <div className="form-group">
              <label htmlFor="email" style={{ fontWeight: 700 }}>
                E-mail:
              </label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={{ fontWeight: 700 }}>
                Password:
              </label>
              <div className="password-input">
                <input type={passwordVisible ? 'text' : 'password'} id="password" name="password" required />
                <img src={passwordVisible ? buka : tutup} alt={passwordVisible ? 'Sembunyikan' : 'Tampilkan'} className="icon-password" onClick={togglePasswordVisibility} />
              </div>
            </div>
            <button type="submit">Masuk</button>
          </form>
          <p>
            <a href="/login" style={{ color: 'rgb(68, 105, 89)', textDecoration: 'underline', fontWeight: 800 }}>
              Belum Punya Akun?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
