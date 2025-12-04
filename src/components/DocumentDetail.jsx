import React, { useState } from "react";

export default function DocumentDetail({ document, onSave, onRetry, onResolve }) {
  const [invoiceNumber, setInvoiceNumber] = useState(document.invoice_number ?? "");
  const [vendor, setVendor] = useState(document.vendor ?? "");
  const [comment, setComment] = useState("");

  // if document changes, reset local edit fields
  React.useEffect(() => {
    setInvoiceNumber(document.invoice_number ?? "");
    setVendor(document.vendor ?? "");
    setComment("");
  }, [document.id]);

  const handleSave = () => {
    onSave({
      invoice_number: invoiceNumber,
      vendor: vendor
    });
  };

  const handleAddComment = () => {
    // For prototype, store comments in "comments" array on document
    // In real system you'd call POST /qc/documents/{id}/comments
    const comments = document.comments ? [...document.comments] : [];
    comments.push({
      id: `c_${Date.now()}`,
      author: "proto_user",
      text: comment,
      visibility: "internal",
      created_at: new Date().toISOString()
    });
    onSave({ comments });
    setComment("");
  };

  return (
    <div className="detail-card">
      <div className="detail-header">
        <h2>{document.id}</h2>
        <div className="status">Status: <strong>{document.status}</strong></div>
      </div>

      <div className="detail-body">
        <div className="left-panel">
          <div className="pdf-placeholder">PDF Preview (placeholder)</div>
        </div>

        <div className="right-panel">
          <label>Invoice Number</label>
          <input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />

          <label>Vendor</label>
          <input value={vendor} onChange={(e) => setVendor(e.target.value)} />

          <label>Invoice Date</label>
          <input value={document.invoice_date || ""} disabled />

          <label>Amount</label>
          <input value={document.amount || ""} disabled />

          <div className="errors">
            <h4>Errors</h4>
            <ul>
              {document.error ? <li>{document.error}</li> : <li>No errors</li>}
            </ul>
          </div>

          <div className="actions">
            <button className="btn" onClick={handleSave}>Save changes</button>
            <button className="btn" onClick={onRetry}>Retry Processing</button>
            <button className="btn" onClick={onResolve}>Mark as Resolved</button>
          </div>

          <div className="comments">
            <h4>Comments</h4>
            <div className="comment-list">
              {(document.comments || []).map((c) => (
                <div key={c.id} className="comment">
                  <div className="meta">{c.author} • {new Date(c.created_at).toLocaleString()}</div>
                  <div className="text">{c.text}</div>
                </div>
              ))}
            </div>

            <textarea
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="btn" onClick={handleAddComment}>Add Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
