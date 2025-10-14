import React, { useState } from "react";

export default function PdfMerge({ onBack }) {
  const [files, setFiles] = useState([]);
  const [merged, setMerged] = useState(false);

  const handleFiles = (e) => {
    setFiles([...e.target.files]);
    setMerged(false);
  };

  const handleMerge = (e) => {
    e.preventDefault();
    // TODO: Connect to your backend API for merging PDFs
    setMerged(true);
  };

  return (
    <section className="main-content">
      <button onClick={onBack}>&larr; Back to Tools</button>
      <h2>PDF Merge</h2>
      <form onSubmit={handleMerge}>
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleFiles}
          required
        />
        <br />
        <button type="submit" disabled={files.length < 2}>
          Merge PDFs
        </button>
      </form>
      {merged && (
        <div style={{ marginTop: "1rem", color: "green" }}>
          <strong>Success!</strong> (This is a placeholder. Integrate API to get the merged PDF download link.)
        </div>
      )}
    </section>
  );
}