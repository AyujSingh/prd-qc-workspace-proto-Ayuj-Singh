import React from "react";

export default function DocumentTable({ documents, onSelect, selectedId }) {
  return (
    <div className="table-card">
      <div className="filters">
        <input placeholder="Search by id, vendor..." onChange={() => {}} />
        <select>
          <option value="">All status</option>
          <option value="failed">Failed</option>
          <option value="needs_review">Needs Review</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      <table className="doc-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Error</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((d) => (
            <tr
              key={d.id}
              className={d.id === selectedId ? "selected" : ""}
              onClick={() => onSelect(d.id)}
            >
              <td>{d.id}</td>
              <td>{d.customer}</td>
              <td>{d.error}</td>
              <td>{d.status}</td>
              <td>{d.invoice_date || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
