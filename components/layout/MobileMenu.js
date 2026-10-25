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

export default function MobileMenu() {
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

  return (
    <ul className="navigation">
      <li className={navActive(pathname, "/") ? "active" : ""}>
        <Link href="/">Home</Link>
      </li>
      <li className={navActive(pathname, "/about") ? "active" : ""}>
        <Link href="/about">About</Link>
      </li>
      <li
        className={`menu-item-has-children${
          navActive(pathname, "/services") ? " active" : ""
        }`}
      >
        <Link href="/services">Services</Link>
        <ul
          className="sub-menu"
          style={{ display: isActive.key === 1 ? "block" : "none" }}
        >
          <li className="sub-menu__hint">
            <span>For organisations</span>
          </li>
          <li>
            <Link href="/services/ict">ICT Solutions</Link>
          </li>
          <li>
            <Link href="/services/business-development">
              Business Development
            </Link>
          </li>
          <li>
            <Link href="/services/training">Capacity Building</Link>
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
        <Link href="/courses">Learn</Link>
        <ul
          className="sub-menu"
          style={{ display: isActive.key === 2 ? "block" : "none" }}
        >
          <li className="sub-menu__hint">
            <span>For learners</span>
          </li>
          <li>
            <Link href="/courses">Online Courses</Link>
          </li>
          <li>
            <Link href="/training">Training & Workshops</Link>
          </li>
          <li>
            <Link href="/resources/course-resources">Course Resources</Link>
          </li>
          <li>
            <Link href="/my-courses">My Learning</Link>
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
        <Link href="/blog">Blog</Link>
      </li>
      <li className={navActive(pathname, "/resources/reports") ? "active" : ""}>
        <Link href="/resources/reports">Reports</Link>
      </li>
      <li className={navActive(pathname, "/contact") ? "active" : ""}>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}
