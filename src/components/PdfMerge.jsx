import React, { useState } from "react";

function PdfMerge() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleMerge = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    const response = await fetch("https://vstack-backend.onrender.com/pdf/merge", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "merged.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else {
      alert("Failed to merge PDFs");
    }
  };

  return (
    <form onSubmit={handleMerge}>
      <input type="file" multiple onChange={handleFileChange} accept="application/pdf" />
      <button type="submit">Merge PDFs</button>
    </form>
  );
}

export default PdfMerge;
