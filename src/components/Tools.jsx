import React from "react";
import ToolCard from "./ToolCard";

export default function Tools({ setActiveTool }) {
  const tools = [
    {
      key: "pdfmerge",
      title: "PDF Merge",
      description: "Combine multiple PDF files into a single PDF document.",
      cta: "Merge PDFs"
    },
    {
      key: "filemergetopdf",
      title: "File Merge to PDF",
      description: "Merge PDF, Word, and image files into a single PDF document.",
      cta: "Merge Files"
    },
    {
      key: "reducefilesize",
      title: "Reduce File Size",
      description: "Compress PDF or image files to your desired size.",
      cta: "Compress File"
    },
    {
      key: "imagetotext",
      title: "Image to Text (OCR)",
      description: "Extract text from images using advanced OCR technology.",
      cta: "Extract Text"
    },
    {
      key: "pdfedit",
      title: "PDF Edit",
      description: "Edit, split, reorder, or rotate pages in your PDF files.",
      cta: "Edit PDF"
    }
  ];

  return (
    <section id="tools" className="main-content">
      <h2>All Tools</h2>
      <div className="tool-grid">
        {tools.map(tool => (
          <ToolCard
            key={tool.key}
            title={tool.title}
            description={tool.description}
            cta={tool.cta}
            onClick={() => setActiveTool(tool.key)}
          />
        ))}
      </div>
    </section>
  );
}