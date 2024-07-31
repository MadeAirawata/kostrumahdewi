const Footer = () => {
  return (
    <div>
      {/* FOOOTER */}
      <div className="w-100 bg-dark m-0 p-0">
        <div className="row justify-content-around align-content-start m-0 p-0 text-white py-5 mx-3">
          <div className="col-md-3">
            <h3>Anda ingin :</h3>
            <div className="mt-3">
              <ul>
                <li>
                  <a href="/register" className="btn btn-light">
                    Buat Akun
                  </a>
                </li>
                <li className="mt-3">
                  <a href="/login" className="btn btn-light">
                    Masuk Akun
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 mt-md-0 mt-3 ">
            <h3>Kontak Kami :</h3>
            <div className="mt-3">
              <ul>
                <li className="mt-3">
                  <a href="https://wa.me/+6287759744555" target="_blank" className="text-decoration-none text-white">
                    <span className="me-3">Phone : 087759744555</span>
                    <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                        fill="#FFFFFF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="text-white m-0 p-0" />
        <p className="m-0 px-0 py-3 text-white text-center">2024@ All rights reserved. Kos Rumah Dewi.</p>
      </div>
    </div>
  );
};

export default Footer;
