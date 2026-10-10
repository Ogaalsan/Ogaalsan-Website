import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useAuth } from "@/context/AuthContext";

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
}) {
  const router = useRouter();
  const pathname = router.pathname;
  const isHome = pathname === "/";
  const [mobileQuery, setMobileQuery] = useState("");
  const { user, isAuthenticated, logout } = useAuth();
  const overHero = isHome && !scroll;

  const handleLogout = async () => {
    await logout();
  };

  const submitSearch = (query) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    if (isSearch) {
      handleSearch();
    }
    if (isMobileMenu) {
      handleMobileMenu();
    }

    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const handleMobileSearch = (event) => {
    event.preventDefault();
    submitSearch(mobileQuery);
  };

  return (
    <>
      <header
        id="sticky-header"
        className={`transparent-header header-style-two ogaalsan-header${
          overHero ? " ogaalsan-header--over-hero" : ""
        }${scroll || !isHome ? " sticky-menu" : ""}`}
      >
        <div className="container custom-container">
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
                    <div className="navbar-wrap main-menu d-none d-xl-flex">
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
                              <Link href="/services/ict">ICT Solutions</Link>
                            </li>
                            <li>
                              <Link href="/services/business-development">
                                Business Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/services/training">
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
                      </ul>
                    </div>
                    <div className="header-action ogaalsan-header__actions">
                      <ul className="list-wrap">
                        <li className="ogaalsan-header__tools d-none d-md-flex">
                          <ThemeToggle />
                          <button
                            type="button"
                            className="header-search-btn"
                            onClick={handleSearch}
                            aria-label="Open search"
                          >
                            <i className="flaticon-search" />
                          </button>
                        </li>
                        <li className="ogaalsan-header__auth d-none d-md-flex">
                          {isAuthenticated ? (
                            <>
                              <Link
                                href="/student-dashboard"
                                className="ogaalsan-header__text-link"
                              >
                                Dashboard
                              </Link>
                              <button
                                type="button"
                                className="ogaalsan-header__text-link"
                                onClick={handleLogout}
                              >
                                Sign Out
                              </button>
                            </>
                          ) : (
                            <Link
                              href="/auth/sign-in"
                              className="ogaalsan-header__text-link"
                            >
                              Sign In
                            </Link>
                          )}
                        </li>
                        <li className="ogaalsan-header__cta d-none d-xl-flex">
                          <Link
                            href="/contact"
                            className="ogaalsan-btn ogaalsan-btn--primary"
                          >
                            Contact
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
                      <form onSubmit={handleMobileSearch}>
                        <input
                          type="search"
                          placeholder="Search here..."
                          value={mobileQuery}
                          onChange={(event) => setMobileQuery(event.target.value)}
                          aria-label="Search"
                        />
                        <button type="submit" aria-label="Submit search">
                          <i className="flaticon-search" />
                        </button>
                      </form>
                    </div>
                    <div className="mobile-menu-auth p-3 text-center my-2 style-mobile-auth">
                      {isAuthenticated ? (
                        <div className="d-flex flex-column gap-2 align-items-center">
                          <span className="text-white font-weight-bold">
                            Hi, {user?.name?.split(" ")[0] || "Learner"}
                          </span>
                          <div className="d-flex gap-2">
                            <Link
                              href="/student-dashboard"
                              className="btn btn-sm btn-two"
                              onClick={handleMobileMenu}
                            >
                              Dashboard
                            </Link>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-light"
                              onClick={() => {
                                handleLogout();
                                handleMobileMenu();
                              }}
                            >
                              Sign Out
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="d-flex gap-2 justify-content-center">
                          <Link
                            href="/auth/sign-in"
                            className="btn btn-sm"
                            onClick={handleMobileMenu}
                          >
                            Sign In
                          </Link>
                          <Link
                            href="/auth/sign-up"
                            className="btn btn-sm btn-two"
                            onClick={handleMobileMenu}
                          >
                            Sign Up
                          </Link>
                        </div>
                      )}
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
      </header>
    </>
  );
}
