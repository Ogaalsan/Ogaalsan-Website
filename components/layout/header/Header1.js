import Link from "next/link";
import { useRouter } from "next/router";
import MobileMenu from "../MobileMenu";
import SearchPopup from "../SearchPopup";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { useOrganization } from "@/context/OrganizationContext";

function navActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSearch,
  handleSearch,
  isOffcanvus,
  handleOffcanvus,
}) {
  const router = useRouter();
  const pathname = router.pathname;
  const { user, isAuthenticated, logout } = useAuth();
  const { locationLabel, email, phoneLabel, phoneHref } = useOrganization();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <header
        id="sticky-header"
        className={`transparent-header header-style-two ${
          scroll ? "sticky-menu" : ""
        }`}
      >
        <div className="container custom-container">
          <div className="heder-top-wrap">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-location" />
                      {locationLabel}
                    </li>
                    <li>
                      <i className="flaticon-mail" />
                      <Link href={`mailto:${email}`}>{email}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="header-top-right d-flex justify-content-end align-items-center">
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link
                          href="https://www.facebook.com/profile.php?id=61552529542233"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://x.com/OgaalsanC"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span
                            style={{ fontWeight: "bold", fontSize: "18px" }}
                          >
                            X
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/ogaalsan.consultancy/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.tiktok.com/@ogaalsanconsultancy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-tiktok" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex align-items-center ms-3 gap-2">
                    <ThemeToggle />
                    <div className="header-top-btn d-none d-md-flex align-items-center gap-2">
                      {isAuthenticated ? (
                        <>
                          <span className="auth-user-greeting">
                            Hi, {user?.name?.split(" ")[0] || "there"}
                          </span>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-auth"
                            onClick={handleLogout}
                          >
                            Sign Out
                          </button>
                        </>
                      ) : (
                        <>
                          <Link
                            href="/auth/sign-in"
                            className="btn btn-sm btn-outline-auth"
                          >
                            Sign In
                          </Link>
                          <Link href="/auth/sign-up" className="btn btn-sm">
                            Sign Up
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-area">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/logo-ogalsan.png"
                          alt="OgaalSan Consultancy Logo"
                        />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className={navActive(pathname, "/") ? "active" : ""}>
                          <Link href="/">Home</Link>
                        </li>
                        <li
                          className={
                            navActive(pathname, "/about") ? "active" : ""
                          }
                        >
                          <Link href="/about">About</Link>
                        </li>
                        <li
                          className={`menu-item-has-children${
                            navActive(pathname, "/services") ? " active" : ""
                          }`}
                        >
                          <Link href="/services">Services</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/services?category=ict">
                                ICT Solutions
                              </Link>
                            </li>
                            <li>
                              <Link href="/services?category=business-development">
                                Business Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/services?category=training">
                                Training &amp; Capacity Building
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={
                            navActive(pathname, "/courses") ||
                            navActive(pathname, "/course")
                              ? "active"
                              : ""
                          }
                        >
                          <Link href="/courses">Courses</Link>
                        </li>
                        <li
                          className={
                            navActive(pathname, "/training") ? "active" : ""
                          }
                        >
                          <Link href="/training">Training</Link>
                        </li>
                        <li
                          className={
                            navActive(pathname, "/blog") ? "active" : ""
                          }
                        >
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li
                          className={`menu-item-has-children${
                            pathname.startsWith("/resources") ? " active" : ""
                          }`}
                        >
                          <Link href="/resources/reports">Resources</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/resources/reports">Reports</Link>
                            </li>
                            <li>
                              <Link href="/resources/course-resources">
                                Course Resources
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={
                            navActive(pathname, "/contact") ? "active" : ""
                          }
                        >
                          <Link href="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action">
                      <ul className="list-wrap">
                        <li className="header-contact-two">
                          <div className="icon">
                            <i className="flaticon-phone-call" />
                          </div>
                          <div className="content">
                            <span>Hotline</span>
                            <span className="d-block">
                              <Link href={phoneHref}>{phoneLabel}</Link>
                            </span>
                          </div>
                        </li>
                        <li className="header-search" onClick={handleSearch}>
                          <Link href="#">
                            <i className="flaticon-search" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/logo-ogalsan.png"
                          alt="OgaalSan Consultancy Logo"
                        />
                      </Link>
                    </div>
                    <div className="mobile-search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button type="button">
                          <i className="flaticon-search" />
                        </button>
                      </form>
                    </div>
                    <div className="menu-outer">
                      <MobileMenu />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <Link
                            href="https://www.facebook.com/profile.php?id=61552529542233"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://x.com/OgaalsanC"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span
                              style={{ fontWeight: "bold", fontSize: "18px" }}
                            >
                              X
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.instagram.com/ogaalsan.consultancy/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.tiktok.com/@ogaalsanconsultancy"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-tiktok" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" onClick={handleMobileMenu} />
              </div>
            </div>
          </div>
        </div>
        <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
      </header>
    </>
  );
}
