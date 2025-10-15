import React, { useState } from "react";

function PdfMerge() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleMerge = async (e) => {
    e.preventDefault();
    if (!files || files.length === 0) {
      alert("Please select PDF files to merge.");
      return;
    }
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    try {
      const response = await fetch("https://vstack-backend.onrender.com/pdf/merge", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        alert("Failed to merge PDFs");
        return;
      }
      const blob = await response.blob();
      // Check if actually a PDF was returned
      if (blob.type !== "application/pdf" || blob.size === 0) {
        alert("No merged PDF returned. Please check backend.");
        return;
      }
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "merged.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      alert("Error merging PDFs: " + err.message);
    }
  };

  return (
    <form onSubmit={handleMerge} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <input
        type="file"
        multiple
        accept="application/pdf"
        onChange={handleFileChange}
      />
      <button type="submit">Merge PDFs</button>
    </form>
  );
}

export default PdfMerge;
