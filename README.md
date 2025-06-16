# 🛒 Product Store API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB Atlas** to manage a list of products. This project is perfect for beginners who want to learn backend development, API routing, MongoDB integration, and secure environment‑variable handling.

---

## 🚀 Features

- 📦 Add, retrieve, update, and delete products
- 🌐 Fast Express.js server
- 🛢️ MongoDB Atlas for persistent storage
- 🔐 Environment variables keep credentials safe
- 📁 Clean, scalable folder structure

---

## 📁 Project Structure
```

Product-Store/
├── config/
│   └── db.js          # MongoDB connection logic
├── models/
│   └── Product.js     # Mongoose schema for Product
├── routes/
│   └── productRoutes.js # REST routes
├── .env               # Stores MongoDB URI (not committed)
├── .gitignore         # Ignores node\_modules and .env
├── package.json
├── server.js          # App entry point

````
---

## 🧰 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)


## 📦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/codexdhruv11/Product-Store.git
   cd Product-Store

2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Create a `.env` file** in the root folder:

   ```env
   MONGO_URI=your_mongodb_atlas_connection_string
   ```
4. **Start the server**

   ```bash
   npm start
   ```

   The API will run at `http://localhost:5000`.

---

## 📡 API Endpoints

| Method | Route               | Description              |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/products`     | Get **all** products     |
| GET    | `/api/products/:id` | Get a product by **ID**  |
| POST   | `/api/products`     | **Create** a new product |
| PUT    | `/api/products/:id` | **Update** a product     |
| DELETE | `/api/products/:id` | **Delete** a product     |

> Test these routes with Postman, Insomnia, or any REST client.

---

## 📌 TODO

* Add request validation and centralized error handling
* Write unit tests
* Integrate a React + Chakra UI frontend

---

## 🧑‍💻 Author

**Dhruv Kaushik**
GitHub: [@codexdhruv11](https://github.com/codexdhruv11)

---
