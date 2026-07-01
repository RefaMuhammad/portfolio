import { useState } from "react";
import certData from "../../../data/CertificateData";
import "./Certificates.css";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section className="cert-section">
      <span className="cert-watermark">CREDENTIALS</span>

      <div className="cert-container">
        <div className="cert-header">
          <div>
            <h2 className="cert-title cert-title-solid">MY</h2>
            <h2 className="cert-title cert-title-ghost">CERTIFICATES</h2>
          </div>
          <p className="cert-eyebrow">Licenses &amp; Achievements</p>
        </div>

        <div className="cert-grid">
          {certData.map((cert) => (
            <button
              key={cert.id}
              className="cert-card"
              onClick={() => setActiveCert(cert)}
            >
              <div className="cert-thumb">
                <img src={cert.imageSrc} alt={cert.title} />
              </div>

              <p className="cert-date">{formatDate(cert.issueDate)}</p>
              <h3 className="cert-name">{cert.title}</h3>
              <p className="cert-id">ID: {cert.credentialId}</p>

              <span className="cert-arrow">↗</span>
            </button>
          ))}
        </div>
      </div>

      {activeCert && (
        <div className="cert-overlay" onClick={() => setActiveCert(null)}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="cert-close"
              onClick={() => setActiveCert(null)}
              aria-label="Close"
            >
              ×
            </button>

            <img
              src={activeCert.imageSrc}
              alt={activeCert.title}
              className="cert-modal-image"
            />

            <h3 className="cert-modal-title">{activeCert.title}</h3>
            <p className="cert-modal-meta">
              Issued {formatDate(activeCert.issueDate)} · ID:{" "}
              {activeCert.credentialId}
            </p>

            <a
              href={activeCert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-verify-btn"
            >
              Verify Credential ↗
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
