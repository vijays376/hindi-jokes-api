# [Hindi Jokes API](https://hindi-jokes-api-rm0c.onrender.com)

A fun and entertaining **REST API** serving hundreds of Hindi jokes across various popular categories, including **Pati-Patni, Teacher-Student, GF-BF, Mazedar, Chutkule, and more!**

## Features
- **Hundreds of Hindi Jokes** across multiple categories.
- **Built with Node.js and Express.js** for fast and scalable performance.
- **MongoDB as the database** for efficient storage and retrieval of jokes.
- **Deployed on Render** for free, making it accessible to everyone.
- **Easy-to-use API endpoints** to fetch random jokes, category-specific jokes, or a specific number of jokes.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Hosted on MongoDB Atlas)
- **Deployment:** Render

## API Endpoints
### Base URL:
```
https://hindi-jokes-api-rm0c.onrender.com
```

### 1. Get a Joke
```
GET /jokes
```
_Response:_
```json
{
  "_id": "67e94dd4c765f116565e3a97",
  "jokeNo": 1,
  "category": "Pati-Patni",
  "jokeContent": "पति: जानू, मैं तुम्हारे बिना जी नहीं सकता!\nपत्नी: तो मर क्यों नहीं जाते?",
  "__v": 0
}
```

### 2. Get Jokes by Category
```
GET /jokes/category/:categoryName
```
Example:
```
GET /jokes/category/teacher-student
```
_Response:_
```json
[
  {
    "_id": "67e94dd4c765f116565e3a98",
    "jokeNo": 2,
    "category": "Teacher-Student",
    "jokeContent": "टीचर: परीक्षा में नकल क्यों की?\nस्टूडेंट: ताकि पास होकर आपकी क्लास में ना आना पड़े!",
    "__v": 0
  }
]
```

### 3. Get All Categories
```
GET /jokes/categories
```
_Response:_
```json
[
  "Pati-Patni",
  "Teacher-Student",
  "GF-BF",
  "Mazedaar",
  "Chutkule",
  "और भी बहुत कुछ..."
]
```

### 4. Get Jokes by Size
```
GET /jokes?size=number
```
Example:
```
GET /jokes?size=10
```
_Response:_
```json
[
  {
    "_id": "67e94dd4c765f116565e3a99",
    "jokeNo": 3,
    "category": "Pati-Patni",
    "jokeContent": "पति: शादी के पहले तुम मेरी हर बात मानती थी!\nपत्नी: शादी के पहले तुम हर बात ठीक ही तो बोलते थे!",
    "__v": 0
  },
]
```

## Installation & Setup (For Local Development)
### Prerequisites:
- Node.js installed
- MongoDB Atlas account

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/vijays376/hindi-jokes-api.git
   cd hindi-jokes-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your MongoDB URI:
   ```env
   MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/hindi-jokes-api
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. The API will be running at:
   ```
   http://localhost:5000
   ```

## Contributing
We welcome contributions! If you have new jokes or want to improve the API, feel free to submit a pull request.

## License
This project is open-source and available under the **MIT License**.

---
Enjoy the funniest Hindi jokes! 😂

