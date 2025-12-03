# prd-qc-workspace-proto-Ayuj-Singh
Document Quality Control — Functional Prototype

Ayuj Singh — Product Manager (Internship assignment)

Minimal functional prototype for Document Quality Control (QC) Workspace — V1.
Built with React + Vite. Uses a JSON fixture as seed data to demonstrate the main QC flows: inbox (list), document detail, edit fields, retry, mark resolved, and comments.

Repo contents
/
├─ src/
│  ├─ components/
│  │  ├─ DocumentTable.jsx
│  │  └─ DocumentDetail.jsx
│  ├─ data/
│  │  └─ qc-sample-documents.json
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css
├─ index.html
├─ package.json
├─ README.md
└─ .gitignore

What this prototype demonstrates

QC Inbox / list of problematic documents (filter/search placeholders)

Document Detail view (preview placeholder + extracted fields + errors)

Edit fields and save changes (updates in-memory state)

Retry Processing (status changes to in_progress then resolved for demo)

Mark as Resolved (immediately updates status)

Add comments (stored in memory for demo)

Uses qc-sample-documents.json as seed/test data

This is a frontend-only demo. In production, the UI would call the APIs specified in the PRD (Section 2.2).

Prerequisites

Node.js 16+ (recommended) — install from https://nodejs.org

npm (bundled with Node.js)

(Optional) VS Code or any editor

How to run (local)

Clone the repo:

git clone <your-repo-url>
cd <repo-folder>


Install dependencies:

npm install


Start dev server:

npm run dev


Open the app:

http://localhost:5173/

Build / Preview production bundle
npm run build
npm run preview


npm run preview serves the built dist/ so you can validate production behaviour.
