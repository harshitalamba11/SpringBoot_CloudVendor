☁️ Cloud Vendor Management System

A full-stack CRUD application built using Spring Boot (REST APIs) and React to manage cloud vendor information efficiently.

📌 Features

✅ Create, Read, Update, Delete (CRUD) Cloud Vendors

🔍 Search vendors by Vendor ID or Vendor Name

⚡ Real-time filtering without page reload

❌ Delete vendor with instant UI update

🧩 Clean Controller–Service–Repository architecture

🚨 Custom exception handling for invalid requests

🛠️ Tech Stack
Backend

Java

Spring Boot

Spring Web

Spring Data JPA

RESTful APIs

Frontend

React.js

JavaScript (ES6)

HTML5

CSS3

Tools

Maven

Git & GitHub

VS Code / IntelliJ

📂 Project Structure
Backend (Spring Boot)
com.morgan.rest_demo
│
├── controller
│   └── CloudVendorAPIService.java
│
├── service
│   ├── CloudVendorService.java
│   └── impl
│       └── CloudVendorServiceImpl.java
│
├── repository
│   └── CloudVendorRepo.java
│
├── model
│   └── CloudVendor.java
│
├── exception
│   ├── CloudVendorNotFound.java
│   └── CloudVendorExceptionHandler.java

Frontend (React)
src
│
├── components
│   └── Header.js
│
├── pages
│   ├── Details.js
│   └── Delete.js
│
└── App.js

🔗 REST API Endpoints
Method	Endpoint	Description
GET	/CloudVendor	Get all vendors
GET	/CloudVendor/{id}	Get vendor by ID
POST	/CloudVendor	Create vendor
PUT	/CloudVendor	Update vendor
DELETE	/CloudVendor/{id}	Delete vendor
🔍 Search Functionality

Search implemented on frontend

Filters vendors by:

Vendor ID

Vendor Name

Case-insensitive search

Updates results in real time

🚀 How to Run the Project
Backend
mvn clean install
mvn spring-boot:run


Server runs at:

http://localhost:8080

Frontend
npm install
npm start


Frontend runs at:

http://localhost:3000

🧠 What I Learned

Building REST APIs using Spring Boot

Layered architecture (Controller, Service, Repository)

Handling exceptions globally

Integrating React with Spring Boot APIs

Managing state and effects using React Hooks

Implementing search and delete functionality

📈 Future Enhancements

🔐 Authentication & Authorization

📄 Pagination & Sorting

🧪 Unit & Integration Tests

📘 Swagger API Documentation

🐳 Docker & Deployment

👩‍💻 Author

Harshita Lamba
Java | Spring Boot | React
GitHub: https://github.com/harshitalamba11/SpringBoot_CloudVendor
