import React, { useState, useMemo } from "react";
import DocumentTable from "./components/DocumentTable";
import DocumentDetail from "./components/DocumentDetail";
import sampleData from "./data/qc-sample-documents.json";

export default function App() {
  // Load sample data into state
  const [docs, setDocs] = useState(sampleData);
  const [selectedId, setSelectedId] = useState(null);

  const selectedDoc = useMemo(
    () => docs.find((d) => d.id === selectedId) ?? null,
    [docs, selectedId]
  );

  const updateDoc = (id, changes) => {
    setDocs((prev) => prev.map((d) => (d.id === id ? { ...d, ...changes } : d)));
  };

  const handleSaveFields = (id, fields) => {
    updateDoc(id, fields);
  };

  const handleRetry = (id) => {
    updateDoc(id, { status: "in_progress" });
    // optional: simulate resolved after 1s for demo
    setTimeout(() => {
      updateDoc(id, { status: "resolved" });
    }, 800);
  };

  const handleResolve = (id) => {
    updateDoc(id, { status: "resolved" });
  };

  return (
    <div className="app">
      <header>
        <h1>Document Quality Control — V1 Prototype</h1>
      </header>

      <div className="container">
        <div className="left">
          <DocumentTable
            documents={docs}
            onSelect={(id) => setSelectedId(id)}
            selectedId={selectedId}
          />
        </div>

        <div className="right">
          {selectedDoc ? (
            <DocumentDetail
              document={selectedDoc}
              onSave={(fields) => handleSaveFields(selectedDoc.id, fields)}
              onRetry={() => handleRetry(selectedDoc.id)}
              onResolve={() => handleResolve(selectedDoc.id)}
            />
          ) : (
            <div className="placeholder">Select a document to see details</div>
          )}
        </div>
      </div>
    </div>
  );
}
