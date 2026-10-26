import { useEffect, useRef, useState } from "react";

const GOOGLE_SCRIPT_ID = "ogaalsan-google-gsi";
const GOOGLE_SCRIPT_SRC = "https://accounts.google.com/gsi/client";

function loadGoogleScript() {
  if (typeof window === "undefined") {
    return Promise.reject(
      new Error("Google Sign-In is only available in the browser.")
    );
  }

  if (window.google?.accounts?.id) {
    return Promise.resolve();
  }

  const existing = document.getElementById(GOOGLE_SCRIPT_ID);
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Failed to load Google Sign-In.")),
        { once: true }
      );
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = GOOGLE_SCRIPT_ID;
    script.src = GOOGLE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Sign-In."));
    document.head.appendChild(script);
  });
}

export default function GoogleContinueButton({
  onCredential,
  disabled = false,
  label = "Continue with Google",
}) {
  const clientId = (process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "").trim();
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const callbackRef = useRef(onCredential);
  const hiddenBtnRef = useRef(null);

  useEffect(() => {
    callbackRef.current = onCredential;
  }, [onCredential]);

  useEffect(() => {
    if (!clientId) {
      setReady(false);
      return undefined;
    }

    let active = true;

    loadGoogleScript()
      .then(() => {
        if (!active || !window.google?.accounts?.id || !hiddenBtnRef.current) {
          return;
        }

        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: async (response) => {
            if (!response?.credential) {
              setError("Google sign-in was cancelled.");
              setBusy(false);
              return;
            }
            setError("");
            setBusy(true);
            try {
              await callbackRef.current?.(response.credential);
            } catch (err) {
              setError(err.message || "Unable to continue with Google.");
            } finally {
              setBusy(false);
            }
          },
          auto_select: false,
          cancel_on_tap_outside: true,
        });

        window.google.accounts.id.renderButton(hiddenBtnRef.current, {
          type: "standard",
          theme: "outline",
          size: "large",
          text: "continue_with",
          shape: "rectangular",
          logo_alignment: "left",
          width: Math.max(
            hiddenBtnRef.current.parentElement?.offsetWidth || 320,
            240
          ),
        });

        setReady(true);
      })
      .catch((err) => {
        if (active) setError(err.message || "Unable to load Google Sign-In.");
      });

    return () => {
      active = false;
    };
  }, [clientId]);

  const handleClick = () => {
    if (disabled || busy) return;
    setError("");

    if (!clientId) {
      setError(
        "Add NEXT_PUBLIC_GOOGLE_CLIENT_ID to .env.local, then restart the website."
      );
      return;
    }

    if (!ready) {
      setError("Google Sign-In is still loading. Try again in a moment.");
      return;
    }

    const googleBtn = hiddenBtnRef.current?.querySelector(
      'div[role="button"], button'
    );

    if (googleBtn) {
      googleBtn.click();
      return;
    }

    if (window.google?.accounts?.id) {
      window.google.accounts.id.prompt();
      return;
    }

    setError("Google Sign-In is unavailable right now.");
  };

  return (
    <div className="auth-google">
      <button
        type="button"
        className="auth-google__btn"
        onClick={handleClick}
        disabled={disabled || busy}
      >
        <img
          src="/assets/img/icons/google-g.png"
          alt=""
          width={20}
          height={20}
        />
        <span>{busy ? "Connecting..." : label}</span>
      </button>
      <div
        ref={hiddenBtnRef}
        className="auth-google__hidden"
        aria-hidden="true"
      />
      {error ? <p className="auth-google__error">{error}</p> : null}
    </div>
  );
}
