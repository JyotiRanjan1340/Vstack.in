import React, { useState } from "react";

export default function ImageToText({ onBack }) {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setExtractedText("");
  };

  const handleExtract = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API for OCR extraction
    setExtractedText("Sample extracted text. (Integrate with OCR backend API!)");
  };

  return (
    <section className="main-content">
      <button onClick={onBack}>&larr; Back to Tools</button>
      <h2>Image to Text (OCR)</h2>
      <form onSubmit={handleExtract}>
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleFile}
          required
        />
        <br />
        <button type="submit" disabled={!file}>
          Extract Text
        </button>
      </form>
      {extractedText && (
        <div style={{ marginTop: "1rem" }}>
          <strong>Extracted Text:</strong>
          <pre>{extractedText}</pre>
        </div>
      )}
    </section>
  );
}