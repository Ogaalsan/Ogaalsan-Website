import { useState } from "react";
import { useOrganization } from "@/context/OrganizationContext";

const WHATSAPP_MESSAGE =
  "Hello! I would like to know more about Ogaalsan services and courses.";

function WhatsAppIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="#ffffff"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CloseIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const { organization, whatsappUrl } = useOrganization();
  const chatUrl = whatsappUrl(WHATSAPP_MESSAGE);

  return (
    <div className={`whatsapp-widget ${open ? "is-open" : ""}`}>
      {open && (
        <div className="whatsapp-widget__card" role="dialog" aria-label="WhatsApp chat">
          <div className="whatsapp-widget__header">
            <div className="whatsapp-widget__brand">
              <span className="whatsapp-widget__avatar" aria-hidden="true">
                <WhatsAppIcon className="whatsapp-widget__icon whatsapp-widget__icon--avatar" />
              </span>
              <div>
                <strong>{organization.name} Support</strong>
                <span>Typically replies instantly</span>
              </div>
            </div>
            <button
              type="button"
              className="whatsapp-widget__close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <CloseIcon className="whatsapp-widget__icon whatsapp-widget__icon--close" />
            </button>
          </div>

          <div className="whatsapp-widget__body">
            <div className="whatsapp-widget__bubble">
              <p className="whatsapp-widget__greeting">Assalamu Alaikum! 👋</p>
              <p>
                Ready to start your journey? Have questions about our programs?
                We&apos;re here to help you grow with {organization.name}.
              </p>
            </div>

            <a
              href={chatUrl}
              className="whatsapp-widget__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="whatsapp-widget__icon whatsapp-widget__icon--cta" />
              Start Chat
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        className="whatsapp-widget__launcher"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
      >
        {open ? (
          <CloseIcon className="whatsapp-widget__icon whatsapp-widget__icon--launcher-close" />
        ) : (
          <WhatsAppIcon className="whatsapp-widget__icon whatsapp-widget__icon--launcher" />
        )}
        {!open && <span className="whatsapp-widget__pulse" aria-hidden="true" />}
      </button>
    </div>
  );
}
