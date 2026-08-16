import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function navActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
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
          <li>
            <Link href="/services?category=ict">ICT Solutions</Link>
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
          <li>
            <Link href="/services?category=research">Research</Link>
          </li>
          <li>
            <Link href="/services?category=legal-advisory">Legal Advisory</Link>
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
        className={
          navActive(pathname, "/courses") || navActive(pathname, "/course")
            ? "active"
            : ""
        }
      >
        <Link href="/courses">Courses</Link>
      </li>
      <li className={navActive(pathname, "/training") ? "active" : ""}>
        <Link href="/training">Training</Link>
      </li>
      <li className={navActive(pathname, "/blog") ? "active" : ""}>
        <Link href="/blog">Blog</Link>
      </li>
      <li
        className={`menu-item-has-children${
          pathname.startsWith("/resources") ? " active" : ""
        }`}
      >
        <Link href="/resources/reports">Resources</Link>
        <ul
          className="sub-menu"
          style={{ display: isActive.key === 2 ? "block" : "none" }}
        >
          <li>
            <Link href="/resources/reports">Reports</Link>
          </li>
          <li>
            <Link href="/resources/course-resources">Course Resources</Link>
          </li>
        </ul>
        <div
          className={isActive.key === 2 ? "dropdown-btn open" : "dropdown-btn"}
          onClick={() => handleToggle(2)}
        >
          <span className="fas fa-angle-down" />
        </div>
      </li>
      <li className={navActive(pathname, "/contact") ? "active" : ""}>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}
