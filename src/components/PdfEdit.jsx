import React, { useState } from "react";

export default function PdfEdit({ onBack }) {
  const [file, setFile] = useState(null);
  const [edited, setEdited] = useState(false);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setEdited(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API for PDF editing
    setEdited(true);
  };

  return (
    <section className="main-content">
      <button onClick={onBack}>&larr; Back to Tools</button>
      <h2>PDF Edit</h2>
      <form onSubmit={handleEdit}>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFile}
          required
        />
        <br />
        <button type="submit" disabled={!file}>
          Edit PDF
        </button>
      </form>
      {edited && (
        <div style={{ marginTop: "1rem", color: "green" }}>
          <strong>Success!</strong> (This is a placeholder. Integrate API to download the edited PDF.)
        </div>
      )}
    </section>
  );
}