import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer>
        <div
          className="footer-area footer-bg"
          data-background="/assets/img/bg/footer_bg.jpg"
        >
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-lg-3 col-md-7">
                  <div className="footer-widget">
                    <h4 className="fw-title">Information</h4>
                    <div className="footer-info">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-pin" />
                          </div>
                          <div className="content">
                            <p>58 Street Commercial Road Fratton, Australia</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-phone-call" />
                          </div>
                          <div className="content">
                            <Link href="tel:0123456789">+123 888 9999</Link>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-clock" />
                          </div>
                          <div className="content">
                            <p>
                              Mon – Sat: 8 am – 5 pm, <br /> Sunday:{" "}
                              <span>CLOSED</span>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Menu</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/about">Company</Link>
                        </li>
                        <li>
                          <Link href="/contact">Careers</Link>
                        </li>
                        <li>
                          <Link href="/contact">Press media</Link>
                        </li>
                        <li>
                          <Link href="/blog">Our Blog</Link>
                        </li>
                        <li>
                          <Link href="/contact">Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Quick Links</h4>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/contact">How it’s Work</Link>
                        </li>
                        <li>
                          <Link href="/contact">Partners</Link>
                        </li>
                        <li>
                          <Link href="/contact">Testimonials</Link>
                        </li>
                        <li>
                          <Link href="/contact">Case Studies</Link>
                        </li>
                        <li>
                          <Link href="/contact">Pricing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-7">
                  <div className="footer-widget">
                    <h4 className="fw-title">Subscribe to Our Newsletter</h4>
                    <div className="footer-newsletter">
                      <p>
                        Sign up to Privitar’s weekly newsletter to get the
                        latest updates.
                      </p>
                      <form action="#">
                        <input type="email" placeholder="enter your e-mail" />
                        <button type="submit">Subscribe</button>
                      </form>
                      <span>We don’t send you any spam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="left-sider">
                    <div className="f-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/w_logo.png" alt="" />
                      </Link>
                    </div>
                    <div className="copyright-text">
                      <p>Copyright © gerow | All Right Reserved</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="https://www.facebook.com/profile.php?id=61552529542233" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://x.com/OgaalsanC" target="_blank" rel="noopener noreferrer">
                          <span style={{fontWeight: 'bold', fontSize: '18px'}}>X</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/ogaalsan.consultancy/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.tiktok.com/@ogaalsanconsultancy" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-tiktok" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
