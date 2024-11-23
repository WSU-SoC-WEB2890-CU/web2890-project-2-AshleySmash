import React from "react"

const Footer = () => {
  return (
    <footer className="footer bg-navy text-light p-4">
      <div className="container">
        <div className="text-center mb-4">
          <h3 className="footer-title text-decoration-none fs-1">Contact Us</h3>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Postal Addresses</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <strong> 28757 Bremen</strong>
                <span className="d-block text-muted">
                  <a
                    href="https://www.google.com/maps?q=Uhthoffstraße+14-16,+28757+Bremen,+Germany"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Uhthoffstraße 14-16, Germany
                  </a>
                </span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <strong> 20097 Hamburg</strong>
                <span className="d-block text-muted">
                  <a
                    href="https://www.google.com/maps?q=Nagelsweg+33-35,+20097+Hamburg,+Germany"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nagelsweg 33-35, Germany
                  </a>
                </span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <strong> 26670 Uplengen</strong>
                <span className="d-block text-muted">
                  <a
                    href="https://www.google.com/maps?q=Am+Industriepark+9,+26670+Uplengen,+Germany"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Am Industriepark 9, Germany
                  </a>
                </span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <strong> 26723 Emden</strong>
                <span className="d-block text-muted">
                  <a
                    href="https://www.google.com/maps?q=Stedinger+Strasse+24A,+26723+Emden,+Germany"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Stedinger Strasse 24A, Germany
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Email</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-envelope"></i>
                <strong> Consultation:</strong>
                <span className="d-block text-muted">
                  <a href="mailto:info@home-marine.com">info@home-marine.com</a>
                </span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <strong> Sales:</strong>
                <span className="d-block text-muted">
                  <a href="mailto:sales@home-marine.com">sales@home-marine.com</a>
                </span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <strong> Support:</strong>
                <span className="d-block text-muted">
                  <a href="mailto:support@home-marine.com">support@home-marine.com</a>
                </span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <strong> Purchase:</strong>
                <span className="d-block text-muted">
                  <a href="mailto:purchase@home-marine.com">purchase@home-marine.com</a>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Phone & Fax</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-phone-alt"></i>
                <strong> Phone:</strong> +49(0)421-835649-0
              </li>
              <li>
                <i className="fas fa-fax"></i>
                <strong> Fax:</strong> +49(0)421-835649-109
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center mt-4 mb-0 text-white-50">
          &copy; {new Date().getFullYear()} HMC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
