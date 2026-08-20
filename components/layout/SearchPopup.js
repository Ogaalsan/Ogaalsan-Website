import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function SearchPopup({ isSearch, handleSearch }) {
  const router = useRouter();
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isSearch) {
      setQuery("");
      document.body.classList.remove("search-popup-open");
      return undefined;
    }

    document.body.classList.add("search-popup-open");
    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 0);

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleSearch();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("search-popup-open");
    };
  }, [isSearch, handleSearch]);

  const submitSearch = (event) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    handleSearch();
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  if (!mounted || !isSearch) {
    return null;
  }

  return createPortal(
    <div className="ogaalsan-search-popup" role="dialog" aria-modal="true">
      <button
        type="button"
        className="ogaalsan-search-popup__backdrop"
        onClick={handleSearch}
        aria-label="Close search"
      />
      <div className="ogaalsan-search-popup__panel">
        <button
          type="button"
          className="ogaalsan-search-popup__close"
          onClick={handleSearch}
          aria-label="Close search"
        >
          <i className="fas fa-times" />
        </button>

        <div className="ogaalsan-search-popup__brand">
          <Image
            src="/assets/img/logo/ogaalsan version 4-03.png"
            alt="OgaalSan Consultancy"
            width={72}
            height={72}
          />
        </div>

        <h2 className="ogaalsan-search-popup__title">What are you looking for?</h2>
        <p className="ogaalsan-search-popup__subtitle">
          Search courses, training, services, blog posts, and reports.
        </p>

        <form className="ogaalsan-search-popup__form" onSubmit={submitSearch}>
          <div className="ogaalsan-search-popup__field">
            <i className="fas fa-search" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              name="q"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Type a keyword..."
              aria-label="Search"
            />
          </div>
          <button type="submit" className="btn btn-three ogaalsan-search-popup__submit">
            Search
          </button>
        </form>

        <p className="ogaalsan-search-popup__hint">Press Enter to search · Esc to close</p>
      </div>
    </div>,
    document.body
  );
}
