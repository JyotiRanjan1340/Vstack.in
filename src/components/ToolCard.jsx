import React from "react";

export default function ToolCard({ title, description, cta, onClick }) {
  return (
    <div style={{
      border: "1px solid #8D99AE",
      borderRadius: "10px",
      padding: "1.5rem",
      background: "#F8F9FA",
      boxShadow: "0 2px 8px rgba(43,45,66,0.05)"
    }}>
      <h3 style={{ color: "#2B2D42" }}>{title}</h3>
      <p style={{ color: "#2B2D42" }}>{description}</p>
      <button onClick={onClick}>{cta}</button>
    </div>
  );
}