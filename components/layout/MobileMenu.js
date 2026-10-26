import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function navActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isLearnActive(pathname) {
  return (
    navActive(pathname, "/courses") ||
    navActive(pathname, "/course") ||
    navActive(pathname, "/training") ||
    navActive(pathname, "/my-courses") ||
    navActive(pathname, "/student-dashboard") ||
    pathname.startsWith("/resources/course-resources")
  );
}

export default function MobileMenu({ onNavigate }) {
  const router = useRouter();
  const pathname = router.pathname;
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: "" });
    } else {
      setIsActive({ status: true, key });
    }
  };

  const closeMenu = () => {
    if (typeof onNavigate === "function") onNavigate();
  };

  return (
    <ul className="navigation">
      <li className={navActive(pathname, "/") ? "active" : ""}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li className={navActive(pathname, "/about") ? "active" : ""}>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
      </li>
      <li
        className={`menu-item-has-children${
          navActive(pathname, "/services") ? " active" : ""
        }`}
      >
        <Link href="/services" onClick={closeMenu}>
          Services
        </Link>
        <ul
          className="sub-menu"
          style={{ display: isActive.key === 1 ? "block" : "none" }}
        >
          <li className="sub-menu__hint">
            <span>For organisations</span>
          </li>
          <li>
            <Link href="/services/ict" onClick={closeMenu}>
              ICT Solutions
            </Link>
          </li>
          <li>
            <Link href="/services/business-development" onClick={closeMenu}>
              Business Development
            </Link>
          </li>
          <li>
            <Link href="/services/training" onClick={closeMenu}>
              Capacity Building
            </Link>
          </li>
        </ul>
        <div
          className={isActive.key === 1 ? "dropdown-btn open" : "dropdown-btn"}
          onClick={() => handleToggle(1)}
        >
          <span className="fas fa-angle-down" />
        </div>
      </li>
      <li
        className={`menu-item-has-children${
          isLearnActive(pathname) ? " active" : ""
        }`}
      >
        <Link href="/courses" onClick={closeMenu}>
          Learn
        </Link>
        <ul
          className="sub-menu"
          style={{ display: isActive.key === 2 ? "block" : "none" }}
        >
          <li className="sub-menu__hint">
            <span>For learners</span>
          </li>
          <li>
            <Link href="/courses" onClick={closeMenu}>
              Online Courses
            </Link>
          </li>
          <li>
            <Link href="/training" onClick={closeMenu}>
              Training & Workshops
            </Link>
          </li>
          <li>
            <Link href="/resources/course-resources" onClick={closeMenu}>
              Course Resources
            </Link>
          </li>
          <li>
            <Link href="/my-courses" onClick={closeMenu}>
              My Learning
            </Link>
          </li>
        </ul>
        <div
          className={isActive.key === 2 ? "dropdown-btn open" : "dropdown-btn"}
          onClick={() => handleToggle(2)}
        >
          <span className="fas fa-angle-down" />
        </div>
      </li>
      <li className={navActive(pathname, "/blog") ? "active" : ""}>
        <Link href="/blog" onClick={closeMenu}>
          Blog
        </Link>
      </li>
      <li className={navActive(pathname, "/resources/reports") ? "active" : ""}>
        <Link href="/resources/reports" onClick={closeMenu}>
          Reports
        </Link>
      </li>
      <li className={navActive(pathname, "/contact") ? "active" : ""}>
        <Link href="/contact" onClick={closeMenu}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
