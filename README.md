# Billify - Digital Order and Billing System

## Introduction

**Billify** is a digital platform designed to simplify the order and billing process in restaurants and snack shops. By generating QR codes for bills, _Billify_ eliminates the need for paper receipts, reduces customer wait times, and provides an efficient order management system for restaurant owners. Bills are securely stored in Google Drive, making them easily accessible for future reference.

---

## Features

- **User Authentication**: Secure login via email.
- **Order Management**: Restaurant owners can create, manage, and update orders easily.
- **QR Code Billing**: Generate QR codes for each bill, allowing customers to download their bills digitally.
- **Bill History**: View previous bills stored in Google Drive for quick access.
- **File Upload**: Store bills securely in Google Drive for future reference.
---

## Tech Stack

- **Frontend**:
  - React.js
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express.js
- **Database**:
  - MongoDB (NoSQL) for storing user data, orders, and bills.
- **Cloud Storage**:
  - Google Drive API for storing bills.
- **Other Technologies**:
  - QR Code generation: `qrcode` library

---

## How to Host Locally

Clone the project

```bash
  git clone https://github.com/Billify0/Frontend.git
```

Go to the project directory

```bash
  cd Frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_BACKEND_URL`
