# ☁️ Cloud Vendor Management System

A **full-stack web application** built using **Spring Boot (REST APIs)** and **React** to manage cloud vendor details efficiently.

---

## 📌 Project Overview

The **Cloud Vendor Management System** allows users to perform complete **CRUD operations** on cloud vendor data.  
It follows **industry-standard backend architecture** and integrates seamlessly with a **React frontend**.

---

## ✨ Features

- ✅ Add new cloud vendors  
- 📄 View all vendor details  
- ✏️ Update existing vendors  
- ❌ Delete vendors with instant UI update  
- 🔍 Search vendors by **Vendor ID** or **Vendor Name**  
- 🚨 Custom exception handling  
- ⚡ Real-time frontend filtering  

---

## 🛠️ Tech Stack

### 🔙 Backend
- Java  
- Spring Boot  
- Spring Web (REST APIs)  
- Spring Data JPA  
- Maven  

### 🎨 Frontend
- React.js  
- JavaScript (ES6)  
- HTML5  
- CSS3  

### 🧰 Tools
- Git & GitHub  
- IntelliJ IDEA / VS Code  


- **Controller**: Handles HTTP requests  
- **Service**: Contains business logic  
- **Repository**: Communicates with database  

---

## 📂 Project Structure

### Backend (Spring Boot)
## 🧱 Architecture Used
com.morgan.rest_demo
│
├── controller
│ └── CloudVendorAPIService.java
│
├── service
│ ├── CloudVendorService.java
│ └── impl
│ └── CloudVendorServiceImpl.java
│
├── repository
│ └── CloudVendorRepo.java
│
├── model
│ └── CloudVendor.java
│
├── exception
│ ├── CloudVendorNotFound.java
│ └── CloudVendorExceptionHandler.java


### Frontend (React)
src
│
├── components
│ └── Header.js
│
├── pages
│ ├── Details.js
│ └── Delete.js
│
└── App.js


---

## 🔗 REST API Endpoints

| HTTP Method | Endpoint | Description |
|------------|----------|-------------|
| GET | `/CloudVendor` | Fetch all vendors |
| GET | `/CloudVendor/{id}` | Fetch vendor by ID |
| POST | `/CloudVendor` | Add new vendor |
| PUT | `/CloudVendor` | Update vendor |
| DELETE | `/CloudVendor/{id}` | Delete vendor |

---

## 🔍 Search Functionality

- Search implemented on **frontend (React)**
- Filters vendors by:
  - Vendor ID  
  - Vendor Name  
- Case-insensitive  
- Updates results in real time  

---

## 🚀 How to Run the Project

### ▶ Backend (Spring Boot)
```bash
mvn clean install
mvn spring-boot:run

Backend runs at:http://localhost:8080

▶ Frontend (React)
npm install
npm start

Frontend runs at:http://localhost:3000


🧠 Learning Outcomes

Built REST APIs using Spring Boot

Understood layered architecture

Implemented global exception handling

Integrated React with backend APIs

Used React Hooks (useState, useEffect)

Implemented real-time search & delete


🚧 Future Enhancements

🔐 Authentication & Authorization

📄 Pagination & Sorting

📘 Swagger / OpenAPI Documentation

🐳 Dockerization

☁️ Cloud Deployment

👩‍💻 Author

Harshita
Java | Spring Boot | React
GitHub: https://github.com/harshitalamba1
