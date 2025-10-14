import React, { useState } from "react";

export default function ReduceFileSize({ onBack }) {
  const [file, setFile] = useState(null);
  const [targetSize, setTargetSize] = useState("");
  const [compressed, setCompressed] = useState(false);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setCompressed(false);
  };

  const handleCompress = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API for file compression
    setCompressed(true);
  };

  return (
    <section className="main-content">
      <button onClick={onBack}>&larr; Back to Tools</button>
      <h2>Reduce File Size</h2>
      <form onSubmit={handleCompress}>
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFile}
          required
        />
        <br />
        <input
          type="number"
          min="10"
          placeholder="Target Size (KB)"
          value={targetSize}
          onChange={e => setTargetSize(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={!file || !targetSize}>
          Compress
        </button>
      </form>
      {compressed && (
        <div style={{ marginTop: "1rem", color: "green" }}>
          <strong>Success!</strong> (This is a placeholder. Integrate API to get the compressed file download link.)
        </div>
      )}
    </section>
  );
}